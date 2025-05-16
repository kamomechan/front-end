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


