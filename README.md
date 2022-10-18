# 短網址產生器功能簡介 - Introduction

將網址縮短的短網址產生器

![image](https://github.com/OneZerocococo/URL_shortener/blob/main/public/img/index.PNG)
![image](https://github.com/OneZerocococo/URL_shortener/blob/main/public/img/shortened.PNG)

## 功能列表 - Features

- 可輸入網址轉換成短網址
- 可點擊 copy 複製短網址連結
- 透過短網址可轉址到原網址

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```
4. 環境變數設置：

   ```bash
   mongoose.connect(process.env.MONGODB_URI)
   ```

5. 執行專案：

   ```bash
   nodemon app.js
   ```

6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Express is listening on localhost:3000
   ```

7. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 16.17.0
- Express 4.18.2
- Express-Handlebars 6.0.6
- mongoose 6.6.5

## 開發者
- [OneZero](https://github.com/OneZerocococo)