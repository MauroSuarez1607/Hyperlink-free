import "./product.css";
import Card from "react-bootstrap/Card";

export const Product = () => {
  return (
    <section className="card_container" id="product">
      <h2 className="product_title">Nuestros Productos</h2>
      <div className="cards_wrapper">
      <Card className="only_card">
        <Card.Body>
          <div className="card_text">
          <Card.Text>Pack Inicial</Card.Text>
          <Card.Text>20 MEGAS</Card.Text>
          <Card.Text>Internet Basico</Card.Text>
          <Card.Text>$ 20.000</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="only_card">
        <Card.Body>
        <div className="card_text">
        <Card.Text>Pack Medio</Card.Text>
          <Card.Text>50 MEGAS</Card.Text>
          <Card.Text>Internet Medio</Card.Text>
          <Card.Text>$ 50.000</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="only_card">
        <Card.Body>
        <div className="card_text">
        <Card.Text>Pack Super</Card.Text>
          <Card.Text>80 MEGAS</Card.Text>
          <Card.Text>Internet Alto</Card.Text>
          <Card.Text>$ 80.000</Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Card className="only_card">
        <Card.Body>
        <div className="card_text">
        <Card.Text>Pack Ultra</Card.Text>
          <Card.Text>100 MEGAS</Card.Text>
          <Card.Text>Internet Pro</Card.Text>
          <Card.Text>$ 100.000</Card.Text>
          </div>
        </Card.Body>
      </Card>
      </div>
    </section>
  );
};
