import styled from "styled-components";
import { colors } from "theme";

function Dropdown({ placeholder = "Dropdown", options = [], ...props }) {
  return (
    <SelectWrapper name="choice" data-testid="dropdown" {...props}>
      <option hidden>{placeholder}</option>
      {options.length > 0 ? (
        options.map((option, index) => (
          <option value={option.value} key={`option-${index}`}>
            {option.label}
          </option>
        ))
      ) : (
        <option disabled data-testid="dropdown-noOption">
          Seçenek Yok
        </option>
      )}
    </SelectWrapper>
  );
}

export default Dropdown;

const SelectWrapper = styled.select`
  color: ${colors.lightGray};
  border: 1px solid ${colors.lightGray};
  border-radius: 4px;
  height: 48px;
  width: 120px;
`;
