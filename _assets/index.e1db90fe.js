import{a as e,r as a,i as n,o,j as l,k as s}from"./index.db24b8f1.js";import"./xlsx.a48e520c.js";import{T as d}from"./index.a5d34153.js";var t=e({components:{Tinymce:d},setup:()=>({handleChange:function(e){},value:a("hello world!")})});const r={class:"p-4"};t.render=function(e,a,d,t,i,u){const m=n("Tinymce");return o(),l("div",r,[s(m,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,width:"100%"},null,8,["modelValue","onChange"])])};export default t;