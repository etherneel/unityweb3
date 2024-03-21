import{bw as P,bn as o,bq as E,bt as l,bx as C,bs as g,bC as _,by as v,bA as S,_ as N}from"./index-ce020a9a.js";const A=new Set([1,137,10,42161,56]),w="eip155",f="wagmi.requestedChains",u="wallet_addEthereumChain",m="last-used-chain-id";class b extends P{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),o(this,"id",E.walletConnect),o(this,"name","WalletConnect"),o(this,"ready",!0),o(this,"onAccountsChanged",e=>{e.length===0?this.emit("disconnect"):e[0]&&this.emit("change",{account:l(e[0])})}),o(this,"onChainChanged",async e=>{const s=Number(e),i=this.isChainUnsupported(s);await this._storage.setItem(m,String(e)),this.emit("change",{chain:{id:s,unsupported:i}})}),o(this,"onDisconnect",async()=>{await this._setRequestedChainsIds([]),await this._storage.removeItem(m),this.emit("disconnect")}),o(this,"onDisplayUri",e=>{this.emit("message",{type:"display_uri",data:e})}),o(this,"onConnect",()=>{this.emit("connect",{provider:this._provider})}),this._storage=t.options.storage,this._createProvider(),this.filteredChains=this.chains.length>50?this.chains.filter(e=>A.has(e.chainId)):this.chains,this.showWalletConnectModal=this.options.qrcode!==!1}async connect(){var s;let{chainId:t,pairingTopic:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{let i=t;if(!i){const d=await this._storage.getItem(m),r=d?parseInt(d):void 0;r&&!this.isChainUnsupported(r)?i=r:i=(s=this.filteredChains[0])==null?void 0:s.chainId}if(!i)throw new Error("No chains found on connector.");const n=await this.getProvider();this.setupListeners();const a=await this._isChainsStale();if(n.session&&a&&await n.disconnect(),!n.session||a){const d=this.filteredChains.filter(r=>r.chainId!==i).map(r=>r.chainId);this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:e,chains:[i],optionalChains:d.length>0?d:[i]}),await this._setRequestedChainsIds(this.filteredChains.map(r=>{let{chainId:y}=r;return y}))}const h=await n.enable();if(!h[0])throw new Error("No accounts found on provider.");const p=l(h[0]),c=await this.getChainId(),I=this.isChainUnsupported(c);return{account:p,chain:{id:c,unsupported:I},provider:new C(n)}}catch(i){throw/user rejected/i.test(i==null?void 0:i.message)?new g(i):i}}async disconnect(){const t=()=>{if(!(typeof localStorage>"u"))for(const i in localStorage)i.startsWith("wc@2")&&localStorage.removeItem(i)};t();const e=await this.getProvider();(async()=>{try{await e.disconnect()}catch(i){if(!/No matching key/i.test(i.message))throw i}finally{this._removeListeners(),await this._setRequestedChainsIds([]),t()}})()}async getAccount(){const{accounts:t}=await this.getProvider();if(!t[0])throw new Error("No accounts found on provider.");return l(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this._provider||await this._createProvider(),t&&await this.switchChain(t),!this._provider)throw new Error("No provider found.");return this._provider}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,s]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]);return new C(e,t).getSigner(s)}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),s=await this._isChainsStale();if(!t)return!1;if(s&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){const e=this.chains.find(s=>s.chainId===t);if(!e)throw new _(`Chain with ID: ${t}, not found on connector.`);try{const s=await this.getProvider(),i=this._getNamespaceChainsIds(),n=this._getNamespaceMethods();if(!i.includes(t)&&n.includes(u)){const h=e.explorers&&e.explorers[0],p=h?{blockExplorerUrls:[h.url]}:{};await s.request({method:u,params:[{chainId:v(e.chainId),chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:S(e),...p}]});const c=await this._getRequestedChainsIds();c.push(t),await this._setRequestedChainsIds(c)}return await s.request({method:"wallet_switchEthereumChain",params:[{chainId:v(t)}]}),e}catch(s){const i=typeof s=="string"?s:s==null?void 0:s.message;throw/user rejected request/i.test(i)?new g(s):new _(s)}}async _createProvider(){return this._initProviderPromise||(this._initProviderPromise=this.initProvider()),this._initProviderPromise}async initProvider(){const{default:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:s}=await N(()=>import("./index.es-0a246f4a.js"),["assets/index.es-0a246f4a.js","assets/index-ce020a9a.js","assets/index-5cbbb5e6.css"]),[i,...n]=this.filteredChains.map(a=>{let{chainId:h}=a;return h});i&&(this._provider=await t.init({showQrModal:this.showWalletConnectModal,projectId:this.options.projectId,optionalMethods:s,optionalEvents:e,chains:[i],optionalChains:n,metadata:{name:this.options.dappMetadata.name,description:this.options.dappMetadata.description||"",url:this.options.dappMetadata.url,icons:[this.options.dappMetadata.logoUrl||""]},rpcMap:Object.fromEntries(this.filteredChains.map(a=>[a.chainId,a.rpc[0]||""])),qrModalOptions:this.options.qrModalOptions}))}async _isChainsStale(){if(this._getNamespaceMethods().includes(u)||!this.options.isNewChainsStale)return!1;const e=await this._getRequestedChainsIds(),s=this.filteredChains.map(n=>{let{chainId:a}=n;return a}),i=this._getNamespaceChainsIds();return i.length&&!i.some(n=>s.includes(n))?!1:!s.every(n=>e.includes(n))}async setupListeners(){this._provider&&(this._removeListeners(),this._provider.on("accountsChanged",this.onAccountsChanged),this._provider.on("chainChanged",this.onChainChanged),this._provider.on("disconnect",this.onDisconnect),this._provider.on("session_delete",this.onDisconnect),this._provider.on("display_uri",this.onDisplayUri),this._provider.on("connect",this.onConnect))}_removeListeners(){this._provider&&(this._provider.removeListener("accountsChanged",this.onAccountsChanged),this._provider.removeListener("chainChanged",this.onChainChanged),this._provider.removeListener("disconnect",this.onDisconnect),this._provider.removeListener("session_delete",this.onDisconnect),this._provider.removeListener("display_uri",this.onDisplayUri),this._provider.removeListener("connect",this.onConnect))}async _setRequestedChainsIds(t){await this._storage.setItem(f,JSON.stringify(t))}async _getRequestedChainsIds(){const t=await this._storage.getItem(f);return t?JSON.parse(t):[]}_getNamespaceChainsIds(){var e,s,i;return this._provider?((i=(s=(e=this._provider.session)==null?void 0:e.namespaces[w])==null?void 0:s.chains)==null?void 0:i.map(n=>parseInt(n.split(":")[1]||"")))??[]:[]}_getNamespaceMethods(){var e,s;return this._provider?((s=(e=this._provider.session)==null?void 0:e.namespaces[w])==null?void 0:s.methods)??[]:[]}}export{b as WalletConnectConnector};
