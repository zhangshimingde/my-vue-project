# vue-element

项目地址

- [vue-element](http://wh-git.mingyuanyun.com/it/vue-element)
- [yo 生成器项目](http://wh-git.mingyuanyun.com/it/generator-vue-element)

> 王文彬负责武汉 gitlab 账号开通

## 目的是什么

> - 统一的前端规范
> - 易用的环境变量，拒绝手工维护环境变量
> - 良好的开发体验，最佳实践，vscode 配置
> - 哪里不好改哪里，持续优化

## 用了什么

> - [yo](http://yeoman.io/authoring/index.html)
> - [vue](https://cn.vuejs.org/)
> - [vuex](https://vuex.vuejs.org/zh/) 状态管理
> - [element](http://element-cn.eleme.io/#/zh-CN) element ui
> - eslint+prettier 代码检查
> - env 环境变量
> - editorconfig IED 配置
> - [mockjs](http://mockjs.com/) mockjs 数据模拟
> - [jsconfig](https://code.visualstudio.com/docs/languages/jsconfig) vscode 特殊配置

推荐的 vscode 插件

> - vetur
> - eitorConfig for VS Code
> - ESLint
> - Prettier - Code formatter

## 目录结构

```
├── babel.config.js
├── dist                                    打包目录
├── jsconfig.json                           对vscode的js配置,比如添加@别名的路径解析
├── package.json
├── postcss.config.js
├── public                                  index.html和ico
├── README.md
├── src
│   ├── api                                 api请求
│   ├── assets                              前端资源文件
│   ├── components                              组件
│   ├── main.js                             主入口
│   ├── mock                                mockjs模拟数据，会拦截ajax请求
│   ├── nmb                                 单点登录
│   │   ├── app.js
│   │   ├── middleware                      中间件，包含获取请求头、token失效校验、token刷新
│   │   ├── ModalTip
│   │   ├── oauth2
│   │   │   ├── oauth2rely.js               授权核心文件，可用于获取用户信息
│   │   │   └── routes
│   │   └── util.js
│   ├── router                              路由
│   ├── store                               vuex状态管理，应分模块使用
│   ├── utils                               常用工具库在此维护，包含请求库
│   └── views                               视图
├── tests                                   mocha+chai的单元测试
```

## 如何使用模板创建项目

1. 全局安装 yo 和 yo 模板

```bash
yarn global add yo
yarn global add generator-my-vue-element
```

2. 使用模板生成项目

```bash
yo my-vue-element
```

## 启动命令

运行开发服务

```bash
yarn run start
```

运行开发服务，使用测试环境

```bash
yarn run start:test
```

运行打包服务，使用正式环境

```bash
yarn run build
```

运行打包服务，使用测试环境

```bash
yarn run build:test
```

运行 lint 并修复问题

```bash
yarn run lint
```

运行单元测试

```bash
yarn run test:unit
```
