import{c5 as e,a as r,r as i,u as o,M as t,D as s,a1 as a,cG as n,i as d,o as m,j as l,a8 as p,a9 as c,a6 as f,a7 as u,k as j,w as b,n as x,m as g}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.91e4153e.js";import"./index.51976da2.js";import"./Trigger.a445e86a.js";import"./omit.149aedfc.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.afd9afdf.js";import"./CheckOutlined.0ff5e6b7.js";import"./index.0c15d5ff.js";import"./colors.1efe187d.js";import"./index.5f1f44bb.js";import"./RightOutlined.0310d066.js";import"./index.2bdd82eb.js";import"./types.0700a3df.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ad94a28d.js";import"./_baseFor.f4e5f03f.js";import"./index.a172b251.js";import"./index.d7919071.js";import"./index.ed1896d8.js";import"./UpOutlined.060f27ef.js";import"./LeftOutlined.fa221124.js";import"./index.3ae0f855.js";import"./index.13851d4b.js";import"./index.73c71c16.js";import"./index.6e5663f8.js";import"./zh_CN.0242bd16.js";import{T as E}from"./TableAction.9af41b2c.js";import"./index.c6c01f68.js";import"./CaretDownFilled.65d9b2c0.js";import"./CheckOutlined.b19c1a43.js";import"./CloseOutlined.6993095c.js";import{s as y}from"./EditTableHeaderIcon.e605ef8a.js";import"./DownOutlined.39a8d1c3.js";import"./FullscreenOutlined.af1017f1.js";import"./LeftOutlined.e6de4091.js";import"./functional.46443edd.js";import"./RightOutlined.fc1e80b2.js";import"./useContext.1c84e748.js";import"./useTimeout.0fb9d179.js";import"./useDebounce.460c0b67.js";import"./useEventListener.dafd0e6c.js";import"./useBreakpoint.9e160351.js";import"./useDescription.cff01a88.js";import"./index.4941cb74.js";import"./index.b191181c.js";import"./tsxHelper.20d71045.js";import"./index.85a2c56f.js";import"./propTypes.7f710850.js";import"./index.2e04fe2b.js";import"./useForm.a4438e73.js";import{u as T}from"./index.720a235c.js";import"./useModalContext.e5c00ab2.js";import"./domUtils.e32f343e.js";import"./useFullScreen.55ea9361.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.bee853aa.js";import"./useExpose.0faa79f6.js";import"./index.bf39ee0d.js";import{u as C}from"./useTable.3fed69a5.js";import{getColumns as D}from"./data.977d6d39.js";import R from"./DetailModal.7f225040.js";var h;(h||(h={})).Error="/error";var k=r({name:"ErrorHandler",components:{DetailModal:R,BasicTable:y,TableAction:E},setup(){const r=i(),d=i([]),{t:m}=o(),[l,{setTableData:p}]=C({title:m("sys.errorLog.tableTitle"),columns:D(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[c,{openModal:f}]=T();return t((()=>n.getErrorInfoState),(e=>{s((()=>{p(a(e))}))}),{immediate:!0}),{register:l,registerModal:c,handleDetail:function(e){r.value=e,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:h.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:m}}});const w={class:"p-4"};k.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return m(),l("div",w,[(m(!0),l(p,null,c(e.imgListRef,(e=>f((m(),l("img",{key:e,src:e},null,8,["src"])),[[u,!1]]))),128)),j(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),j(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[j(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),j(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),j(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[j(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default k;