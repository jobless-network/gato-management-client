import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import GatedContentEdit from "./GatedContentEdit";
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconBack } from './assets/icon_back.svg'
import { useCallback } from "react";

export default function NewGatedContent() {
    const navigate = useNavigate();
    const handleBack = useCallback(() => navigate('/', { replace: true }), [navigate]);

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconBack onClick={handleBack} />
                        <Container component="div" sx={{ flexGrow: 1 }} />
                        <Button variant="contained" color="primary">Create</Button>
                    </Toolbar>
                </AppBar>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: "white",
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        paddingLeft: "184px",
                        paddingTop: "116px",
                        paddingRight: "184px"
                    }}
                >
                    <GatedContentEdit />
                </Box>

            </Box>
        </>)
}
