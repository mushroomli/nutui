import{c as t}from"./mobile.e1c1f4c1.js";import{m as i,r as a,o as e,e as c,j as b,k as o,g as l}from"./vendor.eeaf2406.js";import"./index.c586af8f.js";const{createDemo:f}=t("tabbar");var m=f({props:{},setup:()=>({active:i(2),tabSwitch:function(t,i){console.log(t,i)}})});const n={class:"demo full"},g=l("h2",null,"基础用法",-1),u=l("h2",null,"自定义图片",-1),d=l("h2",null,"自定义选中",-1),r=l("h2",null,"徽标提示",-1),s=l("h2",null,"自定义颜色",-1),h=l("h2",null,"三个icon的tabbar",-1),p=l("h2",null,"固定底部，可自由跳转",-1);m.render=function(t,i,l,f,m,j){const y=a("nut-tabbar-item"),v=a("nut-tabbar");return e(),c("div",n,[g,b(v,{onTabSwitch:t.tabSwitch},{default:o((()=>[b(y,{"tab-title":"首页",icon:"home"}),b(y,{"tab-title":"分类",icon:"category"}),b(y,{"tab-title":"发现",icon:"find"}),b(y,{"tab-title":"购物车",icon:"cart"}),b(y,{"tab-title":"我的",icon:"my"})])),_:1},8,["onTabSwitch"]),u,b(v,{onTabSwitch:t.tabSwitch},{default:o((()=>[b(y,{"tab-title":"首页",img:"http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg",activeImg:"http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg"}),b(y,{"tab-title":"分类",img:"http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg",activeImg:"http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg"}),b(y,{"tab-title":"发现",img:"http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg",activeImg:"http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg"}),b(y,{"tab-title":"购物车",img:"http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg",activeImg:"http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg"}),b(y,{"tab-title":"我的",img:"http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg",activeImg:"http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg"})])),_:1},8,["onTabSwitch"]),d,b(v,{visible:t.active,"onUpdate:visible":i[0]||(i[0]=i=>t.active=i),size:"18px"},{default:o((()=>[b(y,{"tab-title":"首页",icon:"home"}),b(y,{"tab-title":"分类",icon:"category"}),b(y,{"tab-title":"发现",icon:"find"}),b(y,{"tab-title":"购物车",icon:"cart"}),b(y,{"tab-title":"我的",icon:"my"})])),_:1},8,["visible"]),r,b(v,null,{default:o((()=>[b(y,{"tab-title":"首页",icon:"home",num:"11"}),b(y,{"tab-title":"分类",icon:"category"}),b(y,{"tab-title":"发现",icon:"find"}),b(y,{"tab-title":"购物车",icon:"cart",num:"110"}),b(y,{"tab-title":"我的",icon:"my"})])),_:1}),s,b(v,{"unactive-color":"#7d7e80","active-color":"#1989fa"},{default:o((()=>[b(y,{"tab-title":"首页",icon:"home"}),b(y,{"tab-title":"分类",icon:"category"}),b(y,{"tab-title":"发现",icon:"find"}),b(y,{"tab-title":"购物车",icon:"cart"}),b(y,{"tab-title":"我的",icon:"my"})])),_:1}),h,b(v,{"unactive-color":"#7d7e80","active-color":"#1989fa"},{default:o((()=>[b(y,{"tab-title":"首页",icon:"home"}),b(y,{"tab-title":"分类",icon:"category"}),b(y,{"tab-title":"发现",icon:"find"})])),_:1}),p,b(v,{bottom:!0},{default:o((()=>[b(y,{"tab-title":"首页",href:"",icon:"home"}),b(y,{"tab-title":"分类",icon:"category"}),b(y,{"tab-title":"发现",icon:"find"}),b(y,{"tab-title":"购物车",href:"https://m.jd.com",icon:"cart"}),b(y,{"tab-title":"我的",href:"######",icon:"my"})])),_:1})])};export{m as default};
