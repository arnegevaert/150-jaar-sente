import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PageTitle = props => (
    <Row>
            <Col style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1 className={"display-1 title"}>{props.children}</h1>
            </Col>
        <style jsx>{`
          .title {
            margin-top: 25px;
            margin-bottom: 25px;
            padding: 10px;
          }
        `}</style>
    </Row>
);

export default PageTitle;