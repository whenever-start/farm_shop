# farm_shop

## 接口

接口名 | URL | 说明
--- | --- | ---
`banner` | `/api/banner` | 首页 `banner`
`rcmd` | `/api/rcmd` | 首页 推荐
`detail` | `/api/detail` | 商品详情页
`cart` | `/api/cart` | 购物车页面
`pay` | `/api/pay` | 支付页面
`user` | `/api/user` | 我的页面, 用户信息
`order` | `/api/order` | 我的订单页面,订单信息

## 页面

- `HomeView`
- `ProductListView`
- `ProductDetailView`
- `CartView`
- `PayView`
- `MineView`
- `OrderListView`

## 路由

- `home:'/'`
- `product:'/product'`
- `detail:'/detail'`
- `cart:'/cart'`
- `pay:'/pay'`
- `mine:'/mine'`
- `order:'/order'`

## 全局组件

- 底部组件: `FooterCom`
- 商品列表子项组件: `ProductListItemCom`
- 图片: `Image`
- 计数器: `Counter`
