import '../style.css';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import ImageCycle from '../assets/imageCycle.png';



export function BottomBody() {
	const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return(
		<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap:'wrap', marginTop:2}}>
			<img 
			src={ImageCycle} 
			style={{
				 width: isMobile ? '50%' : 'none', 
				 height: isMobile ? '50%' : 'none',
				 marginBottom: isMobile ? 10 : 0 
			}} 
			alt='picture cycle'/>
			<Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
				<Typography variant='h3' sx={{whiteSpace:'pre-line', textAlign:'center'}} color="white">
					{"Le suivi des règles est essentiel pour\n comprendre la santé féminine, détecter\n d'éventuels problèmes et planifier la vie\n quotidienne"}
				</Typography>
				<Button variant="contained" sx={{marginTop:5}} size="large" color='secondary'>Suivre mon cycle</Button>
			</Box>
		</Box>
	);
}