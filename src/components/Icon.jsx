import styled from "styled-components";

function Icon({ name, size = 20, color, ...props }) {
  return (
    <CustomIcon
      className={`icon icon-${name}`}
      size={size}
      color={color}
      {...props}
    />
  );
}
export default Icon;

const CustomIcon = styled.i`
  font-size: ${(p) => `${p.size}px`};
  color: ${(p) => p.color};
`;
