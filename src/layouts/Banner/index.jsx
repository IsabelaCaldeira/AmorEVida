import { useLocation } from "react-router-dom";
import {Button} from "/src/components/Button";

const Banner = ({ img, titulo }) => {
  const { pathname } = useLocation();

  return (
    <header className="banner flex justify-around items-center">
      <div className="max-sm:hidden ">
        <img className="w-full h-auto" src={img} alt={titulo} />
      </div>

      <div className="max-xs:my-5 xs:mr-10 lg:text-7xl text-5xl font-light">
        <h1 style={{ width: "max-content" }}>{titulo}</h1>
        {pathname == "/" ? (
          <div className="button mt-5">
            <h2 className="text-2xl opacity-80 font-normal">Comover e Mover</h2>
            <Button colorful={true} padding={"10px 28px"}>COMO AJUDAR</Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Banner;
