(window["webpackJsonpazure-acrobats"]=window["webpackJsonpazure-acrobats"]||[]).push([[0],{120:function(e,t,a){e.exports=a(337)},129:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(45),o=a.n(s),l=a(12),c=a(29),i=a(114),u=a(115),m=a(6),d=JSON.parse(localStorage.getItem("user")),h=d?{isLoggedIn:!0,user:d}:{isLoggedIn:!1,user:null},p={},g=[];var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"RETRIEVE_USER":return n;case"DELETE_USER":return e.filter((function(e){return e.id!==n.id}));default:return e}},v={items:[],loading:!0,error:null};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RETRIEVE_HOUSEHOLDS_BEGIN":return Object(m.a)(Object(m.a)({},e),{},{items:[],loading:!0,error:null});case"RETRIEVE_HOUSEHOLDS_SUCCESS":return console.log(t.payload),Object(m.a)(Object(m.a)({},e),{},{items:t.payload,loading:!1,error:null});case"RETRIEVE_HOUSEHOLDS_FAIL":return Object(m.a)(Object(m.a)({},e),{},{items:[],loading:!1,error:t.payload});default:return e}},b={items:[],loading:!0,error:null};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RETRIEVE_TRANSACTIONS_BEGIN":return Object(m.a)(Object(m.a)({},e),{},{items:[],loading:!0,error:null});case"RETRIEVE_TRANSACTIONS_SUCCESS":return console.log(t.payload),Object(m.a)(Object(m.a)({},e),{},{items:t.payload,loading:!1,error:null});case"RETRIEVE_TRANSACTIONS_FAIL":return Object(m.a)(Object(m.a)({},e),{},{items:[],loading:!1,error:t.payload});default:return e}},y=Object(c.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"REGISTER_SUCCESS":case"REGISTER_FAIL":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!1});case"LOGIN_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!0,user:n.user});case"LOGIN_FAIL":case"LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{isLoggedIn:!1,user:null});default:return e}},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_MESSAGE":return{message:n};case"CLEAR_MESSAGE":return{message:""};default:return e}},user:E,household:f,transaction:O}),S=[u.a],j=Object(c.createStore)(y,{},Object(i.composeWithDevTools)(c.applyMiddleware.apply(void 0,S))),N=a(13),C=a(2),w=a(3),U=a(9),k=a(5),I=a(4),T=a(8),R=(a(128),a(129),a(47)),_=a.n(R),L=a(26),A=a.n(L),x=a(48),P=a.n(x),D=a(33),G=a.n(D),H=G.a.create({baseURL:"http://localhost:8080/api",headers:{"Content-type":"application/json"}}),F="http://localhost:8080/api/auth/",V=new(function(){function e(){Object(C.a)(this,e)}return Object(w.a)(e,[{key:"login",value:function(e,t){return G.a.post(F+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,a){return G.a.post(F+"signup",{username:e,email:t,password:a})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),B=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},M=function(e){Object(k.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(U.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(U.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(U.a)(n)),n.state={username:"",password:"",loading:!1},n}return Object(w.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),this.form.validateAll();var a,n,r=this.props,s=r.dispatch,o=r.history;0===this.checkBtn.context._errors.length?s((a=this.state.username,n=this.state.password,function(e){return V.login(a,n).then((function(t){return e({type:"LOGIN_SUCCESS",payload:{user:t}}),Promise.resolve()}),(function(t){var a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:"LOGIN_FAIL"}),e({type:"SET_MESSAGE",payload:a}),Promise.reject()}))})).then((function(){o.push("/profile"),window.location.reload()})).catch((function(){t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,n=t.message;return a?r.a.createElement(T.a,{to:"/profile"}):r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",{className:"d-flex justify-content-center"},"Welcome to the AzureAcrobats Project"),r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(_.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(A.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[B]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(A.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[B]})),r.a.createElement("div",{className:"form-group mt-3 d-flex"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Login")),r.a.createElement("div",{className:"ml-3"},r.a.createElement(N.b,{to:"/register",className:"nav-link"},"No account? Sign Up"))),n&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},n)),r.a.createElement(P.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),a}(n.Component);var z=Object(l.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,message:e.message.message}}))(M),W=a(116),J=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},q=function(e){if(!Object(W.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},K=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},Q=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},X=function(e){Object(k.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).handleRegister=n.handleRegister.bind(Object(U.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(U.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(U.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(U.a)(n)),n.state={username:"",email:"",password:"",successful:!1},n}return Object(w.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t,a,n,r=this;e.preventDefault(),this.setState({successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&this.props.dispatch((t=this.state.username,a=this.state.email,n=this.state.password,function(e){return V.register(t,a,n).then((function(t){return e({type:"REGISTER_SUCCESS"}),e({type:"SET_MESSAGE",payload:t.data.message}),Promise.resolve()}),(function(t){var a=t.response&&t.response.data&&t.response.data.message||t.message||t.toString();return e({type:"REGISTER_FAIL"}),e({type:"SET_MESSAGE",payload:a}),Promise.reject()}))})).then((function(){r.setState({successful:!0})})).catch((function(){r.setState({successful:!1})}))}},{key:"render",value:function(){var e=this,t=this.props.message;return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h3",{className:"d-flex justify-content-center"},"Welcome to the AzureAcrobats Project"),r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(_.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t}},!this.state.successful&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(A.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[J,K]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(A.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[J,q]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(A.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[J,Q]})),r.a.createElement("div",{className:"form-group mt-3 d-flex"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"),r.a.createElement("div",{className:"ml-3"},r.a.createElement(N.b,{to:"/login",className:"nav-link"},"Have an account? Sign in")))),t&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert"},t),r.a.createElement("div",{className:"form-group mt-3 d-flex"},r.a.createElement(N.b,{to:"/login",className:"nav-link"},"Log in"))),r.a.createElement(P.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),a}(n.Component);var Y=Object(l.b)((function(e){return{message:e.message.message}}))(X),Z=new(function(){function e(){Object(C.a)(this,e)}return Object(w.a)(e,[{key:"getUser",value:function(e){return H.get("http://localhost:8080/api/user/"+e)}},{key:"deleteUser",value:function(e){return H.delete("http://localhost:8080/api/user/"+e)}}]),e}()),$=a(34),ee=a.n($),te=a(68),ae=function(e){Object(k.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).getUser=n.getThisUser.bind(Object(U.a)(n)),n.removeUser=n.removeUser.bind(Object(U.a)(n)),n.state={currentUser:{id:null,username:"",email:""},message:""},n}return Object(w.a)(a,[{key:"getThisUser",value:function(e){var t=this;Z.getUser(e).then((function(e){t.setState({currentUser:e.data}),console.log(e.data)})).catch((function(e){console.log(e)}))}},{key:"removeUser",value:function(e){var t=this;this.props.deleteUser(e).then((function(){t.props.history.push("/"),V.logout(),t.state.currentUser=void 0,window.location.reload(),t.forceUpdate()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.user;return t?r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,"Welcome home, ",r.a.createElement("strong",null,t.username),"!")),r.a.createElement("p",null,"The email you have registered with is: ",r.a.createElement("strong",null,t.email)),r.a.createElement("p",null,"If this is not correct, you can delete your account and create a new one:"),r.a.createElement("button",{className:"btn btn-danger btn-block",onClick:function(){window.confirm("Delete account?")&&e.removeUser(t.id)}},"Delete Account")):r.a.createElement(T.a,{to:"/login"})}}]),a}(n.Component);var ne=Object(l.b)((function(e){return{user:e.auth.user}}),{deleteUser:function(e){return function(){var t=Object(te.a)(ee.a.mark((function t(a){return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z.deleteUser(e);case 3:a({type:"DELETE_USER",payload:{id:e}}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})(ae),re=a(119),se=function(e){Object(k.a)(a,e);var t=Object(I.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(re.a,{height:600,width:1e3,data:{labels:this.props.labels,datasets:[{label:!1,fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:this.props.data}]},options:{plugins:{legend:{display:!1}},scales:{y:{title:{display:!0,text:"Total Amount Spent in US Dollars",fontSize:20}}}}}))}}]),a}(n.Component),oe=function(e){Object(k.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={currentUser:{id:null,username:"",email:""},message:""},n}return Object(w.a)(a,[{key:"render",value:function(){return this.props.user?r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Dashboard"))),r.a.createElement(se,null)):(console.log("nope"),r.a.createElement(T.a,{to:"/login"}))}}]),a}(n.Component);var le=Object(l.b)((function(e){return{user:e.auth.user}}))(oe),ce={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}},ie=a(15),ue=Object(ie.a)(),me=new(function(){function e(){Object(C.a)(this,e)}return Object(w.a)(e,[{key:"getAllHouseholds",value:function(){return H.get("http://localhost:8080/api/households")}}]),e}()),de=function(){return{type:"RETRIEVE_HOUSEHOLDS_BEGIN"}},he=function(e){return{type:"RETRIEVE_HOUSEHOLDS_SUCCESS",payload:e}},pe=function(e){return{type:"RETRIEVE_HOUSEHOLDS_FAIL",payload:e}},ge=function(e){Object(k.a)(a,e);var t=Object(I.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch((function(e){return e(de()),me.getAllHouseholds().then((function(t){return e(he(t)),Promise.resolve()}),(function(t){return e(pe(t)),Promise.reject()}))}))}},{key:"render",value:function(){var e=this.props.households.error,t=this.props.households.loading,a=this.props.households.items;return t?r.a.createElement("div",{className:"spinner-border",role:"status"}):e?r.a.createElement("div",null,"Error! ",e.message):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"Households List"),r.a.createElement("ul",{className:"list-group"},a.data.map((function(e){return r.a.createElement("li",null,e.hshd_num)})))))}}]),a}(n.Component),Ee=Object(l.b)((function(e){return{households:e?e.household:[],loading:!e||e.loading,error:e?e.error:null}}))(ge),ve=new(function(){function e(){Object(C.a)(this,e)}return Object(w.a)(e,[{key:"getAllTransactions",value:function(){return H.get("http://localhost:8080/api/transactions")}}]),e}()),fe=function(){return{type:"RETRIEVE_TRANSACTIONS_BEGIN"}},be=function(e){return{type:"RETRIEVE_TRANSACTIONS_SUCCESS",payload:e}},Oe=function(e){return{type:"RETRIEVE_TRANSACTIONS_FAIL",payload:e}},ye=function(e){Object(k.a)(a,e);var t=Object(I.a)(a);function a(){return Object(C.a)(this,a),t.apply(this,arguments)}return Object(w.a)(a,[{key:"getById",value:function(e,t){var a,n=[];for(a=0;a<e.length;a++)console.log(e[a][t]),console.log(e[a]),n.push(e[a][t]);return n}},{key:"componentDidMount",value:function(){this.props.dispatch((function(e){return e(fe()),ve.getAllTransactions().then((function(t){return e(be(t)),Promise.resolve()}),(function(t){return e(Oe(t)),Promise.reject()}))}))}},{key:"render",value:function(){var e=this.props.transactions.error,t=this.props.transactions.loading,a=this.props.transactions.items;return console.log(a),t?r.a.createElement("div",{className:"spinner-border",role:"status"}):e?r.a.createElement("div",null,"Error! ",e.message):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"Transactions List"),r.a.createElement(se,{labels:this.getById(a.data[0],"year"),data:this.getById(a.data[0],"sum")})))}}]),a}(n.Component),Se=Object(l.b)((function(e){return{transactions:e?e.transaction:[],loading:!e||e.loading,error:e?e.error:null}}))(ye),je=function(e){Object(k.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).logOut=n.logOut.bind(Object(U.a)(n)),n.state={currentUser:void 0},ue.listen((function(t){e.dispatch({type:"CLEAR_MESSAGE"})})),n}return Object(w.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=V.getCurrentUser();t&&this.setState({currentUser:t}),ce.on("logout",(function(){e.logOut()}))}},{key:"componentWillUnmount",value:function(){ce.remove("logout")}},{key:"logOut",value:function(){V.logout(),this.setState({currentUser:void 0}),window.location.reload()}},{key:"render",value:function(){var e=this.state.currentUser;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark"},r.a.createElement(N.b,{to:"/",className:"navbar-brand myTestClass"},"AzureAcrobats"),r.a.createElement("div",{className:"navbar-nav mr-auto"}),e?r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/profile",className:"nav-link"},"Account")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/dashboard",className:"nav-link"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/households",className:"nav-link"},"Households")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/transactions",className:"nav-link"},"Transactions")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{to:"/login",className:"nav-link",onClick:this.logOut},"Log Out"))):r.a.createElement("div",null)),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/login",component:z}),r.a.createElement(T.b,{exact:!0,path:"/register",component:Y}),r.a.createElement(T.b,{exact:!0,path:"/dashboard",component:le}),r.a.createElement(T.b,{exact:!0,path:"/profile",component:ne}),r.a.createElement(T.b,{exact:!0,path:"/households",component:Ee}),r.a.createElement(T.b,{exact:!0,path:"/transactions",component:Se}))))}}]),a}(n.Component);var Ne=Object(l.b)((function(e){return{user:e.auth.user,household:e.household.household,transaction:e.transaction.transaction}}))(je);window.addEventListener("load",(function(){return o.a.render(r.a.createElement(l.a,{store:j},r.a.createElement(N.a,null,r.a.createElement(Ne,null))),document.getElementById("root"))}))}},[[120,1,2]]]);
//# sourceMappingURL=main.a2a9b02c.chunk.js.map