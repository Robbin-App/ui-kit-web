import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '@material-ui/core/Avatar';
import { Logo, LogoType } from '../Logo';
import { container } from '../../styles';
import { HeaderLink } from '../HeaderLink';

export interface INavItems {
  href: string;
  label: string;
  renderIcon(): ReactElement;
}

export interface IHeaderProps {
  /**
   * Logo Type of the Header
   */
  logoType: LogoType;
  /**
   * Navigation Items of the Header
   */
  navItems: INavItems[];
  /**
   * Navigation Items Link Wrapper
   */
  navItemLinkWrapper?(
    props: INavItems,
    children: ReactElement
  ): ReactElement | null;
  /**
   * Current site pathname
   */
  pathname: string;
  /**
   * Logged User First Name
   */
  userFirstName?: string;
  /**
   * Logged User Last Name
   */
  userLastName?: string;
  /**
   * Function to render the right side avatar component
   */
  avatarLinkWrapper?(children: ReactElement): ReactElement | null;
}

/**
 * Basic Header Component
 */
export const Header: React.FunctionComponent<IHeaderProps> = ({
  navItems,
  logoType,
  userLastName,
  userFirstName,
  children,
  pathname,
  avatarLinkWrapper = () => null,
  navItemLinkWrapper = () => null,
}) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <StyledHeader>
      <InnerContainer>
        <Logo type={logoType} />
        <NavContainer>
          <StyledNav open={mobileOpen}>
            {children}
            {navItems.map((navItem) =>
              navItemLinkWrapper(
                navItem,
                <HeaderLink
                  key={navItem.href}
                  label={navItem.label}
                  renderIcon={navItem.renderIcon}
                  active={pathname === navItem.href}
                />
              )
            )}
          </StyledNav>
        </NavContainer>
        <DesktopAvatar>
          {avatarLinkWrapper(
            <Avatar>
              {userFirstName &&
                userLastName &&
                `${userFirstName.charAt(0)}${userLastName.charAt(0)}`}
            </Avatar>
          )}
        </DesktopAvatar>
        <MobileMenuTrigger
          aria-hidden={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          tabIndex={mobileOpen ? 0 : -1}
          aria-label={mobileOpen ? 'cerrar menu' : 'abrir menu'}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </MobileMenuTrigger>
      </InnerContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  box-shadow: ${(props) => props.theme.shadows.global};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const InnerContainer = styled.div`
  ${container};
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${(props) => props.theme.mq.desktop} {
    height: 67px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const StyledNav = styled.nav<{ open: boolean }>`
  position: absolute;
  top: 60px;
  width: 100%;
  left: 100%;
  height: calc(100vh - 60px);
  padding: 20px 24px;
  background-color: ${(props) => props.theme.colors.white};
  border-top: 1px solid ${(props) => props.theme.colors.border.lightBorder};
  transition: all 0.4s ease-in-out;
  transform: translateX(${(props) => (props.open ? '-100%' : '0')});
  ${(props) => props.theme.mq.desktop} {
    transform: none;
    padding: 0;
    height: auto;
    position: static;
    display: flex;
    align-items: center;
    margin-left: 60px;
    border: 0;
  }
  a {
    text-decoration: none;
  }
  & > * {
    margin-right: 22px;
  }
`;

const DesktopAvatar = styled.div`
  display: none;
  a {
    text-decoration: none;
  }
  ${(props) => props.theme.mq.desktop} {
    display: block;
  }
`;

const MobileMenuTrigger = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 0;
  ${(props) => props.theme.mq.desktop} {
    display: none;
  }
  svg {
    color: ${(props) => props.theme.colors.text.globalText};
  }
`;

Header.defaultProps = {
  // eslint-disable-next-line react/display-name
  navItemLinkWrapper: (props, children) => (
    <a href={props.href} key={props.href}>
      {children}
    </a>
  ),
  // eslint-disable-next-line react/display-name
  avatarLinkWrapper: (children) => <a href="#">{children}</a>,
};
