# 郵便番号検索APIサーバー

zipcode_jp を元に作った、簡単なAPIサーバー実装です。

## インストール

```
git clone https://github.com/suichu/zcjs
cd zcjs
git submodule init
git submodule update
yarn
```

## サーバー起動(ポート3000番)

```
node .
```

## ポートを指定した起動

```
ZCJS_PORT=3001 node .
```

## インターフェイス

```
curl -s localhost:3000/?z=100-0011 | jq -r .prefecture_name # 東京都
curl -s localhost:3000/?z=100-0011 | jq -r .city_name # 千代田区
curl -s localhost:3000/?z=100-0011 | jq -r .town_name # 内幸町
curl -s localhost:3000/?z=1000011 # ハイフンなし
curl -s localhost:3000/path/to/api?z=100-0011 # パスは無視される
```
