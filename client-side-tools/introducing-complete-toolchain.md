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
