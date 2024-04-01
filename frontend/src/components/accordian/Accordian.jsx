import Accordion from "react-bootstrap/Accordion";

function AllCollapseExample() {
  return (
    <Accordion >
      <ul>
        <li>
          <Accordion.Item>Dashboard</Accordion.Item>
        </li>

        <li>
          <Accordion.Item eventKey="1">
            <Accordion.Header >Personal Information</Accordion.Header>
            <Accordion.Body>Add Student</Accordion.Body>
            <Accordion.Body>View Student</Accordion.Body>
            <Accordion.Body>Add Employee</Accordion.Body>
            <Accordion.Body>View Employee</Accordion.Body>
          </Accordion.Item>
        </li>

        <li>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Attendance</Accordion.Header>
            <Accordion.Body>Add Attendance</Accordion.Body>
            <Accordion.Body>View Attendance</Accordion.Body>
          </Accordion.Item>
        </li>
        <li>
          <Accordion.Item>Receipt</Accordion.Item>
        </li>
        <li>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Billing</Accordion.Header>
            <Accordion.Body>Create Customer</Accordion.Body>
            <Accordion.Body>GST</Accordion.Body>
            <Accordion.Body>Non-GST</Accordion.Body>
          </Accordion.Item>
        </li>
      </ul>
    </Accordion>
  );
}

export default AllCollapseExample;
