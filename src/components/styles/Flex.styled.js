import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    
  }
`