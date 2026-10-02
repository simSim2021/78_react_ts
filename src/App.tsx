// Lessons imports
// import Lesson05 from "./lessons/Lesson05/Lesson05";
// import Lesson06 from "./lessons/Lesson06/Lesson06";
//import Homework06 from "./homeworks/Homework06/Homework06";
//import Lesson08 from "./lessons/Lesson08/Lesson08";
//import Lesson09 from "./lessons/Lesson09/Lesson09";
import Lesson10 from "./lessons/Lesson10/Lesson10";
import GlobalStyles from "./styles/GlobalStyles";
//import Lesson07 from "./lessons/Lesson07/Lesson07";
// Homeworks imports
function App() {
  return (
    // <></> - fragmet. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <>
    <GlobalStyles/>
      {/* Lesson 05. TypeScript */}
      {/* <Lesson05 /> */}
      {/* Lesson 06. Component typing */}
      {/* <Lesson06/> */}
      {/* Lesson 07. Styling components */}
      {/* <Lesson07/> */}
      {/* <Homework06/> */}
  {/* Lesson 08. Controlled and uncontrolled components */}
      {/* <Lesson08/> */}
      {/* <Lesson09/> */}
       {/* Lesson 10. Formik, Yup */}
      <Lesson10/>
    </>
  );
}
export default App;