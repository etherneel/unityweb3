import React from 'react'
import {
  ConnectWallet,
} from "@thirdweb-dev/react";

const Connect = () => {

  return (
    <div>
      <div className="content connect-button-header">
        <div className="connect_btn">
          {/* <img src={arrow} alt="puricon" /> */}
          {/* <button>Connect <span className="whitearrow"><img src={whitearrow} alt="puricon" /></span></button> */}
          <ConnectWallet className='bg-blue-500' switchToActiveChain={true} />
        </div>
      </div>
    </div>
  )
}

export default Connect