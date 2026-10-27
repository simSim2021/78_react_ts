// Lessons imports
import Lesson05 from "./lessons/Lesson05/Lesson05";
import Lesson06 from "./lessons/Lesson06/Lesson06";
//import Homework06 from "./homeworks/Homework06/Homework06";
import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson09 from "./lessons/Lesson09/Lesson09";
//import Homework10 from "./homeworks/Homework10/Homework10";
import Lesson11 from "./lessons/Lesson11/Lesson11";
import Lesson12 from "./lessons/Lesson12/Lesson12";
import Lesson10 from "./lessons/Lesson10/Lesson10";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import Lesson07 from "./lessons/Lesson07/Lesson07";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Users from "./pages/Users/Users";
import AdminUser from "./pages/Users/components/AdminUser/AdminUser";
import Lesson15 from "./pages/Lesson15/Lesson15/Lesson15";
import Home from "./pages/Home/Home";
import GetProfile from "./pages/GetProfile/GetProfile";
import Profile from "./pages/Profile/Profile";
// Homeworks imports
function App() {
  return (
    // <></> - fragmet. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <BrowserRouter>
      <GlobalStyles />
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
      {/* <Lesson10/> */}
      {/* <Homework10/> */}
      {/* <Lesson11/> */}
      {/* <Lesson12/> */}
      <Layout>
        {/* Routes - компонент из react-router, в котором мы храним
        все пути и компоненты страниц, которые должно по ним отображаться */}
        <Routes>
          {/* Route - компонент, который содержит путь и страницу, которая отображается
          по этому пути */}
           <Route path="/" element={<Home />} />
          <Route path="/lesson-05" element={<Lesson05 />} />
          <Route path="/lesson-06" element={<Lesson06 />} />
          <Route path="/lesson-07" element={<Lesson07 />} />
          <Route path="/lesson-08" element={<Lesson08 />} />
          <Route path="/lesson-09" element={<Lesson09 />} />
          <Route path="/lesson-10" element={<Lesson10 />} />
          <Route path="/lesson-11" element={<Lesson11 />} />
          <Route path="/lesson-12" element={<Lesson12 />} />

          {/* Lesson14 React router */}
          <Route path="/users" element={<Users />} />
          <Route path="/users/admin" element={<AdminUser />} />
          {/* Lesson 15. Context */}
          <Route path="/lesson-15" element={<Lesson15 />} />
          <Route path="/get-profile" element={<GetProfile />} />
          <Route path="/profile" element={<Profile />} />
          {/* Страница PageNotFound будет показываться, если ни один из маршрутов
          выше не будет найден */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
