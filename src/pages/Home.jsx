import { Box, Button } from '@mui/material'

const Home = () => {
    return (
    <Box sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 5
    }}>
        <img src="public/Calle.jpg" alt="Carl Lembrén" style={{ maxWidth:'50%', maxHeight: '50%' }} />
        <Button size='large' variant='contained' href={`mailto:carl.lembren@live.se`}>
            Kontakta mig!
        </Button>
    </Box>
    );
};

export default Home;
