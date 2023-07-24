import Lottie from "react-lottie";
import animationData from "../../../public/assets/svg/dark_animation.json";

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={500} width={500} />;
};

export default LottieAnimation;
