var s=Object.defineProperty;var n=(e,a,t)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var r=(e,a,t)=>(n(e,typeof a!="symbol"?a+"":a,t),t);import{af as c,ag as o,c as p,T as f}from"./index-ce020a9a.js";class l{constructor(a){r(this,"featureName",c.name);r(this,"set",p(async a=>{const t=await o.parseAsync(a);return f.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[t.platform_fee_recipient,t.platform_fee_basis_points]})}));this.contractWrapper=a}async get(){const[a,t]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return o.parseAsync({platform_fee_recipient:a,platform_fee_basis_points:t})}}export{l as C};
