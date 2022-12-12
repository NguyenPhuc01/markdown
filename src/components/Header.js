import * as React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import Loadable from 'react-loadable';
// import styled from 'styled-components';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';

const help = require('./images/help.svg');

const Logo = styled.img`
  width: 200px;
  height: 35px;
  margin: 10px 20px;
`;
const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from './sidebar';
import { stubTrue } from 'lodash';
import { Button, Col, Row } from 'antd';

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${(props) => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={(data) => {
      const logoImg = require('./images/logo.svg');

      const twitter = require('./images/twitter.svg');

      const discordBrandsBlock = require('./images/discord-brands-block.svg');

      const twitterBrandsBlock = require('./images/twitter-brands-block.svg');

      const {
        site: {
          siteMetadata: { headerTitle, githubUrl, helpUrl, tweetText, logo, headerLinks },
        },
      } = data;

      // const finalLogoLink = logo.link !== '' ? logo.link : 'https://hasura.io/';

      return (
        <Row
          style={{
            borderBottom: '1px solid rgba(0,0,0,0.15)',
          }}
        >
          <Col md={6}>
            <Link to="http://localhost:8000/apitwo">
              <Logo
                src="https://www.docs.computervision.com.vn/static/logo-cvs-8d7e167d315ede0146bebe3e494a5898.svg"
                alt={'logo'}
              />
            </Link>
          </Col>

          <Col md={14}></Col>
          <Col md={4} style={{}}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Button type="danger" style={{ marginRight: '15px' }} className={'btnVi'}>
                VI
              </Button>
              <Button className={'btnEn'}>EN</Button>

              <nav>
                <div id="navbar" className={'topnav'}>
                  <div className={'visibleMobile'}>
                    <Sidebar location={location} />
                    <hr />
                  </div>
                  <ul className={'navBarUL navBarNav navBarULRight'}>
                    {headerLinks.map((link, key) => {
                      if (link.link !== '' && link.text !== '') {
                        return (
                          <li key={key}>
                            <a
                              className="sidebarLink"
                              href={link.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              dangerouslySetInnerHTML={{ __html: link.text }}
                            />
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </nav>

              <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
                <div className={'navBarDefault removePadd'}>
                  <span
                    onClick={myFunction}
                    className={'navBarToggle'}
                    onKeyDown={myFunction}
                    role="button"
                    tabIndex={0}
                  >
                    <span className={'iconBar'}></span>
                    <span className={'iconBar'}></span>
                    <span className={'iconBar'}></span>
                  </span>
                </div>
                {isSearchEnabled ? (
                  <div className={'searchWrapper'}>
                    <LoadableComponent collapse={true} indices={searchIndices} />
                  </div>
                ) : null}
              </StyledBgDiv>
            </div>
          </Col>
        </Row>
      );
    }}
  />
);

export default Header;
