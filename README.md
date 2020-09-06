# UNICODESC-Hackathon-NiuHeFan
Github Repo for Team 牛盒饭 at UNICODESC+Hackathon Sept. 2020

### Board:
可以随手写一些进度/分工/更新通知：   
9/5 10:49 上传了Workable-ColorUI文件夹。使用方法：下载，进入微信开发者工具，选择导入项目，导入这个文件夹。这个文件夹已经完成了ColorUI的配置，可以通过添加class (e.g. class="btn-red...")来为组建增加样式。    
9/5 10:53 下载ColorUI的Demo: 链接：https://github.com/weilanwl/ColorUI.git  
使用方法：下载，导入项目文件夹中的Demo文件夹，在手机模拟器里面找到喜欢的UI设计，再在代码文件里找到对应的代码，复制黏贴即可  
  
9/5 13:26 上传了云开发项目的代码Final.rar，云开发函数在history.js里面被调用，可以只看那一页

9/5 17:43 上传可用的canvas测试project，移植了基于web的tilemap。  
   
9/5 18:59 上传了部署了云开发环境的cloudStoryGame，并完成了上传与浏览历史故事接龙的功能

9/6 01:56 上传了初步可用的explore模块，通过webview连接web页面实现，使用nodejs部署

### How to run the demo:
#### Requirements:
- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- [微信云开发](https://cloud.tencent.com/solution/la)
- [NodeJS](https://nodejs.org/en/)
- [ColorUI](https://github.com/weilanwl/ColorUI)(已包含于项目中)
- [gamedev-js-tiles](https://github.com/mozdevs/gamedev-js-tiles)(已包含于项目中)
#### Steps：
1. 使用`git clone https://github.com/DariusHuang/UNICODESC-Hackathon-NiuHeFan.git`将项目下载到本地
2. 通过微信开发者工具导入项目文件夹*thestorydemo/*
3. 回到项目根目录输入`node web/server.js`
4. 在微信开发者工具中*编译*
