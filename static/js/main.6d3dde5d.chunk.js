(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"f",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return _}));var r=n(9),a=n.n(r),s=n(14),c=n(28),i=n(3),o=n(16),u="ADD-POST",l="SET-USER-PROFILE",p="SET-STATUS",d="DELETE-POST",j="TOGGLE-LIKE",f="SAVE-PHOTO-SUCCESS",b={posts:[{id:1,message:"Hi, how are you?",likesCount:11,liked:!1},{id:2,message:"It's my first post",likesCount:44,liked:!1},{id:3,message:"It's my first post",likesCount:55,liked:!1}],profile:null,status:""},h=function(e){return{type:u,newPostText:e}},m=function(e){return{type:p,status:e}},O=function(e,t){return{type:j,id:e,likeOrUnlike:t}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:f,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:e.posts[e.posts.length-1].id+1,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case d:return Object(i.a)(Object(i.a)({},e),{},{posts:Object(c.a)(e.posts.filter((function(e){return e.id!==t.id})))});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case p:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:Object(c.a)(e.posts.map((function(e){return e.id===t.id&&(e.liked?e.likesCount--:e.likesCount++,e.liked=!e.liked),e})))});default:return e}}},102:function(e,t,n){},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(28),a=n(3),s="ADD-MESSAGE",c={dialogs:[{id:1,name:"Vitalya",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:2,name:"Vitya",avaUrl:"https://sun1-18.userapi.com/impg/Q0EYZ5ioRUY_dqim4PlwR1WrsjdgU76SIjUZZw/h2Thm-Pj-ac.jpg?size=50x0&quality=96&crop=1,271,1616,1616&sign=f0d66ba6963daa0429927bb440f501e0&ava=1"},{id:3,name:"Artem",avaUrl:"https://sun1-83.userapi.com/impf/c841023/v841023761/1d95c/jblyV5wP3EM.jpg?size=50x0&quality=96&crop=183,304,522,522&sign=e4128216c90b1cf25b88a8455dd49e5b&ava=1"},{id:4,name:"Den",avaUrl:"https://steamuserimages-a.akamaihd.net/ugc/179412883250505688/55C716B686C3D74A20BBCB73D83EF8C21F1EBBC9/"}],messages:[{id:1,message:"Hi",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:2,message:"How is your web-site?",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:3,message:"Yo",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:4,message:"Yo",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"}]},i=function(e){return{type:s,newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.messages[e.messages.length-1].id+1,message:t.newMessage,avaUrl:"https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg"};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(137),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a02890c1-7f85-4705-9a7d-cd656428919f"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}},i={me:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},17:function(e,t,n){e.exports={item:"Navbar_item__1xtpt",activeLink:"Navbar_activeLink__3L79J",nav:"Navbar_nav__3jbz_",friends:"Navbar_friends__1ymh1"}},171:function(e,t,n){},18:function(e,t,n){e.exports={header:"Header_header__2zTxm",wrapper:"Header_wrapper__1AW7O",imgWrapper:"Header_imgWrapper__3oLQ8",loginWrapper:"Header_loginWrapper__1WqKL",me:"Header_me__ImTh7",login:"Header_login__2MWsQ",userPhoto:"Header_userPhoto__3FRvS",name:"Header_name__22-C6",menu:"Header_menu__1dfqj",menuWrapper:"Header_menuWrapper__1tj9i",logout:"Header_logout__3BErz"}},27:function(e,t,n){e.exports={wrapper:"Users_wrapper__2KoMM",usersWrapper:"Users_usersWrapper__1l9FX",ava:"Users_ava__ZvQ11",avaBtnWrapper:"Users_avaBtnWrapper__18igj",btnWrapper:"Users_btnWrapper__Fk13i",fbtn:"Users_fbtn__3S5yO",info:"Users_info__wZGp4"}},292:function(e,t,n){"use strict";n.r(t);var r=n(0),a=(n(102),n(1)),s=n.n(a),c=n(69),i=n.n(c),o=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,301)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},u=n(31),l=n(32),p=n(34),d=n(33),j=(n(171),n(17)),f=n.n(j),b=n(12),h=n(15),m=n(96),O=n.n(m),g=n(74),v=n.n(g),x=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(b.b,{to:"/profile/".concat(e.id),className:v.a.wrapper,children:[Object(r.jsx)("img",{className:v.a.img,src:e.avaUrl,alt:"$"}),Object(r.jsx)("div",{className:v.a.name,children:e.name})]})})},_=function(e){var t=e.friends.map((function(e){return Object(r.jsx)(x,{name:e.name,avaUrl:e.avaUrl,id:e.id},e.id)}));return Object(r.jsxs)("div",{className:O.a.friends,children:[Object(r.jsx)("h4",{className:O.a.title,children:"Friends"}),t]})},w=Object(h.b)((function(e){return{friends:e.sidebar.friends}}))(_),P=function(){return Object(r.jsxs)("nav",{className:f.a.nav,children:[Object(r.jsx)("div",{className:"".concat(f.a.item," "),children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:f.a.activeLink,children:" Profile"})}),Object(r.jsx)("div",{className:"".concat(f.a.item),children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:f.a.activeLink,children:" Messages"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/news",activeClassName:f.a.activeLink,children:" News"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/music",activeClassName:f.a.activeLink,children:" Music"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/settings",activeClassName:f.a.activeLink,children:" Settings"})}),Object(r.jsx)("div",{className:f.a.item,children:Object(r.jsx)(b.b,{to:"/users",activeClassName:f.a.activeLink,children:" Find users"})}),Object(r.jsx)("div",{className:f.a.friends,children:Object(r.jsx)(w,{})})]})},N=n(11),C=function(e){return Object(r.jsx)("div",{children:"Settings"})},k=function(e){return Object(r.jsx)("div",{children:"Music"})},y=function(e){return Object(r.jsx)("div",{children:"News"})},S=n(9),U=n.n(S),E=n(14),A=n(28),I=n(3),F=n(16),T=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(I.a)(Object(I.a)({},e),r):e}))},L="FOLLOW",W="UNFOLLOW",M="SET-USERS",z="SET-CURRENT-PAGE",B="SET-TOTAL-USERS-COUNT",H="TOGGLE-IS-FETCHING",R="TOGGLE-IS-FOLLOWING-PROGRESS",D={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},G=function(e){return{type:L,userId:e}},V=function(e){return{type:W,userId:e}},q=function(e){return{type:z,currentPage:e}},Z=function(e){return{type:H,isFetching:e}},X=function(e,t){return{type:R,isFetching:e,userId:t}},Y=function(){var e=Object(E.a)(U.a.mark((function e(t,n,r,a){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(X(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(X(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(I.a)(Object(I.a)({},e),{},{users:T(e.users,t.userId,"id",{followed:!0})});case W:return Object(I.a)(Object(I.a)({},e),{},{users:T(e.users,t.userId,"id",{followed:!1})});case M:return Object(I.a)(Object(I.a)({},e),{},{users:Object(A.a)(t.users)});case z:return Object(I.a)(Object(I.a)({},e),{},{currentPage:t.currentPage});case B:return Object(I.a)(Object(I.a)({},e),{},{totalUsersCount:t.count});case H:return Object(I.a)(Object(I.a)({},e),{},{isFetching:t.isFetching});case R:return Object(I.a)(Object(I.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},Q=n(27),J=n.n(Q),$=n(60),ee=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow,c=e.isAuth;return Object(r.jsxs)("div",{className:J.a.usersWrapper,children:[Object(r.jsxs)("div",{className:J.a.avaBtnWrapper,children:[Object(r.jsx)("div",{children:Object(r.jsx)(b.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:$.a,className:J.a.ava,alt:""})})}),Object(r.jsx)("div",{className:J.a.btnWrapper,children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id}))||!c,className:J.a.fbtn,onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id}))||!c,className:J.a.fbtn,onClick:function(){s(t.id)},children:"Follow"})})]}),Object(r.jsxs)("div",{className:J.a.info,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},te=n(71),ne=n(40),re=n.n(ne),ae=function(e){for(var t=e.currentPage,n=e.onPageChanged,s=e.totalItemsCount,c=e.pageSize,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(s/c),l=[],p=1;p<=u;p++)l.push(p);var d=Math.ceil(u/o),j=Object(a.useState)(1),f=Object(te.a)(j,2),b=f[0],h=f[1],m=(b-1)*o+1,O=b*o;return Object(r.jsx)("div",{className:re.a.paginator,children:Object(r.jsxs)("div",{className:re.a.content,children:[b>1&&Object(r.jsx)("button",{className:re.a.pageBtn,onClick:function(){h(b-1)},children:"PREV"}),l.filter((function(e){return e>=m&&e<=O})).map((function(e){return Object(r.jsx)("button",{className:t===e?re.a.selectedPage:re.a.pageBtn,onClick:function(t){n(e)},children:e},e)})),d>b&&Object(r.jsx)("button",{className:re.a.pageBtn,onClick:function(){h(b+1)},children:"NEXT"})]})})},se=function(e){return Object(r.jsxs)("div",{className:J.a.wrapper,children:[Object(r.jsx)(ae,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(r.jsx)(ee,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow,isAuth:e.isAuth},t.id)}))]})},ce=n(51),ie=n(10),oe=n(138),ue=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),le=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},je=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},be=function(e){return e.auth.isAuth},he=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(ce.a,{}):null,Object(r.jsx)(se,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth})]})}}]),n}(s.a.Component),me=Object(ie.d)(Object(h.b)((function(e){return{users:ue(e),pageSize:le(e),totalUsersCount:pe(e),currentPage:de(e),isFetching:je(e),followingInProgress:fe(e),isAuth:be(e)}}),{follow:function(e){return function(){var t=Object(E.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,F.c.follow.bind(F.c),G);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(E.a)(U.a.mark((function t(n){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Y(n,e,F.c.unfollow.bind(F.c),V);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:q,toggleFollowingProgress:X,requestUsers:function(e,t){return function(){var n=Object(E.a)(U.a.mark((function n(r){var a;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Z(!0)),r(q(e)),n.next=4,F.c.getUsers(e,t);case 4:a=n.sent,r(Z(!1)),r((c=a.items,{type:M,users:c})),r((s=a.totalCount,{type:B,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(he),Oe=n(18),ge=n.n(Oe),ve=function(e){var t=Object(a.useState)(!1),n=Object(te.a)(t,2),s=n[0],c=n[1];return Object(r.jsx)("header",{className:ge.a.header,children:Object(r.jsxs)("div",{className:ge.a.wrapper,children:[Object(r.jsx)("div",{className:ge.a.imgWrapper,children:Object(r.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/vk-18-898139.png",alt:""})}),Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("div",{children:e.isAuth?Object(r.jsxs)("div",{className:ge.a.loginWrapper,children:[Object(r.jsx)("div",{className:ge.a.me,children:Object(r.jsxs)("div",{onClick:function(){return c(!s)},className:ge.a.login,children:[Object(r.jsx)("div",{}),Object(r.jsx)("img",{className:ge.a.userPhoto,src:e.profile&&e.profile.photos.small?e.profile.photos.small:$.a,alt:""}),Object(r.jsxs)("span",{className:ge.a.name,children:[" ",e.login]})]})}),s&&Object(r.jsx)("div",{className:ge.a.menu,onClick:function(e){return"BUTTON"!==e.target.tagName&&c(!1)},children:Object(r.jsx)("div",{className:ge.a.menuWrapper,children:Object(r.jsx)("button",{className:ge.a.logout,onClick:e.deleteAuthLogin,children:"Log out"})})})]}):Object(r.jsxs)("div",{className:ge.a.me,children:[Object(r.jsx)("div",{}),Object(r.jsxs)(b.b,{to:"/login",className:ge.a.login,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("span",{className:ge.a.name,children:"login"})]})]})})]})})},xe=n(59),_e="social-network/auth/SET-USER-DATA",we={userId:null,email:null,login:null,isAuth:!1},Pe=function(e,t,n,r){return{type:_e,payload:{userId:e,email:t,login:n,isAuth:r}}},Ne=function(){return function(){var e=Object(E.a)(U.a.mark((function e(t){var n,r,a,s,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(Pe(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ce=function(){return function(){var e=Object(E.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.logout();case 2:0===e.sent.data.resultCode&&t(Pe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(I.a)(Object(I.a)({},e),t.payload);default:return e}},ye=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(ve,Object(I.a)({},this.props))}}]),n}(s.a.Component),Se=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,profile:e.profilePage.profile}}),{deleteAuthLogin:Ce})(ye),Ue=n(57),Ee=n.n(Ue),Ae=n(133),Ie=n(134),Fe=n(79),Te=n(80),Le=Object(Ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(Ae.a,{type:"email",placeholder:"email",name:"email",component:Fe.a,witherror:1,errorclass:Ee.a.errorMsg,validate:[Te.b]})}),Object(r.jsx)("div",{children:Object(r.jsx)(Ae.a,{type:"password",placeholder:"Password",name:"password",component:Fe.a,errorclass:Ee.a.errorMsg,witherror:1,validate:[Te.b]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Ae.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Log in"})}),n&&Object(r.jsx)("div",{className:Ee.a.formSummaryError,children:n})]})})),We=function(e){return e.isAuth?Object(r.jsx)(N.a,{to:"/profile"}):Object(r.jsxs)("div",{className:Ee.a.wrapper,children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Le,{onSubmit:function(t){e.postAuthLogin(t.email,t.password,t.rememberMe)}})]})},Me=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(We,{isAuth:this.props.isAuth,postAuthLogin:this.props.postAuthLogin})}}]),n}(s.a.Component),ze=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{postAuthLogin:function(e,t,n){return function(){var r=Object(E.a)(U.a.mark((function r(a){var s,c;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,F.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(Ne()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(xe.b)("login",{_error:"".concat(c)})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},deleteAuthLogin:Ce})(Me),Be="INITIALIZED-SUCCESS",He={initialized:!1},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be:return Object(I.a)(Object(I.a)({},e),{},{initialized:!0});default:return e}},De=n(101),Ge=n(132),Ve={friends:[{avaUrl:"https://sun1-83.userapi.com/c841023/v841023761/1d95c/jblyV5wP3EM.jpg",name:"Temi",id:9},{avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",name:"Vitalya",id:2}]},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve;return e},Ze=n(140),Xe=n(135),Ye=Object(ie.c)({profilePage:De.b,dialogsPage:Ge.b,sidebar:qe,usersPage:K,auth:ke,form:Xe.a,app:Re}),Ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,Qe=Object(ie.e)(Ye,Ke(Object(ie.a)(Ze.a)));window.__store__=Qe;var Je=Qe,$e=s.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),et=s.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),tt=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(N.b,{exact:!0,path:"/",children:Object(r.jsx)(N.a,{to:"/profile"})}),Object(r.jsx)(Se,{}),Object(r.jsx)(P,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(ce.a,{}),children:[Object(r.jsx)(N.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(et,{})}}),Object(r.jsx)(N.b,{path:"/dialogs",render:function(){return Object(r.jsx)($e,{})}})]}),Object(r.jsx)(N.b,{path:"/users",render:function(){return Object(r.jsx)(me,{})}}),Object(r.jsx)(N.b,{path:"/news",render:function(){return Object(r.jsx)(y,{})}}),Object(r.jsx)(N.b,{path:"/music",render:function(){return Object(r.jsx)(k,{})}}),Object(r.jsx)(N.b,{path:"/settings",render:function(){return Object(r.jsx)(C,{})}}),Object(r.jsx)(N.b,{path:"/login",render:function(){return Object(r.jsx)(ze,{})}})]})]})}):Object(r.jsx)(ce.a,{})}}]),n}(s.a.Component),nt=Object(ie.d)(N.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(E.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(Ne()),Promise.all([n]).then((function(){t({type:Be})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(tt),rt=function(){return Object(r.jsx)(b.a,{children:Object(r.jsx)(h.a,{store:Je,children:Object(r.jsx)(nt,{})})})};i.a.render(Object(r.jsx)(rt,{}),document.getElementById("root")),o()},40:function(e,t,n){e.exports={paginator:"Paginator_paginator__1y4RC",content:"Paginator_content__98OEB",pageBtn:"Paginator_pageBtn__3jSW_",selectedPage:"Paginator_selectedPage__3F-3U"}},51:function(e,t,n){"use strict";var r=n(0),a=(n(1),n.p+"static/media/loader.144318e6.svg");t.a=function(){return Object(r.jsx)("img",{src:a,alt:""})}},57:function(e,t,n){e.exports={wrapper:"Login_wrapper__2-X8I",errorMsg:"Login_errorMsg__1Tija",formSummaryError:"Login_formSummaryError__1sa3-"}},58:function(e,t,n){e.exports={post:"FormsControls_post__2r-Wk",borderError:"FormsControls_borderError__sTH7w",messageWrapper:"FormsControls_messageWrapper__Se5Rk",message:"FormsControls_message__hZbME",error:"FormsControls_error__3V8BP",button:"FormsControls_button__2_m03",sendImg:"FormsControls_sendImg__sBaEU"}},60:function(e,t,n){"use strict";t.a=n.p+"static/media/user.16dd2397.jpg"},74:function(e,t,n){e.exports={wrapper:"FriendItem_wrapper__3c6ka",img:"FriendItem_img__1PV44",name:"FriendItem_name__1kfMX"}},79:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p}));var r=n(3),a=n(0),s=n(56),c=(n(1),n(58)),i=n.n(c),o=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,c=(e.child,e.errorclass),o=e.witherror,u=void 0===o?0:o,l=Object(s.a)(e,["input","meta","child","errorclass","witherror"]),p=n&&r;return Object(a.jsxs)("div",{className:i.a.messageWrapper,children:[Object(a.jsx)("div",{className:p&&u?i.a.borderError:"",children:l.children}),p&&1===u&&Object(a.jsx)("span",{className:c,children:r})]})},u=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({className:i.a.post,placeholder:e.placeholder},t),n))}))},l=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({className:i.a.message,placeholder:e.placeholder},t),n))}))},p=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({placeholder:e.placeholder},t),n))}))}},80:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},96:function(e,t,n){e.exports={friends:"Friends_friends__ggUVS",title:"Friends_title__2PAfh"}}},[[292,1,2]]]);
//# sourceMappingURL=main.6d3dde5d.chunk.js.map