import{aG as m,B as i,aC as g,_ as u,s as l}from"./index-ce020a9a.js";import{a as d,C as E}from"./setErc20Allowance-4d5b772d.browser.esm-0fd1a65f.js";const h=(()=>m("0x80ac58cd"))(),C=(()=>m("0xd9b67a26"))(),_={name:"Failed to load NFT metadata"};async function R(t,a,e){if(a.startsWith("data:application/json;base64")&&typeof Buffer<"u"){const s=a.split(",")[1],o=JSON.parse(Buffer.from(s,"base64").toString("utf-8"));return d.parse({...o,id:i.from(t).toString(),uri:a})}const r=a.replace("{id}",g(i.from(t).toHexString(),32).slice(2));let n;try{n=await e.downloadJSON(r)}catch{const o=a.replace("{id}",i.from(t).toString());try{n=await e.downloadJSON(o)}catch{console.warn(`failed to get token metadata: ${JSON.stringify({tokenId:t.toString(),tokenUri:a})} -- falling back to default metadata`),n=_}}return d.parse({...n,id:i.from(t).toString(),uri:a})}async function N(t,a,e,r){let n;const s=(await u(()=>import("./IERC165-acb33597.js"),[])).default,o=new l(t,s,a),[p,w]=await Promise.all([o.supportsInterface(h),o.supportsInterface(C)]);if(p){const c=(await u(()=>import("./index-ce020a9a.js").then(f=>f.dO),["assets/index-ce020a9a.js","assets/index-5cbbb5e6.css"])).default;n=await new l(t,c,a).tokenURI(e)}else if(w){const c=(await u(()=>import("./index-ce020a9a.js").then(f=>f.dQ),["assets/index-ce020a9a.js","assets/index-5cbbb5e6.css"])).default;n=await new l(t,c,a).uri(e)}else throw Error("Contract must implement ERC 1155 or ERC 721.");return n?R(e,n,r):d.parse({..._,id:i.from(e).toString(),uri:""})}async function F(t,a){return typeof t=="string"?t:await a.upload(E.parse(t))}async function S(t,a,e,r){if(y(t))return t;if(I(t))return await a.uploadBatch(t.map(s=>E.parse(s)),{rewriteFileNames:{fileStartNumber:e||0},onProgress:r==null?void 0:r.onProgress});throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function A(t){const a=t[0].substring(0,t[0].lastIndexOf("/"));for(let e=0;e<t.length;e++){const r=t[e].substring(0,t[e].lastIndexOf("/"));if(a!==r)throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${a}' but got '${r}'`)}return a.replace(/\/$/,"")+"/"}function y(t){return t.find(a=>typeof a!="string")===void 0}function I(t){return t.find(a=>typeof a!="object")===void 0}const x=100;export{x as D,_ as F,h as I,C as a,R as b,S as c,N as f,A as g,F as u};