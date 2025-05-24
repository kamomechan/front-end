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

   - **潜在问题：** 工具链有时会被认为是一种“干扰”，因为开发者可能过度沉迷于配置工具（陷入“兔子洞”），追求"完美"的开发环境，反而耽误实际编码工作。

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

通常检查代码错误的工具不包含 html 和 css，这是因为这两种文件具有较大的弹性，即使引用了错误的元素或属性也不会报错。而 JavaScript 一旦引用错误的函数，则会报错并无法运行。这时检查代码潜在错误工具尤为重要

JavaScript 代码检查的首选工具是 [ESLint](https://eslint.org/)，但正确配置它很棘手，你需要花很长时间才能获得一个”完美“的配置

默认使用它会报错，会提示无法找到配置文件，配置文件支持多种格式，对于此项目，我们使用`.eslintrc.json` (文件名前面的.表示默认情况下隐藏的)

可以使用 npm 选择全局安装或本地安装，但推荐两者都使用

- 本地安装是为了共享项目时，别人也可以通过你应用的规则来编辑项目

- 全局安装是为了创建其他项目时，能够快速的检查代码规范

通过配置可以细化和强制执行代码规划的规则，我们将在稍后提供 eslint 配置，以下是它的输出示例

```bash
./my-project/src/index.js
   2:8 error 'React' is defined but never used  no-unused-vars
 22:20 error 'body' is defined but never used   no-unused-vars
 96:19 error 'b' is defined but never used      no-unused-vars

✖ 3 problems (3 errors, 0 warnings)
```

> **备注：** 我们将在下一节安装 ESLint；暂时不要担心这个。

代码编辑器的插件通常支持 eslint，并且可能更有用，因为会实时的显示错误反馈

安装完成后，我们需要配置 Prettier，以便它可以与 ESLint 配合使用。我们将在下一节中进行此操作。

### 配置初始项目

通过命令行创建项目，安装初始工具，创建基础配置文件，多次操作后将对默认操作有所了解，通过初始操作将安全的建立一个项目，因为许多“基本”问题将在早期被发现。

### 初始设置

1. 打开终端，创建项目文件夹并进入

   ```bash
   mkdir will-it-miss
   cd will-it-miss
   ```

2. 为所有网站开发代码创建一个新目录

   ```bash
   mkdir src
   ```

   代码结构因团队而异，对于这个项目源代码存储在`src`

3. 确保你在 `will-it-miss` 目录的根目录中，然后初始化 git 仓库，这意味着可以创建代码修订版本，并保存到远程存储库等

   ```bash
   git init
   ```

4. 将目录转换成 npm 包，这样可以利用前一篇文章中讨论的优势

   ```bash
   npm init --force
   ```

   这将创建一个`package.json`文件，`--force`选项表示根据默认选项创建配置文件，而不询问有关初始
   问题

#### 获取项目代码文件

我们将获取项目的代码文件，并将其存放到`src`文件夹下，我们不会讲解他的工作原理，只是教你如何使用它

1. 通过访问 https://github.com/remy/mdn-will-it-miss ，下载仓库的 zip 文件，`Code-Clone-Download Zip`，解压到任意位置
2. 将解压的项目 src 目录下的文件，复制到当前项目空的 src 目录下

#### 安装我们的工具

```bash
npm install --save-dev eslint prettier babel-eslint
```

这将安装项目开发阶段使用的初始工具集，这有两个重要部分

- 本地安装(没有`--global`)，表示项目可移植性和可锁定依赖版本
- `--save-dev`选项表示告诉 npm 这些工具只应用于开发阶段(因此 npm 将它们列在 package.json 文件中的 `devDependencies` 下，而不是 `dependencies` 下)。这意味着项目生产阶段将不会安装这些依赖，这些依赖在实际运行代码中不会用到，只在开发阶段才会用到。将它们作为单独的依赖项保持分离，可以减少在部署到生产环境时的不必要工作（我们将在下一章中讨论）

我们需要对工具进行一些的配置才能正常工作，这不是必要的，但是代码检查工具可以监测一些潜在错误，正确配置工具是非常有用的，特别是 ESLint。

### 配置我们的工具

切换到项目根目录，通过添加配置文件，以配置我们的工具，即`prettier`和`eslint`，一般配置文件格式为`json`(我们的工具以及许多其他工具也支持`yaml`格式，如果你习惯它，也可以进行切换)

1. 创建名为`.prettierrc.json`的文件，以配置 prettier 工具

   ```bash
   touch .prettierrc.json
   ```

2. 将`.prettierrc.json`文件设置以下内容

   ```json
   {
     "singleQuote": true,
     "trailingComma": "es5"
   }
   ```

   意味着当你格式化 JavaScript 代码后，为所有带引号的值添加单引号，并不适用追随逗号（这是 ECMAScript 的新特性，在旧版浏览器中这会导致错误）。你可以在 [Prettier 文档中](https://prettier.io/docs/en/configuration.html) 找到更多关于配置 Prettier 的信息。

3. 创建另一个名为 `.eslintrc.json` 的文件，并将其设置为以下内容：

   ```json
   {
     "env": {
       "es6": true,
       "browser": true
     },
     "extends": "eslint:recommended",
     "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module"
     },
     "rules": {
       "no-console": 0
     }
   }
   ```

   上述 ESLint 配置表示我们想使用"推荐的"的 ESLint 设置，我们将允许使用 ES6 特性（例如 map() 或 Set()），我们可以使用模块的 import 语句，并且允许使用 console.log()。

4. 由于我们在 JavaScript 文件中使用了 react jsx 语法，这会导致 eslint 报错，因此我们需要添加更多的配置以支持 jsx 特性。

   设置`.eslintrc.json`文件为以下内容

   ```json
   {
     "env": {
       "es6": true,
       "browser": true
     },
     "extends": ["eslint:recommended", "plugin:react/recommended"],
     "parserOptions": {
       "ecmaVersion": 6,
       "sourceType": "module",
       "ecmaFeatures": {
         "jsx": true
       }
     },
     "plugins": ["react"],
     "rules": {
       "semi": "error",
       "no-console": 0,
       "react/jsx-uses-vars": "error"
     }
   }
   ```

   由于配置使用了一个“react”插件，因此需要安装此插件为 eslint 的代码检查过程提供代码

5. 在项目根目录运行以下命令
   ```bash
   npm install --save-dev eslint-plugin-react
   ```
   这里有一个完整的 [ESLint 规则列表](https://eslint.org/docs/rules/)，你可以根据自己的需求进行调整和配置，许多公司和团队已发布了自己的 [ESLint 配置](https://www.npmjs.com/search?q=keywords:eslintconfig)，这对于选择一个适合自己标准的配置有时可能有用，可以帮助我们获得灵感。不过需要提醒的是：ESLint 配置是一个非常深的“兔子洞”问题！

到此为止，我们的开发环境设置完成了。现在，最后，我们（几乎）准备好编写代码了。

## 构建和转化工具
