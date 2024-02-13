import '../../assets/style.css';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import AppIcon from '../../assets/appIcon.png';

export function TitleApp(){
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	
    return (
		<Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'center', alignItems: 'center', marginTop:40}}>
			<img src={AppIcon} style={{margin:'-50px'}} alt="logo"/>
			<Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', textAlign: 'center', textShadow:'2px 2px 4px rgba(0, 0, 0, 1)', marginTop:5}}>
				<Typography variant={isMobile ? "h3": "h1"} color='secondary'>
					MENSTRUFYC
				</Typography>
				<Typography variant="h5" color='secondary' sx={{textShadow:'2px 2px 4px rgba(0, 0, 0, 1)'}} gutterBottom>
					En phase avec votre cycle, en contrôle de votre vie.
				</Typography>
			</Box>

		</Box>
	);
};