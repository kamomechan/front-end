# 客户端工具概览

## 安全网络

> 即在代码开发阶段有用的工具

1. **linter** 检查错误代码并提示的工具。[**eslint**](https://eslint.org/) 是业界标准的 JavaScript linter，还有其他类型的 linting 工具，比如 [**csslint**](http://csslint.net/), [**webhint**](https://webhint.io/) 等等

2. **源代码控制** 又称版本控制系统(VCS)。可以在本地对代码更改进行记录，也可以将其推送到服务器，以供别人查看，避免开发团队编写重复功能的代码。目前最流行的 VCW 为 [**git**](https://git-scm.com/),以及人们常用的代码托管网站 [github](https://github.com/), [gitlab](https://about.gitlab.com/), [Bitbucket](https://bitbucket.org/product/features) 等等

3. **代码格式化** 根据你的指定样式，进行格式化方式。[prettier](https://prettier.io/) 是流行的代码格式化工具

## 转换

> 即转换代码的工具

1. 使用最新语言特性编写代码，并将其转换成日常设备上使用的代码。比如我们使用JavaScript的新特性编写代码，然而旧的浏览器不支持新特性
   
   - [**babel**](https://babeljs.io/) 一个 JavaScript 编译器。可以将最新语言特性的代码转成可供浏览器理解的旧式 JavaScript 代码
   
   - [**PostCSS**](https://postcss.org/) 和 babel 一样，可以把 css 的新语法转换成(翻译成)旧浏览器理解的旧语法。然而如果旧语法无法实现新语法的效果(某些动画效果)，则会偷偷用 JavaScript 动态模拟 **Polyfill** 这个效果，让旧浏览器也能“假装”支持这个效果

2. 使用完全不同的语言编写代码，并将其转成浏览器能够理解的语言
   
   - [**Sass/SCSS**](https://sass-lang.com/) 能够使用变量，嵌套规则等新特性，减少重复代码
   
   - [**TypeScript**](https://www.typescriptlang.org/) 是JavaScript的超集，它提供了一些额外的特性
   
   - 框架例如 [React](https://reactjs.org/)、[Ember](https://emberjs.com/) 和 [Vue](https://vuejs.org/) 都是基于JavaScript的自定义语法

## 开发后阶段

> 即编写完代码后有用的工具

1. 测试工具 该工具会自动对代码运行测试，以确保进行下一部操作前它是正确的，比如在推送到GitHub前进行测试
   
   - 框架包括编写测试 [Jest](https://jestjs.io/)、[Mocha](https://mochajs.org/) 和 [Jasmine](https://jasmine.github.io/)
   
   - 自动测试运行和通知系统包括 [Travis CI](https://travis-ci.org/)、[Jenkins](https://jenkins.io/)、[Circle CI](https://circleci.com/) 及[其他系统](https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration)

2. 配置工具 该工具会自动进行运行测试，若通过测试可以直接通过链接访问，失败则会提醒
   
   - [Netlify](https://netlify.com) 是目前最流行的部署工具之一，但其他包括 [Vercel](https://vercel.com/) 和 [Github Pages](https://pages.github.com/)

3. 其他
   
   - 在开发后期阶段，还有许多其他可用的工具类型，包括 [Code Climate](https://codeclimate.com/) 对于收集代码质量度量，[webhint browser extension](https://webhint.io/docs/user-guide/extensions/extension-browser/) 用于执行跨浏览器兼容性的运行时分析和其他检查，[Github bots](https://probot.github.io/) 提供更强大的 GitHub 功能，[Updown](https://updown.io/) 提供应用程序运行时间监控等等
