let e=document.createElement("style");e.innerHTML=".vben-setting-input-number-item[data-v-9dadcc20]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-input-number-item-input-number[data-v-9dadcc20]{width:126px}",document.head.appendChild(e);import{a as t,au as n,i as a,o as s,j as i,k as r,n as d,v as p,aR as m}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import"./DownOutlined.68db0f8a.js";import"./UpOutlined.611d51a7.js";import"./index.44fa6ce0.js";import{I as u}from"./index.5c08980b.js";import"./SettingOutlined.43ab4768.js";import"./index.abf33e7c.js";import"./useHeaderSetting.1ae12495.js";import{b as l}from"./index.67fc1421.js";var o=t({name:"InputNumberItem",components:{InputNumber:u},props:{event:{type:Number,default:()=>{}},title:{type:String}},setup(e){const{prefixCls:t}=n("setting-input-number-item");return{prefixCls:t,handleChange:function(t){e.event&&l(e.event,t)}}}});const c=m("data-v-9dadcc20")(((e,t,n,m,u,l)=>{const o=a("InputNumber");return s(),i("div",{class:e.prefixCls},[r("span",null,d(e.title),1),r(o,p(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));o.render=c,o.__scopeId="data-v-9dadcc20";export default o;