export default function BlueOutlineBtn({ btnTitle }: { btnTitle: string }) {
  return (
    <div className="blue-outline-btn">
      <button className="border-solid border border-black px-8 py-3 rounded">
        {btnTitle}
      </button>
    </div>
  );
}
