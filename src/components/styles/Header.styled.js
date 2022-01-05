import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  @media(max-width: ${({theme}) => theme.mobile}){
    
    text-align: center;}
  
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  

  @media (max-width: ${({ theme }) => theme.mobile}) {
    /* flex-direction: column; */

    button {
      width: 30%;
      display: flex;
      justify-content: center;
      font-size: 12px;
    }
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 7rem;
    /* margin-bottom: 40px; */
  }
`;

export const Image = styled.img`
  width: 475px;
  margin-left: 40px;

  @media(max-width: ${({theme}) => theme.mobile}){
    margin: 40px 0 30px;
    align-self: center;
}
`;
