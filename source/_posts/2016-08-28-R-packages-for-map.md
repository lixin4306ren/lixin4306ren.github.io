---
title: R中地图相关的包
date: 2016-08-28 23:33:46
tags: [R,程序,地图]
category: 程序
top:
---
## leaflet
可生成交互式地图，利用openstreetmap数据，也支持多个第三方数据

## REmap
基于百度地图的交互式地图

```
mapNames('西藏') #得到某个地图下的子图信息
get_city_coord('北京') #获取一个城市的经纬度
get_geo_position(c('西安','昆明')) #获取一个城市向量的经纬度
city数据保存所有城市坐标
```

## ggmap
利用谷歌地图快速画静态地图  
做图方式类似于ggplot，可以添加多个图层
```
geocode("Beijing") #获得坐标
mapdist('China Agricultural University','Renmin University of China', 'walking') #获得两地间距离信息
map <- get_map(location = 'China', zoom = 4) #得到地图
ggmap(map)
```

## 
