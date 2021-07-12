import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import CreateIcon from "@material-ui/icons/Create";
import ClearIcon from "@material-ui/icons/Clear";
import employeeList from "./data";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 500,
  },
});
export default function TableData({rows}) {
  const classes = useStyles();
  const tableHeaders = [
    "Employee Name",
    "Email Address (Personal)",
    "Mobile Number",
    "Department",
    "Actions",
  ];
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead style={{ backgroundColor: "#E2E4F3" }}>
            <TableRow>
              {tableHeaders.map((headCell) => (
                <TableCell
                  style={{ color: "#5D5CA8", fontWeight: "600" }}
                  key={headCell}
                >
                  {headCell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((emp, index) => {
              return (
                <TableRow hover tabIndex={-1} key={emp.name}>
                  <TableCell>{emp.name}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.mobile}</TableCell>
                  <TableCell>{emp.department}</TableCell>
                  <TableCell style={{ display: "flex", gap: "10px" }}>
                    <CreateIcon
                      style={{
                        padding: "5px",
                        color: "#6D6EA5",
                        borderRadius: "5px",
                        backgroundColor: "#E2E4F2",
                      }}
                    />
                    <ClearIcon
                      style={{
                        padding: "5px",
                        color: "red",
                        backgroundColor: "#FCE1DF",
                        borderRadius: "5px",
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={(rows && rows.length) || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
