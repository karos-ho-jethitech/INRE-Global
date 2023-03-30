import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderContainer from "@/containers/HeaderContainer";
import homeBanner from "../../public/assets/images/home_banner.svg";
import whoWeAreImg from "../../public/assets/images/who_we_are.svg";
import hand from "../../public/assets/images/hand.svg";
import write from "../../public/assets/images/write.svg";
import member1 from "../../public/assets/images/member1.svg";
import member2 from "../../public/assets/images/member2.svg";
import member3 from "../../public/assets/images/member3.svg";
import BlueOutlineBtn from "@/components/BlueOutlineBtn";
import OfferCardComponent from "@/components/OfferCardComponent";
import MemberCardComponent from "@/components/MemberCardComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <div
        className="flex items-center flex-col mt-10"
        style={{ marginLeft: "10vw", marginRight: "10vw" }}
      >
        <div className="flex justify-center">
          <Image src={homeBanner} alt="logo" style={{ height: 510 }} />
        </div>
        <div className="flex justify-center">
          <div className=" bg-[#F1F1F1] h-[373px] px-6 flex justify-between">
            <div className="w-1/2 mr-8">
              <Image src={whoWeAreImg} alt="logo" style={{ height: 373 }} />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <div className="text-3xl font-semi-bold">Who We Are</div>
              <div className="text-[#1A1A1A]" style={{ opacity: "60%" }}>
                The Indian real estate sector is resilient despite global
                headwinds. Returns are impressive and the sector is expected to
                reach US$ 1 trillion in market size by 2030 (Niti Aayog report,
                2021). However, the whole real estate purchase journey is very
                tedious and takes more than 2 years on average. Further, as the
                ticket size of this investment is large, security and trust
                become quite critical. Problems compound when you are currently
                away from your purchase destination. If you are experiencing
                difficulties in the real estate purchase journey, we are here to
                make it fast and transparent.
              </div>
              <div className="mt-5">
                <BlueOutlineBtn btnTitle="Contact Now" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="text-3xl text-center mb-5">Our Offerings</div>
          <div className="w-[200px] border-solid border-2 border-black rounded mb-5"></div>
          <div>
            This whole purchase journey can be divided into three stages. For
            more details, Click Here
          </div>
        </div>
        <div className="flex justify-between w-full mt-5">
          <div className="flex py-5 justify-center w-[30%] bg-[#F8F8F8] items-center">
            <div
              className="mr-5 bg-white w-[48px] h-[48px] flex justify-center items-center"
              style={{ borderRadius: "50%" }}
            >
              1
            </div>
            <div className="text-xl">Pre-Booking</div>
          </div>
          <div className="flex py-5 justify-center w-[30%] bg-[#F8F8F8] items-center">
            <div
              className="mr-5 bg-white w-[48px] h-[48px] flex justify-center items-center"
              style={{ borderRadius: "50%" }}
            >
              2
            </div>
            <div className="text-xl">
              <div>Post-Booking &</div>
              <div>Pre-Registration</div>
            </div>
          </div>
          <div className="flex py-5 justify-center w-[30%] bg-[#F8F8F8] items-center">
            <div
              className="mr-5 bg-white w-[48px] h-[48px] flex justify-center items-center"
              style={{ borderRadius: "50%" }}
            >
              3
            </div>
            <div className="text-xl">Post-Registration</div>
          </div>
        </div>
        <div className="flex justify-between w-full mt-5">
          <OfferCardComponent
            imgSrc={hand}
            title="Background verification"
            description="Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed..."
          />
          <OfferCardComponent
            imgSrc={write}
            title="Virtual site visit"
            description="It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..."
          />
          <OfferCardComponent
            imgSrc={write}
            title="Title diligence"
            description="Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..."
          />
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="text-3xl text-center mb-5">Our Team Members</div>
          <div className="w-[200px] border-solid border-2 border-black rounded mb-5"></div>
        </div>
        <div className="flex justify-between w-full mt-5">
          <MemberCardComponent
            imgSrc={member1}
            title="Brajesh Pathak"
            description="A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been part of the managing committee and execution committee of Azure Capital (100 Crore realty focused funds), he has been part of the execution committee of various special purpose vehicle of investee companies for plotted development, villa projects, and apartments including development work & construction management. He is deeply involved in the fund raising process including investors relationship. Retail sales, NRI relationship handling for real estates advisory. Recently, Lead the process of fund raising of various startups from seed round to series- B round."
          />
          <MemberCardComponent
            imgSrc={member2}
            title="Deepak Shukla"
            description="Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications."
          />
          <MemberCardComponent
            imgSrc={member3}
            title="Alok Kumar Singh"
            description="Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management."
          />
        </div>
      </div>
    </>
  );
}
