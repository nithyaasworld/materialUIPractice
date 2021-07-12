import { TextField } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Checkbox } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useRef, useState } from "react";
import { MenuItem } from "@material-ui/core";

export default function EmployeeForm({ setRows, setOpen, rows }) {
  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  let [departmentVal, setDepartmentVal] = useState("HR");
  const formSubmitHandler = () => {
    setRows(() => {
      let existingEmployees = rows.slice(0);
      existingEmployees.push({
        name: nameRef.current.value,
        mobile: mobileRef.current.value,
        email: emailRef.current.value,
        department: departmentVal,
      });
      return existingEmployees;
    });
    setOpen(false);
  };
  const handleDepartmentChange = (event) => {
    setDepartmentVal(event.target.value);
  };
  return (
    <div className="addEmployeeForm" style={{ padding: "1em" }}>
      <FormGroup>
        <div className="form-container" style={{ display: "flex" }}>
          <div
            className="leftSide"
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <FormControlLabel
              control={
                <TextField
                  inputRef={nameRef}
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                />
              }
            />
            <FormControlLabel
              control={
                <TextField
                  inputRef={emailRef}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              }
            />
            <FormControlLabel
              control={
                <TextField
                  inputRef={mobileRef}
                  id="outlined-basic"
                  label="Mobile"
                  variant="outlined"
                />
              }
            />
            <FormControlLabel
              control={
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
              }
            />
          </div>
          <div className="rightSide">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="Gender"
              defaultValue="top"
            >
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="Female"
                control={<Radio color="primary" />}
                label="Female"
              />
              <FormControlLabel
                value="Other"
                control={<Radio color="primary" />}
                label="Other"
              />
            </RadioGroup>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Department"
                variant="outlined"
                value={departmentVal}
                onChange={handleDepartmentChange}
              >
                {["HR", "Marketing", "Dept1", "Dept2"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
              </TextField>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Hire date"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
              <FormControlLabel
                control={<Checkbox name="isPermanent" />}
                label="Permanent Employee"
              />
              <FormGroup>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Button
                    onClick={formSubmitHandler}
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </Button>
                  <Button variant="contained">Reset</Button>
                </div>
              </FormGroup>
            </div>
          </div>
        </div>
      </FormGroup>
    </div>
  );
}
