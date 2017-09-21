---
title: 使用Rmarkdown
date: 2016-08-24 10:31:24
tags:
category:
top:
---


## 安装rmarkdown
`install.packages("rmarkdown")`
## 安装依赖 (linux平台)
### pandoc
获取source
```
git clone https://github.com/jgm/pandoc
cd pandoc
git submodule update --init   # to fetch the templates
```
安装Haskell Platform
```
curl -sSL https://get.haskellstack.org/ | s
```
安装pandoc
```
stack setup
stack install
```
将~/.local/bin添加至path

