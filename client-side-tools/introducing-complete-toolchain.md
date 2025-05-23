# 介绍完整的工具链

> 并非所有的工具都需要在命令行运行，一些编辑器(如 vscode，atom)集成了许多工具插件

## 介绍我们的学习案例

本文创建的工具链将用于构建和部署一个迷你网站，用来记录威胁地球的危险物体空间数据(取自[NASA 开放 API](https://api.nasa.gov/) 之一)，你可以在 [near-misses.netlify.com](https://near-misses.netlify.app/) 上看到该网站的实时版本。

## 工具链中使用的工具

在本文中，我们将使用以下工具和功能：

- [JSX](https://reactjs.org/docs/introducing-jsx.html)，一组与 [React](https://reactjs.org) 相关的语法扩展，允许你在 JavaScript 中定义组件结构等。你不需要了解 React 就可以按照本教程进行操作，但我们已经包含了这一点，以便让你了解非原生 Web 语言如何集成到工具链中。
- 最新的 JavaScript 内置特性（在撰写本文时），例如 [`import`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import)。
- 有用的开发工具，例如用于格式化的 [Prettier](https://prettier.io/) 和用于代码规范检测的 [ESLint](https://eslint.org/)。
- [PostCSS](https://postcss.org/) 提供 CSS 嵌套功能。
- [Parcel](https://parceljs.org/) 用于构建和压缩我们的代码，并自动为我们编写一堆配置文件内容。
- [GitHub](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Core/Version_control) 用于管理我们的源代码。
- [Netlify](https://www.netlify.com/) 用于自动化我们的部署过程。

你可能不熟悉上述所有功能和工具或它们的作用，但不要惊慌——随着我们在本文中的深入讨论，我们将解释每个部分。

## 工具链及其固有的复杂性

工具链的环节越多，也就越复杂，越难配置，越容易出问题。相反环节越少，也就越稳定可靠

你需要考虑工具链的哪些是必要的，哪些是微不足道的

最小的工具链是根本没有工具链。你可以手动编写 HTML，使用“vanilla JavaScript”（即没有框架或中介语言），并手动将其全部上传到服务器进行托管。

一般复杂的软件都会通过工具简化开发，如果需要将软件部署到生产服务器，则需要提前测试，这听起来已经像是必要的工具链

示例项目中，通过一些设计工具来帮助开发，并避免使用多于工具，最小化复杂程度，比如添加项目之前使用[SVGO](https://www.npmjs.com/package/svgo)工具用来缩小 svg 图像尺寸

## 一些先决条件

在安装工具前，先准备好使用上述提到的两个 web 服务

- **GitHub** 源代码托管网站，同时可以通过 github-pages 部署网页

- **Netlify** 静态网站(即完全由不实时更改的文件组成的网站)托管网站

如果你已经注册了 GitHub 账号，那么可以在 Netlify 中选择通过 GitHub 登录。稍后通过 Netlify 帐户连接到 GitHub 存储库，来部署此项目

## 工具的三个阶段

[客户端工具概览](https://kamomechan.github.io/front-end/client-side-tools/overview)

- **安全的网络**：使软件开发体验稳定且更高效。我们也可能将其称为开发环境
- **编译与构建**：允许我们在开发过程中使用编程语言（例如 JavaScript）的最新特性或其他语言（例如 JSX 或 TypeScript），然后转译我们的代码，以便生产版本仍在各种浏览器上运行，无论是现代的和陈旧的。
- **开发后**：在完成开发主体后发挥作用的工具，以确保你的软件持续运行。在这个案例中，我们将研究如何向你的代码添加测试流程，并使用 Netlify 部署你的应用程序，以便所有人都可以访问。

让我们从开发环境开始。

## 创建开发环境

1. **工具链的双面性**

   - **潜在问题：** 工具链有时会被认为是一种“干扰”，因为开发者可能过度沉迷于配置工具（陷入“兔子洞”），追求完美的开发环境，反而耽误实际编码工作。

   - **正面视角**：工具链的配置和布置物理工作环境（如调整椅子、电源、音乐等）类似——合理的初始投入能长期提升效率，且只需一次性或偶尔调整。

2. **工具链的核心原则**

   - **一次性投入，长期复用**：如果工具链设置得当，可以服务于多个项目，无需重复配置。

   - **定期审查**：只需偶尔更新或优化工具，避免频繁改动分散精力。

3. **工具链的典型组成部分（示例）**

   文中列举了开发初期可能需要安装的基础工具：

   - **软件包安装工具**：管理项目依赖（如 `npm`、`yarn`、`pip`）。

   - **代码版本控制**：如 `Git`，用于协作和追踪代码变更。

   - **代码格式化工具**：自动化统一代码风格（如 `Prettier`、`ESLint` 对 JavaScript/CSS/HTML 的格式化）。

   - **代码检查工具**：静态分析代码质量或规范合规性（如 `ESLint`、`Stylelint`）。

### 软件包安装工具

我们将使用 npm 作为软件包安装工具，在[第二章](https://kamomechan.github.io/front-end/client-side-tools/command-line#%E6%B7%BB%E5%8A%A0%E5%B7%A5%E5%85%B7)有所介绍

### 代码版本控制

[**git**](https://git-scm.com/downloads) 版本控制系统，可以追踪并保存提交的代码版本，当引入错误的代码无法修复，则可以通过 git 撤销更改或退回之前的版本。不仅如此，通过与远程存储库([**gitHub**](https://github.com/)等等)的结合，则可以达到代码备份和与他人同步协作，避免互相覆盖彼此的代码

你可以通过不同的方式使用 git，从命令行到 git gui，再到代码编辑器(VScode 等等)

### 代码格式化工具

我们将在本项目中使用 Prettier，在[第二章](https://kamomechan.github.io/front-end/client-side-tools/command-line#%E6%B7%BB%E5%8A%A0%E5%B7%A5%E5%85%B7)有所介绍

检查是否在全局安装它

```bash
prettier -v
```

如果安装成功将会返回版本号，如果没有安装将会返回"找不到该命令"，请使用以下命令安装它

```bash
npm install prettier -g
```

我们可以通过它来格式化代码，通过项目的根目录运行下面命令

```bash
prettier --write ./src/index.html
```

> 备注：`--write`选项表示如果代码格式有问题，将修复并保存它。如果不加选项，则仅检查格式(不保存)，这对发布前检查格式非常有用

对每个文件运行初始命令会很繁琐，可以通过以下方式解决

- 使用 npm 自定义脚本在一次命令中从命令行运行多个命令，例如 `npm run tidy-code`
- 使用特殊的“git 钩子”在提交之前测试代码是否已格式化。
- 使用代码编辑器插件在每次保存文件时运行 Prettier 命令。

> git 钩子是 git 系统提供的一种机制，可以在执行 git 操作(如提交、推送等)前后，自动执行自定义脚本。由于 git 钩子本身配置相当复杂，可通过[husky](https://github.com/typicode/husky)(一个流行的 Node.js 工具)，简化 git 钩子的使用

对于 vscode，只需使用[prettier 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode),并从设置中配置 prettier 为默认格式化工具并启动“保存时格式化”即可

### 代码检查工具
