import { TextField } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Checkbox } from "@material-ui/core";
import { Button } from "@material-ui/core";

export default function EmployeeForm() {
  return (
    <div className="addEmployeeForm">
      <FormGroup>
        <div className="form-container" style={{ display: "flex" }}>
          <div
            className="leftSide"
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <FormControlLabel
              control={
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                />
              }
            />
            <FormControlLabel
              control={
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              }
            />
            <FormControlLabel
              control={
                <TextField
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
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Department"
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {["HR", "Marketing", "Dep1", "Dep2"].map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
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
            control={<Checkbox  name="isPermanent" />}
            label="Permanent Employee"
                          />
                          <FormGroup>
                              <div style={{ display: "flex", gap: '10px' }}>
                              <Button variant="contained" color="primary">Submit</Button>
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
