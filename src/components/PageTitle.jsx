import Typography from '@mui/material/Typography';

export const PageTitle = ({props}) =>{
    return (
        <>
            <Typography variant="body1" component="p" 
                style={{fontFamily: 'Fredoka',
                    fontSize: '64px',
                    fontWeight: '300',
                    lineHeight: '77.44px',
                    textAlign: 'center',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                }} sx={{ color: 'text.primary' }}>
                {props.title}
            </Typography>

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
        </>
    );
};