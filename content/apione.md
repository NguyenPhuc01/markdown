---
path: '/apione/'
title: 'API v1'
date: '2022-09-08'
abstract: 'The greatttttttttt'
---

# Cơ chế xác thực API 1

Chúng tôi sử dụng Basic Authentication để cấp quyền truy cập vào API.
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

# Dòng tương tác

### Flow 1: ORC

![FLOW](https://static.swimlanes.io/591b6e2fea681de2bf8c1e8e3aee30b6.png)

### Flow 2: Face Matching

![FLOW](https://static.swimlanes.io/591b6e2fea681de2bf8c1e8e3aee30b6.png)

### Face Search

![FLOW](https://static.swimlanes.io/591b6e2fea681de2bf8c1e8e3aee30b6.png)

### Danh sách APIs

#### ORC

OCR service là hệ thống AI cho phép trích xuất thông tin từ ảnh chứng minh nhân dân, thẻ căn cước của công dân Việt Nam, bằng lái xe, Passport. Hệ thống hỗ trợ nhận diện cả mặt trước và cả mặt sau của chứng minh nhân dân và thẻ căn cước công dân, hỗ trợ bằng lái xe, Passport, hỗ trợ cả chứng minh nhân dân cũ.

1. Trách xuất thông tin hai mặt chứng minh thứ thẻ căn cước với đầu url vào ảnh

**API:**

| Key       | Value                              | Mô tả                                      |
| --------- | ---------------------------------- | ------------------------------------------ |
| mat truoc | `https://example.com/mattruoc.png` | url ảnh mặt trước cần trích xuất thông tin |
| mat sau   | `https://example.com/mattruoc.png` | url ảnh mặt sau cần trích xuất thông tin   |

**Params:**

| Key       | Value                              | Mô tả                                      |
| --------- | ---------------------------------- | ------------------------------------------ |
| mat truoc | `https://example.com/mattruoc.png` | url ảnh mặt trước cần trích xuất thông tin |
| mat sau   | `https://example.com/mattruoc.png` | url ảnh mặt sau cần trích xuất thông tin   |

**Demo Python:**

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

mattruoc_url = 'mat truoc url'
matsau_url = 'mat sau url'
response = requests.get(
"https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimat?mattruoc=%s&matsau=%s" % (mattruoc_url, matsau_url),
  auth=(api_key, api_secret))

print(response.json())
```

1. Trích xuất thông tin mặt trước chứng minh thư thẻ căn cước với đầu vào url ảnh

**API:**

| Key | Value                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------- |
| GET | <span class="span_api">`https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimat`</span> |

**Params:**

| Key                                     | Value                                                            | Mô tả                                                                    |
| --------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------ |
| <span class="span_api">mat truoc</span> | <span class="span_api">`https://example.com/mattruoc.png`</span> | <span class="span_api">url ảnh mặt trước cần trích xuất thông tin</span> |

**Demo Python:**

```python
import requests

api_key = '<replace-with-your-api-key>'
api_secret = '<replace-with-your-api-secret>'

mattruoc_url = 'mat truoc url'
matsau_url = 'mat sau url'
response = requests.get(
"https://cloud.computervision.com.vn/backend/api/v1/request/ocr/cmt/get_haimat?mattruoc=%s&matsau=%s" % (mattruoc_url, matsau_url),
auth=(api_key, api_secret))

print(response.json())

```
