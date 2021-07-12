import { makeStyles } from "@material-ui/core";
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
const useStyles = makeStyles({
    headerStyle: {
        left: '300px',
        top: '80px',
        position: 'relative',
        display: 'flex',
        gap: '1em',
    }
})
export default function AppHeader() {
    const classes = useStyles();
    return (
        <div className={classes.headerStyle}>
            <div style={{padding: '1em', boxShadow: '2px 2px 10px #dbdbdb', border: '1px solid #dbdbdb', borderRadius: '5px', color: '#545BAE'}}>
            <PeopleAltOutlinedIcon/>
            </div>
            <div>
                <h4 style={{marginBottom: '5px'}}>New Employee</h4>
                <p>Form design with validation</p>
            </div>
        </div>
    )
}