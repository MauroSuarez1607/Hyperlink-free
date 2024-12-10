import "./contact.css";
import { CardHeader, CardTitle } from "react-bootstrap";
import Swal from "sweetalert2";

export const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e580f74f-6959-4b95-af18-e5d19440c18b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: 'Gracias',
        text: 'Su consulta se envio correctamente!',
        icon: 'success'
      })

      event.target.reset();
    }
  };

  return (
    <section className="contact_container" id="contact">
      
      <CardHeader >
        <CardTitle><h2>Contactanos:</h2></CardTitle>
      </CardHeader>
      
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="mb-3 col-12 col-md-4">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" name="name" placeholder="John Smith" required/>
        </div>
        <div className="mb-3 col-12 col-md-4">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="example@gmail.com" required/>
        </div>
        <div className="mb-3 col-12 col-md-4">
          <label className="form-label">Contacto</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="11-1111-1111"
            required
          />
        </div>
        <div className="mb-3 col-12">
          <label className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            name="message"
            required
          ></textarea>
        </div>

        <div className="d-flex justify-content-start w-100">
          <button type="submit" className="mt-5 btn btn-outline-dark" aria-label="Enviar mensaje">
            ENVIAR
          </button>
        </div>
      </form>
      
    </section>
  );
};
