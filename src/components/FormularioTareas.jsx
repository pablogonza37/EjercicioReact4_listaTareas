import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const indiceTarea = tareas.findIndex((tarea) => tarea === nombreTarea);
    if (indiceTarea !== -1) {
      const nuevasTareas = [
        ...tareas.slice(0, indiceTarea),
        ...tareas.slice(indiceTarea + 1),
      ];
      setTareas(nuevasTareas);
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex justify-content-between">
          <Form.Control
            id="tareaInput"
            type="text"
            placeholder="Agregar Tarea"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            required
          />
          <Button variant="primary" className="mx-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
