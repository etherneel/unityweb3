var N=Object.defineProperty;var B=(i,t,r)=>t in i?N(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r;var n=(i,t,r)=>(B(i,typeof t!="symbol"?t+"":t,r),r);import{be as v,j as _,r as p,c as s,T as l,a as b,bf as y,bg as A,bh as f,bi as w,bj as T,p as O,B as E,aL as P,H as R,i as z,n as F,ax as I}from"./index-ce020a9a.js";import{a as h}from"./assertEnabled-f3a1d1e6.browser.esm-298814b9.js";import{d as u,C as V}from"./contract-appuri-6fe9aa25.browser.esm-bf560959.js";import{D}from"./drop-claim-conditions-448e3579.browser.esm-8f271ab3.js";import{s as U}from"./setErc20Allowance-4d5b772d.browser.esm-0fd1a65f.js";import{q as K,r as L,s as k}from"./index-c75477f3.js";async function j(i,t){const r=await i.read("decimals",[]);return P(R.parse(t),r)}class H{constructor(t,r){n(this,"featureName",f.name);n(this,"tokens",s(async t=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await this.erc20.normalizeAmount(t)]})));n(this,"from",s(async(t,r)=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnFrom",args:await Promise.all([p(t),this.erc20.normalizeAmount(r)])})));this.erc20=t,this.contractWrapper=r}}class q{constructor(t,r,a){n(this,"featureName",w.name);n(this,"to",s(async(t,r,a)=>{const e=await this.erc20.normalizeAmount(r);return await this.conditions.getClaimTransaction(t,e,a)}));this.erc20=t,this.contractWrapper=r,this.storage=a;const e=new V(this.contractWrapper,I,this.storage);this.conditions=new D(this.contractWrapper,e,this.storage)}}class x{constructor(t,r,a){this.erc20=t,this.contractWrapper=r,this.storage=a,this.claim=new q(this.erc20,this.contractWrapper,this.storage)}}class G{constructor(t,r){n(this,"featureName",A.name);n(this,"to",s(async t=>{const r=new b(this.contractWrapper),e=(await Promise.all(t.map(c=>Promise.all([p(c.toAddress),this.erc20.normalizeAmount(c.amount)])))).map(c=>{let[o,d]=c;return r.encode("mintTo",[o,d])});return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[e]})}));this.erc20=t,this.contractWrapper=r}}class J{constructor(t,r){n(this,"featureName",y.name);n(this,"to",s(async(t,r)=>await this.getMintTransaction(t,r)));this.erc20=t,this.contractWrapper=r,this.batch=this.detectErc20BatchMintable()}async getMintTransaction(t,r){return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:await Promise.all([p(t),this.erc20.normalizeAmount(r)])})}detectErc20BatchMintable(){if(u(this.contractWrapper,"ERC20BatchMintable"))return new G(this.erc20,this.contractWrapper)}}class Q{constructor(t,r){n(this,"featureName",T.name);n(this,"mint",s(async t=>{const r=t.payload,a=t.signature,[e,c]=await Promise.all([this.mapPayloadToContractStruct(r),this.contractWrapper.getCallOverrides()]);return await U(this.contractWrapper,E.from(e.price),r.currencyAddress,c),l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[e,a],overrides:c})}));n(this,"mintBatch",s(async t=>{const r=await Promise.all(t.map(o=>this.mapPayloadToContractStruct(o.payload))),a=t.map((o,d)=>{const W=r[d],g=o.signature,m=o.payload.price;if(E.from(m).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:W,signature:g}}),e=new b(this.contractWrapper),c=a.map(o=>e.encode("mintWithSignature",[o.message,o.signature]));return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[c]})}));this.contractWrapper=t,this.roles=r}async verify(t){const r=t.payload,a=t.signature,e=await this.mapPayloadToContractStruct(r);return(await this.contractWrapper.read("verify",[e,a]))[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){var g;await((g=this.roles)==null?void 0:g.verify(["minter"],await this.contractWrapper.getSignerAddress()));const[r,a,e]=await Promise.all([this.contractWrapper.getChainID(),this.contractWrapper.read("name",[]),Promise.all(t.map(m=>K.parseAsync(m)))]),c=this.contractWrapper.getSigner();z(c,"No signer available");const o=await Promise.all(e.map(m=>L.parseAsync(m))),d=await Promise.all(o.map(m=>this.mapPayloadToContractStruct(m))),W=await Promise.all(d.map(m=>this.contractWrapper.signTypedData(c,{name:a,version:"1",chainId:r,verifyingContract:this.contractWrapper.address},{MintRequest:k},m)));return e.map((m,C)=>{const S=o[C],M=W[C];return{payload:S,signature:M.toString()}})}async mapPayloadToContractStruct(t){const[r,a]=await Promise.all([F(this.contractWrapper.getProvider(),t.price,t.currencyAddress),this.contractWrapper.read("decimals",[])]),e=P(t.quantity,a);return{to:t.to,primarySaleRecipient:t.primarySaleRecipient,quantity:e,price:r,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid}}}class et{constructor(t,r,a){n(this,"featureName",v.name);n(this,"transfer",s(async(t,r)=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transfer",args:await Promise.all([p(t),this.normalizeAmount(r)])})));n(this,"transferFrom",s(async(t,r,a)=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom",args:await Promise.all([p(t),p(r),this.normalizeAmount(a)])})));n(this,"setAllowance",s(async(t,r)=>l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:await Promise.all([p(t),this.normalizeAmount(r)])})));n(this,"transferBatch",s(async t=>{const r=new b(this.contractWrapper),a=(await Promise.all(t.map(e=>Promise.all([this.normalizeAmount(e.amount),p(e.toAddress)])))).map(e=>{let[c,o]=e;return r.encode("transfer",[o,c])});return l.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[a]})}));n(this,"mint",s(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)));n(this,"mintTo",s(async(t,r)=>h(this.mintable,y).to.prepare(t,r)));n(this,"mintBatchTo",s(async t=>{var r;return h((r=this.mintable)==null?void 0:r.batch,A).to.prepare(t)}));n(this,"burn",s(async t=>h(this.burnable,f).tokens.prepare(t)));n(this,"burnFrom",s(async(t,r)=>h(this.burnable,f).from.prepare(t,r)));n(this,"claim",s(async(t,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,r)));n(this,"claimTo",s(async(t,r,a)=>{var e;return h((e=this.droppable)==null?void 0:e.claim,w).to.prepare(t,r,a)}));this.contractWrapper=t,this.storage=r,this.mintable=this.detectErc20Mintable(),this.burnable=this.detectErc20Burnable(),this.droppable=this.detectErc20Droppable(),this.signatureMintable=this.detectErc20SignatureMintable(),this._chainId=a}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return await _(this.contractWrapper.getProvider(),this.getAddress())}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async balanceOf(t){return this.getValue(await this.contractWrapper.read("balanceOf",[await p(t)]))}async totalSupply(){return await this.getValue(await this.contractWrapper.read("totalSupply",[]))}async allowance(t){const[r,a]=await Promise.all([this.contractWrapper.getSignerAddress(),p(t)]);return await this.allowanceOf(r,a)}async allowanceOf(t,r){const a=await Promise.all([p(t),p(r)]);return await this.getValue(await this.contractWrapper.read("allowance",a))}async getMintTransaction(t,r){return h(this.mintable,y).getMintTransaction(t,r)}get claimConditions(){var t;return h((t=this.droppable)==null?void 0:t.claim,w).conditions}get signature(){return h(this.signatureMintable,T)}async normalizeAmount(t){return j(this.contractWrapper,t)}async getValue(t){return await O(this.contractWrapper.getProvider(),this.getAddress(),E.from(t))}detectErc20Mintable(){if(u(this.contractWrapper,"ERC20"))return new J(this,this.contractWrapper)}detectErc20Burnable(){if(u(this.contractWrapper,"ERC20Burnable"))return new H(this,this.contractWrapper)}detectErc20Droppable(){if(u(this.contractWrapper,"ERC20ClaimConditionsV1")||u(this.contractWrapper,"ERC20ClaimConditionsV2")||u(this.contractWrapper,"ERC20ClaimPhasesV1")||u(this.contractWrapper,"ERC20ClaimPhasesV2"))return new x(this,this.contractWrapper,this.storage)}detectErc20SignatureMintable(){if(u(this.contractWrapper,"ERC20SignatureMintable"))return new Q(this.contractWrapper)}}export{et as E,Q as a};
