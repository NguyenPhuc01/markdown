---
path: '/apitwo/'
title: 'Api v2'
date: '2022-09-08'
abstract: 'The greatttttttttt'
---

# Cơ chế xác thực API 2

Chúng tôi sử dụng Basic Api two để cấp quyền truy cập vào API.
Cách hoạt động:

1. API access key là một cặp:

- username (api_key): một mã định danh duy nhất của API access key.

- password (api_secret): một mã bí mật của API access key.

  Đội ngũ Computer Vision Việt Nam sẽ tạo username và password cho từng khách hàng trước khi tích hợp.

2. Client gửi một request:

   Client gửi HTTP requests cùng với <span style="color: red">Authorization</span> header chứa <span style="color: red">Basic</span> theo sau là một khoảng trắng và một mã hoá Base64 <span style="color: red">username: password</span>. Ví dụ, <span style="color: red">demo: p@55w0rd</span> client sẽ gửi

   ```js
   Authorization: Basic ZGVtbzpwQDU1dzByZA==
   ```
