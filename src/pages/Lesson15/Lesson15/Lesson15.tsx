import { useContext } from "react"
import MainCard from "./components/MainCard/MainCard"
import { Lesson15Wrapper } from "./styles"
import { InputContext } from "../../../components/Layout/Layout"

function Lesson15() {
  const {data} = useContext(InputContext)
  return (
    <Lesson15Wrapper>
      <MainCard />
      {data}
    </Lesson15Wrapper>
  )
}
export default Lesson15