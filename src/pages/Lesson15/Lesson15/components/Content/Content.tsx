// import { ContentComponent, DataItem } from "./styles";

//props drilling

// interface ContentProps {
//   name: string,
//   lastName: string,
//   age: number
// }
// function Content({name, lastName, age}: ContentProps) {
//   return (
//     <ContentComponent>
//       <DataItem>First Name: {name}</DataItem>
//       <DataItem>Last Name: {lastName}</DataItem>
//       <DataItem>Age: {age}</DataItem>
//     </ContentComponent>
//   );
// }
// export default Content;

import { useContext } from "react";
import { ContentComponent, DataItem } from "./styles";
import { MainCardContext } from "../MainCard/MainCard";
import Button from "../../../../../components/Button/Button";

function Content() {
// Шаг 3. Получение данных с помощью хука useContext и передачи в него нужного контекста
//const userData = useContext(MainCardContext)
const {data, onDataChange} = useContext(MainCardContext)
 
const clearData = ()=>{
  onDataChange(undefined);
}
return (
    <ContentComponent>
      <DataItem>First Name: {data?.firstName}</DataItem>
      <DataItem>Last Name: {data?.lastName}</DataItem>
      <DataItem>Age: {data?.age}</DataItem>
          <Button name="CLEAR DATA" onClick={clearData}/>
    </ContentComponent>
  );
}
export default Content;