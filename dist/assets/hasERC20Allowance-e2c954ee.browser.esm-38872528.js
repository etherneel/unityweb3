import{_ as l,C as w}from"./index-ce020a9a.js";async function g(e,a,t){const n=e.getProvider(),r=(await l(()=>import("./index-ce020a9a.js").then(i=>i.dM),["assets/index-ce020a9a.js","assets/index-5cbbb5e6.css"])).default,s=new w(n,a,r,{},e.storage),o=await e.getSignerAddress(),d=e.address;return(await s.read("allowance",[o,d])).gte(t)}export{g as h};