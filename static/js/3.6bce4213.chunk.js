(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{294:function(e,t,s){e.exports={myPage:"ProfileInfo_myPage__qIqaN",content:"ProfileInfo_content__1SQ6S",shapka:"ProfileInfo_shapka__144_l",info:"ProfileInfo_info__ekJ1m",ava__wrapper:"ProfileInfo_ava__wrapper__2FSP1",ava:"ProfileInfo_ava__2l-CH",item:"ProfileInfo_item__3uLQq",description:"ProfileInfo_description__3rUqA",fileInput:"ProfileInfo_fileInput__EhjxN",job:"ProfileInfo_job__3BHyb",edit:"ProfileInfo_edit__2Tdjm",editBtn:"ProfileInfo_editBtn__1hV5D",descriptionEdit:"ProfileInfo_descriptionEdit__2_Yu-",mySocials:"ProfileInfo_mySocials__32DdV",social:"ProfileInfo_social__3n2mw",socialInputs:"ProfileInfo_socialInputs__3dn6C",label:"ProfileInfo_label__30-5X"}},298:function(e,t,s){e.exports={status:"ProfileStatus_status__17bqY",content:"ProfileStatus_content__2z6HW"}},299:function(e,t,s){e.exports={socialLinks:"SocialLinks_socialLinks__2FX6t",icon:"SocialLinks_icon__JUDVV"}},300:function(e,t,s){e.exports={wrapper:"MyPosts_wrapper__16PAJ",empty:"MyPosts_empty__3K6WB",content:"MyPosts_content__sv91D",title:"MyPosts_title__1yH9S",posts:"MyPosts_posts__OPSoo",btn:"MyPosts_btn__1YUpc",postWrapper:"MyPosts_postWrapper__16BZD",btnWrapper:"MyPosts_btnWrapper__XTG3L",errorMsg:"MyPosts_errorMsg__3GPs9"}},301:function(e,t,s){e.exports={wrapper:"Post_wrapper__UkLBE",ava:"Post_ava__2l_gx",name:"Post_name__3KAzj",inner:"Post_inner__3DCT-",likeWrapper:"Post_likeWrapper__L9B9m",count:"Post_count__3PRel",imgWrapper:"Post_imgWrapper__3MHvC",like:"Post_like__39Ij6"}},304:function(e,t,s){"use strict";s.r(t);var a=s(3),r=s(0),i=s(39),o=s(40),c=s(42),n=s(41),l=s(1),p=s.n(l),b=s(59),j=s(33),u=s(294),f=s.n(u),d=s(53),m=s(298),h=s.n(m),_=function(e){var t=Object(l.useState)(!1),s=Object(b.a)(t,2),a=s[0],i=s[1],o=Object(l.useState)(e.status),c=Object(b.a)(o,2),n=c[0],p=c[1];Object(l.useEffect)((function(){p(e.status)}),[e.status]);return Object(r.jsxs)("div",{className:h.a.content,children:[!a&&Object(r.jsx)("h3",{className:h.a.status,onDoubleClick:e.isOwner?function(){i(!0)}:function(){},value:n,children:n||"-----"}),a&&e.isOwner&&Object(r.jsx)("input",{onBlur:function(){i(!1),e.updateUserStatus(n)},autoFocus:!0,onChange:function(e){p(e.currentTarget.value)},value:n,maxLength:50})]})},O=s(60),x=s(299),g=s.n(x),v=s.p+"static/media/facebook (1).cebbbbea.svg",N=s.p+"static/media/website.7d098832.svg",P=s.p+"static/media/vk.8e9ac5f1.svg",k=s.p+"static/media/twitter.16ec4858.svg",y=s.p+"static/media/instagram.02967a62.svg",w=s.p+"static/media/youtube.62269c5a.svg",S=s.p+"static/media/github.e8c48bc7.svg",I=function(e){return Object(r.jsxs)("div",{className:g.a.socialLinks,children:[e.profileContacts.facebook&&Object(r.jsx)("a",{href:"//"+e.profileContacts.facebook,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:g.a.icon,alt:"f",src:v})}),e.profileContacts.website&&Object(r.jsx)("a",{href:"//"+e.profileContacts.website,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:g.a.icon,alt:"f",src:N})}),e.profileContacts.vk&&Object(r.jsx)("a",{href:"//"+e.profileContacts.vk,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:g.a.icon,alt:"f",src:P})}),e.profileContacts.twitter&&Object(r.jsx)("a",{href:"//"+e.profileContacts.twitter,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:g.a.icon,alt:"f",src:k})}),e.profileContacts.instagram&&Object(r.jsx)("a",{href:"//"+e.profileContacts.instagram,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:g.a.icon,alt:"f",src:y})}),e.profileContacts.youtube&&Object(r.jsx)("a",{href:"//"+e.profileContacts.youtube,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:g.a.icon,alt:"f",src:w})}),e.profileContacts.github&&Object(r.jsx)("a",{href:"//"+e.profileContacts.github,target:"_blank",rel:"noreferrer",children:Object(r.jsx)("img",{className:g.a.icon,alt:"f",src:S})})]})},C=s(8),M=s.n(C),U=s(13),L=s(302),A=function(e){var t=e.labelName,s=e.inputName,a=void 0===s?t:s,i=e.register,o=e.placeholder,c=e.type,n=void 0===c?"text":c;return Object(r.jsxs)("div",{className:f.a.social,children:[Object(r.jsxs)("label",{className:f.a.label,htmlFor:t,children:[t,":"]}),"checkbox"===n?Object(r.jsx)("input",{type:n,name:a,ref:i}):Object(r.jsx)("input",{type:n,name:a,placeholder:o,ref:i})]})},W=function(e){var t=e.outFromEditMode,s=e.saveProfile,i=e.profile,o=Object(L.a)({defaultValues:Object(a.a)({},i)}),c=o.register,n=o.errors,l=o.handleSubmit;console.log(n);var p=function(){var e=Object(U.a)(M.a.mark((function e(a){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(a,i.userId).then((function(){t()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{name:"about",className:f.a.descriptionEdit,onSubmit:l(p),children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(A,{labelName:"Full Name",inputName:"fullName",register:c}),Object(r.jsx)(A,{labelName:"Looking for a job",inputName:"lookingForAJob",register:c,type:"checkbox"}),Object(r.jsx)(A,{labelName:"About job",inputName:"lookingForAJobDescription",register:c}),Object(r.jsx)(A,{labelName:"About me",inputName:"aboutMe",register:c})]}),Object(r.jsx)("div",{className:f.a.mySocials,children:Object(r.jsx)("h4",{children:"My socials"})}),Object(r.jsx)("div",{className:f.a.edit,children:Object(r.jsx)("button",{type:"submit",className:f.a.editBtn,children:"Save"})}),Object(r.jsx)("div",{}),Object(r.jsxs)("div",{className:f.a.socialsInputs,children:[Object(r.jsx)(A,{labelName:"facebook",inputName:"contacts.facebook",placeholder:"website.com",register:c}),Object(r.jsx)(A,{labelName:"github",inputName:"contacts.github",placeholder:"website.com",register:c}),Object(r.jsx)(A,{labelName:"instagram",inputName:"contacts.instagram",placeholder:"website.com",register:c}),Object(r.jsx)(A,{labelName:"twitter",inputName:"contacts.twitter",placeholder:"website.com",register:c}),Object(r.jsx)(A,{labelName:"vk",inputName:"contacts.vk",placeholder:"website.com",register:c}),Object(r.jsx)(A,{labelName:"website",inputName:"contacts.website",placeholder:"website.com",register:c}),Object(r.jsx)(A,{labelName:"youtube",inputName:"contacts.youtube",placeholder:"website.com",register:c})]})]})},D=function(e){var t=e.status,s=e.updateUserStatus,a=e.profile,i=e.isOwner,o=e.goToEditMode;return Object(r.jsxs)("div",{className:f.a.description,children:[Object(r.jsx)("h1",{children:a.fullName}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{className:f.a.edit,children:i&&Object(r.jsx)("button",{onClick:function(){return o()},className:f.a.editBtn,children:"Edit"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{status:t,updateUserStatus:s,isOwner:i}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"About me: "})," ",a.aboutMe]}),Object(r.jsxs)("div",{children:[" ",a.lookingForAJob?Object(r.jsxs)("div",{className:f.a.job,children:[Object(r.jsx)("b",{children:" Looking for a job"})," : yes",Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"About job:"})," ",a.lookingForAJobDescription]})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"Looking for a job: "}),"no"]})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"My social links:"}),Object(r.jsx)(I,{profileContacts:a?a.contacts:null})]}),Object(r.jsx)("div",{})]})},E=function(e){var t=e.profile,s=e.status,a=e.updateUserStatus,i=e.saveProfile,o=Object(j.a)(e,["profile","status","updateUserStatus","saveProfile"]),c=Object(l.useState)(!1),n=Object(b.a)(c,2),p=n[0],u=n[1];if(!t)return Object(r.jsx)(d.a,{});return Object(r.jsx)("div",{className:f.a.myPage,children:Object(r.jsxs)("div",{className:f.a.info,children:[Object(r.jsxs)("div",{className:f.a.ava,children:[Object(r.jsx)("div",{className:f.a.ava__wrapper,children:Object(r.jsx)("img",{src:t.photos.large||O.a,alt:""})}),o.isOwner&&Object(r.jsx)("input",{className:f.a.fileInput,type:"file",onChange:function(e){e.target.files.length&&o.savePhoto(e.target.files[0])}})]}),p?Object(r.jsx)(W,{outFromEditMode:function(){u(!1)},saveProfile:i,profile:t}):Object(r.jsx)(D,{isOwner:o.isOwner,status:s,updateUserStatus:a,profile:t,goToEditMode:function(){u(!0)}})]})})},F=s(62),B=s(300),J=s.n(B),T=s(301),q=s.n(T),H=s.p+"static/media/heart.c31d61db.svg",V=s.p+"static/media/heart-clicked.fb824694.svg",z=function(e){return Object(r.jsxs)("div",{className:q.a.wrapper,children:[Object(r.jsx)("img",{className:q.a.ava,src:e.profile&&e.profile.photos.small?e.profile.photos.small:O.a,alt:""}),Object(r.jsxs)("div",{className:q.a.inner,children:[Object(r.jsxs)("div",{className:q.a.content,children:[Object(r.jsx)("h4",{className:q.a.name,children:e.profile&&e.profile.fullName}),e.message]}),Object(r.jsxs)("div",{className:q.a.likeWrapper,children:[Object(r.jsx)("div",{className:q.a.count,children:e.likesCount}),Object(r.jsx)("div",{className:q.a.imgWrapper,onClick:function(){return e.toggleLike(e.id)},children:Object(r.jsx)("img",{className:q.a.like,src:e.liked?V:H,alt:""})})]})]})]})},X=s(134),Y=s(61),G=s(135),K=s(74),Q=s(73),R=Object(K.a)(100),Z=Object(G.a)({form:"post",onSubmitSuccess:function(e,t){return t(Object(Y.a)("post"))}})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,className:J.a.postWrapper,children:[Object(r.jsx)(X.a,{component:Q.c,validate:[K.b,R],type:"text",name:"post",errorclass:J.a.errorMsg,placeholder:"Type your thoughts..."}),Object(r.jsx)("div",{className:J.a.btnWrapper,children:Object(r.jsx)("button",{type:"submit",className:J.a.btn,children:"Add post"})})]})})),$=p.a.memo((function(e){var t=e.posts.map((function(t){return Object(r.jsx)(z,{message:t.message,likesCount:t.likesCount,liked:t.liked,profile:e.profile,toggleLike:e.toggleLike,id:t.id},t.id)}));return Object(r.jsxs)("div",{className:J.a.wrapper,children:[Object(r.jsx)("div",{className:J.a.empty}),Object(r.jsxs)("div",{className:J.a.posts,children:[Object(r.jsx)("h4",{className:J.a.title,children:"My posts"}),Object(r.jsx)(Z,{onSubmit:function(t){e.addPost(t.post)}}),t]})]})})),ee=s(15),te=Object(ee.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:F.a,toggleLike:F.g})($),se=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(E,{profile:e.profile,isOwner:e.isOwner,status:e.status,updateUserStatus:e.updateUserStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(r.jsx)(te,{profile:e.profile})]})},ae=s(11),re=s(9),ie=function(e){Object(c.a)(s,e);var t=Object(n.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(r.jsx)(se,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile,isOwner:!this.props.match.params.userId,status:this.props.status,updateUserStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),s}(p.a.Component);t.default=Object(re.d)(Object(ee.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:F.c,getUserStatus:F.d,updateUserStatus:F.h,savePhoto:F.e,saveProfile:F.f}),ae.f)(ie)}}]);
//# sourceMappingURL=3.6bce4213.chunk.js.map