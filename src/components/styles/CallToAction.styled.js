import styled from "styled-components";

export const StyledCallToAction = styled.div`
  background-color: white;
  color: black;
  width: 55%;
  border: 1px solid white;
  align-self: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -75px;
  left: 0;
  right: 0;
  /* margin: -40px 40px 20px 40px; */
  /* margin: 0 auto; */
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  white-space: nowrap;
  position: absolute;
  border-radius: 5px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    
    h3 {
      font-size: 16px;
    }

    button {
      width: 80%;
      display: flex;
      justify-content: center;
      margin-left: 25px;
    }
    }
`;
