import * as React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { ExternalLink } from 'react-feather';
import config from '../../../config';
import { Button } from 'antd';

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${(props) => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #1ed3c6 !important;
    }

    ${(props) =>
      props.active &&
      `
      // color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;

const Sidebar = styled('aside')`
  width: 298px;
  height: 100%;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  /* position: sticky; */
  top: 50;
  padding-right: 0;
  -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);

  @media (min-width: 1023px) and (max-width: 1199px) {
    /* width: 100%; */
    width: 200px;
    height: 100%;
    overflow: auto;
    position: fixed;
    padding-left: 0px;
    position: -webkit-sticky;
    position: -moz-sticky;
    /* position: sticky; */
    top: 50;
    padding-right: 0;
    -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  }

  @media only screen and (max-width: 1023px) {
    width: 140px;

    height: 100vh;
    overflow: auto;
    position: fixed;
    padding-left: 0px;
    position: -webkit-sticky;
    position: -moz-sticky;
    /* position: sticky; */
    top: 50;
    padding-right: 0;
    -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
    position: fixed;
    top: 60px;
    right: 20px;
    z-index: 999;
  }
`;

const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      // console.log(config.sidebar);
      return (
        <Sidebar>
          <ul className={'sideBarUL'}>
            <Tree edges={allMdx.edges} />
            <Button
              target="_blank"
              href="https://drive.google.com/file/d/1p0GHrIXJ_dHXJMrIFMe7embYzlGgr9ed/view"
              style={{
                width: '100%',
                border: 'none',
                textAlign: 'left',
                color: '#3B454E',
                fontWeight: 500,
              }}
            >
              dashboard
            </Button>
            {config.sidebar.links && config.sidebar.links.length > 0 && <Divider />}
          </ul>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
