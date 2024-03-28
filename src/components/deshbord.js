import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState, useRef } from "react";
import { PropagateLoader } from "react-spinners";
import Connect from "./connect";
import {
  useSDK,
  useTokenBalance,
  useContract,
  useAddress,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
const Deshbord = () => {
  const [USDTAmt, setUSDTAmt] = useState("");
  const [BuyTokenLoading, setBuyTokenLoading] = useState(false);
  const [isLoading, setIsLoading] = useState();
  const [approveAmt, setApproveAmt] = useState("");
  const [ApproveTokensloading, setApproveTokensLoading] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [BTCprice, setBTCPrice] = useState("");
  const [BNBprice, setBNBPrice] = useState("");
  const isValidUSDTamount = Number(USDTAmt) >= 20 || USDTAmt == "";

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Get the value of the 'email' parameter
  const referral = urlParams.get("ref");
  const email = urlParams.get("email");
  const wa = urlParams.get("wa");
  const firstHalf = wa?.substring(0, wa?.length / 2);
  const secondHalf = wa?.substring(wa?.length / 2);

  const shortenedRef =
    referral?.substring(0, 4) +
    "...." +
    referral?.substring(referral?.length - 4);

  // Log the value of email to the console



  //read functions
  const address = useAddress();
  const { contract } = useContract(
    "0x0F50B0fc36871b0dC23C4e1e0C4aa2b277816002"
  );

  const { contract: USDTContract } = useContract(
    "0x55d398326f99059fF775485246999027B3197955"
  );

  const { data: parent, isLoading: isParentLoading } = useContractRead(
    contract,
    "parent",
    [address]
  );

  //write funcs
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      setReferralCode(`${value}`);
    });
  }, []);

  //approve tokens
  const { mutateAsync: approve, isLoading: isApproveLoading } =
    useContractWrite(USDTContract, "approve");

  const approveTokens = async () => {
    try {
      setIsLoading(true);
      let spender = "0x0F50B0fc36871b0dC23C4e1e0C4aa2b277816002"; //contract address
      let approveAmount = ethers.utils.parseEther("12");
      const data = await approve({ args: [spender, approveAmount] });
      console.info("contract call successs", data);
      console.log ("referral address",wa);
      setIsLoading(false);
      toast.success("Successfully approved tokens!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      toast.error("Approve Failed !", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error("contract call failure", err);
    } finally {
      setApproveAmt("");
      setIsLoading(false);
    }
  };

  // buyTokens
  const { mutateAsync: register, isLoading: isBuyTokensLoading } =
    useContractWrite(contract, "register");

    const subscribeUser = async () => {
      setIsLoading(true);
      const url =
        "https://api.unitytrade.io/api/User/subscribe";
      const data = {
        email: email,
        referral: referral,
        walletAddress: address,
        amount: "12",
        isSubscribe: true,
      };
        
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("User subscribed successfully!");
        setIsLoading(false);
      } catch (error) {
        console.error("There was a problem subscribing the user:", error);
      }
    };


  const buyToken = async () => {
   
    setIsLoading(true);
    try {
      const data = await register({ args: [wa.toString()] });
      console.log(wa);
      console.info("contract call successs", data);
      subscribeUser()
      toast.success("Registered Successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      toast.error("Something went Wrong ", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error("contract call failure", err);
    } finally {
      setUSDTAmt("");
    }
  };

  return (
    <div className="box_main">
      <ToastContainer />
      {isLoading && (
        <div className="h-[50px] w-[50px] absolute-loader top-[50%] left-[50%] z-60">
          <PropagateLoader color="#36d7b7" />
        </div>
      )}
      <div className={`${isLoading ? "opacity-3" : ""} md:mt-20 mt-8 relative`}>
        <div className="logo_real">
          <img className="" src="/logo.svg" />
        </div>
        <div className="w-[90%] relative p-8 bg_div mx-auto bg-[#0E0E0E]">
          <div className="absolute new_box">
            <div className="flex space-x-3 my-4">
              <button
                onClick={approveTokens}
                className="bg-blue-500 rounded-md text-white py-2 w-1/2 buttonsNew"
              >
                Approve
              </button>
            </div>
            <div className="text-center text-white text-[20px] font-bold">
              Subscribe to Unity trade
            </div>
            <div className="flex p-4 justify-center connect-button">
              <Connect />
            </div>
            <div className="flex  space-x-4  justify-center">
              <div className="whitespace-nowrap text-white">Invited by :</div>
              <div>
                <div className="text-white">{firstHalf}</div>
                <div className="text-white">{secondHalf}</div>
              </div>
            </div>
            <div className="flex justify-center my-4">
              <button
                onClick={buyToken}
                className="bg-blue-500 rounded-md text-white py-2 w-1/2 buttonsNew"
              >
               Subscribe 12$
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshbord;
