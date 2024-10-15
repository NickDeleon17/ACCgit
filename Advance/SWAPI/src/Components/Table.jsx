import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const BasicTable=({ data }) =>{
  return (
    <TableContainer>
      <Table id="dataTable" aria-label="simple table">
        <TableHead>
          <TableRow id="headRow">
            <th>Name</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Gender</th>
            {/* <th>Eye Color</th> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((character, index) => (
            <TableRow key={index}>
              <TableCell id="cells" component="th" scope="row">
                {character.name}
              </TableCell >
              <TableCell id="cells" align="right">{character.height}</TableCell>
              <TableCell id="cells" align="right">{character.hair_color}</TableCell>
              <TableCell id="cells" align="right">{character.gender}</TableCell>
              {/* <TableCell id="cells" align="right">{character.eye_color}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTable;