import { Box, Button } from '@mui/material';
import { accessURL } from '../config/config';

const Login = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'background.paper',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column'
			}}
		>
            <img
				src="/Spotify_Logo.png"
				alt="Techover spotify"
				style={{ marginBottom: 300, width: '70%', maxWidth: 500 }}
			/>
			<Button color="primary" size="large" variant="contained" href={accessURL}>
				Login to Spotify
			</Button>
		</Box>
	);
};

export default Login;
