/*! NutUI v1.2.8 Wed Jun 27 2018 20:09:26 GMT+0800 (CST) */
webpackJsonpnutui([22],{1003:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{demo1:'<nut-signature  \n@confirm="confirm"\n></nut-signature>',demo2:'<nut-signature  \n@confirm="confirm1" \n:lineWidth="5" \nstrokeStyle="#000000"\n></nut-signature>',demo3:"export default {\n    methods:{\n      confirm(canvas, data) {\n            console.log(data);\n        }\n    }\n}"}},methods:{confirm:function(t,n){console.log(n)},confirm1:function(t,n){console.log(n)}}}},1018:function(t,n,e){(t.exports=e(1)()).push([t.i,"\n.nut-signature .nut-signature-inner {\n  height: 200px;\n  width: 100%;\n  max-width: 400px;\n  margin-bottom: 10px;\n  border: 1px solid #eee;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.nut-signature .nut-signature-unsopport {\n  font-size: 12px;\n}\n",""])},1130:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"签名组件。",showQrCode:!0}}),t._v(" "),e("h5",[t._v("示例")]),t._v(" "),e("h6",[t._v("基本用法")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo1,imgUrl:"../asset/img/demo/signature1.png"}}),t._v(" "),e("nut-codebox",{attrs:{code:t.demo3}}),t._v(" "),e("h6",[t._v("修改签字颜色和画笔粗细")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo2,imgUrl:"../asset/img/demo/signature2.png"}}),t._v(" "),e("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),e("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("可选值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("lineWidth")]),t._v(" "),e("td",[t._v("画笔宽度")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("2")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("strokeStyle")]),t._v(" "),e("td",[t._v("画笔颜色")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("#000")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("type")]),t._v(" "),e("td",[t._v("转换为dataUrl格式")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("png")]),t._v(" "),e("td",[t._v("png/jpg")])]),t._v(" "),e("tr",[e("td",[t._v("unSupportTpl")]),t._v(" "),e("td",[t._v("浏览器不支持显示文案")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("对不起，当前浏览器不支持Canvas，无法使用本控件！")]),t._v(" "),e("td",[t._v("--")])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("回调参数")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("confirm")]),t._v(" "),e("td",[t._v("点击确认签字按钮时触发")]),t._v(" "),e("td",[t._v("canvas:canvas;data：based64")])])])])])}]}},1227:function(t,n,e){var r=e(1018);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(3)("3a1c8adc",r,!0,{})},900:function(t,n,e){var r=e(2)(e(1003),e(1130),function(t){e(1227)},null,null);t.exports=r.exports}});