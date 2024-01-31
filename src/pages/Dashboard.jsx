import Button from "../ui/Button";
import Carousel from "../ui/Carousel";

function Dashboard() {
  const images = Array.from(
    { length: 5 },
    (v, i) => `/dashboard/image_${i + 1}.jpg`
  );

  return (
    <div className="flex flex-col mt-2 ">
      <div className="flex md:justify-around items-center mx-auto md:gap-40 my-5 md:text-lg text-center flex-col sm:flex-row text-sm justify-between gap-4">
        <div className="shadow-lg shadow-sky-300 px-5 py-10 rounded-xl border-sky-300 border-2">
          <ul>
            <li>Save your memories on map</li>
            <li>To remember them forever</li>
          </ul>
        </div>
        <div className="shadow-lg shadow-sky-300 px-5 py-10 rounded-xl border-sky-300 border-2">
          <ul className="list-disc ml-3">
            <li>It is free and will remain forever</li>
            <li>You can select position on map</li>
            <li>You can add your thoughs </li>
            <li>You can add images to store forever (up to 5)</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center text-xl border-4 border-sky-700 rounded-xl my-7 py-10 text-center flex-col md:flex-row">
        <div className="w-[40%] flex justify-center flex-col ml-8 ">
          You don&apos;t have an account? No problem, You can create one <br />
          <Button to="/signup" btnName="Sign Up" style="green" size="large" />
        </div>
        <div className="w-[40%] flex justify-center flex-col mr-8">
          Maybe you are one of the lucky people who have already opened an
          account. So why are we waiting <br />
          <Button to="/login" btnName="Login" style="green" size="large" />
        </div>
      </div>
      <div className="w-[50%] mx-auto">
        <Carousel images={images} aspect="9 / 5" />
      </div>
    </div>
  );
}

export default Dashboard;
