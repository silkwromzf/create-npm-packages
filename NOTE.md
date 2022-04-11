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
- gitignore
    > 层级覆盖
- editorconfig
- eslint, tslint
   - [https://cn.eslint.org/docs/user-guide/configuring#configuring-plugins]
   - ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录（除非指定 `root: true`）。
   - 当 ESLint 遍历到 test/ 目录，your-project/.eslintrc 之外，它还会用到 your-project/tests/.eslintrc。所以 your-project/tests/test.js 是基于它的目录层次结构中的两个.eslintrc 文件的组合，并且离的最近的一个优先。通过这种方式，你可以有项目级 ESLint 设置，也有覆盖特定目录的 ESLint 设置。
   - 如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用。
- tsconfig
- prettierrc
    [https://www.cnblogs.com/Yellow-ice/p/15127392.html]


### 第四步，.d.ts 文件的层级  以及如何单独导出@types声明项目并使用

### 第五步，npm包如何进编译  对于各个格式的文件怎么进行编译

### 第六步，npm包如何进行按需加载

