import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Navbars from "./components/Navbars";

function App() {
  // state declaration movie liste
  const [movies, setMovies] = useState([
    {
      id: Math.floor(Math.random() * 300),
      name: "Fresh Strawberry Sweets: Sugar Free, 100% NATURAL",
      posterurl:
        "https://i.ytimg.com/vi/a0ymFOgSskg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAxWiJYZuauQ5PYssZajK5p3d4Rsg",
      description:
        "Dear friends, today we would like to share with you the Fresh Strawberry Sweets: Sugar Free, 100% NATURAL video",
      rating: 4,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "500 CHICKEN LEGS COOKING & EATING",
      posterurl:
        "https://i.ytimg.com/vi/A5a3-GW1VSw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAGmqAgpf02LK9MfsWzFGzwH6h_0g",
      description:
        "Today in our village, we cook 500 chicken legs to make a chicken Peri Peri recipe. First, we marinate chicken legs with traditional chicken Peri Peri masala, and then we fry it in traditionally made gingelly oil.",
      rating: 3,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "Cake in 15 minutes! The famous cake that drives you crazy!",
      posterurl:
        "https://i.ytimg.com/vi/2yT7hD_-fUw/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD2h0aoBGhSlOyuYGx7pg-R0Pp4VQ",
      description:
        "Cake in 15 minutes! The famous cake that drives you crazy! This secret from my grandmother. Better than apple pie. Incredibly tasty and fast! It's so delicious that I cook it almost every day! The kids ate it all in 5 minutes and asked for more.",
      rating: 5,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "25 Greatest Natural Wonders of the World",
      posterurl:
        "https://i.ytimg.com/vi/3SsK-cxlj_w/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD9PCl1ONQ8B5K0yBskgX0rARHtPw",
      description:
        "Massive glaciers, staggering mountains, plains dotted with wild animals: We sure live in a big, beautiful world. And while pinpointing all of Mother Nature's greatest hits could take a lifetime",
      rating: 4,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "One Of Natures Wonders Of The World | The Red Sea |",
      posterurl:
        "https://i.ytimg.com/vi/Dty2QJGcVZs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBTMY5aMaohpH69MGHONiekuViEfQ",
      description:
        "Explore the impressive underwater landscapes and fascinating species of one of the biggest wonders on our planet. This nautical journey features many of the sea creatures that have made the coral reefs their home.",
      rating: 5,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "Incredible Life In Strange Coral Reefs",
      posterurl:
        "https://i.ytimg.com/vi/9I-OjB8cmeI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB_mN2RC60uHRdhSCcVcFuOPBckLw",
      description:
        "Coral reefs are some of the richest hotspots of biodiversity on the planet. The warm water reefs of the Pacific Ocean and Caribbean Sea are well known, but they don't only occur in warm waters. In some of the oceans coldest, darkest depths they are thriving",
      rating: 2,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "beasts of no nation",
      posterurl:
        "https://i.ytimg.com/vi/olboi3ttUi8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAfI9DO70M1mIR8yDteQ2qdZEGCgw",
      description:
        "4 Ever Green is the #1 place for all your heart warming stories about amazing people, beautiful animals and cute things that will inspire you everyday. Make sure to subscribe and never miss a single video!",
      rating: 5,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "Our Planet | Coastal Seas | FULL EPISODE | Netflix",
      posterurl:
        "https://i.ytimg.com/vi/r9PeYPHdpNo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCORuHK3WYA3UOAuQJlrTDC4F_lwQ",
      description:
        "Experience our planet's natural beauty and examine how climate change impacts all living creatures in this ambitious documentary of spectacular scope.",
      rating: 4,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "Valley Of The Lanterns Family Fantasy Adventure Animation",
      posterurl:
        "https://i.ytimg.com/vi/UTAvGzCK6ok/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDThJCX5BX-pkHm0JmhdUHuJxvVLQ",
      description:
        "An old woman's hold on the past puts her family's future in jeopardy. 2018 | Stars: Samantha Ferris, Thomas Haddaway-",
      rating: 2,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "Squids & Octopuses",
      posterurl:
        "https://i.ytimg.com/vi/sAYkjkHNCAU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBI_JLohU75AKNkRd7qBGZCOkFJrA",
      description:
        "Octopuses and squids are anything but cuddly pets. They have neither legs nor fins. Instead, they have snakelike arms, covered in suction caps - eight or ten, dangerous tentacles, which grow out of their heads.",
      rating: 3,
    },
    {
      id: Math.floor(Math.random() * 300),
      name: "The World In 2050, The Real Future Of Earth",
      posterurl:
        "https://i.ytimg.com/vi/g_1oiJqE3OI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD8db6SAhgxsoE-3MMW_51gHmJmDw",
      description:
        "We don't really know how the world will look like in 2050, but we do know that we are currently living in difficult times and the sooner we improve our survival skills, the better.",
      rating: 4,
    },
  ]);
  const [searchtext, setSearchtext] = useState("");
  const [searchrating, setSearchrating] = useState(0);

  return (
    <div className="App">
      <div className="ennavbars">
        <Navbars  setSearchtext={setSearchtext} setSearchrating={setSearchrating}/>
      </div>

      <div>
        <MovieList movies={movies} setMovies={setMovies} searchtext={searchtext} searchrating={searchrating} />
      </div>
    </div>
  );
}

export default App;
