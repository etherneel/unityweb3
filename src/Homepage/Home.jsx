import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
const Home = () => {
  const subscribeUser = async () => {
    const url = 'http://32.242.225.85:3000/api/User/subscribe';
    const data = {
      email: 'sandhya.guravbitcode@gmail.com',
      referral: 'v=_U0pTlpyMGg&t=901s',
      walletAddress: 'jdhshshhs',
      amount: '4500000',
      isSubscribe: true
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('User subscribed successfully!');
    } catch (error) {
      console.error('There was a problem subscribing the user:', error);
    }
  };
  
  return (
    <div className="md:mt-20 mt-8">
      <div className="logo_real">
        <img className="" src="/logo.svg" />
      </div>
      <div className="w-[90%] relative p-8 bg_div mx-auto bg-[#0E0E0E]">
        <div className="absolute new_box">
          <div className="text-center text-white text-[20px] font-bold">
            Subscribe to Unity trade
          </div>
          <div className="flex p-4 justify-center connect-button">
            <ConnectWallet className="bg-[#1f4fac]" />
          </div>
          <div className="flex  space-x-4  justify-center">
            <div>Invited by :</div>
            <div className="text-white">Ax001900b4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
