import React from "react";
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = ({ scrollToCarrossel, scrollToAbout, scrollToSkills }) => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
    }));

    return (
        <div>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem onClick={scrollToAbout}>About</MenuItem> {/* Rola até o About */}
                    <MenuItem onClick={scrollToSkills}>Skills</MenuItem> {/* Rola até o Skills */}
                    <MenuItem onClick={scrollToCarrossel}>Projects</MenuItem> {/* Rola até o Carrossel */}
                </StyledToolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
