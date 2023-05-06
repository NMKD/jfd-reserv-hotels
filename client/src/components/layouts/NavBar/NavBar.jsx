import React from "react";
import PropTypes from "prop-types";
import NavBarWrapper from "./NavBarWrapper";
import NavBarLinkList from "./NavBarLinkList";
import StyledNavLink from "./StyleNavLink";
import NavBarDropdown from "./NavBarDropdown";
import { ROUTER_PATH } from "../../../constans";

const NavBar = ({ userId, logOut, user }) => {
    return (
        <NavBarWrapper>
            <NavBarLinkList>
                <StyledNavLink to="/">Гланая</StyledNavLink>
                {user !== null ? (
                    <>
                        <StyledNavLink to={`/${ROUTER_PATH.orders}`} end>
                            История заказов
                        </StyledNavLink>
                        <NavBarDropdown {...{ logOut, userId, user }} />
                    </>
                ) : (
                    <StyledNavLink to="login" styleType="button">
                        Войти
                    </StyledNavLink>
                )}
            </NavBarLinkList>
        </NavBarWrapper>
    );
};

NavBar.propTypes = {
    userId: PropTypes.string,
    logOut: PropTypes.func,
    user: PropTypes.object
};

export default NavBar;
