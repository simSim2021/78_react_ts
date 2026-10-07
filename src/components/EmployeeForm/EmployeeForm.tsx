import Input from "../Input/Input";
import { EmployeeFormWrapper } from "./styles";


function EmployeeForm (){
    return(
<EmployeeFormWrapper>
        <Input
        name="name"
        label="Name*"
        placeholder="Enter your name"
        id="name_id"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name="surname"
        label="Surname*"
        placeholder="Enter your surname"
        id="surname_id"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Input
        name="age"
        label="Age*"
        type="number"
        placeholder="Enter your age"
        id="age_id"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.errors.age}
      />
    <Input
        name="jobPosition"
        label="Job Position"
        placeholder="Enter your employee Position"
        id="jobPosition_id"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
    <Button name="Create" type="submit"/>


</EmployeeFormWrapper>
    )
}

export default EmployeeForm;