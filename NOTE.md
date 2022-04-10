## 目标

在进行 lerna 项目多个仓库包整合遇到了知识储备不足的问题，集中体现在以下一个方面：

> 1. 如何发布一个 npm 包并使用
> 2. npm 包如何处理 .ts .vue 文件编译转译
> 3. .ts 文件的类型声明的层级是如何确定的
> 4. 如何单独导出.d.ts 文件 到@types 仓库
> 5. 如何打包才能是 npm 包 按需加载 或者只是使用[scoped packages](https://docs.npmjs.com/misc/scope)

还有一些在 lerna 多包管理中遇到的问题

> 1. eslint 的配置和层级问题、格式化的层级问题

## 验证步骤

### 第一步新建一个空的项目包, 使用 lerna 进行初始化

1. 使用`lerna init --independent`, 每个包拥有独立的版本
2. 添加[yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)。

### 第二步，发布一个 npm 包。

1. 发布一个简单的 js 文件包
    - 在lerna项目中发布包的时候 无法`npm login`,[https://github.com/npm/cli/issues/4477]
    - [创建并发布一个npm 包](https://juejin.cn/post/6987695534504935438)
        - `npm login`
        - `npm publish`
        - nrm一定要切换到npm 源
2. 了解 js 文件的打包方式 生成文件有哪几种模式
    - [https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm]
3. 发布到 npm 链接
    `npm publish` 更新版本也是
4. 安装依赖并使用

### 第三步，在当前发布的包中实验一下项目,主要侧重于功能、生效层级
- editorconfig
- gitignore
- eslint, tslint
- tsconfig
- prettierrc

### 第四步，.d.ts 文件的层级  以及如何单独导出@types声明项目并使用

### 第五步，npm包如何进编译  对于各个格式的文件怎么进行编译

### 第六步，npm包如何进行按需加载

