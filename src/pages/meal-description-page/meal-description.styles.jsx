import styled from "styled-components";

const getImageUrl = ({ imageUrl }) => {
  imageUrl = '.' + imageUrl;
  return imageUrl;
};

export const ImageContainer = styled.div`
  width: 50%;
  background: url("${getImageUrl}") no-repeat center/cover;
`;
