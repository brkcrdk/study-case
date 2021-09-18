import styled from "styled-components";
import { colors } from "theme";

function Dropdown({ placeholder = "Dropdown", options = [] }) {
  return (
    <SelectWrapper name="choice" placeholder="xxx">
      <option value="" selected disabled hidden>
        {placeholder}
      </option>
      {options.length > 0 ? (
        options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))
      ) : (
        <option disabled>Seçenek Yok</option>
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
