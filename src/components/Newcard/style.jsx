import { CardMedia } from "@material-ui/core";
import {styled} from "@mui/system";

export const CusCardMedia = styled(CardMedia)(({theme}) => ({
    height: 250,
    [theme.breakpoints.down('sm')]: {
        height: 150,
    },
    [theme.breakpoints.down('xs')]: {
        height: 100,
    }
}));