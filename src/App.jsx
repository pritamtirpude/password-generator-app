import PasswordCard from "./components/PasswordCard/PasswordCard";
import { useMediaQuery } from "./hooks/useMediaQuery";

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
    </main>
  );
};

export default App;
