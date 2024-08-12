import { useState } from "react";
import s from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import Png from "@/assets/65.png";
import Jpg from "@/assets/photo_2024-06-23_14-29-49.jpg";
import Svg from "@/assets/download.svg";
import Svg2 from "@/assets/conversion2.svg";

const TODO = () => {
  TODO2();
};
const TODO2 = () => {
  throw new Error();
};

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () =>
    // setCount((prev) => prev + 1);
    TODO();

  // TODO(123);
  // if (__PLATFORM__ === "desktop") {
  //   return <div>desktop</div>;
  // }
  // if (__PLATFORM__ === "mobile") {
  //   return <div>mobile</div>;
  // }
  // if (__ENV__ === "development") {
  //   return <div>development</div>;
  // }

  return (
    <div data-testid="app.datatestid">
      <h1 data-testid={"platform"}>PLATFORM={__PLATFORM__}</h1>
      <Svg width={50} height={50} color={"green"} />
      <Svg2 />
      <div>
        <img src={Png} alt="" width={200} />
        <img src={Jpg} alt="" width={200} />
      </div>
      <Link to={"about"}>About</Link>
      <Link to={"shop"}>Shop</Link>
      <div className={s.value}>{count}</div>
      <button onClick={increment} className={s.btn}>
        <span>+</span>
      </button>
      <Outlet />
    </div>
  );
};
