(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0605":function(t,i,e){"use strict";e.r(i);var n=e("b528"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"32a5":function(t,i,e){"use strict";(function(t){e("5f2d"),e("921b");n(e("66fd"));var i=n(e("507f"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])},"507f":function(t,i,e){"use strict";e.r(i);var n=e("c521"),a=e("0605");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("8c7b");var u,s=e("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"42d056e0",null,!1,n["a"],u);i["default"]=o.exports},"8c7b":function(t,i,e){"use strict";var n=e("b192"),a=e.n(n);a.a},b192:function(t,i,e){},b528:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,i,e,n,a,r,u){try{var s=t[r](u),o=s.value}catch(l){return void e(l)}s.done?i(o):Promise.resolve(o).then(n,a)}function u(t){return function(){var i=this,e=arguments;return new Promise((function(n,a){var u=t.apply(i,e);function s(t){r(u,n,a,s,o,"next",t)}function o(t){r(u,n,a,s,o,"throw",t)}s(void 0)}))}}var s={data:function(){return{xiaoyouxingbieOptions:[],xiaoyouxingbieIndex:0,paotuiyuanxingbieOptions:[],paotuiyuanxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var i=u(n.default.mark((function i(){var e;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:[],e=t.getStorageSync("loginTable"),this.tableName=e,"xiaoyou"==this.tableName&&(this.xiaoyouxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.xiaoyouxingbieOptions[0]),"paotuiyuan"==this.tableName&&(this.paotuiyuanxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.paotuiyuanxingbieOptions[0]),this.styleChange();case 6:case"end":return i.stop()}}),i,this)})));function e(){return i.apply(this,arguments)}return e}(),methods:{xiaoyouxingbieChange:function(t){this.xiaoyouxingbieIndex=t.target.value,this.ruleForm.xingbie=this.xiaoyouxingbieOptions[this.xiaoyouxingbieIndex]},paotuiyuanxingbieChange:function(t){this.paotuiyuanxingbieIndex=t.target.value,this.ruleForm.xingbie=this.paotuiyuanxingbieOptions[this.paotuiyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=u(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.xiaoyouzhanghao||"xiaoyou"!=this.tableName){t.next=3;break}return this.$utils.msg("校友账号不能为空"),t.abrupt("return");case 3:if(this.ruleForm.mima||"xiaoyou"!=this.tableName){t.next=6;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(this.ruleForm.xiaoyouxingming||"xiaoyou"!=this.tableName){t.next=9;break}return this.$utils.msg("校友姓名不能为空"),t.abrupt("return");case 9:if(this.ruleForm.nianling||"xiaoyou"!=this.tableName){t.next=12;break}return this.$utils.msg("年龄不能为空"),t.abrupt("return");case 12:if("xiaoyou"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=15;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 15:if(this.ruleForm.lianxifangshi||"xiaoyou"!=this.tableName){t.next=18;break}return this.$utils.msg("联系方式不能为空"),t.abrupt("return");case 18:if("xiaoyou"!=this.tableName||!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){t.next=21;break}return this.$utils.msg("联系方式应输入手机格式"),t.abrupt("return");case 21:if(this.ruleForm.zhanghao||"paotuiyuan"!=this.tableName){t.next=24;break}return this.$utils.msg("账号不能为空"),t.abrupt("return");case 24:if(this.ruleForm.mima||"paotuiyuan"!=this.tableName){t.next=27;break}return this.$utils.msg("密码不能为空"),t.abrupt("return");case 27:if(this.ruleForm.xingming||"paotuiyuan"!=this.tableName){t.next=30;break}return this.$utils.msg("姓名不能为空"),t.abrupt("return");case 30:if(this.ruleForm.nianling||"paotuiyuan"!=this.tableName){t.next=33;break}return this.$utils.msg("年龄不能为空"),t.abrupt("return");case 33:if("paotuiyuan"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){t.next=36;break}return this.$utils.msg("年龄应输入整数"),t.abrupt("return");case 36:if(this.ruleForm.shouji||"paotuiyuan"!=this.tableName){t.next=39;break}return this.$utils.msg("手机不能为空"),t.abrupt("return");case 39:if("paotuiyuan"!=this.tableName||!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){t.next=42;break}return this.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 42:return t.next=44,this.$api.register("".concat(this.tableName),this.ruleForm);case 44:this.$utils.msgBack("注册成功");case 46:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()}};i.default=s}).call(this,e("543d")["default"])},c521:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement;t._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}))}},[["32a5","common/runtime","common/vendor"]]]);