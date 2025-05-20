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

### 设置示例程序

parcel 需要一个  `index.html` 和一个`index.js`文件来处理，除此之外对你如何构建项目没有任何意见，其他工具可能有所不同

现在我们开始创建 `index.html`文件,并输入以下内容

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

接着创建`index.js`文件即可

### 尝试使用 parcel

运行 parcel 工具

```bash
parcel index.html
```

在终端运行以上命令将会输出以下内容

```bash
Server running at http://localhost:1234
✨  Built in 193ms.
```

> 如果返回`parcel: command not found` 类型错误，应尝试使用 npx 运行上面的命令，`npx parcel index.html`

现在我们可以享受到 JavaScript 包生态系统的好处，parcel 会在后台运行一个本地 web 服务器，打开`http://localhost:1234`即可看到，当我们更改代码时，parcel 会自动构建并刷新 web 服务器，以便我们看到实时的更改

我们开始添加一些页面内容来显示相对时间，比如几天前，几小时前等等。可以通过`date-fns`包下的`dateDistanceToNow()`方法来实现

在`index.js`包下添加以下内容

```javascript
import { formatDistanceToNow } from "date-fns";

const date = "1996-09-13 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
```

回到`http://localhost:1234`，你将看到距今已经多久了

这个代码的不可思议之处在于我们使用了`date-fns`包的`dateDistanceToNow()`方法，而我们并没有手动安装这个包，这意味着 Parcel 发现你需要这个模块，因此在 `npmjs.com` 仓库中搜索并自动为我们本地安装了它。为了证实这一点可以打开`package.json`文件，这时可以看到`dependencies`字段已经被更新了

```json
"dependencies": {
  "date-fns": "^2.12.0",
  "parcel-bundler": "^1.12.4"
}
```

运行`parcel`命令，会生成许多新文件

- `node_modules`：Parcel 和 date-fns 的依赖文件。
- `dist`：发布目录——这些是 Parcel 自动生成的打包和压缩文件，它们是 `localhost:1234` 提供的文件。这些是你在将网站发布到公共网络时上传到 Web 服务器的文件。

只要我们知道包的名称，我们就可以在代码中使用它，Parcel 会自动去获取并安装（实际上是“复制”）该包到我们的本地目录（在 `node_modules` 下）。

### 为生产环境构建我们的代码

此代码还没准备好用于生产环境。大部分构建工具包括**生产环境**和**开发环境**，重要的区别在于，生产环境并不需要很多在开发阶段需要的功能，因此这些功能将在生产环境中被剥离，例如“模块热替换”、“实时重新加载”和“未压缩和注释的源代码”，但这些都是常见的 Web 开发功能，在开发阶段非常有用，但在生产中它们并不是很有用。在生产中，它们只会令你的网站变得臃肿。

使用 `Ctrl` + `C`停止之前的 Parcel 命令。

parcel 提供了一个额外的命令用于生成适合发布的文件，使用`build`选项生成捆绑包

```bash
parcel build index.html
```

应该能看到以下的输出

```bash
✨  Built in 9.35s.

dist/my-project.fb76efcf.js.map    648.58 KB     64ms
dist/my-project.fb76efcf.js        195.74 KB    8.43s
dist/index.html                        288 B    806ms
```

同样，我们的构建产物在 `dist` 目录。

> 如果这时你输出内容报错，那么可能是`date-fns`包的最新版本与`parcel-bundler`版本不兼容，那么应该修改版本号和上方展示的版本号相同才行，最后运行`npm install`自动更换依赖版本(别问我怎么知道的，因为我因为这个原因报错，最后解决啦><)

### 减小应用的文件大小

当我们使用别人的软件包带来便利的同时，我们也会看到 JavaScript 的捆绑包`my-project.fb76efcf.js`的大小为 195kb，考虑到它只进行了计算并打印了一行文本，显得体积非常大，这是由于我们只使用了`date-fns`这个包里面的一个方法，捆绑包中却包含了整个库

如果我们避免本地使用任何库，并用 `<script src="">` 加载托管的 `date-fns` 库，那么会发生同样的事，当我们的示例页面在浏览器中加载时，将会下载整个库。

然而，我们可以要求软件对我们的代码进行检查，并在构建捆绑包时只包含我们实际使用的函数(方法)，这个过程称为**摇树优化**

通过摇树优化减少了文件体积，使我们的应用程序尽可能快的加载，不同工具以不用方式进行摇树优化

尽管工具日新月异，但目前有三个比较流行的打包工具可以将源代码构建为捆绑包

- RollUp 工具提供摇树优化和代码拆分作为其核心特性。
- Webpack 需要“一些”配置（尽管“一些”可能低估了一些开发人员的 Webpack 配置的复杂性）。
- 在 Parcel（Parcel 2 之前）的情况下，需要一个特殊的标志——`--experimental-scope-hoisting`——来进行摇树优化构建。

让我们运行以下命令，让 parcel 使用摇树优化选项

```bash
parcel build index.html --experimental-scope-hoisting
```

我们可以看到有很大的不同

```bash
✨  Built in 7.87s.

dist/my-project.86f8a5fc.js    10.34 KB    7.17s
dist/index.html                   288 B    753ms
```

现在捆绑包大小约为 10K。看起来好多了。

如果我们需要把这个项目放到服务器部署，只需发布`dist`目录中的文件，parcel 已自动更改文件名，建议查看`dist/index.html`文件，以便看到具体更改

> **备注：** 在撰写本文时，Parcel 2 尚未发布。但是，当它发布时，这些命令仍将有效，因为 Parcel 的作者已经聪明地将旧版本的 Parcel 重新命名。要安装 Parcel 1.x，你必须安装 `parcel-bundler`，而 Parcel 2.x 被称为 `parcel`。

现在有很多工具可用，JavaScript 软件包生态系统正在以前所未有的速度增长，这有利有弊。不断进行改进，选择，无论是好是坏，都在不断增加。面对眼花缭乱的工具选择，可能最重要的一课是了解你选择的工具能够做什么。

## 包管理器客户端的简要指南

本教程使用了 npm 包管理器，还有一些其他选择

- npm 详见 [npmjs.org](https://www.npmjs.com/)
- pnpm 详见 [pnpm.js.org](https://pnpm.js.org/)
- Yarn 详见 [yarnpkg.com](https://yarnpkg.com/)

pnpm 和 npm 非常相似，pnpm 旨在和 npm 提供相同的参数，却用不同的下载和存储软件包方式，以减少总磁盘占用

下面的示例中，npm 替换成 pnpm 仍可以正常运行

对比 npm，yarn 安装依赖通常被认为更快

> **备注：** 虽然 npm 包管理器与 npm 仓库共享相同的名称，但不需要使用 npm 包管理器来从 npm 仓库安装软件包。pnpm 和 Yarn 可以使用与 npm 相同的 `package.json` 格式，并且可以安装来自 npm 和其他软件包仓库的任何软件包。

接下来，回顾一下包管理器的常见操作

### 初始化一个项目

```bash
npm init
yarn init
```

这将通过一些问题来描述你的项目(名称、许可证、描述等)，并生成一个`package.json`文件，其中包含项目和依赖的元信息

### 安装依赖

```bash
npm install date-fns
yarn add date-fns
```

我们之前还看到了 `install` 的操作。它将 `date-fns` 软件包及其所有依赖项直接添加到工作目录下的名为 `node_modules` 的子目录中。

默认情况下，此命令将安装 `date-fns` 的最新版本，但你也可以进行控制。你可以尝试安装 `date-fns@1`，这将为你提供最新的 1.x 版本（目前为 1.30.1）。或者你可以尝试安装 `date-fns@^2.3.0`，这意味着安装 2.3.0 之后或包括 2.3.0 的最新版本（在撰写本文时为 2.8.1）。
