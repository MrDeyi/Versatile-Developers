import Table from 'react-bootstrap/Table';

function Bus() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th data-testid="departure">Departure</th>
          <th data-testid="destination">Destination</th>
          <th data-testid="time">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>CUMPUS</td>
          <td>AMIC,REN,WEC</td>
          <td>06:30-08:45</td>
        </tr>
        <tr>
          <td>2</td>
          <td>CUMPUS</td>
          <td>WJ,WEC,WJ</td>
          <td>06:45-09:15</td>
        </tr>
        <tr>
          <td>3</td>
          <td >KNK,EOH,AMIC</td>
          <td>CUMPUS</td>
          <td>10:00;11:00;12:00;</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Bus;