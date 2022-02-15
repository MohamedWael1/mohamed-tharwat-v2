import { css } from "styled-components";

const mixins = {
    flexCenter: css`
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    flexSpaceBetween: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    flexColumnCenter: css`
        display: flex;
        align-items: center;
        flex-direction: column;
    `,
    flexYCenter: css`
        display: flex;
        align-items: center;
    `
};

const bp = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280
}

export default { mixins, bp }