import { Stack, Typography, Slider, Box, IconButton, Icon } from '@mui/material';
import { formatTime } from '../../utils/formatTime';
import { PlayArrow, SkipNext, SkipPrevious, Pause } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const PlayerControls = ({ is_paused, duration, progress, player }) => {
	const [currentProgress, setCurrentProgress] = useState(progress ?? 0);
	const skipStyle = { width: 28, height: 28 };
	const PlayStyle = { width: 38, height: 38 };

	useEffect(() => {
		const intervalID = setInterval(() => {
			if (!is_paused && player) {
				setCurrentProgress((prevState) => prevState + 1);
			}
		}, 1000);
		return () => clearInterval(intervalID);
	}, [is_paused, player]);

	useEffect(() => {
			if (progress !== undefined) {
				setCurrentProgress(progress);
			}
	}, [progress]);

	return (
		<Stack direction={'column'} spacing={2} justify="center" alignItems="center" sx={{ width: '100%' }}>
			<Stack spacing={1} direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
				<IconButton
					onClick={() => {
						setCurrentProgress(0);
						player.previousTrack();
					}}
					size="small"
					sx={{ color: 'text.primary' }}
				>
					<SkipPrevious sx={skipStyle} />
				</IconButton>
				<IconButton
					onClick={() => {
						player.togglePlay();
					}}
					size="small"
					sx={{ color: 'text.primary' }}
				>
					{is_paused ? <PlayArrow sx={PlayStyle} /> : <Pause sx={PlayStyle} />}
				</IconButton>
				<IconButton
					onClick={() => {
						setCurrentProgress(0);
						player.nextTrack();
					}}
					size="small"
					sx={{ color: 'text.primary' }}
				>
					<SkipNext sx={skipStyle} />
				</IconButton>
			</Stack>
			<Stack spacing={2} direction="row" justifyContent={'center'} alignItems={'center'} sx={{ width: '75%' }}>
				<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>
					{formatTime(currentProgress)}
				</Typography>
				<Slider
					max={duration}
					value={currentProgress}
					min={0}
					size="medium"
					onChange={(e, value) => {
						setCurrentProgress(value);
					}}
					onChangeCommitted={(e, value) => {
						player.seek(value * 1000);
					}}
				/>
				<Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{formatTime(duration)}</Typography>
			</Stack>
		</Stack>
	);
};

export default PlayerControls;
