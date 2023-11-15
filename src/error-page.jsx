import { useRouteError } from "react-router-dom";
import animationData from '../src/assets/error.json';
import Lottie from "react-lottie";

export default function ErrorPage() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: '',
    },
  };
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center relative h-[600px]">
      <Lottie options={lottieOptions} height={'100%'} width={'100%'} />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className=" ">
          <h1 className="text-4xl w-fit mx-auto bg-white bg-opacity-90 px-2 py-1 rounded mb-1">Oops!</h1>
          <p className="w-fit mx-auto bg-white bg-opacity-90 px-2 py-1 rounded mb-1">Sorry, an unexpected error has occurred.</p> 
          <p className="w-fit mx-auto bg-white bg-opacity-90 px-2 py-1 rounded">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
}