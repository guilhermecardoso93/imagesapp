import styled from "styled-components";

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  height: 100vh;
`;
export const Area = styled.div`
  margin: auto;
  max-width: 80%;
  padding: 1.87rem 0;
`;

export const Header = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ScreenWaring = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;

export const PhotoList = styled.div`
 

  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
  }
`;
