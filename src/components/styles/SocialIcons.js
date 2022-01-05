import styled from "styled-components";

export const StyledIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-self: center;

li {
    list-style-type: none;
    
    a {
        color: white;
        border: 1px solid #fff;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;

        &:hover {
            color: hsl(322, 100%, 66%);
            border: 1px solid hsl(322, 100%, 66%);
        }
    }
}



`