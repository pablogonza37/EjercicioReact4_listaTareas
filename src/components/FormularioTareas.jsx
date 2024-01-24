import { Form, Button } from "react-bootstrap";

const FormularioTareas = () => {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex justify-content-between">
        <Form.Control
          type="text"
          placeholder="Agregar Tarea"
          minLength={3}
          maxLength={50}
        />
        <Button variant="primary" className="mx-2">
          Agregar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default FormularioTareas;
