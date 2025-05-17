# 命令行

## 终端与命令行

终端包括打开shell后的会话和会话窗口，而命令行则只包括你输入的命令和闪烁的光标。

macOS 和 Linux 的终端都是基于unix的，而 Windows 的 cmd 则相当于老式的 DOS 提示符，相当于 unix 缺少了很多功能，建议使用 wsl 来替代，可以直接在微软商店免费安装

## 基本的内置终端命令

- 导航计算机的文件系统以及基本级别的任务，如创建、复制、重命名和删除：
  
  - 移动你的目录结构 : `cd`
  - 建立目录：`mkdir`
  - 创建文件（修改他们的原数据）: `touch`
  - 复制文件：`cp`
  - 移动文件：`mv`
  - 删除文件或目录：`rm`

- 下载在特定的 url 找到的文件：`curl`

- 在较大的文件体中寻找特定的片段：`grep`

- 主页查看文件的内容：`less`, `cat`

- 操作和转换文本流（例如，将 HTML 文件中 `<div>` 的所有实例改为 `<article>`）：`awk`、`tr`、`sed`

## 考虑终端有害吗？

当我们对成百上千的文件进行操作时，建议备份一份，并在备份文件上进行操作，防止命令输错造成不可逆的后果

一个好习惯是在本地编辑器上输入 terminal 命令，考虑是否有误，并在备份上运行测试

若自己对终端命令不太习惯，可以在 Glitch.com 上进行练习

## 与管道命令连接在一起

`wc` 命令会默认计算行数，字数，字节数。

可选项有 `-l` 只显示行数(line) `-w` 只显示字数(word) `-c` 只显示字节数(char)。多个选项可组合使用

我们可以使用 `|` 管道连接符将其与 `ls` 命令和 `wc` 命令组合，以计算目录文件个数

```bash
ls | wc -l
```

这是怎么回事呢？我们在使用管道连接符时，把标准输出打印 `stdout` 转成了 标准输入 `stdin` ，而  `wc` 命令则接收到了 `ls` 命令的标准输入

那为何能显示文件个数呢？

```bash
ls
```

```bash
ls | cat
```

当运行这两个命令时我们看到了不同的显示方式(假设有两个文件 a.txt b.txt)

```bash
a.txt    b.txt
```

```bash
a.txt
b.txt
```

由此可知，标准输出会优化显示结果，在一行内显示多个文件名，以便我们眼睛查看。而经过管道连接符转成标准输入后，则会把文件之间换行显示，以便通过 `wc -l` 获取行数从而得到文件个数

## 一个稍微复杂的例子

`curl` 命令可以获取页面的内容，可选参数有 `-L` 跟随服务器重定向，`-I` 只获取响应头(HEAD请求) 等等

```bash
curl -L -I https://developer.mozilla.org/docs/Web/API/fetch | grep location
```

根据筛选 location头(重定向目标) 我们可以获取重定向的信息

```bash
location: /en-US/docs/Web/API/fetch
location: /en-US/docs/Web/API/Window/fetch
```

为了使链接更加完善，我们可以使用 `awk` 命令进行拼接

```bash
curl -L -I https://developer.mozilla.org/docs/Web/API/fetch | grep location | awk '{print "https://developer.mozilla.org" $2}'
```

`awk` 命令中 `$2` 表示标准输入中的第二列，即`/en-US/docs/Web/API/Window/fetch` ,而第一列则是 `location:` ，整体意思则为将打印 `https://developer.mozilla.org`  和 `/en-US/docs/Web/API/Window/fetch` 拼接的结果

输出结果为

```bash
https://developer.mozilla.org/en-US/docs/Web/API/fetch
https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch
```

## 添加工具

[**node.js**](https://nodejs.org/en/) 一个能让JavaScript在电脑上运行的环境(本来只能在浏览器运行)

**npm** 是 node.js 自带的“应用商店”，专门用来安装前端开发工具(框架，插件等)

装Node.js时会自动带上npm和npx（npm的小助手），不用单独折腾。

---

**prettier** 是前端代码格式化工具，专注于基于 javascript 的语言，并增加了对 HTML、CSS、SCSS、JSON 等的支持

利用 npm 安装prettier 时，如何安装呢？

可以选择 **全局安装** 或 **本地安装**,以下是全局安装的优缺点

**优点：**

1. **随处可用**
   
   - 全局安装的工具（比如 `create-react-app`、`vue-cli`）可以在终端任何地方直接运行，就像系统命令（比如 `ls`、`cd`）。

2. **只装一次，省空间**
   
   - 不用每个项目都装一遍，节省磁盘空间。

3. **版本统一**
   
   - 所有项目都用同一个版本，不会因为不同项目版本不同而混乱。

**缺点：**

1. **可能和项目不兼容**
   
   - 比如你的项目需要 `webpack@5`，但你全局装的是 `webpack@4`，运行时就可能报错。

2. **团队协作麻烦**
   
   - 如果你用 `git` 分享代码，别人下载后可能因为全局工具版本不同而无法运行你的项目。

3. **无法自动管理依赖**
   
   - 本地安装（`npm install`）时，工具版本会被记录在 `package.json` 里，别人一键安装就能用。但全局安装不会记录，别人得自己装。

**全局安装适合什么情况？**

- **适合工具类**（比如 `create-react-app`、`npm`、`yarn` 这种命令行工具）。

- **不适合项目依赖**（比如 `webpack`、`babel` 等，应该本地安装）。

全局安装的负面影响可能要比好处大得多，然而，现在我们宁可追求简单，而采用全局安装来保持简单。在下一篇文章中，我们将进一步了解本地安装以及它们的优点。

```bash
npm install --global prettier
```

命令完成后，prettier可以在系统任意位置使用，直接输入 `prettier` 不加任何参数运行，会和其他命令一样显示帮助和提示

**尝试 prettier**

保存以下代码为 `index.js` 在测试目录中

```javascript
const myObj = {
a: 1,
b: { c: 2 },
};
function printMe(obj) {
console.log(obj.b.c);
}
printMe(myObj);
```

检查代码是否需要格式化

```bash
prettier --check index.js
```

你的输出应该是

```bash
Checking formatting...
[warn] index.js
[warn] Code style issues found in the above file. Run Prettier with --write to fix.
```

prettier 提示我们使用 `--write` 选项格式化

```bash
prettier --write index.js
```

可以从 `index.js` 中发现被重新格式化成这样

```javascript
const myObj = {
  a: 1,
  b: { c: 2 },
};
function printMe(obj) {
  console.log(obj.b.c);
}
printMe(myObj);
```

prettier 有很多自动化的方法，推荐使用 [vscode-prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 插件的方式来进行，当我们保存时会自动格式化

## 尝试其他的工具

- [`bat`](https://github.com/sharkdp/bat) — 一个更好的 `cat`， (`cat` 用于打印文件内容）。
- [`prettyping`](http://denilson.sa.nom.br/prettyping/) — `ping`在命令行上，但是是可视化的 (ping 是检查服务器是否有响应的有用工具)。
- [`htop`](http://hisham.hm/htop/) —进程查看器，当某些东西使你的 CPU 风扇的行为像一个喷气发动机，并且你想要识别出错的程序时，它非常有用。
- [`tldr`](https://tldr.sh/#installation) —在本章前面提到的，但是可以作为命令行工具使用。

--- 

**环境变量**

根据文档安装后有时可能会无法直接使用命令，通常打开应用程序时需要找到对应的路径才能打开，命令也是如此，为了不让每次输入命令时都包含路径，于是便诞生了环境变量(PATH)

**如何查看 `PATH`**

```bash
echo $PATH
```

**如何修改 `PATH`**

```bash
export PATH=$PATH:your-path
```

把 `your-path` 替换成命令所在的目录即可

然后运行

```bash
source ~/.bashrc  # 或 source ~/.zshrc
```

**如何修改命令名称**

当我们在 Ubuntu 上利用 apt 安装 bat 时会发现，不能通过 `bat` 命令直接使用（会显示没有此命令），而通过 `batcat` 命令才能使用

这时候我们可以利用软链接(相当于快捷方式)给 `batcat` 命令取个别名为 `bat` 

```bash
mkdir -p ~/.local/bin
ln -s /usr/bin/batcat ~/.local/bin/bat
```

然后把软链接存放的目录添加到环境变量就可以啦

```bash
export PATH=$PATH:~/.local/bin/bat
source ~/.bashrc
```

---

**文件权限**

一般用数字形式来表达权限

4 = 可读

2 = 可写

1 = 可执行

一般常用执行文件使用 755,第一个数字到第三个数字分别代表所有者(owner)，同组用户(group),其他用户(other)。由于7=4+2+1，所以所有者用户拥有可读，写，执行权限；由于4+1=5,所以同组用户和其他用户拥有可读，执行权限

```bash
chmod 755 filename
```


