import { useRouter } from "next/router";
import Animals from "../Animals";
import Link from "next/link";

const animalsPage = () => {
  const router = useRouter();
  const idFromUrl = Number(router.query.animal);
  if (isNaN(idFromUrl)) {
    return <h1>No ID available</h1>;
  }

  const animalFromUrl = Animals.find((animal) => Animal.id === idFromUrl);
  if (!animalFromUrl) {
    return <h1>Animal not found</h1>;
  }

  return (
    <div>
      <Link href="/"></Link>
    </div>
  );
};

export default animalsPage;
