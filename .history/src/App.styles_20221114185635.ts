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
  grid-template-columns: repeat(2, minmax(10px, 1fr));
	grid-template-rows: 50px 50px;
	grid-auto-columns: 100px;
	grid-auto-flow: column;
`;