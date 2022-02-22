## 目标
在进行lerna项目多个仓库包整合遇到了知识储备不足的问题，集中体现在以下一个方面：

> 1. 如何发布一个npm包并使用
> 2. npm包如何处理 .ts .vue 文件编译转译
> 3. .ts文件的类型声明的层级是如何确定的
> 4. 如何单独导出.d.ts 文件  到@types 仓库
> 5. 如何打包才能是npm包 按需加载 或者只是使用[scoped packages](https://docs.npmjs.com/misc/scope)

还有一些在lerna 多包管理中遇到的问题
> 1. eslint 的配置和层级问题、格式化的层级问题

## 验证步骤
### 第一步新建一个空的项目包, 使用lerna 进行初始化
1. 使用`lerna init --independent`, 每个包拥有独立的版本
2. 添加[yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)。