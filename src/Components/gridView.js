import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(number, type, variance, scheduler) {
  return { number, type, variance, scheduler };
}
const kesOut = [
  createData(5875689, "Missing Deal", "", "name"),
  createData(5872547, "Volume Cut", "872 dths", "name"),
];
export function KesOut() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Deal Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Variance</TableCell>
            <TableCell>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kesOut.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.variance}</TableCell>
              <TableCell>{row.scheduler}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const kesRes = [createData(5875689, "Volume cut", "545 dths", "name")];
export function KesRes() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Deal Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Variance</TableCell>
            <TableCell>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kesRes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.variance}</TableCell>
              <TableCell>{row.scheduler}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const cpRes = [createData(5875321, "Volume cut", "5,813 dths", "name")];
export function CPRes() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Deal Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Variance</TableCell>
            <TableCell>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cpRes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.variance}</TableCell>
              <TableCell>{row.scheduler}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const cpOut = [createData(5878123, "Volume cut", "215 dths", "name")];
export function CPOut() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Deal Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Variance</TableCell>
            <TableCell>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cpOut.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.variance}</TableCell>
              <TableCell>{row.scheduler}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const varRes = [
  createData(5875689, "Volume cut", "545 dths", "name"),
  createData(5875536, "Price Variance", "", "name"),
  createData(5875321, "Volume cut", " 5,813 dths", "name"),
];
export function VarRes() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Deal Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Variance</TableCell>
            <TableCell>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {varRes.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.variance}</TableCell>
              <TableCell>{row.scheduler}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const varOut = [
  createData(5875689, "Volume cut", "545 dths", "name"),
  createData(5875321, "Volume cut", "5,813 dths", "name"),
  createData(5875536, "Price Variance ", "(+$0.02)", "name"),
];
export function VarOut() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Deal Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Variance</TableCell>
            <TableCell>Contact</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {varOut.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.variance}</TableCell>
              <TableCell>{row.scheduler}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
