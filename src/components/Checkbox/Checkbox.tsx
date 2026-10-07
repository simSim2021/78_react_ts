import { CheckboxContainer, CheckboxElement, CheckboxLabel } from "./styles";
import type { CkeckboxProps } from "./types";

function Checkbox ({name, id, checked, onChange, label }: CkeckboxProps){
    return(
        <CheckboxContainer>
                <CheckboxElement
                  name={name}
                  type="checkbox"
                  id={id}
                  checked={checked}
                  onChange={onChange}
                />
                <CheckboxLabel>{label}</CheckboxLabel>
              </CheckboxContainer>
    )
}

export default Checkbox;