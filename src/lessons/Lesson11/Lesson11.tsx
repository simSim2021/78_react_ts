import { useState } from "react";

import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";



import {
  Lesson11Wrapper,
  TitleH2,
  FormWrapper,
} from "./styles";
import type { Employee } from "./types";

function Lesson11() {
  const [employee, setEmployee] = useState<Employee | null>(null);

  return (
    <Lesson11Wrapper>
      <TitleH2>Create Employee</TitleH2>

      <FormWrapper>
        <EmployeeForm setEmployee={setEmployee} />

        {/* Покажи компонент только тогда, когда условие истинно */}
        {employee && <EmployeeCard employee={employee} />}
      </FormWrapper>
    </Lesson11Wrapper>
  );
}

export default Lesson11;