(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{102:function(e,t,n){e.exports={friends:"Friends_friends__ggUVS",title:"Friends_title__2PAfh"}},105:function(e,t,n){e.exports={status:"ProfileStatus_status__17bqY",content:"ProfileStatus_content__2z6HW"}},108:function(e,t,n){},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(11),a=n(3),s="ADD-MESSAGE",i={dialogs:[{id:1,name:"Vitalya",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:2,name:"Vitya",avaUrl:"https://sun1-18.userapi.com/impg/Q0EYZ5ioRUY_dqim4PlwR1WrsjdgU76SIjUZZw/h2Thm-Pj-ac.jpg?size=50x0&quality=96&crop=1,271,1616,1616&sign=f0d66ba6963daa0429927bb440f501e0&ava=1"},{id:3,name:"Artem",avaUrl:"https://sun1-83.userapi.com/impf/c841023/v841023761/1d95c/jblyV5wP3EM.jpg?size=50x0&quality=96&crop=183,304,522,522&sign=e4128216c90b1cf25b88a8455dd49e5b&ava=1"},{id:4,name:"Den",avaUrl:"https://steamuserimages-a.akamaihd.net/ugc/179412883250505688/55C716B686C3D74A20BBCB73D83EF8C21F1EBBC9/"}],messages:[{id:1,message:"Hi",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:2,message:"How is your web-site?",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:3,message:"Yo",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"},{id:4,message:"Yo",avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg"}]},c=function(e){return{type:s,newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.messages[e.messages.length-1].id+1,message:t.newMessage,avaUrl:"https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg"};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},148:function(e,t,n){"use strict";var r=n(0),a=n(1),s=n.n(a),i=n(18),c=n(44),o=n(19),u=n.n(o),l=n(48),j=n(105),p=n.n(j),d=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),s=n[0],c=n[1],o=Object(a.useState)(e.status),u=Object(i.a)(o,2),l=u[0],j=u[1];Object(a.useEffect)((function(){j(e.status)}),[e.status]);return Object(r.jsxs)("div",{className:p.a.content,children:[!s&&Object(r.jsx)("h3",{className:p.a.status,onDoubleClick:e.isOwner?function(){c(!0)}:function(){},value:l,children:l||"-----"}),s&&e.isOwner&&Object(r.jsx)("input",{onBlur:function(){c(!1),e.updateUserStatus(l)},autoFocus:!0,onChange:function(e){j(e.currentTarget.value)},value:l,maxLength:50})]})},b=n(41),f=n(33),m=n.n(f),h=n.p+"static/media/facebook (1).cebbbbea.svg",O=n.p+"static/media/website.7d098832.svg",g=n.p+"static/media/vk.8e9ac5f1.svg",v=n.p+"static/media/twitter.16ec4858.svg",x=n.p+"static/media/instagram.02967a62.svg",_=n.p+"static/media/youtube.62269c5a.svg",w=n.p+"static/media/github.e8c48bc7.svg",P=function(e){return Object(r.jsxs)("div",{className:m.a.socialLinks,children:[e.profileContacts.facebook&&Object(r.jsx)("a",{href:"//"+e.profileContacts.facebook,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:m.a.icon,alt:"f",src:h})}),e.profileContacts.website&&Object(r.jsx)("a",{href:"//"+e.profileContacts.website,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:m.a.icon,alt:"f",src:O})}),e.profileContacts.vk&&Object(r.jsx)("a",{href:"//"+e.profileContacts.vk,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:m.a.icon,alt:"f",src:g})}),e.profileContacts.twitter&&Object(r.jsx)("a",{href:"//"+e.profileContacts.twitter,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:m.a.icon,alt:"f",src:v})}),e.profileContacts.instagram&&Object(r.jsx)("a",{href:"//"+e.profileContacts.instagram,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:m.a.icon,alt:"f",src:x})}),e.profileContacts.youtube&&Object(r.jsx)("a",{href:"//"+e.profileContacts.youtube,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:m.a.icon,alt:"f",src:_})}),e.profileContacts.github&&Object(r.jsx)("a",{href:"//"+e.profileContacts.github,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:m.a.icon,alt:"f",src:w})})]})},N=n(3),k=n(147),y=function(e){var t=e.labelName,n=e.inputName,a=void 0===n?t:n,s=e.register,i=e.type,c=void 0===i?"text":i;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{className:u.a.label,htmlFor:t,children:[t,":"]}),Object(r.jsx)("input",{type:c,name:a,ref:s})]})},C=function(e){var t=e.outFromEditMode,n=e.saveProfile,a=e.profile,s=Object(k.a)({defaultValues:Object(N.a)({},a)}),i=s.register,c=s.handleSubmit;return Object(r.jsxs)("form",{name:"about",className:u.a.description,onSubmit:c((function(e){console.log(e),n(e,a.userId),t()})),children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{labelName:"Full Name",inputName:"fullName",register:i}),Object(r.jsx)(y,{labelName:"Looking for a job",inputName:"lookingForAJob",register:i,type:"checkbox"}),Object(r.jsx)(y,{labelName:"About job",inputName:"lookingForAJobDescription",register:i}),Object(r.jsx)(y,{labelName:"About me",inputName:"aboutMe",register:i})]}),Object(r.jsx)("div",{children:"My socials :"}),Object(r.jsx)("div",{className:u.a.edit,children:Object(r.jsx)("button",{type:"submit",className:u.a.editBtn,children:"Save"})}),Object(r.jsx)("div",{})]})},S=function(e){var t=e.status,n=e.updateUserStatus,a=e.profile,s=e.isOwner,i=e.goToEditMode;return Object(r.jsxs)("div",{className:u.a.description,children:[Object(r.jsx)("h1",{children:a.fullName}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{className:u.a.edit,children:s&&Object(r.jsx)("button",{onClick:function(){return i()},className:u.a.editBtn,children:"Edit"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{status:t,updateUserStatus:n,isOwner:s}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"About me: "})," ",a.aboutMe]}),Object(r.jsxs)("div",{children:[" ",a.lookingForAJob?Object(r.jsxs)("div",{className:u.a.job,children:[Object(r.jsx)("b",{children:" Looking for a job"})," : yes",Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"About job:"})," ",a.lookingForAJobDescription]})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Looking for a job: "}),"no"]})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"About me:"}),Object(r.jsx)("div",{children:"My social links:"}),Object(r.jsx)(P,{profileContacts:a?a.contacts:null})]}),Object(r.jsx)("div",{})]})},I=function(e){var t=e.profile,n=e.status,s=e.updateUserStatus,o=e.saveProfile,j=Object(c.a)(e,["profile","status","updateUserStatus","saveProfile"]),p=Object(a.useState)(!1),d=Object(i.a)(p,2),f=d[0],m=d[1];if(!t)return Object(r.jsx)(l.a,{});return Object(r.jsx)("div",{className:u.a.myPage,children:Object(r.jsxs)("div",{className:u.a.info,children:[Object(r.jsxs)("div",{className:u.a.ava,children:[Object(r.jsx)("div",{className:u.a.ava__wrapper,children:Object(r.jsx)("img",{src:t.photos.large||b.a,alt:""})}),j.isOwner&&Object(r.jsx)("input",{className:u.a.fileInput,type:"file",onChange:function(e){e.target.files.length&&j.savePhoto(e.target.files[0])}})]}),f?Object(r.jsx)(C,{outFromEditMode:function(){m(!1)},saveProfile:o,profile:t}):Object(r.jsx)(S,{isOwner:j.isOwner,status:n,updateUserStatus:s,profile:t,goToEditMode:function(){m(!0)}})]})})},U=n(61),A=n(34),E=n.n(A),L=n(32),F=n.n(L),T=n.p+"static/media/heart.c31d61db.svg",M=n.p+"static/media/heart-clicked.fb824694.svg",W=function(e){return Object(r.jsxs)("div",{className:F.a.wrapper,children:[Object(r.jsx)("img",{className:F.a.ava,src:e.profile&&e.profile.photos.small?e.profile.photos.small:b.a,alt:""}),Object(r.jsxs)("div",{className:F.a.inner,children:[Object(r.jsxs)("div",{className:F.a.content,children:[Object(r.jsx)("h4",{className:F.a.name,children:e.profile&&e.profile.fullName}),e.message]}),Object(r.jsxs)("div",{className:F.a.likeWrapper,children:[Object(r.jsx)("div",{className:F.a.count,children:e.likesCount}),Object(r.jsx)("div",{className:F.a.imgWrapper,onClick:function(){return e.toggleLike(e.id)},children:Object(r.jsx)("img",{className:F.a.like,src:e.liked?M:T,alt:""})})]})]})]})},B=n(139),z=n(51),D=n(140),H=n(54),R=n(62),V=Object(H.a)(100),q=Object(D.a)({form:"post",onSubmitSuccess:function(e,t){return t(Object(z.a)("post"))}})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,className:E.a.postWrapper,children:[Object(r.jsx)(B.a,{component:R.c,validate:[H.b,V],type:"text",name:"post",errorclass:E.a.errorMsg,placeholder:"Type your thoughts..."}),Object(r.jsx)("div",{className:E.a.btnWrapper,children:Object(r.jsx)("button",{type:"submit",className:E.a.btn,children:"Add post"})})]})})),G=s.a.memo((function(e){var t=e.posts.map((function(t){return Object(r.jsx)(W,{message:t.message,likesCount:t.likesCount,liked:t.liked,profile:e.profile,toggleLike:e.toggleLike,id:t.id},t.id)}));return Object(r.jsxs)("div",{className:E.a.wrapper,children:[Object(r.jsx)("div",{className:E.a.empty}),Object(r.jsxs)("div",{className:E.a.posts,children:[Object(r.jsx)("h4",{className:E.a.title,children:"My posts"}),Object(r.jsx)(q,{onSubmit:function(t){e.addPost(t.post)}}),t]})]})})),J=n(14),X=Object(J.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:U.a,toggleLike:U.g})(G);t.a=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(I,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateUserStatus:e.updateUserStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(r.jsx)(X,{profile:e.profile})]})}},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(143),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a02890c1-7f85-4705-9a7d-cd656428919f"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),i.getProfile(e)}},i={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},c={me:function(){return a.get("auth/me")},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},179:function(e,t,n){},19:function(e,t,n){e.exports={myPage:"ProfileInfo_myPage__qIqaN",content:"ProfileInfo_content__1SQ6S",shapka:"ProfileInfo_shapka__144_l",info:"ProfileInfo_info__ekJ1m",ava__wrapper:"ProfileInfo_ava__wrapper__2FSP1",ava:"ProfileInfo_ava__2l-CH",item:"ProfileInfo_item__3uLQq",description:"ProfileInfo_description__3rUqA",fileInput:"ProfileInfo_fileInput__EhjxN",job:"ProfileInfo_job__3BHyb",edit:"ProfileInfo_edit__2Tdjm",editBtn:"ProfileInfo_editBtn__1hV5D",socialInputs:"ProfileInfo_socialInputs__3dn6C",label:"ProfileInfo_label__30-5X"}},20:function(e,t,n){e.exports={item:"Navbar_item__1xtpt",activeLink:"Navbar_activeLink__3L79J",nav:"Navbar_nav__3jbz_",friends:"Navbar_friends__1ymh1"}},21:function(e,t,n){e.exports={header:"Header_header__2zTxm",wrapper:"Header_wrapper__1AW7O",imgWrapper:"Header_imgWrapper__3oLQ8",loginWrapper:"Header_loginWrapper__1WqKL",me:"Header_me__ImTh7",login:"Header_login__2MWsQ",userPhoto:"Header_userPhoto__3FRvS",name:"Header_name__22-C6",menu:"Header_menu__1dfqj",menuWrapper:"Header_menuWrapper__1tj9i",logout:"Header_logout__3BErz"}},300:function(e,t,n){"use strict";n.r(t);var r=n(0),a=(n(108),n(1)),s=n.n(a),i=n(79),c=n.n(i),o=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,304)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),s(e),i(e)}))},u=n(37),l=n(38),j=n(40),p=n(39),d=(n(179),n(20)),b=n.n(d),f=n(15),m=n(14),h=n(102),O=n.n(h),g=n(82),v=n.n(g),x=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(f.b,{to:"/profile/".concat(e.id),className:v.a.wrapper,children:[Object(r.jsx)("img",{className:v.a.img,src:e.avaUrl,alt:"$"}),Object(r.jsx)("div",{className:v.a.name,children:e.name})]})})},_=function(e){var t=e.friends.map((function(e){return Object(r.jsx)(x,{name:e.name,avaUrl:e.avaUrl,id:e.id},e.id)}));return Object(r.jsxs)("div",{className:O.a.friends,children:[Object(r.jsx)("h4",{className:O.a.title,children:"Friends"}),t]})},w=Object(m.b)((function(e){return{friends:e.sidebar.friends}}))(_),P=function(){return Object(r.jsxs)("nav",{className:b.a.nav,children:[Object(r.jsx)("div",{className:"".concat(b.a.item," "),children:Object(r.jsx)(f.b,{to:"/profile",activeClassName:b.a.activeLink,children:" Profile"})}),Object(r.jsx)("div",{className:"".concat(b.a.item),children:Object(r.jsx)(f.b,{to:"/dialogs",activeClassName:b.a.activeLink,children:" Messages"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/news",activeClassName:b.a.activeLink,children:" News"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/music",activeClassName:b.a.activeLink,children:" Music"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/settings",activeClassName:b.a.activeLink,children:" Settings"})}),Object(r.jsx)("div",{className:b.a.item,children:Object(r.jsx)(f.b,{to:"/users",activeClassName:b.a.activeLink,children:" Find users"})}),Object(r.jsx)("div",{className:b.a.friends,children:Object(r.jsx)(w,{})})]})},N=n(13),k=function(e){return Object(r.jsx)("div",{children:"Settings"})},y=function(e){return Object(r.jsx)("div",{children:"Music"})},C=function(e){return Object(r.jsx)("div",{children:"News"})},S=n(6),I=n.n(S),U=n(12),A=n(11),E=n(3),L=n(17),F=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(E.a)(Object(E.a)({},e),r):e}))},T="FOLLOW",M="UNFOLLOW",W="SET-USERS",B="SET-CURRENT-PAGE",z="SET-TOTAL-USERS-COUNT",D="TOGGLE-IS-FETCHING",H="TOGGLE-IS-FOLLOWING-PROGRESS",R={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},V=function(e){return{type:T,userId:e}},q=function(e){return{type:M,userId:e}},G=function(e){return{type:B,currentPage:e}},J=function(e){return{type:D,isFetching:e}},X=function(e,t){return{type:H,isFetching:e,userId:t}},Z=function(){var e=Object(U.a)(I.a.mark((function e(t,n,r,a){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(X(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(X(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(E.a)(Object(E.a)({},e),{},{users:F(e.users,t.userId,"id",{followed:!0})});case M:return Object(E.a)(Object(E.a)({},e),{},{users:F(e.users,t.userId,"id",{followed:!1})});case W:return Object(E.a)(Object(E.a)({},e),{},{users:Object(A.a)(t.users)});case B:return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case z:return Object(E.a)(Object(E.a)({},e),{},{totalUsersCount:t.count});case D:return Object(E.a)(Object(E.a)({},e),{},{isFetching:t.isFetching});case H:return Object(E.a)(Object(E.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(A.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},K=n(31),Q=n.n(K),$=n(41),ee=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow,i=e.isAuth;return Object(r.jsxs)("div",{className:Q.a.usersWrapper,children:[Object(r.jsxs)("div",{className:Q.a.avaBtnWrapper,children:[Object(r.jsx)("div",{children:Object(r.jsx)(f.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:$.a,className:Q.a.ava,alt:""})})}),Object(r.jsx)("div",{className:Q.a.btnWrapper,children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id}))||!i,className:Q.a.fbtn,onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id}))||!i,className:Q.a.fbtn,onClick:function(){s(t.id)},children:"Follow"})})]}),Object(r.jsxs)("div",{className:Q.a.info,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},te=n(18),ne=n(49),re=n.n(ne),ae=function(e){for(var t=e.currentPage,n=e.onPageChanged,s=e.totalItemsCount,i=e.pageSize,c=e.portionSize,o=void 0===c?10:c,u=Math.ceil(s/i),l=[],j=1;j<=u;j++)l.push(j);var p=Math.ceil(u/o),d=Object(a.useState)(1),b=Object(te.a)(d,2),f=b[0],m=b[1],h=(f-1)*o+1,O=f*o;return Object(r.jsx)("div",{className:re.a.paginator,children:Object(r.jsxs)("div",{className:re.a.content,children:[f>1&&Object(r.jsx)("button",{className:re.a.pageBtn,onClick:function(){m(f-1)},children:"PREV"}),l.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("button",{className:t===e?re.a.selectedPage:re.a.pageBtn,onClick:function(t){n(e)},children:e},e)})),p>f&&Object(r.jsx)("button",{className:re.a.pageBtn,onClick:function(){m(f+1)},children:"NEXT"})]})})},se=function(e){return Object(r.jsxs)("div",{className:Q.a.wrapper,children:[Object(r.jsx)(ae,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize}),e.users.map((function(t){return Object(r.jsx)(ee,{user:t,followingInProgress:e.followingInProgress,unfollow:e.unfollow,follow:e.follow,isAuth:e.isAuth},t.id)}))]})},ie=n(48),ce=n(9),oe=n(144),ue=Object(oe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),le=function(e){return e.usersPage.pageSize},je=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},be=function(e){return e.usersPage.followingInProgress},fe=function(e){return e.auth.isAuth},me=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(ie.a,{}):null,Object(r.jsx)(se,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth})]})}}]),n}(s.a.Component),he=Object(ce.d)(Object(m.b)((function(e){return{users:ue(e),pageSize:le(e),totalUsersCount:je(e),currentPage:pe(e),isFetching:de(e),followingInProgress:be(e),isAuth:fe(e)}}),{follow:function(e){return function(){var t=Object(U.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Z(n,e,L.c.follow.bind(L.c),V);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(U.a)(I.a.mark((function t(n){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Z(n,e,L.c.unfollow.bind(L.c),q);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:G,toggleFollowingProgress:X,requestUsers:function(e,t){return function(){var n=Object(U.a)(I.a.mark((function n(r){var a;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),r(G(e)),n.next=4,L.c.getUsers(e,t);case 4:a=n.sent,r(J(!1)),r((i=a.items,{type:W,users:i})),r((s=a.totalCount,{type:z,count:s}));case 8:case"end":return n.stop()}var s,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(me),Oe=n(21),ge=n.n(Oe),ve=function(e){var t=Object(a.useState)(!1),n=Object(te.a)(t,2),s=n[0],i=n[1];return Object(r.jsx)("header",{className:ge.a.header,children:Object(r.jsxs)("div",{className:ge.a.wrapper,children:[Object(r.jsx)("div",{className:ge.a.imgWrapper,children:Object(r.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/vk-18-898139.png",alt:""})}),Object(r.jsx)(r.Fragment,{}),Object(r.jsx)("div",{children:e.isAuth?Object(r.jsxs)("div",{className:ge.a.loginWrapper,children:[Object(r.jsx)("div",{className:ge.a.me,children:Object(r.jsxs)("div",{onClick:function(){return i(!s)},className:ge.a.login,children:[Object(r.jsx)("div",{}),Object(r.jsx)("img",{className:ge.a.userPhoto,src:e.profile&&e.profile.photos.small?e.profile.photos.small:$.a,alt:""}),Object(r.jsxs)("span",{className:ge.a.name,children:[" ",e.login]})]})}),s&&Object(r.jsx)("div",{className:ge.a.menu,onClick:function(e){return"BUTTON"!==e.target.tagName&&i(!1)},children:Object(r.jsx)("div",{className:ge.a.menuWrapper,children:Object(r.jsx)("button",{className:ge.a.logout,onClick:e.deleteAuthLogin,children:"Log out"})})})]}):Object(r.jsxs)("div",{className:ge.a.me,children:[Object(r.jsx)("div",{}),Object(r.jsxs)(f.b,{to:"/login",className:ge.a.login,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("span",{className:ge.a.name,children:"login"})]})]})})]})})},xe=n(51),_e="social-network/auth/SET-USER-DATA",we={userId:null,email:null,login:null,isAuth:!1},Pe=function(e,t,n,r){return{type:_e,payload:{userId:e,email:t,login:n,isAuth:r}}},Ne=function(){return function(){var e=Object(U.a)(I.a.mark((function e(t){var n,r,a,s,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,i=r.email,t(Pe(a,i,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ke=function(){return function(){var e=Object(U.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.logout();case 2:0===e.sent.data.resultCode&&t(Pe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(E.a)(Object(E.a)({},e),t.payload);default:return e}},Ce=(n(148),function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(ve,Object(E.a)({},this.props))}}]),n}(s.a.Component)),Se=Object(ce.d)(Object(m.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,profile:e.profilePage.profile,isOwner:e.profilePage.isOwner}}),{deleteAuthLogin:ke}))(Ce),Ie=n(70),Ue=n.n(Ie),Ae=n(139),Ee=n(140),Le=n(62),Fe=n(54),Te=Object(Ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("div",{children:Object(r.jsx)(Ae.a,{type:"email",placeholder:"email",name:"email",component:Le.a,witherror:1,errorclass:Ue.a.errorMsg,validate:[Fe.b]})}),Object(r.jsx)("div",{children:Object(r.jsx)(Ae.a,{type:"password",placeholder:"Password",name:"password",component:Le.a,errorclass:Ue.a.errorMsg,witherror:1,validate:[Fe.b]})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Ae.a,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Log in"})}),n&&Object(r.jsx)("div",{className:Ue.a.formSummaryError,children:n})]})})),Me=function(e){return e.isAuth?Object(r.jsx)(N.a,{to:"/profile"}):Object(r.jsxs)("div",{className:Ue.a.wrapper,children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(Te,{onSubmit:function(t){e.postAuthLogin(t.email,t.password,t.rememberMe)}})]})},We=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(Me,{isAuth:this.props.isAuth,postAuthLogin:this.props.postAuthLogin})}}]),n}(s.a.Component),Be=Object(m.b)((function(e){return{isAuth:e.auth.isAuth}}),{postAuthLogin:function(e,t,n){return function(){var r=Object(U.a)(I.a.mark((function r(a){var s,i;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,L.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(Ne()):(i=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(xe.b)("login",{_error:"".concat(i)})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},deleteAuthLogin:ke})(We),ze="INITIALIZED-SUCCESS",De={initialized:!1},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},Re=n(61),Ve=n(138),qe={friends:[{avaUrl:"https://sun1-83.userapi.com/c841023/v841023761/1d95c/jblyV5wP3EM.jpg",name:"Temi",id:9},{avaUrl:"https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg",name:"Vitalya",id:2}]},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe;return e},Je=n(146),Xe=n(141),Ze=Object(ce.c)({profilePage:Re.b,dialogsPage:Ve.b,sidebar:Ge,usersPage:Y,auth:ye,form:Xe.a,app:He}),Ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,Ke=Object(ce.e)(Ze,Ye(Object(ce.a)(Je.a)));window.__store__=Ke;var Qe=Ke,$e=s.a.lazy((function(){return n.e(3).then(n.bind(null,306))})),et=s.a.lazy((function(){return n.e(4).then(n.bind(null,305))})),tt=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(N.b,{exact:!0,path:"/",children:Object(r.jsx)(N.a,{to:"/profile"})}),Object(r.jsx)(Se,{}),Object(r.jsx)(P,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsxs)(a.Suspense,{fallback:Object(r.jsx)(ie.a,{}),children:[Object(r.jsx)(N.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(et,{})}}),Object(r.jsx)(N.b,{path:"/dialogs",render:function(){return Object(r.jsx)($e,{})}})]}),Object(r.jsx)(N.b,{path:"/users",render:function(){return Object(r.jsx)(he,{})}}),Object(r.jsx)(N.b,{path:"/news",render:function(){return Object(r.jsx)(C,{})}}),Object(r.jsx)(N.b,{path:"/music",render:function(){return Object(r.jsx)(y,{})}}),Object(r.jsx)(N.b,{path:"/settings",render:function(){return Object(r.jsx)(k,{})}}),Object(r.jsx)(N.b,{path:"/login",render:function(){return Object(r.jsx)(Be,{})}})]})]})}):Object(r.jsx)(ie.a,{})}}]),n}(s.a.Component),nt=Object(ce.d)(N.f,Object(m.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Ne());Promise.all([t]).then((function(){e({type:ze})}))}}}))(tt),rt=function(){return Object(r.jsx)(f.a,{children:Object(r.jsx)(m.a,{store:Qe,children:Object(r.jsx)(nt,{})})})};c.a.render(Object(r.jsx)(rt,{}),document.getElementById("root")),o()},31:function(e,t,n){e.exports={wrapper:"Users_wrapper__2KoMM",usersWrapper:"Users_usersWrapper__1l9FX",ava:"Users_ava__ZvQ11",avaBtnWrapper:"Users_avaBtnWrapper__18igj",btnWrapper:"Users_btnWrapper__Fk13i",fbtn:"Users_fbtn__3S5yO",info:"Users_info__wZGp4"}},32:function(e,t,n){e.exports={wrapper:"Post_wrapper__UkLBE",ava:"Post_ava__2l_gx",name:"Post_name__3KAzj",inner:"Post_inner__3DCT-",likeWrapper:"Post_likeWrapper__L9B9m",count:"Post_count__3PRel",imgWrapper:"Post_imgWrapper__3MHvC",like:"Post_like__39Ij6"}},33:function(e,t,n){e.exports={socialLinks:"SocialLinks_socialLinks__2FX6t",icon:"SocialLinks_icon__JUDVV"}},34:function(e,t,n){e.exports={wrapper:"MyPosts_wrapper__16PAJ",empty:"MyPosts_empty__3K6WB",content:"MyPosts_content__sv91D",title:"MyPosts_title__1yH9S",posts:"MyPosts_posts__OPSoo",btn:"MyPosts_btn__1YUpc",postWrapper:"MyPosts_postWrapper__16BZD",btnWrapper:"MyPosts_btnWrapper__XTG3L",errorMsg:"MyPosts_errorMsg__3GPs9"}},41:function(e,t,n){"use strict";t.a=n.p+"static/media/user.16dd2397.jpg"},48:function(e,t,n){"use strict";var r=n(0),a=(n(1),n.p+"static/media/loader.144318e6.svg");t.a=function(){return Object(r.jsx)("img",{src:a,alt:""})}},49:function(e,t,n){e.exports={paginator:"Paginator_paginator__1y4RC",content:"Paginator_content__98OEB",pageBtn:"Paginator_pageBtn__3jSW_",selectedPage:"Paginator_selectedPage__3F-3U"}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"g",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"h",(function(){return _})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return P}));var r=n(6),a=n.n(r),s=n(12),i=n(11),c=n(3),o=n(17),u="ADD-POST",l="SET-USER-PROFILE",j="SET-OWNER",p="SET-STATUS",d="DELETE-POST",b="TOGGLE-LIKE",f="SAVE-PHOTO-SUCCESS",m={posts:[{id:1,message:"Hi, how are you?",likesCount:11,liked:!1},{id:2,message:"It's my first post",likesCount:44,liked:!1},{id:3,message:"It's my first post",likesCount:55,liked:!1}],profile:null,owner:null,status:""},h=function(e){return{type:u,newPostText:e}},O=function(e){return{type:p,status:e}},g=function(e,t){return{type:b,id:e,likeOrUnlike:t}},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:f,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.saveProfile(e);case 2:0===n.sent.data.resultCode&&r(v(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:e.posts[e.posts.length-1].id+1,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case d:return Object(c.a)(Object(c.a)({},e),{},{posts:Object(i.a)(e.posts.filter((function(e){return e.id!==t.id})))});case l:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case j:return Object(c.a)(Object(c.a)({},e),{},{owner:t.profile});case f:return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photos})});case p:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case b:return Object(c.a)(Object(c.a)({},e),{},{posts:Object(i.a)(e.posts.map((function(e){return e.id===t.id&&(e.liked?e.likesCount--:e.likesCount++,e.liked=!e.liked),e})))});default:return e}}},62:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j}));var r=n(3),a=n(0),s=n(44),i=(n(1),n(69)),c=n.n(i),o=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,i=(e.child,e.errorclass),o=e.witherror,u=void 0===o?0:o,l=Object(s.a)(e,["input","meta","child","errorclass","witherror"]),j=n&&r;return Object(a.jsxs)("div",{className:c.a.messageWrapper,children:[Object(a.jsx)("div",{className:j&&u?c.a.borderError:"",children:l.children}),j&&1===u&&Object(a.jsx)("span",{className:i,children:r})]})},u=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({className:c.a.post,placeholder:e.placeholder},t),n))}))},l=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({className:c.a.message,placeholder:e.placeholder},t),n))}))},j=function(e){var t=e.input,n=(e.meta,Object(s.a)(e,["input","meta"]));return Object(a.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({placeholder:e.placeholder},t),n))}))}},69:function(e,t,n){e.exports={post:"FormsControls_post__2r-Wk",borderError:"FormsControls_borderError__sTH7w",messageWrapper:"FormsControls_messageWrapper__Se5Rk",message:"FormsControls_message__hZbME",error:"FormsControls_error__3V8BP",button:"FormsControls_button__2_m03",sendImg:"FormsControls_sendImg__sBaEU"}},70:function(e,t,n){e.exports={wrapper:"Login_wrapper__2-X8I",errorMsg:"Login_errorMsg__1Tija",formSummaryError:"Login_formSummaryError__1sa3-"}},82:function(e,t,n){e.exports={wrapper:"FriendItem_wrapper__3c6ka",img:"FriendItem_img__1PV44",name:"FriendItem_name__1kfMX"}}},[[300,1,2]]]);
//# sourceMappingURL=main.5f750213.chunk.js.map