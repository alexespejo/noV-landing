import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Card = ({ image, testimony, rating, date, name }) => {
  // let key = name;
  return (
    <div className="bg-white rounded-3xl px-10 mx-1 py-5  flex flex-col items-center justify-evenly	 h-96 font-sans min-w-60 max-w-96	">
      <img
        src={image}
        className="rounded-full bg-white h-32 w-32 object-cover"
        alt="image card"
      />
      <div className="flex">
        {rating.map((x, index) => {
          if (x === 1) {
            return (
              <div
                key={name + "star" + index}
                className="text-yellow-500 text-xl"
              >
                <AiFillStar />
              </div>
            );
          } else {
            return (
              <div
                key={name + "star" + index}
                className="text-slate-50 text-xl"
              >
                <AiOutlineStar />
              </div>
            );
          }
        })}
      </div>

      <p className="text-center text-sm inline">{testimony}</p>
      <p className="text-sm text-center">
        {name}- {date}
      </p>
    </div>
  );
};

export default Card;
