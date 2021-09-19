import styled from "styled-components";
import { colors } from "theme";

function NavigationSection({ title, options = [] }) {
  return (
    <NavigationSectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <NavContainer>
        {options.map((option) => (
          <li key={option.value}>
            <a>
              {option.label}
              {option.count && ` (${option.count})`}
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
    a {
      &:hover {
        color: ${colors.mainOrange};
      }
    }
  }
`;
