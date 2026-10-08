import type { Employee } from "../../lessons/Lesson11/types";

export interface EmployeeFormProps {
  setEmployee: (employee: Employee | null) => void;
}