import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table";
import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  appBodyStyles: {
    backgroundColor: "#F5F5FD",
    width: "80%",
    height: "80vh",
    position: "relative",
    left: "300px",
    top: "100px",
  },
  flexProperties: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "25ch",
  },
  fullWidth: {
    minWidth: "800px",
  },
}));
export default function AppBody() {
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);
    const addEmployeeHandler = () => {
        setShowForm(true);
    }
  return (
    <div className={classes.appBodyStyles}>
      <div className={classes.flexProperties}>
        <div>
          <TextField
            label="Search Employees"
            id="outlined-start-adornment"
            className={clsx(
              classes.margin,
              classes.textField,
              classes.fullWidth
            )}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </div>
        <div>
          <Button variant="outlined"  onClick={addEmployeeHandler} color="primary" startIcon={<AddIcon/>}>
            Add New
          </Button>
        </div>
          </div>
          {showForm && <EmployeeForm/>}
      <div>
        <Table />
      </div>
    </div>
  );
}
