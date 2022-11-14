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
  margin: auto;
  display: grid;
  grid-template-columns: 400px 400px 400px 400px;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
`;

export const UploadForm = styled.form`
  display: flex;
  align-items: center;
  justify-content:space-between;
  width: 100%;
  margin: 4rem;
  background-color: #3d3f4d;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  input[type=submit] {
    background-color: #756df4;
    border: 0;
    color: #FFF;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin:0 20px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

 
`;
