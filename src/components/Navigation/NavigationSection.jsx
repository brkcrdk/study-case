import { useContext } from "react";
import styled from "styled-components";
import { FilterContext } from "store";
import { colors } from "theme";

function NavigationSection({ title, filterType, options = [] }) {
  const { sort, onSortChange } = useContext(FilterContext);
  return (
    <NavigationSectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <NavContainer>
        {options.map((option) => (
          <li
            key={option.value}
            className={sort === option.value ? "active" : ""}
            onClick={() =>
              onSortChange({
                value: option.value,
                filterType,
              })
            }
          >
            <a>
              {option.label} {option.count && ` (${option.count})`}
            </a>
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
      font-weight: 500;
      color: ${colors.mainOrange};
    }
    a {
      &:hover {
        color: ${colors.mainOrange};
      }
    }
  }
`;
