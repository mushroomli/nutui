import{c as t,T as e}from"./mobile.c6a9cc16.js";import{k as l,r as i,o as s,c,f as n,i as d}from"./vendor.96954379.js";import"./index.89b78ef3.js";const{createDemo:o}=t("cell");var u=o({setup:()=>({testClick:t=>{e.text("点击事件")},switchChecked:l(!0)})});const a={class:"demo"},r=n("h2",null,"基本用法",-1),h=n("h2",null,"直接使用插槽(slot)",-1),m=n("div",null,"自定义内容",-1),k=n("h2",null,"展示图标",-1),f=n("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);u.render=function(t,e,l,o,u,p){const C=i("nut-cell"),j=i("nut-cell-group"),w=i("nut-switch");return s(),c("div",a,[r,n(C,{title:"我是标题",desc:"描述文字"}),n(C,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),n(C,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),h,n(C,{title:"我是标题",desc:"描述文字"},{default:d((()=>[m])),_:1}),n(j,{title:"链接 | 分组用法"},{default:d((()=>[n(C,{title:"链接","is-link":""}),n(C,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),n(C,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),n(j,{title:"自定义右侧箭头区域"},{default:d((()=>[n(C,{title:"Switch"},{link:d((()=>[n(w,{modelValue:t.switchChecked,"onUpdate:modelValue":e[1]||(e[1]=e=>t.switchChecked=e)},null,8,["modelValue"])])),_:1})])),_:1}),k,n(C,{title:"姓名",icon:"my",desc:"张三",isLink:""}),f,n(C,{"desc-text-align":"left",desc:"张三"})])};export default u;
