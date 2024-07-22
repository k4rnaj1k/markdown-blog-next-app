'use server'
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { getBlogName } from "../service/configService";

export const Navbar = async () => {
  const blogName = await getBlogName();

    return (<Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6">{blogName}</Typography>
            </Toolbar>
        </AppBar>
    </Box>)
};