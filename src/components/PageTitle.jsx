import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
export const PageTitle = ({props}) =>{
    const theme = useTheme();
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center', // Center the content horizontally
                alignItems: 'center', // Center the content vertically
                height: '100vh', // Full height of the viewport
                width: '100vw', // Full width of the viewport
                textAlign: 'center', 
                background: `radial-gradient(circle,
                ${theme.palette.primary.light} 0%,${theme.palette.background.default}  100%)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <Typography variant="body1" component="p" 
                    style={{
                        paddingTop: '50px',
                        paddingBottom:'10px',
                        fontFamily: 'Fredoka',
                        fontSize: '64px',
                        fontWeight: '300',
                        lineHeight: '77.44px',
                        textAlign: 'center',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                    }} sx={{ color: 'text.primary' }}>
                    {props.title}
                    <Typography variant="body1" component="p" 
                        style={{fontFamily: 'Fredoka' ,
                            fontSize: '32px',
                            fontWeight: '400',
                            lineHeight: '38.53px',
                            textAlign: 'center',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none'
                        }} sx={{ color: 'secondary.light' }}>
                        {props.subtitle}
                    </Typography>
                </Typography>
               
            </div>
        </>
    );
};