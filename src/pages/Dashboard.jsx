import Carousel from "../ui/Carousel";

function Dashboard() {
  const images = Array.from(
    { length: 5 },
    (v, i) => `/dashboard/image_${i + 1}.jpg`
  );

  return (
    <div className="flex mt-2">
      <div className="w-[40%] ">
        <Carousel images={images} />
      </div>
    </div>
  );
}

export default Dashboard;
