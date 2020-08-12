![](https://badgen.net/badge/Editor.js/v2.0/blue)
# Attaches Tool
Attaches Tool for the [Editor.js](https://codex.so/editor).

This tool allows you to attach files to your articles.

![Example](https://capella.pics/7b63cffe-9214-40f4-9009-0637970a4630.jpg)

## Get the package
You can get the package using any of these ways.

### Install via npm

Include module at your application

```javascript
const AttachesTool = require('@editorjs/attaches');
```



## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.
需要传入自定义处理uploader方法，作为回调函数；可以设置附件的最大值，默认100Mb

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    attaches: {
      class: AttachesTool,
      config: {
        uploader: async function (file) {
        
          const formData = new FormData();
          formData.append('attachment', file);
          const res = await request.createFileUpload(formData);
          const filenameArray = file.name.split('.');
          const extenstion = filenameArray[filenameArray.length-1];
          return {
            success: 1,
            file: {
              url: process.env.VUE_APP_DOMAIN + request.requestURL.getFile + res.data.payload.path,
              name: res.data.payload.file_name,
              size: file.size,
              type: file.type,
              extenstion,
            }
          };
      },
      maxSize:100,
    }
    }
  }

  ...
});
```

## Config Params

Attaches Tool supports these configuration parameters:

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| endpoint | `string` | **Required:** endpoint for file uploading. |
| field | `string` | (default: `file`) Name of uploaded file field in POST request |
| types | `string` | (default: `*`) Mime-types of files that can be [accepted with file selection](https://github.com/codex-team/ajax#accept-string).|
| buttonText | `string` | (default: `Select file`) Placeholder for file upload button |
| errorMessage | `string` | (default: `File upload failed`) Message to show if file upload failed |
| uploader | `async function` | upload function |


## Output data

This Tool returns `data` with following format

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| file           | `object`  | Uploaded file data. Data received from backend uploader. See description below. |
| title | `string` | File's title. Initially set as uploaded file name. Can be modified by user.          |

### file object <a name="file-object"></a>
Object `file` consists of the following fields. All of them are optional, `size` and `extension` are supported by design.

| Field          | Type      | Description                       |
| -------------- | --------- | ----------------------------------|
| url            |`string`   | Full public path of uploaded file |
| size           |`number`   | File's size (expected in bytes, according to Tool's design)                      |
| name           |`string`   | File's name                       |
| extension      |`string`   | File's extension                  |

```json
{
    "type" : "attaches",
    "data" : {
        "file": {
            "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
            "size": 91,
            "name": "hero.jpg",
            "extension": "jpg"
        },
        "title": "Hero"
    }
}
```

## Backend response format

Response of your uploader **should** cover following format:

```json5
{
    "success" : 1,
    "file": {
        // any data you want 
        // for example: url, name, size
    }
}
```

**success** - uploading status. 1 for successful, 0 for failed

**file** - uploaded file data.
Can contain data you want to store. Fields `url`, `name`, `size`, and `extension` if present will be written to [file object](#file-object). Fields size and extension are supported by design.
