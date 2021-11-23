import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from '@material-ui/core/Paper';
import './table.css';



const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(nombre, apellido, edad, mail) {
  return { nombre, apellido, edad, mail };
}

const rows = [
  createData("Francisco", "González", 22, "francisco.gonzales@g.com"),
  createData("Carolina", "Rodríguez", 28, "carolina.rodriguez@g.com"),
  createData("Luis", "Gómez", 36, "luis.gomez@g.com"),
  createData("Catalina", "Fernández", 25, "catalina.fernandez@g.com"),
  createData("William", "García", 30, "william.garcia@g.com")
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className="table-style">
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nombre</TableCell>
              <TableCell align="center">Apellido</TableCell>
              <TableCell align="center">Edad (años)</TableCell>
              <TableCell align="center">Mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center" component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell align="center">{row.apellido}</TableCell>
                <TableCell align="center">{row.edad}</TableCell>
                <TableCell align="center">{row.mail}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <footer className="foot-page">Derechos reservados 2020, Página de ejemplo para Tingeso</footer>
    </div>
  );
}
module.export = {
  "DenseTable" : "DenseTable"
}
