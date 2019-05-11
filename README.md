# vuerouter

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 本项目主要用用于练习  

> Test One
----  

### 练习借助vue-cli初始化项目

#### 步骤  

（1）。 新建本地文件夹    
（2）。 编辑器打开，运行命令行，在保证有node的前提下运行下行命令 

`npm install vue-cli -g`  

（3）。 完成后运行下列命令  

`vue init webpack xxx`  

#### *注意 xxx是项目文件夹名字，运行完后会在当前文件夹下新建xxx名字的文件夹

（4）。接着cd xxx 到新建文件夹下，若该文件夹下没找到node_modules文件夹，运行下列命令安装依赖包 

`npm install`  

> Test Two  
----  

### 练习把本地仓库与github上新建仓库关联

### 步骤  

（1）。在本地待提交仓库内运行下列命令  

`git init`  

完成后该文件夹下会生成一个.git 隐藏文件夹，

（2）。在github上新建同名仓库   

注意此处不用勾选生成README.md选项，然后复制项目路径，例：git@github.com:name/xxx.git,'name'是你的github名，xxx是仓库名

（3）。在本地仓库内输入以下命令  

`git remote add origin git@github.com:name/xxx.git` 把两个仓库关联起来  

（4）。配置不需要提交的文件，现今github一般都会有默认项，也可以去.gitignore文件检查下，修改配置也在这个文件夹内，具体格式范例如下  

```
  #       --表示此为注释,将被Git忽略   
  1.txt   --表示忽略1.txt 文件   
  *.txt   --表示忽略所有 .txt 结尾的文件   
  !2.txt  --不忽略2.txt这个文件   
  /TODO   --表示仅仅忽略项目根目录下的 TODO 文件，如果这个文件不在根目录下，则不会忽略  
  build/  --表示忽略 build/目录下的所有文件，过滤整个build文件夹，不管是否在根目录下；
```  

（5）。开始提交本地文件，命令如下 

```
# 把本地文件加入提交队列
git add .  

# 提交文件,-m 'xxx'为编写提交日志，不写会报错   
git commit -m 'xxx'

# 提交到远程仓库,初次提交添加-u  
git push -u origin master
```
