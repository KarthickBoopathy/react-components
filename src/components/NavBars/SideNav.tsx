import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { style } from "../../common/style";

type Props = {
    navMenus: any[]
}

const SideNav = ({ navMenus }: Props) => {
    const history = useHistory();
    const navigateTo = useCallback(
        (path) => {
            history.push(path);
        },
        [history]
    );
    return (
        <Box sx={{ width: 300, bgcolor: "background.paper" }}>
            <nav aria-label="sidenav">
                <List>
                    <ListItem sx={{ textAlign: "center", bgcolor: "#3b5998" }}>
                        <ListItemText primary="Hello Chief !!" sx={{ color: "white" }} />
                    </ListItem>

                    {navMenus.map((item, i) => (
                        <ListItem key={i} >
                            <ListItemButton onClick={() => navigateTo(item.path)} sx={style.sideNav}>
                                <ListItemText primary={item.menu} sx={{ textAlign: "center" }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </nav>
        </Box>
    );
};

export default SideNav;
