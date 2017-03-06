# 一、日常维护手册
注：本项目架构是参照了阿里资深前端工程师所搭建的项目架构
## 1.快速开始

### nodejs准备

由官网下载，（可使用 n 进行nodejs版本管理）

  1. [nodejs官网地址](https://nodejs.org/)
  2. `sudo npm install -g n` 安装n

### 大陆镜像配置

```
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
```

### 安装`webpack`套件

```
$ sudo npm install webpack -g
```

### 进入项目目录，执行安装依赖包

```
$ npm install
```

### 开始编码

```
$ webpack //仅编译一次
```

```
$ webpack --watch // 热编译
```

## 2.`webpack.config.js` 解说

  1.plugin: `commonsPlugin`为生成common.js的插件，
  注释掉该插件就可以不生成common.js
  
  2. plugin: `uglifyJsPlugin` 为压缩代码， 本地调试时，可注释掉该行代码用congfig.js进行编译（不含压缩插件），项目发布时用config.pub.js进行编译，生成压缩的js和css
  
  3.plugin:ExtractTextPlugin 生成额外的css代码，而不是把css代码写到js中


## 3.脚手架介绍

**本工程js代码，必须遵循cmd规范**

### 入口: `pages/**/*.js`

解释：

  - pages下的一个目录，至少由一个 .js ，一个 .less 构成；
  - 其一个目录代表一种页面，
  - 因此当我们需要新建一个页面时，在这里新建一个目录

## 4.项目介绍
1.commonCss中包含了一些公共的样式库
2.rem.js 页面的布局采用rem布局，项目中使用pxToRem方法将px转为rem,参考iPhone6的设计稿为标准