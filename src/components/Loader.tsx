
import "./Loader.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loader = () => {
  return (
    <div className="loader-container">
      <DotLottieReact
        src="https://lottie.host/053e48de-a7a8-401e-8221-c19be5976b58/KCP2rWifs1.lottie"
        autoplay
      />
    </div>
  );
};

export default Loader;
