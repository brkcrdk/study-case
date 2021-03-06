import { useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "store";
import { colors } from "theme";

function NavigationSection({ title, filterType, options = [] }) {
  const { sort, color, brand, onFilterChange } = useContext(FilterContext);
  const isActive = (value) => {
    if (filterType === "sort" && value === sort) {
      return "active";
    }
    if (color.includes(value) || brand.includes(value)) {
      return "active";
    }
  };
  return (
    <NavigationSectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <NavContainer>
        {options.map((option) => (
          <li key={option.value} className={isActive(option.value)}>
            <button
              onClick={() =>
                onFilterChange({
                  value: option.value,
                  filterType,
                })
              }
            >
              {option.label} {option.count && ` (${option.count})`}
            </button>
          </li>
        ))}
      </NavContainer>
    </NavigationSectionWrapper>
  );
}
export default NavigationSection;

const NavigationSectionWrapper = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.span`
  color: ${colors.darkGray};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const NavContainer = styled.ul`
  margin-top: 20px;
  li {
    font-size: 14px;
    color: ${colors.navText};
    margin: 6px 0;
    &.active {
      button {
        font-weight: 800;
        color: ${colors.mainOrange};
      }
    }
    button {
      &:hover {
        cursor: pointer;
        color: ${colors.mainOrange};
      }
    }
  }
`;
