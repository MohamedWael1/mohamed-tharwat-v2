import styled, { css } from "styled-components";
import { getTextStyles } from "./Text.utils";

const Text = styled.p`
    margin: 0;
    line-height: 1.5;

    ${props => {
        const { fontSize, color } = getTextStyles(props);

        return css`
            font-size: ${fontSize};
            color: ${color};
        `
    }}

    ${({ weight }) => (
        weight
        &&
        css`
            font-weight: ${weight};
        `
    )}
`;

export default Text;