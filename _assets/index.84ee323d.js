import{a as t,P as a,ad as s,G as r,J as e,D as i,ac as n,k as o,ai as c}from"./index.a4c995c9.js";function l(){return(l=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t}).apply(this,arguments)}function d(t,a,s){return a in t?Object.defineProperty(t,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[a]=s,t}var f=c(t({name:"AAvatar",props:{prefixCls:a.string,shape:a.oneOf(s("circle","square")),size:{type:[Number,String],default:"default"},src:a.string,srcset:a.string,srcSet:a.string,icon:a.VNodeChild,alt:a.string,loadError:{type:Function}},setup:function(){return{configProvider:r("configProvider",e)}},data:function(){return{isImgExist:!0,isMounted:!1,scale:1,lastChildrenWidth:void 0,lastNodeWidth:void 0}},watch:{src:function(){var t=this;i((function(){t.isImgExist=!0,t.scale=1,t.$forceUpdate()}))}},mounted:function(){var t=this;i((function(){t.setScale(),t.isMounted=!0}))},updated:function(){var t=this;i((function(){t.setScale()}))},methods:{setScale:function(){if(this.$refs.avatarChildren&&this.$refs.avatarNode){var t=this.$refs.avatarChildren.offsetWidth,a=this.$refs.avatarNode.offsetWidth;0===t||0===a||this.lastChildrenWidth===t&&this.lastNodeWidth===a||(this.lastChildrenWidth=t,this.lastNodeWidth=a,this.scale=a-8<t?(a-8)/t:1)}},handleImgLoadError:function(){var t=this.$props.loadError;!1!==(t?t():void 0)&&(this.isImgExist=!1)}},render:function(){var t,a,s,r,e=this.$props,i=e.prefixCls,c=e.shape,f=e.size,h=e.src,u=e.alt,p=e.srcset,v=e.srcSet,g=n(this,"icon"),m=(0,this.configProvider.getPrefixCls)("avatar",i),x=this.$data,y=x.isImgExist,C=x.scale,b=(x.isMounted,d(t={},"".concat(m,"-lg"),"large"===f),d(t,"".concat(m,"-sm"),"small"===f),t),$=l(l(d({},m,!0),b),(d(a={},"".concat(m,"-").concat(c),c),d(a,"".concat(m,"-image"),h&&y),d(a,"".concat(m,"-icon"),g),a)),E="number"==typeof f?{width:"".concat(f,"px"),height:"".concat(f,"px"),lineHeight:"".concat(f,"px"),fontSize:g?"".concat(f/2,"px"):"18px"}:{},W=null===(r=(s=this.$slots).default)||void 0===r?void 0:r.call(s);if(h&&y)W=o("img",{src:h,srcset:p||v,onError:this.handleImgLoadError,alt:u},null);else if(g)W=g;else{if(this.$refs.avatarChildren||1!==C){var N="scale(".concat(C,") translateX(-50%)"),P={msTransform:N,WebkitTransform:N,transform:N},S="number"==typeof f?{lineHeight:"".concat(f,"px")}:{};W=o("span",{class:"".concat(m,"-string"),ref:"avatarChildren",style:l(l({},S),P)},[W])}else{W=o("span",{class:"".concat(m,"-string"),ref:"avatarChildren",style:{opacity:0}},[W])}}return o("span",{ref:"avatarNode",class:$,style:E},[W])}}));export{f as A};