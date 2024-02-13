import { Box, Button, ThemeProvider, createTheme } from '@mui/material';
import { h } from 'preact';
import { NavMenu } from '../components/home/menu';
import { BottomBody } from '../components/home/bottomBody';
import { BottomTitle } from '../components/home/bottomTitle';
import { TitleApp } from '../components/home/titleApp';

export function Home(props) {
    return (
			<div class="app-container">
				<div class="app-half-first">
					<NavMenu />
					<TitleApp />
					<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:35}}>
						<Button variant="contained" size="large" color='secondary'>Découvrir</Button>
                	</Box>
				</div>
				<div class="app-half-second">
					<Box>
						<BottomTitle />
						<BottomBody/>
					</Box>				
				</div>
			</div>
    );
}