
import Typography from '@mui/material/Typography';

const Header = ({title}) => {

    return (

    <Typography variant="h3" component="div" gutterBottom>
        {title}
    </Typography>
    );
};

export default Header;
