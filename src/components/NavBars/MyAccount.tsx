import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { style } from "../../common/style";
import { ACCOUNT } from "./Root";
const MyAccount = () => {
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
                    {ACCOUNT.map((item) => (
                        <ListItem >
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

export default MyAccount;
