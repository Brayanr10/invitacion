import{_ as m,S as r,o as s,c as p,f as i,g as a,x as d,r as u}from"./app-af524dac.js";const h={data(){return{event:null,loader:!1,currentComponent:null}},mounted(){this.getdata()},methods:{async getdata(){this.loader=!0;try{const e={event:this.$route.params.name},t=await axios.post("/client/event",e);this.event=t.data.event,this.event&&this.event.status<2?this.currentComponent=t.data.event.template.name+"_Tarjeta":this.$router.push({name:"Home"}),this.loader=!1}catch(e){console.error("Error searching event:",e)}},getscreenwidth(){this.position="top-end",window.screen.width<768&&(this.position="top")},notification(e,t){this.getscreenwidth(),r.mixin({toast:!0,position:this.position,showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:o=>{o.addEventListener("mouseenter",r.stopTimer),o.addEventListener("mouseleave",r.resumeTimer)}}).fire({icon:t,title:e})}}};function v(e,t,c,o,n,f){const l=u("loader");return s(),p("div",null,[n.loader?(s(),i(l,{key:0})):a("",!0),n.currentComponent?(s(),i(d(n.currentComponent),{key:1,event:n.event},null,8,["event"])):a("",!0)])}const w=m(h,[["render",v]]);export{w as default};
