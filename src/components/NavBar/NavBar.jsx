import React from "react";
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

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
                    <MenuItem component={Link} to="/Projetos">Projects</MenuItem> {/* Navega para a rota de projetos */}
                </StyledToolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
