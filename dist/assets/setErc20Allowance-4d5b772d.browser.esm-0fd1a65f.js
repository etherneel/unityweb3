import{f as w,_ as f,C,E as n,aD as l,aE as N,aF as c}from"./index-ce020a9a.js";const r=(()=>n.object({}).catchall(n.union([c,n.unknown()])))(),u=(()=>n.union([n.array(r),r]).optional().nullable())(),h=(()=>n.object({name:n.union([n.string(),n.number()]).optional().nullable(),description:n.string().nullable().optional().nullable(),image:l.nullable().optional(),animation_url:l.optional().nullable()}))(),p=(()=>h.extend({external_url:l.nullable().optional(),background_color:N.optional().nullable(),properties:u,attributes:u}).catchall(n.union([c,n.unknown()])))(),F=(()=>n.union([p,n.string()]))(),I=(()=>p.extend({id:n.string(),uri:n.string(),image:n.string().nullable().optional(),external_url:n.string().nullable().optional(),animation_url:n.string().nullable().optional()}))();async function O(a,t,e,o){if(w(e))o.value=t;else{const g=(await f(()=>import("./index-ce020a9a.js").then(_=>_.dM),["assets/index-ce020a9a.js","assets/index-5cbbb5e6.css"])).default,b=a.getSigner(),m=a.getProvider(),i=new C(b||m,e,g,a.options,a.storage),d=await a.getSignerAddress(),s=a.address;return(await i.read("allowance",[d,s])).lt(t)&&await i.sendTransaction("approve",[s,t]),o}}export{h as B,p as C,F as N,I as a,O as s};
