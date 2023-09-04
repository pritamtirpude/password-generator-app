import PasswordCard from "./components/PasswordCard/PasswordCard";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { FollowMe } from "./components";

const App = () => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <main
      className={` ${
        matches
          ? "flex justify-center py-16"
          : "flex justify-center items-center"
      } w-full h-screen`}
    >
      <PasswordCard />
      <FollowMe />
    </main>
  );
};

export default App;
