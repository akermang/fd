import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { Drawer, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styles from "./drawer.component.scss";
import { ROUTES } from "../../../common/constants";
import LogoComponent from "../logo/logo.component.jsx";
import ImgSrc from "../../../../assets/img/logo.png";
import HomeIcon from "@material-ui/icons/Home";
import CodeIcon from "@material-ui/icons/Code";

const DrawerComponent = ({ closeDrawer, open, currentRoute, t }) => (
  <Drawer
    open={open}
    className={styles.container}
    variant="temporary"
    onClose={() => closeDrawer()}
  >
    <div className={styles.drawer}>
      <div className={styles.logo}>
        <LogoComponent />
      </div>
      <DrawerLink
        to={ROUTES.home}
        iconSrc={<HomeIcon />}
        label={t("HOME_PAGE")}
        closeDrawer={closeDrawer}
      />
    </div>
  </Drawer>
);

const DrawerLink = ({ closeDrawer, iconSrc, label, to }) => (
  <NavLink activeClassName={styles.active} to={to}>
    <MenuItem onClick={() => closeDrawer()}>
      {iconSrc}
      <span>{label}</span>
    </MenuItem>
  </NavLink>
);

DrawerLink.propTypes = {
  to: PropTypes.string.isRequired,
  iconSrc: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

DrawerComponent.propTypes = {
  currentRoute: PropTypes.string,
  t: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

DrawerComponent.defaultProps = { currentRoute: ROUTES.empty };

export default translate()(DrawerComponent);
