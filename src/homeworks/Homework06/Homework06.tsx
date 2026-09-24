import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { v7 } from "uuid";

import type { Animal } from "../../components/AnimalCard/types";
import { animalsData } from "./data";

function Homework06() {
  // Метод map позволяет выполнять какое-то действие с каждым элементом массива
  // при этом он возвращает новый массив (обязательно должен быть return)
  //   Как результат мы здесь получим массив компонентов(JSX)
  const animals = animalsData.map((animal: Animal, index:number) => {
    return (
      <AnimalCard
        key={v7()}
        name={`${index + 1} - ${animal.name}`}
        species={animal.species}
        imgSrc={animal.image}
      />
    );
  });

  return <div className="homework06-wrapper">{animals}</div>;
  
}

export default Homework06;