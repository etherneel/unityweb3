import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { ChainId } from "@thirdweb-dev/sdk";
const chainId = ChainId.Mumbai;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
   
        <ThirdwebProvider
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
          ]}
          activeChain="mumbai"
          clientId="c5c449ea568c764befd7f07dac04f539"
        >
          <App />
        </ThirdwebProvider>
      
    </Router>
  </React.StrictMode>
);
