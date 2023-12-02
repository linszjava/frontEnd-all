### 告知

刚学完promise之后接受axios,你会发现非常的融洽

话不多说，我们直接开始


##  1. 安装 JSON-SERVER

官网 ：https://github.com/typicode/json-server

非常简单，为前端模拟后端传过来的数据

## 1.1 安装
```cmd
npm install -g json-server
```

## 2. 创建一个db.json文件

```json
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    },
    {
      "id": 2,
      "title": "尚硅谷大厂学院上线啦",
      "author": "小编"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    },
    {
      "body": "喜大普奔",
      "postId": 2,
      "id": 2
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

## 3. 启动
```cmd

json-server --watch db.json

```