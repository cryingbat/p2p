webpackJsonp([1],{CzBM:function(t,a,e){"use strict";function s(t){e("iE2Q")}function n(t){e("PYIq")}Object.defineProperty(a,"__esModule",{value:!0});var o=e("mvHQ"),i=e.n(o),d=(Array,Boolean,{props:{allOrder:{type:Array,default:[]},status:{type:Boolean}},data:function(){return{imgIcon:["static/buy.png","static/sell.png"],env:"static/u25.png",stateImg:["static/wp.png","static/bf.png","static/pp.png","static/js.png","static/dj.png"]}},methods:{showDetailInfo:function(t,a){this.$router.push("/home/page/zdinfo?id="+t+"&type="+a)},loadMore:function(){this.$emit("load",!0)}},computed:{}}),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"shift"},[t.allOrder.length<=0?e("div",{staticStyle:{"text-align":"center",color:"#ccc","margin-top":"20px"}},[t._v("数据为空")]):t._l(t.allOrder,function(a,s){return e("div",{key:s,staticClass:"box",class:{states1:"1"===a.status,states2:"2"===a.status,states3:"3"===a.status,states4:"100"===a.status,states5:"0"===a.status},on:{click:function(e){t.showDetailInfo(a.bill_id,a.type)}}},[e("div",[e("img",{directives:[{name:"show",rawName:"v-show",value:1===a.type,expression:"item.type=== 1"}],staticClass:"icon",attrs:{src:t.imgIcon[0],alt:""}}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:2===a.type,expression:"item.type=== 2"}],staticClass:"icon",attrs:{src:t.imgIcon[1],alt:""}}),t._v(" "),e("div",{staticClass:"top"},[e("div",{staticClass:"state"},["1"===a.status?e("img",{attrs:{src:t.stateImg[0],width:"32",height:"32",alt:""}}):"2"===a.status?e("img",{attrs:{src:t.stateImg[1],width:"32",height:"32",alt:""}}):"3"===a.status?e("img",{attrs:{src:t.stateImg[2],width:"32",height:"32",alt:""}}):"100"===a.status?e("img",{attrs:{src:t.stateImg[3],width:"32",height:"32",alt:""}}):e("img",{attrs:{src:t.stateImg[4],width:"32",height:"32",alt:""}})]),t._v(" "),e("div",{staticClass:"table"},[e("p",{staticClass:"item1"},[t._v("号码："+t._s(a.bill_id))]),t._v(" "),e("p",{staticClass:"item2"},[t._v("状态："+t._s(a.st))]),t._v(" "),e("p",{staticClass:"item3"},[t._v("交易金额: "+t._s(a.money)+"YNC")])])]),t._v(" "),e("div",{staticClass:"bottom"},[e("span",{staticClass:"time"},[t._v("创建日期："+t._s(a.date))]),t._v(" "),e("button",{staticClass:"more"},[t._v("阅读更多")])])]),t._v(" "),e("div",[t.status?e("div",{staticClass:"loadMore",on:{click:t.loadMore}},[t._v("加载更多...")]):e("div",{staticClass:"loadMore"},[t._v("没有更多啦！")])])])})],2)},c=[],l={render:r,staticRenderFns:c},p=l,u=e("VU/8"),v=s,h=u(d,p,!1,v,"data-v-674d9c03",null),f=h.exports,b=e("gyMJ"),g=e("Bfwr"),m=e("63CM"),x=(m.a,g.a,{directives:{TransferDom:m.a},data:function(){return{allOrder:[],nextOrder:[],page:"0",name:"加载中...",showLoad:!1,status:!0}},components:{vAccounts:f,Loading:g.a},mounted:function(){4===this.$route.params.id?this.checkLoanAll():this.all_init()},methods:{showLoading:function(){this.showLoad=!0},hideLoading:function(){this.showLoad=!1},all_init:function(){var t=this;this.showLoading();var a=i()({page:this.page});Object(b.b)(a).then(function(a){if(t.hideLoading(),a.succ>0)if(null!==a.data)for(var e=0;e<a.data.length;e++){var s={};switch(a.data[e].status){case"1":s.st="未匹配";break;case"2":s.st="部分匹配";break;case"3":s.st="匹配完成";break;case"100":s.st="结算完成";break;case"0":s.st="冻结"}s.bill_id=a.data[e].bill_id,s.date=a.data[e].date,s.status=a.data[e].status,s.type=a.data[e].type,s.money=a.data[e].money,t.allOrder.push(s)}else-1===Number(a.succ)||-2===Number(a.succ)?(alert("请重新登录！"),t.$router.push({name:"root"})):(t.name="加载失败,刷新重试！",t.allOrder=[])})},checkLoanAll:function(){var t=this;this.showLoading();var a=i()({page:this.page});Object(b.c)(a).then(function(a){if(t.hideLoading(),a.succ>0)for(var e=0;e<a.data.length;e++){var s={};switch(a.data[e].status){case"1":s.st="未匹配";break;case"2":s.st="部分匹配";break;case"3":s.st="匹配完成";break;case"100":s.st="结算完成";break;case"0":s.st="冻结"}s.bill_id=a.data[e].bill_id,s.date=a.data[e].date,s.type=a.data[e].type,s.status=a.data[e].status,s.money=a.data[e].money,t.allOrder.push(s)}else t.name="加载失败,刷新重试！",t.allOrder=[]})},load:function(t){var a=this;if(t){this.showLoading();var e=i()({page:++this.page});Object(b.b)(e).then(function(t){if(a.hideLoading(),t.succ>0){for(var e=0;e<t.data.length;e++){var s={};switch(t.data[e].status){case"1":s.st="未匹配";break;case"2":s.st="部分匹配";break;case"3":s.st="匹配完成";break;case"100":s.st="结算完成";break;case"0":s.st="冻结"}s.bill_id=t.data[e].bill_id,s.date=t.data[e].date,s.status=t.data[e].status,s.type=t.data[e].type,s.money=t.data[e].money,a.nextOrder.push(s)}a.allOrder.concat(a.nextOrder)}else-4===t.succ&&(a.nextOrder=[],a.status=!1)})}}}}),_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"accounts"},[e("v-accounts",{attrs:{allOrder:t.allOrder,status:t.status},on:{load:t.load}}),t._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("loading",{attrs:{text:t.name},model:{value:t.showLoad,callback:function(a){t.showLoad=a},expression:"showLoad"}})],1)],1)},w=[],y={render:_,staticRenderFns:w},k=y,C=e("VU/8"),O=n,L=C(x,k,!1,O,"data-v-4f06ee86",null);a.default=L.exports},PYIq:function(t,a,e){var s=e("yv1X");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("7cd9f35a",s,!0,{})},brYe:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.box[data-v-674d9c03] {\n  position: relative;\n  width: 350px;\n  height: 170px;\n  border-radius: 8px;\n  margin: 10px auto;\n}\n.box.states1[data-v-674d9c03] {\n  background: #51a4ac;\n}\n.box.states2[data-v-674d9c03] {\n  background: -webkit-gradient(linear, left top, left bottom, from(#51a4ac), to(#3571b0));\n  background: linear-gradient(#51a4ac 0%, #3571b0 100%);\n}\n.box.states3[data-v-674d9c03] {\n  background: #3571b0;\n}\n.box.states4[data-v-674d9c03] {\n  background: linear-gradient(150deg, #e4e4e4 0%, #e4e4e4 0%, #949494 100%, #949494 100%);\n}\n.box.states5[data-v-674d9c03] {\n  background: linear-gradient(150deg, #0c1414 0%, #d40000 0%, #001912 100%, #0a0a12 100%);\n}\n.box .loadMore[data-v-674d9c03] {\n  text-align: center;\n  font-size: 12px;\n  color: #ac9375;\n  margin-top: 20px;\n}\n.box div .icon[data-v-674d9c03] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.box .top[data-v-674d9c03] {\n  overflow: hidden;\n}\n.box .top .state[data-v-674d9c03],\n.box .top .env[data-v-674d9c03] {\n  text-align: center;\n  padding-top: 10px;\n  width: 13%;\n  height: 120px;\n  float: left;\n}\n.box .top .table[data-v-674d9c03] {\n  margin-top: 10px;\n  width: 73%;\n  height: 105px;\n  float: left;\n  border: 1px solid #fff;\n}\n.box .top .table .item1[data-v-674d9c03],\n.box .top .table .item2[data-v-674d9c03] {\n  color: #fff;\n  border-bottom: 1px solid #fff;\n}\n.box .top .table .item1[data-v-674d9c03] {\n  padding: 5px 0 5px 8px;\n}\n.box .top .table .item2[data-v-674d9c03] {\n  padding: 8px 0 8px 8px;\n  font-size: 10px;\n}\n.box .top .table .item3[data-v-674d9c03] {\n  color: #fff;\n  font-size: 14px;\n  padding: 3px 0 0 8px;\n  overflow: hidden;\n}\n.box .bottom[data-v-674d9c03] {\n  padding: 0 20px;\n  overflow: hidden;\n}\n.box .bottom .time[data-v-674d9c03] {\n  padding-top: 2px;\n  color: #fff;\n  float: left;\n  font-size: 12px;\n}\n.box .bottom .more[data-v-674d9c03] {\n  float: right;\n  border: 2px solid #797979;\n  outline: none;\n  background: #fff;\n  cursor: pointer;\n  color: #000;\n  padding: 3px 5px;\n  border-radius: 20px;\n}\n",""])},iE2Q:function(t,a,e){var s=e("brYe");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("5b496563",s,!0,{})},yv1X:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.accounts[data-v-4f06ee86] {\n  margin-bottom: 53px;\n}\n",""])}});