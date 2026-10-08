
import {
  EmployeeCardWrapper,
  EmployeeInfo,
} from "./styles";
import type { EmployeeCardProps } from "./types";

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <EmployeeCardWrapper>
      <EmployeeInfo>
        Name: {employee.name}
      </EmployeeInfo>

      <EmployeeInfo>
        Surname: {employee.surname}
      </EmployeeInfo>

      <EmployeeInfo>
        Age: {employee.age}
      </EmployeeInfo>

      {employee.jobPosition && (
        <EmployeeInfo>
          Job Position: {employee.jobPosition}
        </EmployeeInfo>
      )}
    </EmployeeCardWrapper>
  );
}

export default EmployeeCard;