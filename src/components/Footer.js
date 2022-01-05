import { StyledFooter } from "./styles/Footer.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="huddle" />
        <Flex>
          <ul>
            <li> <span><img src="./images/icon-location.svg" alt="location"/></span>
                
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li><span><img src="./images/icon-phone.svg" alt="" /></span>+1-543-123-4567</li>
            <li> <span><img src="./images/icon-email.svg" alt="" /></span> example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons/>
        </Flex>
        <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
}


