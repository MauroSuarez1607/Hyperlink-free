import "./about.css"
import Card from 'react-bootstrap/Card';

export const About = () => {
  return (
    <section className="about">
    <Card className="about_container text-white" id="about">
      <div className="text">
        <Card.Title><h2>¿Quienes somos?</h2></Card.Title>
        <Card.Text>
        En HYPERLINK, ofrecemos servicio de internet de alta velocidad a través de fibra óptica, garantizando conexiones estables, rápidas y seguras. Nos comprometemos a brindar soluciones confiables para que nuestros clientes disfruten de una experiencia digital sin interrupciones
        </Card.Text>
        </div>
        <Card.Img className="img" src="/images/about.jpg" alt="Imagen representativa de HYPERLINK, proveedor de internet de fibra óptica">
        </Card.Img>
    </Card>
    
    </section>
  )
}
