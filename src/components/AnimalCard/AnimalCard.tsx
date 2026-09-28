import { AnimalImage, MyAnimalCard } from "./styles";

import type { AnimalCardProps } from "./types";

function AnimalCard({name, species="unknown animal", imgSrc, children}:AnimalCardProps) {
  return (
    <MyAnimalCard>
      <h3>{name}</h3>
      <div>{species}</div>
      <AnimalImage src={imgSrc}/>
      {children}
    </MyAnimalCard>
  );
}
export default AnimalCard;
