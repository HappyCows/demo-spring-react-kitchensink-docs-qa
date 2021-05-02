(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{176:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return BasicLayout}));var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(478),_Footer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(177),_Navbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(178),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);function BasicLayout(props){var children=props.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Navbar__WEBPACK_IMPORTED_MODULE_2__.a,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a,{expand:"xl",className:"pt-4 flex-grow-1",children:children}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Footer__WEBPACK_IMPORTED_MODULE_1__.a,{})]})}BasicLayout.__docgenInfo={description:"",methods:[],displayName:"BasicLayout"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/layouts/BasicLayout/BasicLayout.js"]={name:"BasicLayout",docgenInfo:BasicLayout.__docgenInfo,path:"src/main/layouts/BasicLayout/BasicLayout.js"})},177:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Footer}));var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(478),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);function Footer(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer",{className:"bg-light pt-3 pt-md-4 pb-4 pb-md-5",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"This is a sample webapp using React with a Spring Boot backend."})})})}Footer.__docgenInfo={description:"",methods:[],displayName:"Footer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/layouts/BasicLayout/Footer.js"]={name:"Footer",docgenInfo:Footer.__docgenInfo,path:"src/main/layouts/BasicLayout/Footer.js"})},178:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Navbar_Navbar}));var Navbar=__webpack_require__(900),Container=__webpack_require__(478),Button=__webpack_require__(905),react_router_dom=__webpack_require__(172),regenerator=__webpack_require__(180),regenerator_default=__webpack_require__.n(regenerator),asyncToGenerator=__webpack_require__(303),useQuery=__webpack_require__(902),QueryClientProvider=__webpack_require__(225),useMutation=__webpack_require__(904),axios=__webpack_require__(304),axios_default=__webpack_require__.n(axios),react_router=__webpack_require__(21);var jsx_runtime=__webpack_require__(6);function Navbar_Navbar(){var currentUser=function useCurrentUser(){return Object(useQuery.a)("current user",Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee(){var response;return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,axios_default.a.get("/api/currentUser");case 3:return response=_context.sent,_context.abrupt("return",{loggedIn:!0,root:response.data});case 7:return _context.prev=7,_context.t0=_context.catch(0),_context.abrupt("return",{loggedIn:!1,root:null});case 10:case"end":return _context.stop()}}),_callee,null,[[0,7]])}))),{initialData:{loggedIn:!1,root:null}})}().data,doLogout=function useLogout(){var queryClient=Object(QueryClientProvider.b)(),navigate=Object(react_router.f)();return Object(useMutation.a)(Object(asyncToGenerator.a)(regenerator_default.a.mark((function _callee2(){return regenerator_default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,axios_default.a.post("/logout");case 2:return _context2.next=4,queryClient.resetQueries("current user",{exact:!0});case 4:navigate("/");case 5:case"end":return _context2.stop()}}),_callee2)})))).mutate}();return Object(jsx_runtime.jsx)(Navbar.a,{expand:"xl",variant:"dark",bg:"dark",sticky:"top",children:Object(jsx_runtime.jsxs)(Container.a,{children:[Object(jsx_runtime.jsx)(Navbar.a.Brand,{as:react_router_dom.a,to:"/",children:"Kitchen Sink"}),Object(jsx_runtime.jsx)(Navbar.a.Toggle,{}),Object(jsx_runtime.jsx)(Navbar.a.Collapse,{className:"justify-content-end",children:currentUser.loggedIn?Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)(Navbar.a.Text,{className:"me-3",as:react_router_dom.a,to:"/profile",children:["Welcome, ",currentUser.root.user.email]}),Object(jsx_runtime.jsx)(Button.a,{onClick:doLogout,children:"Log Out"})]}):Object(jsx_runtime.jsx)(Button.a,{href:"/oauth2/authorization/google",children:"Log In"})})]})})}Navbar_Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/layouts/BasicLayout/Navbar.js"]={name:"Navbar",docgenInfo:Navbar_Navbar.__docgenInfo,path:"src/main/layouts/BasicLayout/Navbar.js"})},499:function(module,exports,__webpack_require__){__webpack_require__(500),__webpack_require__(655),__webpack_require__(656),__webpack_require__(883),__webpack_require__(884),__webpack_require__(887),__webpack_require__(888),__webpack_require__(886),__webpack_require__(885),__webpack_require__(889),__webpack_require__(890),module.exports=__webpack_require__(860)},567:function(module,exports){},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(352)},857:function(module,exports,__webpack_require__){},860:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(352).configure)([__webpack_require__(861),__webpack_require__(862)],module,!1)}).call(this,__webpack_require__(205)(module))},861:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=861},862:function(module,exports,__webpack_require__){var map={"./stories/components/Profile/RoleBadge.stories.js":891,"./stories/layouts/BasicLayout/BasicLayout.stories.js":863,"./stories/layouts/BasicLayout/Footer.stories.js":881,"./stories/layouts/BasicLayout/Navbar.stories.js":882,"./stories/pages/HomePage/HomePage.stories.js":892};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=862},863:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_demo_spring_react_kitchensink_demo_spring_react_kitchensink_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(76),main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(176)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);__webpack_exports__.default={title:"layouts/BasicLayout/BasicLayout",component:main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_layouts_BasicLayout_BasicLayout__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_demo_spring_react_kitchensink_demo_spring_react_kitchensink_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => <BasicLayout />"}},Default.parameters)},881:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_demo_spring_react_kitchensink_demo_spring_react_kitchensink_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(76),main_layouts_BasicLayout_Footer__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(177)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);__webpack_exports__.default={title:"layouts/BasicLayout/Footer",component:main_layouts_BasicLayout_Footer__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_layouts_BasicLayout_Footer__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_demo_spring_react_kitchensink_demo_spring_react_kitchensink_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n    return (\n        <Footer />\n    )\n}"}},Default.parameters)},882:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_runner_work_demo_spring_react_kitchensink_demo_spring_react_kitchensink_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(76),main_layouts_BasicLayout_Navbar__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(178)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);__webpack_exports__.default={title:"layouts/BasicLayout/Navbar",component:main_layouts_BasicLayout_Navbar__WEBPACK_IMPORTED_MODULE_2__.a};var Default=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(main_layouts_BasicLayout_Navbar__WEBPACK_IMPORTED_MODULE_2__.a,{})}.bind({});Default.parameters=Object(_home_runner_work_demo_spring_react_kitchensink_demo_spring_react_kitchensink_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => <Navbar />"}},Default.parameters)},890:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));var client_api=__webpack_require__(903),esm=__webpack_require__(7),queryClient=(__webpack_require__(857),__webpack_require__(858),__webpack_require__(901)),QueryClientProvider=__webpack_require__(225),react_router=__webpack_require__(21),jsx_runtime=__webpack_require__(6),parameters={actions:{argTypesRegex:"^on[A-Z].*"}},preview_queryClient=new queryClient.a,decorators=[function(Story){return Object(jsx_runtime.jsx)(QueryClientProvider.a,{client:preview_queryClient,children:Object(jsx_runtime.jsx)(react_router.a,{children:Object(jsx_runtime.jsx)(Story,{})})})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},891:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"noRole",(function(){return noRole})),__webpack_require__.d(__webpack_exports__,"admin",(function(){return admin}));var objectSpread2=__webpack_require__(76),Badge=(__webpack_require__(0),__webpack_require__(899)),jsx_runtime=__webpack_require__(6);function RoleBadge(_ref){var role=_ref.role,roles=_ref.currentUser.root.roles.map((function(o){return o.authority})),stringToMatch="ROLE_".concat(role);return roles.includes(stringToMatch)?Object(jsx_runtime.jsx)(Badge.a,{className:"bg-primary",children:role.toLowerCase()}):Object(jsx_runtime.jsx)("span",{className:"missing-role","data-missingRole":role})}RoleBadge.__docgenInfo={description:"",methods:[],displayName:"RoleBadge"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/components/Profile/RoleBadge.js"]={name:"RoleBadge",docgenInfo:RoleBadge.__docgenInfo,path:"src/main/components/Profile/RoleBadge.js"});__webpack_exports__.default={title:"components/Profile/RoleBadge",component:RoleBadge};var RoleBadge_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(RoleBadge,Object(objectSpread2.a)({},args))},noRole=RoleBadge_stories_Template.bind({}),admin=RoleBadge_stories_Template.bind({});admin.args={role:"admin"},noRole.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n    return (\n        <RoleBadge {...args} />\n    )\n}"}},noRole.parameters),admin.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\n    return (\n        <RoleBadge {...args} />\n    )\n}"}},admin.parameters)},892:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(76),BasicLayout=(__webpack_require__(0),__webpack_require__(176)),jsx_runtime=__webpack_require__(6);function HomePage(){return Object(jsx_runtime.jsx)(BasicLayout.a,{children:Object(jsx_runtime.jsxs)("div",{className:"pt-2",children:[Object(jsx_runtime.jsx)("h1",{children:"Hello, world!"}),Object(jsx_runtime.jsx)("p",{children:"This is a webapp containing a bunch of different Spring Boot/React examples."})]})})}HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/main/pages/HomePage/HomePage.js"]={name:"HomePage",docgenInfo:HomePage.__docgenInfo,path:"src/main/pages/HomePage/HomePage.js"});__webpack_exports__.default={title:"pages/HomePage/HomePage",component:HomePage};var Default=function Template(){return Object(jsx_runtime.jsx)(HomePage,{})}.bind({});Default.parameters=Object(objectSpread2.a)({storySource:{source:"() => <HomePage />"}},Default.parameters)}},[[499,2,3]]]);