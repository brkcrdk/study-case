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
          filterType={option.filterType}
          key={option.title}
        />
      ))}
    </NavigationWrapper>
  );
}
export default Navigation;

const NavigationWrapper = styled.nav`
  margin-top: 19px;
`;
