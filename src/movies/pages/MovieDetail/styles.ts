import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
`;

export const MovieContents = styled.div`
  padding: 20px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  span {
    font-family: 'IM_Hyemin-Bold';
    word-wrap: break-word;
  }
  overflow: auto;
`;

export const MovieDetailImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  object-position: center center;
`;

export const MovieDetailTitle = styled.h2`
  font-size: 30px;
`;
