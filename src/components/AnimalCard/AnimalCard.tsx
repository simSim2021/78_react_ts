import { AnimalDiv, AnimalH3, AnimalImage, MyAnimalCard } from "./styles";

import type { AnimalCardProps } from "./types";

function AnimalCard({name, species="unknown animal", imgSrc, children}:AnimalCardProps) {
  return (
    <MyAnimalCard>
      <AnimalH3>{name}</AnimalH3>
      <AnimalDiv>{species}</AnimalDiv>
      <AnimalImage src={imgSrc}/>
      {children}
    </MyAnimalCard>
  );
}
export default AnimalCard;
