(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{102:function(e,t,r){},12:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return o}));var n=r(138),a=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a02890c1-7f85-4705-9a7d-cd656428919f"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t,r,n){return a.post("auth/login",{email:e,password:t,rememberMe:r,captcha:n})},logout:function(){return a.delete("auth/login")}},o={captcha:function(){return a.get("security/get-captcha-url")}}},133:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(27),a=r(3),s="ADD-MESSAGE",c={dialogs:[{id:1,name:"Vitalya",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:2,name:"Vitya",avaUrl:"https://sun1-18.userapi.com/impg/Q0EYZ5ioRUY_dqim4PlwR1WrsjdgU76SIjUZZw/h2Thm-Pj-ac.jpg?size=50x0&quality=96&crop=1,271,1616,1616&sign=f0d66ba6963daa0429927bb440f501e0&ava=1"},{id:3,name:"Artem",avaUrl:"https://sun1-83.userapi.com/impf/c841023/v841023761/1d95c/jblyV5wP3EM.jpg?size=50x0&quality=96&crop=183,304,522,522&sign=e4128216c90b1cf25b88a8455dd49e5b&ava=1"},{id:4,name:"Den",avaUrl:"https://steamuserimages-a.akamaihd.net/ugc/179412883250505688/55C716B686C3D74A20BBCB73D83EF8C21F1EBBC9/"}],messages:[{id:1,message:"Hi",name:"",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",fromOwner:!1},{id:2,message:"How is your web-site?",name:"",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",fromOwner:!1},{id:3,message:"Yo",name:"",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",fromOwner:!1},{id:4,message:"Yo",name:"",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",fromOwner:!1}]},i=function(e,t,r){return{type:s,newMessage:e,name:t,avaUrl:r}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var r={id:e.messages[e.messages.length-1].id+1,message:t.newMessage,name:t.name,avaUrl:t.avaUrl,fromOwner:!0};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(n.a)(e.messages),[r])});default:return e}}},16:function(e,t,r){e.exports={header:"Header_header__2zTxm",wrapper:"Header_wrapper__1AW7O",imgWrapper:"Header_imgWrapper__3oLQ8",loginWrapper:"Header_loginWrapper__1WqKL",me:"Header_me__ImTh7",login:"Header_login__2MWsQ",userPhoto:"Header_userPhoto__3FRvS",name:"Header_name__22-C6",menu:"Header_menu__1dfqj",menuWrapper:"Header_menuWrapper__1tj9i",logout:"Header_logout__3BErz"}},172:function(e,t,r){},26:function(e,t,r){e.exports={wrapper:"Users_wrapper__2KoMM",usersWrapper:"Users_usersWrapper__1l9FX",ava:"Users_ava__ZvQ11",avaBtnWrapper:"Users_avaBtnWrapper__18igj",btnWrapper:"Users_btnWrapper__Fk13i",fbtn:"Users_fbtn__3S5yO",info:"Users_info__wZGp4"}},28:function(e,t,r){e.exports={item:"Navbar_item__1xtpt",activeLink:"Navbar_activeLink__3L79J",nav:"Navbar_nav__3jbz_",friends:"Navbar_friends__1ymh1"}},293:function(e,t,r){"use strict";r.r(t);var n=r(0),a=(r(102),r(1)),s=r.n(a),c=r(71),i=r.n(c),o=function(e){e&&e instanceof Function&&r.e(6).then(r.bind(null,303)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),s(e),c(e)}))},u=r(39),l=r(40),p=r(42),d=r(41),j=(r(172),r(28)),f=r.n(j),b=r(19),h=r(15),m=r(97),O=r.n(m),g=r(77),v=r.n(g),x=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(b.b,{to:"/profile/".concat(e.id),className:v.a.wrapper,children:[Object(n.jsx)("img",{className:v.a.img,src:e.avaUrl,alt:"$"}),Object(n.jsx)("div",{className:v.a.name,children:e.name})]})})},_=function(e){var t=e.friends.map((function(e){return Object(n.jsx)(x,{name:e.name,avaUrl:e.avaUrl,id:e.id},e.id)}));return Object(n.jsxs)("div",{className:O.a.friends,children:[Object(n.jsx)("h4",{className:O.a.title,children:"Friends"}),t]})},w=Object(h.b)((function(e){return{friends:e.sidebar.friends}}))(_),P=function(){return Object(n.jsxs)("nav",{className:f.a.nav,children:[Object(n.jsx)("div",{className:"".concat(f.a.item," "),children:Object(n.jsx)(b.b,{to:"/profile",activeClassName:f.a.activeLink,children:" Profile"})}),Object(n.jsx)("div",{className:"".concat(f.a.item),children:Object(n.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:" Messages"})}),Object(n.jsx)("div",{className:f.a.item,children:Object(n.jsx)(b.b,{to:"/users",activeClassName:f.a.activeLink,children:" Find users"})}),Object(n.jsx)("div",{className:f.a.friends,children:Object(n.jsx)(w,{})})]})},y=r(11),C=function(e){return Object(n.jsx)("div",{children:"Settings"})},S=function(e){return Object(n.jsx)("div",{children:"Music"})},k=function(e){return Object(n.jsx)("div",{children:"News"})},U=r(8),N=r.n(U),E=r(13),A=r(27),I=r(3),T=r(12),F=function(e,t,r,n){return e.map((function(e){return e[r]===t?Object(I.a)(Object(I.a)({},e),n):e}))},L="FOLLOW",W="UNFOLLOW",M="SET-USERS",z="SET-CURRENT-PAGE",B="SET-TOTAL-USERS-COUNT",R="TOGGLE-IS-FETCHING",H="TOGGLE-IS-FOLLOWING-PROGRESS",D={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},G=function(e){return{type:L,userId:e}},V=function(e){return{type:W,userId:e}},q=function(e){return{type:z,currentPage:e}},Z=function(e){return{type:R,isFetching:e}},X=function(e,t){return{type:H,isFetching:e,userId:t}},Y=function(){var e=Object(E.a)(N.a.mark((function e(t,r,n,a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(X(!0,r)),e.next=3,n(r);case 3:0===e.sent.resultCode&&t(a(r)),t(X(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,r,n,a){return e.apply(this,arguments)}}(),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(I.a)(Object(I.a)({},e),{},{users:F(e.users,t.userId,"id",{followed:!0})});case W:return Object(I.a)(Object(I.a)({},e),{},{users:F(e.users,t.userId,"id",{followed:!1})});case M:return Object(I.a)(Object(I.a)({},e),{},{users:Object(A.a)(t.users)});case z:return Object(I.a)(Object(I.a)({},e),{},{currentPage:t.currentPage});case B:return Object(I.a)(Object(I.a)({},e),{},{totalUsersCount:t.count});case R:return Object(I.a)(Object(I.a)({},e),{},{isFetching:t.isFetching});case H:return Object(I.a)(Object(I.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},Q=r(26),J=r.n(Q),$=r(60),ee=function(e){var t=e.user,r=e.followingInProgress,a=e.unfollow,s=e.follow,c=e.isAuth;return Object(n.jsxs)("div",{className:J.a.usersWrapper,children:[Object(n.jsxs)("div",{className:J.a.avaBtnWrapper,children:[Object(n.jsx)("div",{children:Object(n.jsx)(b.b,{to:"/profile/"+t.id,children:Object(n.jsx)("img",{src:null!=t.photos.small?t.photos.small:$.a,className:J.a.ava,alt:""})})}),Object(n.jsx)("div",{className:J.a.btnWrapper,children:t.followed?Object(n.jsx)("button",{disabled:r.some((function(e){return e===t.id}))||!c,className:J.a.fbtn,onClick:function(){a(t.id)},children:"Unfollow"}):Object(n.jsx)("button",{disabled:r.some((function(e){return e===t.id}))||!c,className:J.a.fbtn,onClick:function(){s(t.id)},children:"Follow"})})]}),Object(n.jsxs)("div",{className:J.a.info,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:t.name}),Object(n.jsx)("div",{children:t.status})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:"user.location.country"}),Object(n.jsx)("div",{children:"user.location.city"})]})]})]})},te=r(59),re=r(37),ne=r.n(re),ae=function(e){for(var t=e.currentPage,r=e.onPageChanged,s=e.totalItemsCount,c=e.pageSize,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(s/c),l=[],p=1;p<=u;p++)l.push(p);var d=Math.ceil(u/o),j=Object(a.useState)(1),f=Object(te.a)(j,2),b=f[0],h=f[1],m=(b-1)*o+1,O=b*o;return Object(n.jsx)("div",{className:ne.a.paginator,children:Object(n.jsxs)("div",{className:ne.a.content,children:[b>1&&Object(n.jsx)("button",{className:ne.a.pageBtn,onClick:function(){h(b-1)},children:"PREV"}),l.filter((function(e){return e>=m&&e<=O})).map((function(e){return Object(n.jsx)("button",{className:t===e?ne.a.selectedPage:ne.a.pageBtn,onClick:function(t){r(e)},children:e},e)})),d>b&&Object(n.jsx)("button",{className:ne.a.pageBtn,onClick:function(){h(b+1)},children:"NEXT"})]})})},se=function(e){return Object(n.jsxs)("div",{className:J.a.wrapper,children:[Object(n.jsx)(ae,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(n.jsx)(ee,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow,isAuth:e.isAuth},t.id)}))]})},ce=r(53),ie=r(9),oe=r(139),ue=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),le=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},be=function(e){return e.auth.isAuth},he=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,r=e.pageSize;this.props.requestUsers(t,r)}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[this.props.isFetching?Object(n.jsx)(ce.a,{}):null,Object(n.jsx)(se,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth})]})}}]),r}(s.a.Component),me=Object(ie.d)(Object(h.b)((function(e){return{users:ue(e),pageSize:le(e),totalUsersCount:pe(e),currentPage:de(e),isFetching:je(e),followingInProgress:fe(e),isAuth:be(e)}}),{follow:function(e){return function(){var t=Object(E.a)(N.a.mark((function t(r){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(r,e,T.d.follow.bind(T.d),G);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(N.a.mark((function t(r){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(r,e,T.d.unfollow.bind(T.d),V);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:q,toggleFollowingProgress:X,requestUsers:function(e,t){return function(){var r=Object(E.a)(N.a.mark((function r(n){var a;return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(Z(!0)),n(q(e)),r.next=4,T.d.getUsers(e,t);case 4:a=r.sent,n(Z(!1)),n((c=a.items,{type:M,users:c})),n((s=a.totalCount,{type:B,count:s}));case 8:case"end":return r.stop()}var s,c}),r)})));return function(e){return r.apply(this,arguments)}}()}}))(he),Oe=r(16),ge=r.n(Oe),ve=function(e){var t=Object(a.useState)(!1),r=Object(te.a)(t,2),s=r[0],c=r[1];return Object(n.jsx)("header",{className:ge.a.header,children:Object(n.jsxs)("div",{className:ge.a.wrapper,children:[Object(n.jsx)("div",{className:ge.a.imgWrapper,children:Object(n.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/vk-18-898139.png",alt:""})}),Object(n.jsx)(n.Fragment,{}),Object(n.jsx)("div",{children:e.isAuth?Object(n.jsxs)("div",{className:ge.a.loginWrapper,children:[Object(n.jsx)("div",{className:ge.a.me,children:Object(n.jsxs)("div",{onClick:function(){return c(!s)},className:ge.a.login,children:[Object(n.jsx)("div",{}),Object(n.jsx)("img",{className:ge.a.userPhoto,src:e.owner&&e.owner.photos.small?e.owner.photos.small:$.a,alt:""}),Object(n.jsxs)("span",{className:ge.a.name,children:[" ",e.login]})]})}),s&&Object(n.jsx)("div",{className:ge.a.menu,onClick:function(e){return"BUTTON"!==e.target.tagName&&c(!1)},children:Object(n.jsx)("div",{className:ge.a.menuWrapper,children:Object(n.jsx)("button",{className:ge.a.logout,onClick:e.deleteAuthLogin,children:"Log out"})})})]}):Object(n.jsxs)("div",{className:ge.a.me,children:[Object(n.jsx)("div",{}),Object(n.jsxs)(b.b,{to:"/login",className:ge.a.login,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("span",{className:ge.a.name,children:"login"})]})]})})]})})},xe=r(61),_e=r(62),we="social-network/auth/SET-USER-DATA",Pe="social-network/auth/SET-CAPTCHA",ye={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Ce=function(e,t,r,n){return{type:we,payload:{userId:e,email:t,login:r,isAuth:n}}},Se=function(){return function(){var e=Object(E.a)(N.a.mark((function e(t){var r,n,a,s,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.me();case 2:0===(r=e.sent).data.resultCode&&(n=r.data.data,a=n.id,s=n.login,c=n.email,t(Ce(a,c,s,!0)),t(Object(_e.c)(a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ke=function(){return function(){var e=Object(E.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.logout();case 2:0===e.sent.data.resultCode&&t(Ce(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ue=function(){return function(){var e=Object(E.a)(N.a.mark((function e(t){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.c.captcha();case 2:r=e.sent,t((n=r.data.url,{type:Pe,captchaUrl:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(I.a)(Object(I.a)({},e),t.payload);case Pe:return Object(I.a)(Object(I.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},Ee=Object(ie.d)(Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,profile:e.profilePage.profile,owner:e.profilePage.owner}}),{deleteAuthLogin:ke}))((function(e){return Object(n.jsx)(ve,Object(I.a)({},e))})),Ae=r(33),Ie=r(47),Te=r.n(Ie),Fe=r(134),Le=r(135),We=r(73),Me=r(74),ze=Object(Le.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error,a=Object(Ae.a)(e,["handleSubmit","error"]);return Object(n.jsxs)("form",{onSubmit:t,children:[Object(n.jsx)("div",{children:Object(n.jsx)(Fe.a,{type:"email",placeholder:"email",name:"email",component:We.a,witherror:1,errorclass:Te.a.errorMsg,validate:[Me.b]})}),Object(n.jsx)("div",{children:Object(n.jsx)(Fe.a,{type:"password",placeholder:"Password",name:"password",component:We.a,errorclass:Te.a.errorMsg,witherror:1,validate:[Me.b]})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(Fe.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),a.captchaUrl&&Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:a.captchaUrl,alt:"captcha"}),Object(n.jsx)(Fe.a,{type:"text",placeholder:"Symbols from image",name:"captcha",component:We.a,witherror:1,errorclass:Te.a.errorMsg,validate:[Me.b]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"submit",children:"Log in"})}),r&&Object(n.jsx)("div",{className:Te.a.formSummaryError,children:r})]})})),Be=function(e){return e.isAuth?Object(n.jsx)(y.a,{to:"/profile"}):Object(n.jsxs)("div",{className:Te.a.wrapper,children:[Object(n.jsx)("h1",{children:"Login"}),Object(n.jsx)(ze,{onSubmit:function(t){e.postAuthLogin(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})},Re=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(n.jsx)(Be,{isAuth:this.props.isAuth,postAuthLogin:this.props.postAuthLogin,getCaptcha:this.props.getCaptcha,captchaUrl:this.props.captchaUrl})}}]),r}(s.a.Component),He=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{postAuthLogin:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return function(){var a=Object(E.a)(N.a.mark((function a(s){var c,i;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.a.login(e,t,r,n);case 2:0===(c=a.sent).data.resultCode?s(Se()):(10===c.data.resultCode&&s(Ue()),i=c.data.messages.length>0?c.data.messages[0]:"Some error",s(Object(xe.b)("login",{_error:"".concat(i)})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},deleteAuthLogin:ke,getCaptcha:Ue})(Re),De="social-network/app/INITIALIZED-SUCCESS",Ge={initialized:!1},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return Object(I.a)(Object(I.a)({},e),{},{initialized:!0});default:return e}},qe=r(133),Ze={friends:[{avaUrl:"https://sun1-83.userapi.com/c841023/v841023761/1d95c/jblyV5wP3EM.jpg",name:"Temi",id:9},{avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",name:"Vitalya",id:2}]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;return e},Ye=r(141),Ke=r(136),Qe=Object(ie.c)({profilePage:_e.b,dialogsPage:qe.b,sidebar:Xe,usersPage:K,auth:Ne,form:Ke.a,app:Ve}),Je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,$e=Object(ie.e)(Qe,Je(Object(ie.a)(Ye.a)));window.__store__=$e;var et=$e,tt=s.a.lazy((function(){return r.e(4).then(r.bind(null,305))})),rt=s.a.lazy((function(){return Promise.all([r.e(5),r.e(3)]).then(r.bind(null,304))})),nt=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error occured"),console.error(e)},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(Ee,{}),Object(n.jsx)(P,{}),Object(n.jsx)(y.b,{exact:!0,path:"/",children:Object(n.jsx)(y.a,{to:"/profile"})}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsxs)(a.Suspense,{fallback:Object(n.jsx)(ce.a,{}),children:[Object(n.jsx)(y.b,{path:"/profile/:userId?",render:function(){return Object(n.jsx)(rt,{})}}),Object(n.jsx)(y.b,{path:"/dialogs/:chatId?",render:function(){return Object(n.jsx)(tt,{})}})]}),Object(n.jsx)(y.b,{path:"/users",render:function(){return Object(n.jsx)(me,{})}}),Object(n.jsx)(y.b,{path:"/news",render:function(){return Object(n.jsx)(k,{})}}),Object(n.jsx)(y.b,{path:"/music",render:function(){return Object(n.jsx)(S,{})}}),Object(n.jsx)(y.b,{path:"/settings",render:function(){return Object(n.jsx)(C,{})}}),Object(n.jsx)(y.b,{path:"/login",render:function(){return Object(n.jsx)(He,{})}})]})]})}):Object(n.jsx)(ce.a,{})}}]),r}(s.a.Component),at=Object(ie.d)(y.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Se());Promise.all([t]).then((function(){e({type:De})}))}}}))(nt),st=function(){return Object(n.jsx)(b.a,{basename:"/social-network",children:Object(n.jsx)(h.a,{store:et,children:Object(n.jsx)(at,{})})})};i.a.render(Object(n.jsx)(st,{}),document.getElementById("root")),o()},37:function(e,t,r){e.exports={paginator:"Paginator_paginator__1y4RC",content:"Paginator_content__98OEB",pageBtn:"Paginator_pageBtn__3jSW_",selectedPage:"Paginator_selectedPage__3F-3U"}},47:function(e,t,r){e.exports={wrapper:"Login_wrapper__2-X8I",errorMsg:"Login_errorMsg__1Tija",formSummaryError:"Login_formSummaryError__1sa3-"}},53:function(e,t,r){"use strict";var n=r(0),a=(r(1),r.p+"static/media/loader.144318e6.svg");t.a=function(){return Object(n.jsx)("img",{src:a,alt:""})}},58:function(e,t,r){e.exports={post:"FormsControls_post__2r-Wk",borderError:"FormsControls_borderError__sTH7w",messageWrapper:"FormsControls_messageWrapper__Se5Rk",message:"FormsControls_message__hZbME",error:"FormsControls_error__3V8BP",button:"FormsControls_button__2_m03",sendImg:"FormsControls_sendImg__sBaEU"}},60:function(e,t,r){"use strict";t.a=r.p+"static/media/user.16dd2397.jpg"},62:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"g",(function(){return _})),r.d(t,"c",(function(){return w})),r.d(t,"d",(function(){return P})),r.d(t,"h",(function(){return y})),r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return S}));var n=r(8),a=r.n(n),s=r(13),c=r(27),i=r(3),o=r(12),u="ADD-POST",l="SET-USER-PROFILE",p="SET-OWNER",d="SET-STATUS",j="DELETE-POST",f="TOGGLE-LIKE",b="SET-ABOUT-ME-ERROR",h="SAVE-PHOTO-SUCCESS",m={posts:[{id:1,message:"Hi, how are you?",likesCount:11,liked:!1},{id:2,message:"It's my first post",likesCount:44,liked:!1},{id:3,message:"It's my first post",likesCount:55,liked:!1}],profile:null,owner:null,status:"",aboutMeError:""},O=function(e){return{type:u,newPostText:e}},g=function(e){return{type:l,profile:e}},v=function(e){return{type:p,profile:e}},x=function(e){return{type:d,status:e}},_=function(e,t){return{type:f,id:e,likeOrUnlike:t}},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var r=Object(s.a)(a.a.mark((function r(n){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.b.getProfile(e);case 2:s=r.sent,n(t?v(s.data):g(s.data));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:n=t.sent,r(x(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&r(x(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&r((a=n.data.data.photos,{type:h,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.b.saveProfile(e);case 2:if(0===(s=r.sent).data.resultCode&&n(w(t)),1!==s.data.resultCode){r.next=6;break}return r.abrupt("return",s.data.messages[0]);case 6:return r.abrupt("return","");case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var r={id:e.posts[e.posts.length-1].id+1,message:t.newPostText,likesCount:0,liked:!1};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[r])});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:Object(c.a)(e.posts.filter((function(e){return e.id!==t.id})))});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case p:return Object(i.a)(Object(i.a)({},e),{},{owner:t.profile});case h:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:Object(c.a)(e.posts.map((function(e){return e.id===t.id&&(e.liked?e.likesCount--:e.likesCount++,e.liked=!e.liked),e})))});case b:return Object(i.a)(Object(i.a)({},e),{},{aboutMeError:t.error});default:return e}}},73:function(e,t,r){"use strict";r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return p}));var n=r(3),a=r(0),s=r(33),c=(r(1),r(58)),i=r.n(c),o=function(e){e.input;var t=e.meta,r=t.touched,n=t.error,c=(e.child,e.errorclass),o=e.witherror,u=void 0===o?0:o,l=Object(s.a)(e,["input","meta","child","errorclass","witherror"]),p=r&&n;return Object(a.jsxs)("div",{className:i.a.messageWrapper,children:[Object(a.jsx)("div",{className:p&&u?i.a.borderError:"",children:l.children}),p&&1===u&&Object(a.jsx)("span",{className:c,children:n})]})},u=function(e){var t=e.input,r=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(n.a)(Object(n.a)({},e),{},{children:Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({className:i.a.post,placeholder:e.placeholder},t),r))}))},l=function(e){var t=e.input,r=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(n.a)(Object(n.a)({},e),{},{children:Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({className:i.a.message,placeholder:e.placeholder},t),r))}))},p=function(e){var t=e.input,r=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(n.a)(Object(n.a)({},e),{},{children:Object(a.jsx)("input",Object(n.a)(Object(n.a)({placeholder:e.placeholder},t),r))}))}},74:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},77:function(e,t,r){e.exports={wrapper:"FriendItem_wrapper__3c6ka",img:"FriendItem_img__1PV44",name:"FriendItem_name__1kfMX"}},97:function(e,t,r){e.exports={friends:"Friends_friends__ggUVS",title:"Friends_title__2PAfh"}}},[[293,1,2]]]);
//# sourceMappingURL=main.56e504cc.chunk.js.map