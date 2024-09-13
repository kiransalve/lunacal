import RightBox from "./components/RightBox";

export default function Home() {
  return (
    <div className="flex justify-between">
      <div className="border h-screen flex-1 lg:block hidden"></div>
      <div className="flex-1">
        <RightBox />
      </div>
    </div>
  );
}
