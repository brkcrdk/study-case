import styled from "styled-components";
import NavigationSection from "./NavigationSection";
import navOptions from "navOptions";

function Navigation() {
  return (
    <NavigationWrapper>
      {navOptions.map((option) => (
        <NavigationSection
          title={option.title}
          options={option.options}
          key={option.title}
        />
      ))}
    </NavigationWrapper>
  );
}
export default Navigation;

const NavigationWrapper = styled.nav`
  width: 224px;
  margin-top: 19px;
`;
