import { Button } from "./Button.styled"
import { StyledCallToAction } from "./styles/CallToAction.styled"

export default function CallToAction() {
    return (
        <StyledCallToAction>
            <h3>Ready to Build Your Community</h3>
            <Button bg="hsl(322, 100%, 66%)" color="white" bgHover="hsla(322, 100%, 66%, .6)">Get Started for Free</Button>
        </StyledCallToAction>
    )
}
