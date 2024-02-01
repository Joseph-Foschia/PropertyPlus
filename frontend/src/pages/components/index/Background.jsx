import LoginCard from "./LoginCard";
import backgroundImage from "./photos/background-login.png";

export default function Background() {
  return (
    <div className="background">
      <img
        src={backgroundImage}
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
          filter: "blur(2px)",
        }}
      />
      <LoginCard />
    </div>
  );
}
