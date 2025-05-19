# 软件包管理基础

## 项目中的依赖项

**依赖** 可以理解为别人编写好的工具，大到 js 库或 vue, react 框架，小到一个日期库，也可以是一个命令行工具，比如 prettier linter 等等。

**类型**

- **生产依赖（dependencies）**：项目运行时必需的（如 React）。

- **开发依赖（devDependencies）**：仅开发阶段需要（如 Prettier）。

**作用**：避免重复造轮子，直接复用他人成熟的代码。

一个项目可以包含多个依赖，并且可以把项目代码和依赖通过打包工具（如 webpack、Rollup、Vite）合并成一个或多个优化后的文件（如 `main.js` + `vendor.js`），以 **捆绑包** 的形式发布。然而当我们更新项目依赖时，若依赖有很多种类，管理起来非常的麻烦，这时候就需要 **包管理器** 来帮我们解决

## 什么是软件包管理器

它是一个可以对项目依赖项(包)进行管理的系统，但这并不是必须的，你也可以选择自己管理依赖项，但这需要经历以下繁琐的步骤

- 找到所有包正确的 Javascript 文件
- 对它们进行检查以确保没有任何已知的漏洞
- 下载它们井将它们放在项目的正确位置
- 编写代码，将包引入你的项目并使用它们（这通常使用 [JavaScript 模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules)完成，这是另一个值得深入了解的主题）。
- 对所有包子依赖项——可能有数十个或数百个，执行上述相同的操作。
- 如果你想删除这些软件包，则需要再次手动删除所有文件。

此外，软件包管理器还可以处理重复的依赖项

npm (基于 JavaScript 和 node 的包管理器)，可以选择全局安装或本地安装，但由于本地安装具有 **可移植性** 与 **可锁定依赖版本**，因此更推荐。比如一个项目依赖 webpack 包，并且让其他用户也能运行这个项目，如果依赖是以本地安装的形式配置的，那么就不用担心版本不兼容的问题

> **备注：** npm 不是唯一可用的软件包管理器。有一种成功和流行的替代软件包管理器是 [Yarn](https://yarnpkg.com/)。Yarn 使用不同的算法解决依赖项，这可能意味着更快的用户体验。还有一些其他新兴的客户端，例如 [pnpm](https://pnpm.js.org/)。

## 软件包仓库

软件包管理器是通过软件包仓库进行下载依赖的，也可以在软件包仓库发布自己的依赖，npm 作为一个软件包管理器，同时也是 JavaScript 最常用的软件包仓库，npm 仓库位于 [npmjs.com](https://www.npmjs.com/)

npm 不是唯一的选择，你也可以通过[Microsoft Azure](https://azure.microsoft.com/) 管理自己的 npm 代理仓库(因此可以覆盖或锁定某些软件包)，[GitHub 也提供软件包仓库服务](https://github.com/features/packages)

## 使用软件包生态系统

[Parcel](https://parceljs.org/) 是开发阶段常用到的一个命令行工具，可以监测我们的代码以查找对依赖的调用，并自动安装对应的依赖。它还可以自动构建我们的代码

### 创建一个 npm 包

首先，创建一个目录来存储实验应用

```bash
mkdir parcel-experiment
cd parcel-experiment
```

接着初始化 npm 包，这会生成一个配置文件`package.json`,用来存储配置信息，以防我们以后想要重新创建此环境，甚至将包发布到 npm 仓库

```bash
npm init
```

你现在将被要求回答一些问题；npm 将根据答案创建一个默认的 `package.json` 文件：

- `name`：用于标识应用的名称。只需按下 Return 接受默认值 `parcel-experiment`。

- `version`：应用的起始版本号。同样，只需按下 Return 接受默认值 `1.0.0`。

- `description`：应用目的的简要描述。输入一些非常简单的东西，例如“一个简单的 npm 包，用于学习使用 npm”，然后按下 Return。

- `entry point`：这将是应用的入口 JavaScript 文件。默认的 `index.js` 对这个实验项目是可以的——按下 Return。

- `test command`、`git repository` 和 `keywords`：按下 Return 以将它们暂时留空。

- `author`：项目的作者。输入你自己的姓名，然后按下 Return。

- `license`：要发布软件包的许可证。按下 Return 来接受默认值。

按下 Return 一次以接受这些设置。

### 安装 parcel

本地安装 Parcel：

```bash
npm install parcel-bundler
```

完成所有准备工作，开始进行现代客户端开发(意味着使用构建工具来获得更好的开发体验)，现在查看 `package.json`文件，可以看到 npm 添加了一个新字段——dependencies：

```json
"dependencies": {
  "parcel-bundler": "^1.12.4"
}
```

本地安装的优点是通过移动代码库，在另一台设备上运行`npm install` 能够自动配置安装相同的环境，缺点是只能在`parcel-experiment`目录下运行`parcel`依赖，但是利大于弊
