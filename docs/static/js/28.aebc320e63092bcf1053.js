webpackJsonp([28],{G28I:function(t,n,a){var c=a("LQjT");"string"==typeof c&&(c=[[t.i,c,""]]),c.locals&&(t.exports=c.locals);a("rjj0")("d02d1028",c,!0,{})},LQjT:function(t,n,a){n=t.exports=a("FZ+f")(!1),n.push([t.i,"\n.gathering[data-v-3b88b5f5] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1005;\n  background: #f8f8f8;\n  width: 100%;\n}\n.gathering header.head[data-v-3b88b5f5] {\n  position: relative;\n  width: 1100;\n  height: 44px;\n  background: #ac9375;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  line-height: 44px;\n}\n.gathering header.head img[data-v-3b88b5f5] {\n  position: absolute;\n  left: 10px;\n  top: 12px;\n}\n.gathering .name[data-v-3b88b5f5] {\n  display: inline-block;\n  padding: 10px 0 0px 12px;\n  margin-top: 10px;\n}\n.gathering .account[data-v-3b88b5f5] {\n  width: 80%;\n  padding: 12px 12px;\n  margin: 0 auto;\n  border-bottom: 1px solid #ccc;\n}\n.gathering .account .item[data-v-3b88b5f5] {\n  color: #999;\n  float: right;\n  margin-top: -15px;\n  font-size: 14px;\n  /*margin-right: 40px;*/\n}\n",""])},mRw5:function(t,n,a){"use strict";function c(t){a("G28I")}Object.defineProperty(n,"__esModule",{value:!0});var i=a("gyMJ"),e={mounted:function(){var t=this;setTimeout(function(){t.check_acc()})},data:function(){return{acc:[],imgUrl:"static/u609.png"}},methods:{goBack:function(){this.$router.back(-1)},check_acc:function(){var t=this;Object(i.a)().then(function(n){n.succ>0?t.acc=n.data:-1===Number(n.succ)||-2===Number(n.succ)?(alert("请重新登录！"),t.$router.push({name:"root"})):t.acc=[]})}}},s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"gathering"},[a("header",{staticClass:"head"},[a("img",{staticStyle:{padding:"0 10px 5px 6px"},attrs:{src:t.imgUrl,width:"12",height:"24",alt:""},on:{click:t.goBack}}),t._v("收款账户")]),t._v(" "),a("span",{staticClass:"name"},[t._v("开户人")]),t._v(" "),a("div",{staticClass:"account"},[a("span",{staticClass:"item"},[t._v(t._s(t.acc.account_name||"加载中..."))])]),t._v(" "),a("span",{staticClass:"name"},[t._v("账户号码")]),t._v(" "),a("div",{staticClass:"account"},[a("span",{staticClass:"item"},[t._v(t._s(t.acc.account_val||"加载中..."))])]),t._v(" "),a("span",{staticClass:"name"},[t._v("账户类型")]),t._v(" "),a("div",{staticClass:"account"},[a("span",{staticClass:"item"},[t._v(t._s(t.acc.account_belong||"加载中..."))])])])},o=[],r={render:s,staticRenderFns:o},d=r,p=a("VU/8"),l=c,u=p(e,d,!1,l,"data-v-3b88b5f5",null);n.default=u.exports}});