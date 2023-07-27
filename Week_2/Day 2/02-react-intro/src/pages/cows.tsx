import AnimalList from "@/component/AnimalsList";
import NavigationBar from "@/component/NavigationBar";

const Cows = () => {
  return (
    <div>
      <NavigationBar />
      <h1>Welcome to the Farm!</h1>
      <AnimalList kind="cow" />
    </div>
  );
};

export default Cows;
