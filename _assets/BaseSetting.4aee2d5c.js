let e=document.createElement("style");e.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(e);import{ck as t,a as s,B as o,M as i,h as a,V as r,W as d,i as n,o as c,j as m,X as p,k as l,n as u}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./index.6aa4fb10.js";import"./Trigger.69a42174.js";import"./omit.2978fa0a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.52f031c1.js";import"./CheckOutlined.d04cd0d0.js";import{s as j,U as b}from"./index.3d914ca4.js";import"./index.3926bcc0.js";import"./colors.7cad5419.js";import"./index.73d6b745.js";import"./RightOutlined.6271d6f8.js";import"./index.309c8c25.js";import"./types.19f6acce.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4a4f7bba.js";import"./index.de1b91a6.js";import"./index.2d1b8ed6.js";import"./UpOutlined.9fb79b46.js";import"./DownOutlined.28064e9e.js";import"./index.34bfa216.js";import"./index.ae35b363.js";import"./index.257889b7.js";import{s as f}from"./index.ece84d19.js";import"./CloseOutlined.11b614e0.js";import"./index.6b4afdd3.js";import"./LeftOutlined.a0990950.js";import"./functional.d4e0e18b.js";import"./RightOutlined.1397f8a7.js";import"./useContext.114680ae.js";import"./useTimeout.0990510e.js";import"./useDebounce.9e3543c4.js";import"./useEventListener.c24bc5c8.js";import"./useBreakpoint.a0fed2b4.js";import"./resizeEvent.e79f1ab5.js";import"./domUtils.8b34c94c.js";import"./tsxHelper.24b178b2.js";import"./useExpose.03135198.js";import"./animation.f3edcb57.js";import"./useScrollTo.ef044c36.js";import"./index.47077e70.js";import"./index.aa07d4db.js";import"./propTypes.db13ce1b.js";import{h as x}from"./header.817c2c65.js";import{I as h}from"./index.44bbd0bc.js";import"./index.bb2606ae.js";import"./useWindowSizeFn.bf57cf6c.js";import"./uuid.40269c00.js";import"./download.492c51b9.js";import{u as g}from"./useForm.648d9376.js";import{b as C}from"./data.8adaf682.js";var _;(_||(_={})).ACCOUNT_INFO="/account/getAccountInfo";var v=s({components:{BasicForm:j,CollapseContainer:f,Button:o,Upload:b,Icon:h},setup(){const{createMessage:e}=a(),[s,{setFieldsValue:o}]=g({labelWidth:120,schemas:C,showActionButtonGroup:!1});return i((async()=>{const e=await t.request({url:_.ACCOUNT_INFO,method:"GET"});o(e)})),{headerImg:x,register:s,handleSubmit:()=>{e.success("更新成功！")}}}});const O=p("data-v-c0c2b920");r("data-v-c0c2b920");const w={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),I=u("更换头像 "),T=u("更新基本信息");d();const F=O(((e,t,s,o,i,a)=>{const r=n("BasicForm"),d=n("a-col"),p=n("Icon"),u=n("Button"),j=n("Upload"),b=n("a-row"),f=n("CollapseContainer");return c(),m(f,{title:"基本设置",canExpan:!1},{default:O((()=>[l(b,{gutter:24},{default:O((()=>[l(d,{span:14},{default:O((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:O((()=>[l("div",w,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(j,{showUploadList:!1},{default:O((()=>[l(u,{type:"ghost",class:"ml-5"},{default:O((()=>[l(p,{icon:"feather:upload"}),I])),_:1})])),_:1})])])),_:1})])),_:1}),l(u,{type:"primary",onClick:e.handleSubmit},{default:O((()=>[T])),_:1},8,["onClick"])])),_:1})}));v.render=F,v.__scopeId="data-v-c0c2b920";export default v;