# 我的餐廳口袋名單 v2.5.0

本清單提供餐廳的類型搜尋、查看餐廳照片以及地理位置等資訊

並可以任意新增、修改、刪除，或重新輸入預設餐廳資料


## 現有功能

- 列出所有餐廳資訊
- 可以依照餐廳名稱、類別、地區做搜尋
- 點選資訊卡可直接檢視餐廳詳細資訊，包含類別、地址、電話、評分、圖片及 Google Map
- 可任意新增刪改餐廳資訊


### 2.5新增功能

-  卡片直行排版問題修正
-  卡片淡入特效
-  加入關鍵字篩選功能，可判斷現有餐廳資訊的地區及類型，自動產生篩選條件進行篩選
    - 如已輸入搜尋關鍵字，則可從關鍵字搜尋結果中做篩選
    - 加入清除所有搜尋操作按鈕
-  首頁資訊卡新增檢視、修改、刪除等操作優化
    - 優化刪改流程: 所有CRUD操作加入提示彈出提醒視窗


## 使用工具

- mongoDB: 4.2.9
- mongoose: 5.10.2
- Node.js: 13.0.1
- Express: 4.17.1
- Express-Handlebars: 5.1.0
- nodemon: 2.0.4
- body-parser: 6.12.0
- method-override: 3.0,

- jquery: 3.3.1
- bootstrap: 4.2.1
- fontawesome: 5.14
- AOS: 2.3.1
- popper: 1.14.6


## 安裝

0.電腦需安裝mongoDB

1.開啟終端機(Terminal) cd 到存放專案本機位置並執行:

```
git clone https://github.com/windsailg/ac_restaurant_list-crud.git
``````

2.cd 至 ac_restaurant_list-crud 資料夾


3.初始化安裝套件

```
npm i   //安裝套件
```

```
npm run seed  //導入預設資料
```

4.終端機顯示以下資訊代表成功與資料庫連接
mongoDB connected
done.


```
npm run dev  //啟動程式
```

5.終端機顯示以下資訊代表啟動成功
Express is running on http://localhost:3000
mongoDB connected

伺服器已經成功連線並運作於 http://localhost:3000




