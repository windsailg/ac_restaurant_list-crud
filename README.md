# 我的餐廳口袋名單 v2.0

本清單提供餐廳的類型搜尋、查看餐廳照片以及地理位置等資訊
並可以任意新增、修改、刪除，或重新輸入預設餐廳資料


## 現有功能

- 列出所有餐廳資訊
- 可以依照餐廳名稱及餐廳類別做搜尋
- 點選資訊卡可直接檢視餐廳詳細資訊，包含類別、地址、電話、評分、圖片及 Google Map
    - 點選 地址後方地圖圖標可顯示Google Map可顯示位置詳細資料


## 使用工具

- mongoDB: 4.2.9
- mongoose: 5.10.2
- Node.js: 13.0.1
- Express: 4.17.1
- Express-Handlebars: 5.1.0
- nodemon: 2.0.4


## 安裝

0.電腦需安裝mongoDB

1.開啟終端機(Terminal) cd 到存放專案本機位置並執行:

```
git clone https://github.com/windsailg/ac_restaurant_list-crud.git
```


2.初始化安裝套件

```
npm i   //安裝套件
```

```
npm run seed  //導入預設資料
```

顯示以下資訊代表與資料庫連接
mongoDB connected
done.


```
npm run dev  //導入預設資料
```

顯示以下資訊代表啟動成功
Express is listening on localhost:3000 
伺服器已經成功運作於 http://localhost:3000




