import Image from "next/image";
import logo from "../../public/assets/images/logo.svg";

export default function HeaderComponent() {
  return (
    <>
      <div
        className="header-component flex justify-between items-end px-20 pt-5 bg-[#fff]"
        style={{ boxShadow: "1px 1px 1px 1px #AAAAAA" }}
      >
        <div className="pb-5">
          <Image src={logo} alt="logo" width={64} height={64} />
        </div>
        <div
          className="navigation-bar flex justify-between items-center font-bold"
          style={{ width: 600 }}
        >
          <div className="pb-5">Home</div>
          <div className="pb-5">Our Offerings</div>
          <div className="pb-5">Out Team</div>
          <div className="pb-5">Contact Us</div>
          <div className="pb-5">Blogs</div>
        </div>
        <div className="pb-3">
          <button
            className="bg-[#01244A] rounded text-[#FFFFFF] px-7"
            style={{ height: 48 }}
          >
            Register Now
          </button>
        </div>
      </div>
    </>
  );
}
