import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    
    <div className="bg-slate-900 p-10 cursor-pointer">
       <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-60 text-slate-400">
       <div>
        <p className="font-bold text-white ">Get to know us</p>
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Careers</p>
        <p>VK electromart Stories</p>
        <p>Corporate Information</p>
      </div>

      <div>
        <p className="font-bold text-white">Help</p>
        <p>Payments</p>
        <p>Shipping</p>
        <p>Help</p>
        <p>Cancellation & Returns</p>
        <p>FAQ</p>
      </div>
    </div>
     
     <div className="flex text-white items-center justify-center gap-5 pt-10 text-2xl">
      <TiSocialFacebook />
      <TiSocialYoutube />
      <TiSocialInstagram />
      <TiSocialTwitter />
     </div>
     <p className="text-center text-white pt-10 italic">Practice project by Komal Prajapat not for commercial use</p>
  </div>
  );
};

export default Footer;
