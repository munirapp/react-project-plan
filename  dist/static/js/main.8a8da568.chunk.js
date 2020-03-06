(this["webpackJsonpreact-firebase-project-plan"]=this["webpackJsonpreact-firebase-project-plan"]||[]).push([[0],{215:function(e,t,a){e.exports=a(415)},220:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(90),i=a.n(c),l=(a(220),a(19)),o=a(20),s=a(22),u=a(21),m=a(23),d=a(5),p=a(32),h=a(6),E=Object(h.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){return e({type:"LOGOUT_SUCCESS"})}))}))}}}))((function(e){var t=e.profile;return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Logout")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",className:"btn btn-floating pink lighten-1"},t.initials)))})),f=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signin"},"Login")))},b=Object(h.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(E,{profile:a}):r.a.createElement(f,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/",className:"brand-logo"},"React Project"),n))})),g=a(51),j=a.n(g),v=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},j()(e.time.toDate()).fromNow()))}))))))},N=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.authorFirstName),r.a.createElement("p",{className:"grey-text"},j()(t.createdAt.toDate()).format("DD MMM YYYY"))))},O=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(d.b,{to:"/project/".concat(e.id),key:e.id},r.a.createElement(N,{project:e}))})))},C=a(29),y=a(13),S=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.notifications;return r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 "},r.a.createElement(O,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(v,{notifications:a}))))}}]),t}(n.Component),w=Object(y.d)(Object(h.b)((function(e){return{projects:e.firestore.ordered.projects,notifications:e.firestore.ordered.notifications}})),Object(C.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(S),R=Object(y.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{detail:n?n[a]:null,auth:e.firebase.auth}})),Object(C.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.detail;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,t.authorFirstName),r.a.createElement("div",null,j()(t.createdAt.toDate()).startOf("hour").fromNow())))):r.a.createElement("div",{className:"container center"},"Loading..."):r.a.createElement(p.a,{to:"/signin"})})),x=a(31),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChage=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(this.props.auth.uid)return r.a.createElement(p.a,{to:"/"});var e=this.props.authError;return r.a.createElement("div",{className:"container "},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChage})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChage})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},e?r.a.createElement("p",null,e):null))))}}]),t}(n.Component),k=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){return e({type:"LOGIN_SUCCESS"})})).catch((function(t){return e({type:"LOGIN_ERROR",error:t})}))}));var a}}}))(F),I=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",fristname:"",lastname:""},a.handleChage=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=this.props.authError;return e.uid?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"container "},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChage})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChage})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstname"},"First Name"),r.a.createElement("input",{type:"text",id:"firstname",onChange:this.handleChage})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastname"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastname",onChange:this.handleChage})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Register"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),P=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){l.collection("users").doc(t.user.uid).set({firstName:e.firstname,lastName:e.lastname,initials:e.firstname[0]+e.lastname[0]})})).then((function(){return t({type:"SIGNUP_SUCCESS"})})).catch((function(e){return t({type:"SIGNUP_ERROR",error:e})}))}}(t))}}}))(I),L=a(40),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:" "},a.handleChage=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container "},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project "),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChage})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChage})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Submit")))):r.a.createElement(p.a,{to:"/signin"})}}]),t}(n.Component),U=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(L.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",error:e})}))}}(t))}}}))(A),_=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:w}),r.a.createElement(p.b,{path:"/project/:id",component:R}),r.a.createElement(p.b,{path:"/signin",component:k}),r.a.createElement(p.b,{path:"/signup",component:P}),r.a.createElement(p.b,{path:"/create",component:U}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G={authError:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("Login Error"),Object(L.a)({},e,{authError:"login failed"});case"LOGIN_SUCCESS":return console.log("Login Success"),Object(L.a)({},e,{authError:null});case"LOGOUT_SUCCESS":return console.log("signout success "),e;case"SIGNUP_SUCCESS":return console.log("signup success "),Object(L.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error "),console.log(t.error),Object(L.a)({},e,{authError:t.error.message});default:return e}},z={projects:[{id:1,title:"Lorem ipsum dolor amet 1",content:"blah blah"},{id:2,title:"Lorem ipsum dolor amet 2",content:"blah blah"},{id:3,title:"Lorem ipsum dolor ametm 3",content:"blah blah"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("create project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.error),e;default:return e}},J=a(52),W=Object(y.c)({auth:T,project:D,firebase:C.firebaseReducer,firestore:J.firestoreReducer}),B=a(213),M=a(53),Y=a.n(M);a(407),a(410),a(416),a(412);Y.a.initializeApp({apiKey:"AIzaSyCZeWShCV9xwRGibWCKMeG0FdAqO635z4s",authDomain:"https://reactredux-firebase-project.firebaseio.com",databaseURL:"https://reactredux-firebase-project.firebaseio.com",projectId:"reactredux-firebase-project",storageBucket:"reactredux-firebase-project.appspot.com",messagingSenderId:"449822517691",appId:"1:449822517691:web:d3ec0ceced8b5fb59efc9e",measurementId:"G-T60PQSXCHL"}),Y.a.firestore(),Y.a.analytics(),Y.a.database();var K=Y.a,q=Object(y.e)(W,Object(y.d)(Object(y.a)(B.a.withExtraArgument({getFirebase:C.getFirebase,getFirestore:J.getFirestore})),Object(J.reduxFirestore)(K))),H={firebase:K,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:q.dispatch,createFirestoreInstance:J.createFirestoreInstance};i.a.render(r.a.createElement(h.a,{store:q},r.a.createElement(C.ReactReduxFirebaseProvider,H,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[215,1,2]]]);
//# sourceMappingURL=main.8a8da568.chunk.js.map