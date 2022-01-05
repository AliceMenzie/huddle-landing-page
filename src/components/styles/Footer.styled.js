import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  img {
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 1rem;
  }

  ul:first-child {
    margin-right: 4rem;
    li:nth-child(1){
  list-style-image: url('./images/icon-location.svg');
  padding-left: 1.5rem;
    }
    li:nth-child(2){
  list-style-image: url('./images/icon-phone.svg');
  padding-left: 1.5rem;
    }
    li:nth-child(3){
  list-style-image: url('./images/icon-email.svg');
  padding-left: 1.5rem;
    }
}

  ul li {
    margin-bottom: 20px;
    
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: left;

    ul {
      padding: 0;
      text-align: left;
    }
    p {
      text-align: center;
    }

    ul:first-child {
    margin-left: 2rem;
  }
  }
`;
