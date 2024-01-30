import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import {
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from "react-icons/hi2";

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [mouseOver, setMouseOver] = useState(true);

  function handlePrevious() {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent((cur) => cur - 1);
    }
  }

  function handleNext() {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent((cur) => cur + 1);
    }
  }

  useEffect(
    function () {
      if (mouseOver) {
        const timer = setInterval(() => {
          if (current === images.length - 1) {
            setCurrent(0);
          } else {
            setCurrent((cur) => cur + 1);
          }
        }, 1000 * 10);
        return () => clearInterval(timer);
      }
    },
    [mouseOver, current, images]
  );

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-700`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onMouseOver={() => setMouseOver(false)}
        onMouseOut={() => setMouseOver(true)}
      >
        {images.map((image) => {
          return (
            <img
              src={image}
              alt="dashboard images"
              key={image}
              className="rounded-xl"
            />
          );
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-black text-xl px-2">
        <button onClick={handlePrevious}>
          <IconContext.Provider value={{ size: "2rem" }}>
            <HiOutlineArrowLeftCircle />
          </IconContext.Provider>
        </button>
        <button onClick={handleNext}>
          <IconContext.Provider value={{ size: "2rem" }}>
            <HiOutlineArrowRightCircle />
          </IconContext.Provider>
        </button>
      </div>
      <div className="absolute bottom-0 py-3 flex gap-2 justify-center w-full">
        {images.map((image, i) => {
          return (
            <div
              onClick={() => setCurrent(i)}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
              key={"circle" + i}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
