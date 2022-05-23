import Button from "../components/Button";
import Card from "../components/Card";
import { AiOutlineInstagram, AiOutlineHeart } from "react-icons/ai";
import "animate.css";
export default function Home() {
  const people = [
    {
      id: "person-1",
      image:
        "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      testimony: "Very cool app, really liked that it was face to face",
      rating: [1, 1, 1, 1, 1],
      date: "1/12/2022",
      name: "Phiona",
    },

    {
      id: "person-2",
      image:
        "https://image.shutterstock.com/image-photo/closeup-photo-amazing-short-hairdo-260nw-1617540484.jpg",
      testimony: "If I could describe Noveil in one word it would be... FUN!",
      rating: [1, 1, 1, 1, 0],
      date: "1/8/2022",
      name: "Quentin",
    },
    {
      id: "person-3",
      image:
        "https://image.shutterstock.com/image-photo/portrait-minded-woman-touch-hand-260nw-1803673333.jpg",
      testimony: "Great experience, I would definitely use it again",
      rating: [1, 1, 1, 1, 1],
      date: "1/19/2022",
      name: "Daisy",
    },
  ];
  return (
    <div id="bg-image" className="flex flex-col items-center lg:flex-row">
      <div className="flex flex-col items-center justify-start lg:w-1/3  lg:px-3 ">
        <div className="flex flex-col items-center lg:flex-row animate__animated animate__fadeIn animate__slower">
          <AiOutlineHeart className=" my-3 lg:hidden text-9xl" />
          <h1 className=" text-5xl my-5 lg:text-6xl xl:text-8xl font-bold header-c">
            Noveil
          </h1>
          <AiOutlineHeart className="my-3 hidden lg:block lg:text-8xl mx-5 text-9xl" />
        </div>

        <p className="xl:text-2xl lg:text-lg text-md text-center lg:py-5 paragraph-c">
          The premier dating experience
        </p>
        <div className="lg:flex flex-col items-center flex-wrap mt- lg:mt-10 hidden">
          <Button className="">Explore</Button>
          <a
            href="https://www.instagram.com/noveil_app/?hl=en"
            className="mt-10 text-xl flex"
          >
            <AiOutlineInstagram className="text-2xl mt-auto mx-1" /> Instagram
          </a>
        </div>
      </div>
      <div className="lg:w-2/3  lg:px-20 xl:px-32 animate__animated animate__fadeIn animate__slow ">
        <div className="xl:px-20 lg:px-10">
          <p className="text-center p-10 px-10 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 2xl:px-20 lg:bg-white/70 lg:rounded-3xl font-bold">
            Introducing <span className="purple-c">Noveil</span>, the premier
            dating experience. This app was developed by UCI students for UCI
            students and is the best way to meet new people in your area.
          </p>
        </div>
        <div className="hidden lg:flex mt-3">
          {people.map((x) => {
            return (
              <Card
                key={x.id}
                name={x.name}
                image={x.image}
                testimony={x.testimony}
                rating={x.rating}
                date={x.date}
              />
            );
          })}
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center flex-wrap ">
        <Button>Explore</Button>
        <a
          href="https://www.instagram.com/noveil_app/?hl=en"
          className="mt-10 text-xl flex"
        >
          <AiOutlineInstagram className="text-2xl my-0.5 mr-1" /> Instagram
        </a>
      </div>
    </div>
  );
}
