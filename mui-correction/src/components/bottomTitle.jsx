import '../style.css';
import { Box, Typography } from '@mui/material';
import BlueIcon from '../assets/blueIcon.png';

export function BottomTitle() {
	return (
		<Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:10}}>
			<img src={BlueIcon} alt="logo blue"/>
			<Typography variant='h4' sx={{whiteSpace:'pre-line', textAlign:'center', WebkitTextStroke:'1px white'}} color="primary">
				{'Si vous souhaitez suivre votre cycle \nmenstruel, vous êtes au bon endroit !'}
			</Typography>
		</Box>
	);
}