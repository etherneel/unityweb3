var d=Object.defineProperty;var g=(s,a,t)=>a in s?d(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var e=(s,a,t)=>(g(s,typeof a!="symbol"?a+"":a,t),t);import{N as l,C,A as W,x as f,a as w,g as y,b as T,c as o,T as R}from"./index-ce020a9a.js";import{C as b,a as E,G as S,b as A}from"./contract-appuri-6fe9aa25.browser.esm-bf560959.js";import{C as B}from"./contract-interceptor-d7b164a7.browser.esm-7eabd2ea.js";import{C as M,a as O}from"./contract-owner-6f0acaff.browser.esm-c67960e8.js";import{C as v}from"./contract-platform-fee-4a052f76.browser.esm-46272db0.js";import{C as x}from"./contract-roles-e775ba00.browser.esm-acf1c144.js";import{C as I}from"./contract-sales-040b4893.browser.esm-47fbe394.js";import{S as P}from"./erc-721-standard-69619833.browser.esm-b66d04c4.js";import{E as k}from"./erc-721-45d9e775.browser.esm-04486fe8.js";import"./setErc20Allowance-4d5b772d.browser.esm-0fd1a65f.js";import"./QueryParams-e7d3e4f3.browser.esm-2d0d7110.js";import"./index-c75477f3.js";import"./treeify-8240d2bc.js";import"./assertEnabled-f3a1d1e6.browser.esm-298814b9.js";import"./drop-claim-conditions-448e3579.browser.esm-8f271ab3.js";const c=class c extends P{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,i,h,n);super(u,n,m);e(this,"mint",o(async t=>this.erc721.mint.prepare(t)));e(this,"mintTo",o(async(t,r)=>this.erc721.mintTo.prepare(t,r)));e(this,"mintBatch",o(async t=>this.erc721.mintBatch.prepare(t)));e(this,"mintBatchTo",o(async(t,r)=>this.erc721.mintBatchTo.prepare(t,r)));e(this,"burn",o(t=>this.erc721.burn.prepare(t)));this.abi=W.parse(i||[]),this.metadata=new b(this.contractWrapper,f,this.storage),this.app=new E(this.contractWrapper,this.metadata,this.storage),this.roles=new x(this.contractWrapper,c.contractRoles),this.royalties=new M(this.contractWrapper,this.metadata),this.sales=new I(this.contractWrapper),this.encoder=new w(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new A(this.contractWrapper),this.platformFees=new v(this.contractWrapper),this.interceptor=new B(this.contractWrapper),this.signature=new k(this.contractWrapper,this.storage),this.owner=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[y("transfer"),T])}async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}async prepare(t,r,n){return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};e(c,"contractRoles",l);let p=c;export{p as NFTCollection};