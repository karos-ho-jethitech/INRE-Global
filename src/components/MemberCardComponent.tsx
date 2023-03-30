import Image from "next/image";

export default function MemberCardComponent({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="member-card-component w-[30%] px-6 pt-6 pb-8"
      style={{ boxShadow: "0px 0px 1px 0px #000000", borderRadius: 10 }}
    >
      <Image src={imgSrc} alt="member-card" />
      <div className="text-2xl mt-6 mb-3 font-bold">{title}</div>
      <div
        className="mb-5 text-[#1A1A1A] text-truncate-3-lines"
        style={{ opacity: "60%" }}
      >
        {description}
      </div>
      <div className="text-end text-[#01244A] cursor-pointer">View more</div>
    </div>
  );
}
