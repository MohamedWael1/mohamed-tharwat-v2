import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import MaxWidthWrapper from "components/MaxWidthWrapper";
import Text from "components/Text";
import { NAV_LINKS } from "constants/navigation";
import useLocale from "hooks/useLocale";
import useScrollPosition from "hooks/useScrollPosition";
import cls from "classnames";
import usePrevious from "hooks/usePrevious";

function Header(){
    const { t } = useLocale();
    const { pathname } = useRouter();
    const { top, direction } = useScrollPosition();
    const [isOpened, setIsOpened] = React.useState(false);
    const prev = usePrevious(isOpened);

    const isHidden = top > 80 && direction === 1;

    return (
        <FixedHeader className={cls({ hidden: isHidden })}>
            <Wrapper maxWidth={1300}>
                <Logo href="/">
                    <span>د.محمد ثروت</span>
                </Logo>

                <Nav>
                    <ul>
                        {
                            NAV_LINKS.map(({ href, label }, index) => (
                                <li key={index}>
                                    <Link href={href}>
                                        <a className={cls({ active: href === pathname })}>
                                            {t(label)}
                                        </a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </Nav>

                <Toggler 
                    className={cls({ "nav-opened": isOpened })}
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <span></span>
                    <span></span>
                </Toggler>
            </Wrapper>
        </FixedHeader>
    )
}

const FixedHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid var(--color-gray-100);
    transition: transform 300ms;

    &.hidden{
        transform: translateY(calc(-1 * var(--header-height) - 10px));
    }
`;

const Wrapper = styled(MaxWidthWrapper)`
    ${({ theme }) => theme.mixins.flexSpaceBetween};
    height: var(--header-height);
`;

const Logo = styled.a`
    text-decoration: none;
    font-size: 26px;
`;

const Nav = styled.nav`
    ul{
        ${({ theme }) => theme.mixins.flexYCenter};
    }

    li{
        margin-inline-end: 8px;

        &:last-child{
            margin-inline-end: 0;
        }
    }

    a{
        display: block;
        padding: 4px 16px;
        background-color: transparent;
        border-radius: 5px;
        font-size: var(--fz-md);
        transition: background-color 300ms,
                    color 300ms;

        &.active{
            // background-color: #3b82f6;
            // background-color: #0076ffe6;
            background-color: #4338ca;
            color: #fff;
        }

        &:hover{
            text-decoration: underline;
        }

        &.active:hover{
            text-decoration: none;
        }
    }

    @media (max-width: ${({ theme }) => theme.bp.md}px){
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

        ul{
            flex-direction: column;
            align-items: stretch;
        }

        li{
            margin-inline-end: 0;
        }

        a{
            border-radius: 0px;
            padding: 8px 16px;

            &.active{
                background-color: rgb(0, 0, 0, 0.02);
                color: var(--text-color);
            }

            &:hover{
                text-decoration: none;
                background-color: rgb(0, 0, 0, 0.02);
            }
        }
    }
`;

const Toggler = styled.button`
    background-color: transparent;
    padding: 4px;
    border: none;

    span{
        display: block;
        width: 25px;
        height: 2px;
        background-color: var(--text-color);
        margin: 0 0 8px;
        transition: transform 400ms;
        
        &:last-child{
            margin: 0;
        }
    }

    &.nav-opened span:nth-child(1){
        transform: translateY(5px) rotate(45deg);
    }

    &.nav-opened span:nth-child(2){
        transform: translateY(-5px) rotate(-45deg);
    }

    @media (min-width: ${({ theme }) => theme.bp.md}px){
        display: none;
    }
`;

export default Header;