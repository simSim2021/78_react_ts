// import Content from "../Content/Content"
// import { SectionTitle, SectionWrapper } from "./styles"

//props drilling

// interface SectionProps {
//   name: string,
//   lastName: string,
//   age: number
// }
// function Section({name, lastName, age}: SectionProps) {
//   return (
//     <SectionWrapper>
//       <SectionTitle>Section Block</SectionTitle>
//       <Content name={name} lastName={lastName} age={age} />
//     </SectionWrapper>
//   )
// }
// export default Section;

import Content from "../Content/Content"
import { SectionTitle, SectionWrapper } from "./styles"
function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      <Content />
    </SectionWrapper>
  )
}
export default Section;


