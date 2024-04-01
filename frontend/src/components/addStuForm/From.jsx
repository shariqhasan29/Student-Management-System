import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function FormFloatingBasicExample() {
  return (
    <>
      <Form>

      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="shariq" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>

      <Form.Group className="mb-3 d-flex">
        <Form.Check
          required
          label="Married"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          className="m-2"
        />
        <Form.Check
          required
          label="Unmarried"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          className="m-2"
        />
      </Form.Group>

      <Form.Group className="mb-3 d-flex">
        <Form.Check
          required
          label="Male"
          type="radio"
          name="gender"
          className="m-2"
        />
        <Form.Check
          required
          label="Female"
          type="radio"
          name="gender"
          className="m-2"
        />
      </Form.Group>

      <FloatingLabel
        controlId="floatingTextarea2"
        label="Address"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Father Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="shariq" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Father Phone Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Mother Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="shariq" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Mother Phone Number"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="CGPA" className="mb-3">
        <Form.Control type="number" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Passed Out Year"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="name@example.com" />
      </FloatingLabel>

      <Form.Control
        type="text"
        className="mb-3"
        placeholder="Total Amount -30000"
        aria-label="Disabled input example"
        disabled
        readOnly
      />

      <FloatingLabel
        controlId="floatingInput"
        label="Paid Amount"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Remaining Amount"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Photo"
        className="mb-3"
      >
        <Form.Control type="file" placeholder="name@example.com" />
      </FloatingLabel>

    <Form.Control type="Submit" placeholder="name@example.com" className="bg-primary" />

    </Form>
     
    </>
  );
}

export default FormFloatingBasicExample;
