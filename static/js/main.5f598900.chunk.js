(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{102:function(e,t,n){},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(138),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a02890c1-7f85-4705-9a7d-cd656428919f"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t,n,r){return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={captcha:function(){return a.get("security/get-captcha-url")}}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(28),a=n(3),s="ADD-MESSAGE",c={dialogs:[{id:1,name:"Vitalya",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:2,name:"Vitya",avaUrl:"https://sun1-18.userapi.com/impg/Q0EYZ5ioRUY_dqim4PlwR1WrsjdgU76SIjUZZw/h2Thm-Pj-ac.jpg?size=50x0&quality=96&crop=1,271,1616,1616&sign=f0d66ba6963daa0429927bb440f501e0&ava=1"},{id:3,name:"Artem",avaUrl:"https://sun1-83.userapi.com/impf/c841023/v841023761/1d95c/jblyV5wP3EM.jpg?size=50x0&quality=96&crop=183,304,522,522&sign=e4128216c90b1cf25b88a8455dd49e5b&ava=1"},{id:4,name:"Den",avaUrl:"https://steamuserimages-a.akamaihd.net/ugc/179412883250505688/55C716B686C3D74A20BBCB73D83EF8C21F1EBBC9/"}],messages:[{id:1,message:"Hi",name:"",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",fromOwner:!1},{id:2,message:"How is your web-site?",name:"",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",fromOwner:!1},{id:3,message:"Yo",name:"",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",fromOwner:!1},{id:4,message:"Yo",name:"",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",fromOwner:!1}]},i=function(e,t,n){return{type:s,newMessage:e,name:t,avaUrl:n}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.messages[e.messages.length-1].id+1,message:t.newMessage,name:t.name,avaUrl:t.avaUrl,fromOwner:!0};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},17:function(e,t,n){e.exports={item:"Navbar_item__1xtpt",activeLink:"Navbar_activeLink__3L79J",nav:"Navbar_nav__3jbz_",friends:"Navbar_friends__1ymh1"}},172:function(e,t,n){},18:function(e,t,n){e.exports={header:"Header_header__2zTxm",wrapper:"Header_wrapper__1AW7O",imgWrapper:"Header_imgWrapper__3oLQ8",loginWrapper:"Header_loginWrapper__1WqKL",me:"Header_me__ImTh7",login:"Header_login__2MWsQ",userPhoto:"Header_userPhoto__3FRvS",name:"Header_name__22-C6",menu:"Header_menu__1dfqj",menuWrapper:"Header_menuWrapper__1tj9i",logout:"Header_logout__3BErz"}},27:function(e,t,n){e.exports={wrapper:"Users_wrapper__2KoMM",usersWrapper:"Users_usersWrapper__1l9FX",ava:"Users_ava__ZvQ11",avaBtnWrapper:"Users_avaBtnWrapper__18igj",btnWrapper:"Users_btnWrapper__Fk13i",fbtn:"Users_fbtn__3S5yO",info:"Users_info__wZGp4"}},293:function(e,t,n){"use strict";n.r(t);var r=n(0),a=(n(102),n(1)),s=n.n(a),c=n(71),i=n.n(c),o=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,303)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},u=n(31),l=n(32),p=n(34),d=n(33),j=(n(172),n(17)),f=n.n(j),b=n(13),h=n(16),m=n(97),O=n.n(m),g=n(77),v=n.n(g),x=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(b.b,{to:"/profile/".concat(e.id),className:v.a.wrapper,children:[Object(r.jsx)("img",{className:v.a.img,src:e.avaUrl,alt:"$"}),Object(r.jsx)("div",{className:v.a.name,children:e.name})]})})},w=function(e){var t=e.friends.map((function(e){return Object(r.jsx)(x,{name:e.name,avaUrl:e.avaUrl,id:e.id},e.id)}));return Object(r.jsxs)("div",{className:O.a.friends,children:[Object(r.jsx)("h4",{className:O.a.title,children:"Friends"}),t]})},_=Object(h.b)((function(e){return{friends:e.sidebar.friends}}))(w),P=function(){return Object(r.jsxs)("nav",{className:f.a.nav,children:[Object(r.jsx)("div",{className:"".concat(f.a.item," "),children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:f.a.activeLink,children:" Profile"})}),Object(r.jsx)("div",{className:"".concat(f.a.item),children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:" Messages"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/news",activeClassName:f.a.activeLink,children:" News"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/music",activeClassName:f.a.activeLink,children:" Music"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/settings",activeClassName:f.a.activeLink,children:" Settings"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/users",activeClassName:f.a.activeLink,children:" Find users"})}),Object(r.jsx)("div",{className:f.a.friends,children:Object(r.jsx)(_,{})})]})},y=n(11),C=function(e){return Object(r.jsx)("div",{children:"Settings"})},k=function(e){return Object(r.jsx)("div",{children:"Music"})},N=function(e){return Object(r.jsx)("div",{children:"News"})},S=n(8),U=n.n(S),E=n(14),A=n(28),I=n(3),T=n(12),F=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(I.a)(Object(I.a)({},e),r):e}))},L="FOLLOW",W="UNFOLLOW",M="SET-USERS",z="SET-CURRENT-PAGE",B="SET-TOTAL-USERS-COUNT",H="TOGGLE-IS-FETCHING",R="TOGGLE-IS-FOLLOWING-PROGRESS",D={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},G=function(e){return{type:L,userId:e}},V=function(e){return{type:W,userId:e}},q=function(e){return{type:z,currentPage:e}},Z=function(e){return{type:H,isFetching:e}},X=function(e,t){return{type:R,isFetching:e,userId:t}},Y=function(){var e=Object(E.a)(U.a.mark((function e(t,n,r,a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(X(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(X(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(I.a)(Object(I.a)({},e),{},{users:F(e.users,t.userId,"id",{followed:!0})});case W:return Object(I.a)(Object(I.a)({},e),{},{users:F(e.users,t.userId,"id",{followed:!1})});case M:return Object(I.a)(Object(I.a)({},e),{},{users:Object(A.a)(t.users)});case z:return Object(I.a)(Object(I.a)({},e),{},{currentPage:t.currentPage});case B:return Object(I.a)(Object(I.a)({},e),{},{totalUsersCount:t.count});case H:return Object(I.a)(Object(I.a)({},e),{},{isFetching:t.isFetching});case R:return Object(I.a)(Object(I.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},Q=n(27),J=n.n(Q),$=n(60),ee=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow,c=e.isAuth;return Object(r.jsxs)("div",{className:J.a.usersWrapper,children:[Object(r.jsxs)("div",{className:J.a.avaBtnWrapper,children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:$.a,className:J.a.ava,alt:""})})}),Object(r.jsx)("div",{className:J.a.btnWrapper,children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id}))||!c,className:J.a.fbtn,onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id}))||!c,className:J.a.fbtn,onClick:function(){s(t.id)},children:"Follow"})})]}),Object(r.jsxs)("div",{className:J.a.info,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},te=n(59),ne=n(41),re=n.n(ne),ae=function(e){for(var t=e.currentPage,n=e.onPageChanged,s=e.totalItemsCount,c=e.pageSize,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(s/c),l=[],p=1;p<=u;p++)l.push(p);var d=Math.ceil(u/o),j=Object(a.useState)(1),f=Object(te.a)(j,2),b=f[0],h=f[1],m=(b-1)*o+1,O=b*o;return Object(r.jsx)("div",{className:re.a.paginator,children:Object(r.jsxs)("div",{className:re.a.content,children:[b>1&&Object(r.jsx)("button",{className:re.a.pageBtn,onClick:function(){h(b-1)},children:"PREV"}),l.filter((function(e){return e>=m&&e<=O})).map((function(e){return Object(r.jsx)("button",{className:t===e?re.a.selectedPage:re.a.pageBtn,onClick:function(t){n(e)},children:e},e)})),d>b&&Object(r.jsx)("button",{className:re.a.pageBtn,onClick:function(){h(b+1)},children:"NEXT"})]})})},se=function(e){return Object(r.jsxs)("div",{className:J.a.wrapper,children:[Object(r.jsx)(ae,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(r.jsx)(ee,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow,isAuth:e.isAuth},t.id)}))]})},ce=n(53),ie=n(9),oe=n(139),ue=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),le=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},be=function(e){return e.auth.isAuth},he=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(ce.a,{}):null,Object(r.jsx)(se,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth})]})}}]),n}(s.a.Component),me=Object(ie.d)(Object(h.b)((function(e){return{users:ue(e),pageSize:le(e),totalUsersCount:pe(e),currentPage:de(e),isFetching:je(e),followingInProgress:fe(e),isAuth:be(e)}}),{follow:function(e){return function(){var t=Object(E.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,T.d.follow.bind(T.d),G);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,T.d.unfollow.bind(T.d),V);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:q,toggleFollowingProgress:X,requestUsers:function(e,t){return function(){var n=Object(E.a)(U.a.mark((function n(r){var a;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Z(!0)),r(q(e)),n.next=4,T.d.getUsers(e,t);case 4:a=n.sent,r(Z(!1)),r((c=a.items,{type:M,users:c})),r((s=a.totalCount,{type:B,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(he),Oe=n(18),ge=n.n(Oe),ve=function(e){var t=Object(a.useState)(!1),n=Object(te.a)(t,2),s=n[0],c=n[1];return Object(r.jsx)("header",{className:ge.a.header,children:Object(r.jsxs)("div",{className:ge.a.wrapper,children:[Object(r.jsx)("div",{className:ge.a.imgWrapper,children:Object(r.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/vk-18-898139.png",alt:""})}),Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("div",{children:e.isAuth?Object(r.jsxs)("div",{className:ge.a.loginWrapper,children:[Object(r.jsx)("div",{className:ge.a.me,children:Object(r.jsxs)("div",{onClick:function(){return c(!s)},className:ge.a.login,children:[Object(r.jsx)("div",{}),Object(r.jsx)("img",{className:ge.a.userPhoto,src:e.owner&&e.owner.photos.small?e.owner.photos.small:$.a,alt:""}),Object(r.jsxs)("span",{className:ge.a.name,children:[" ",e.login]})]})}),s&&Object(r.jsx)("div",{className:ge.a.menu,onClick:function(e){return"BUTTON"!==e.target.tagName&&c(!1)},children:Object(r.jsx)("div",{className:ge.a.menuWrapper,children:Object(r.jsx)("button",{className:ge.a.logout,onClick:e.deleteAuthLogin,children:"Log out"})})})]}):Object(r.jsxs)("div",{className:ge.a.me,children:[Object(r.jsx)("div",{}),Object(r.jsxs)(b.b,{to:"/login",className:ge.a.login,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("span",{className:ge.a.name,children:"login"})]})]})})]})})},xe=n(61),we=n(62),_e="social-network/auth/SET-USER-DATA",Pe="social-network/auth/SET-CAPTCHA",ye={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Ce=function(e,t,n,r){return{type:_e,payload:{userId:e,email:t,login:n,isAuth:r}}},ke=function(){return function(){var e=Object(E.a)(U.a.mark((function e(t){var n,r,a,s,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(Ce(a,c,s,!0)),t(Object(we.c)(a,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ne=function(){return function(){var e=Object(E.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.logout();case 2:0===e.sent.data.resultCode&&t(Ce(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){return function(){var e=Object(E.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.c.captcha();case 2:n=e.sent,t((r=n.data.url,{type:Pe,captchaUrl:r}));case 4:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}()},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(I.a)(Object(I.a)({},e),t.payload);case Pe:return Object(I.a)(Object(I.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},Ee=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(ve,Object(I.a)({},this.props))}}]),n}(s.a.Component),Ae=Object(ie.d)(Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,profile:e.profilePage.profile,owner:e.profilePage.owner}}),{deleteAuthLogin:Ne}))(Ee),Ie=n(37),Te=n(47),Fe=n.n(Te),Le=n(134),We=n(135),Me=n(73),ze=n(74),Be=Object(We.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=Object(Ie.a)(e,["handleSubmit","error"]);return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(Le.a,{type:"email",placeholder:"email",name:"email",component:Me.a,witherror:1,errorclass:Fe.a.errorMsg,validate:[ze.b]})}),Object(r.jsx)("div",{children:Object(r.jsx)(Le.a,{type:"password",placeholder:"Password",name:"password",component:Me.a,errorclass:Fe.a.errorMsg,witherror:1,validate:[ze.b]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Le.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),a.captchaUrl&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:a.captchaUrl,alt:"captcha"}),Object(r.jsx)(Le.a,{type:"text",placeholder:"Symbols from image",name:"captcha",component:Me.a,witherror:1,errorclass:Fe.a.errorMsg,validate:[ze.b]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Log in"})}),n&&Object(r.jsx)("div",{className:Fe.a.formSummaryError,children:n})]})})),He=function(e){return e.isAuth?Object(r.jsx)(y.a,{to:"/profile"}):Object(r.jsxs)("div",{className:Fe.a.wrapper,children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Be,{onSubmit:function(t){e.postAuthLogin(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})},Re=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(He,{isAuth:this.props.isAuth,postAuthLogin:this.props.postAuthLogin,getCaptcha:this.props.getCaptcha,captchaUrl:this.props.captchaUrl})}}]),n}(s.a.Component),De=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{postAuthLogin:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return function(){var a=Object(E.a)(U.a.mark((function a(s){var c,i;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?s(ke()):(10===c.data.resultCode&&s(Se()),i=c.data.messages.length>0?c.data.messages[0]:"Some error",s(Object(xe.b)("login",{_error:"".concat(i)})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},deleteAuthLogin:Ne,getCaptcha:Se})(Re),Ge="social-network/app/INITIALIZED-SUCCESS",Ve={initialized:!1},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ge:return Object(I.a)(Object(I.a)({},e),{},{initialized:!0});default:return e}},Ze=n(133),Xe={friends:[{avaUrl:"https://sun1-83.userapi.com/c841023/v841023761/1d95c/jblyV5wP3EM.jpg",name:"Temi",id:9},{avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",name:"Vitalya",id:2}]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe;return e},Ke=n(141),Qe=n(136),Je=Object(ie.c)({profilePage:we.b,dialogsPage:Ze.b,sidebar:Ye,usersPage:K,auth:Ue,form:Qe.a,app:qe}),$e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,et=Object(ie.e)(Je,$e(Object(ie.a)(Ke.a)));window.__store__=et;var tt=et,nt=s.a.lazy((function(){return n.e(4).then(n.bind(null,305))})),rt=s.a.lazy((function(){return Promise.all([n.e(5),n.e(3)]).then(n.bind(null,304))})),at=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){alert("Some error occured"),console.error(e)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(Ae,{}),Object(r.jsx)(P,{}),Object(r.jsx)(y.b,{exact:!0,path:"/",children:Object(r.jsx)(y.a,{to:"/profile"})}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(ce.a,{}),children:[Object(r.jsx)(y.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(rt,{})}}),Object(r.jsx)(y.b,{path:"/dialogs/:chatId?",render:function(){return Object(r.jsx)(nt,{})}})]}),Object(r.jsx)(y.b,{path:"/users",render:function(){return Object(r.jsx)(me,{})}}),Object(r.jsx)(y.b,{path:"/news",render:function(){return Object(r.jsx)(N,{})}}),Object(r.jsx)(y.b,{path:"/music",render:function(){return Object(r.jsx)(k,{})}}),Object(r.jsx)(y.b,{path:"/settings",render:function(){return Object(r.jsx)(C,{})}}),Object(r.jsx)(y.b,{path:"/login",render:function(){return Object(r.jsx)(De,{})}})]})]})}):Object(r.jsx)(ce.a,{})}}]),n}(s.a.Component),st=Object(ie.d)(y.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ke());Promise.all([t]).then((function(){e({type:Ge})}))}}}))(at),ct=function(){return Object(r.jsx)(b.a,{basename:"/social-network",children:Object(r.jsx)(h.a,{store:tt,children:Object(r.jsx)(st,{})})})};i.a.render(Object(r.jsx)(ct,{}),document.getElementById("root")),o()},41:function(e,t,n){e.exports={paginator:"Paginator_paginator__1y4RC",content:"Paginator_content__98OEB",pageBtn:"Paginator_pageBtn__3jSW_",selectedPage:"Paginator_selectedPage__3F-3U"}},47:function(e,t,n){e.exports={wrapper:"Login_wrapper__2-X8I",errorMsg:"Login_errorMsg__1Tija",formSummaryError:"Login_formSummaryError__1sa3-"}},53:function(e,t,n){"use strict";var r=n(0),a=(n(1),n.p+"static/media/loader.144318e6.svg");t.a=function(){return Object(r.jsx)("img",{src:a,alt:""})}},58:function(e,t,n){e.exports={post:"FormsControls_post__2r-Wk",borderError:"FormsControls_borderError__sTH7w",messageWrapper:"FormsControls_messageWrapper__Se5Rk",message:"FormsControls_message__hZbME",error:"FormsControls_error__3V8BP",button:"FormsControls_button__2_m03",sendImg:"FormsControls_sendImg__sBaEU"}},60:function(e,t,n){"use strict";t.a=n.p+"static/media/user.16dd2397.jpg"},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"g",(function(){return x})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return _})),n.d(t,"h",(function(){return P})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return C}));var r=n(8),a=n.n(r),s=n(14),c=n(28),i=n(3),o=n(12),u="ADD-POST",l="SET-USER-PROFILE",p="SET-OWNER",d="SET-STATUS",j="DELETE-POST",f="TOGGLE-LIKE",b="SAVE-PHOTO-SUCCESS",h={posts:[{id:1,message:"Hi, how are you?",likesCount:11,liked:!1},{id:2,message:"It's my first post",likesCount:44,liked:!1},{id:3,message:"It's my first post",likesCount:55,liked:!1}],profile:null,owner:null,status:""},m=function(e){return{type:u,newPostText:e}},O=function(e){return{type:l,profile:e}},g=function(e){return{type:p,profile:e}},v=function(e){return{type:d,status:e}},x=function(e,t){return{type:f,id:e,likeOrUnlike:t}},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.getProfile(e);case 2:s=n.sent,r(t?g(s.data):O(s.data));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(v(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(v(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.saveProfile(e);case 2:0===n.sent.data.resultCode&&r(w(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:e.posts[e.posts.length-1].id+1,message:t.newPostText,likesCount:0,liked:!1};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:Object(c.a)(e.posts.filter((function(e){return e.id!==t.id})))});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case p:return Object(i.a)(Object(i.a)({},e),{},{owner:t.profile});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case f:return Object(i.a)(Object(i.a)({},e),{},{posts:Object(c.a)(e.posts.map((function(e){return e.id===t.id&&(e.liked?e.likesCount--:e.likesCount++,e.liked=!e.liked),e})))});default:return e}}},73:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p}));var r=n(3),a=n(0),s=n(37),c=(n(1),n(58)),i=n.n(c),o=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=(e.child,e.errorclass),o=e.witherror,u=void 0===o?0:o,l=Object(s.a)(e,["input","meta","child","errorclass","witherror"]),p=n&&r;return Object(a.jsxs)("div",{className:i.a.messageWrapper,children:[Object(a.jsx)("div",{className:p&&u?i.a.borderError:"",children:l.children}),p&&1===u&&Object(a.jsx)("span",{className:c,children:r})]})},u=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({className:i.a.post,placeholder:e.placeholder},t),n))}))},l=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({className:i.a.message,placeholder:e.placeholder},t),n))}))},p=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({placeholder:e.placeholder},t),n))}))}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},77:function(e,t,n){e.exports={wrapper:"FriendItem_wrapper__3c6ka",img:"FriendItem_img__1PV44",name:"FriendItem_name__1kfMX"}},97:function(e,t,n){e.exports={friends:"Friends_friends__ggUVS",title:"Friends_title__2PAfh"}}},[[293,1,2]]]);
//# sourceMappingURL=main.5f598900.chunk.js.map