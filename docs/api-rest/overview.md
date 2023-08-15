---
sidebar_position: 1
---

# Overview

The Chaca API is organised around REST. Our API has predictable resource-oriented URLs and uses standard HTTP response codes, authentication, and verbs.

Our API returns JSON responses, dependent upon on the request header specified.

The Chaca Web API provides a wide range of functionality for developers, including:

-  Create data through defined schemas by passing it through HTTP requests. [See examples](./schema)
-  Obtain data generated through defined functions of Chaca. [See examples](./schema-option)

## Error Handling

If an error occurs, a response with propper HTTP error status code is returned. The body of this response contains a description of the issue in plain text. For example, once you go over the rate limit you will receive an HTTP error 429 ("Too Many Requests") with the message "API rate limit exceeded".

```json
{
   "time": "2023-08-15T17:02:10.618Z",
   "path": "/api/lorem/paragraphs",
   "error": "Too Many Requests",
   "status": 429
}
```
