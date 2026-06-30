import landmark_uin from "@/assets/images/landmark-uinar-scaled.jpg";
import LogoUIN from "@/assets/images/LogoUIN";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
   return (
      <footer className="main-footer bg-img" style={{ backgroundImage: `url(${landmark_uin})` }}>
         <Container className="position-relative z-1">
            <Row className="g-3">
               <Col md={3}>
                  <LogoUIN />
               </Col>
               <Col md={9}>
                  <p className="text-white mb-0">
                     Dikelola oleh Subtim Kerjasama dan Kelembagaan | Tim Kerjasama, Kelembagaan dan Humas | Biro Administrasi Akademik, Kemahasiswaan
                     dan Kerjasama UIN Ar-Raniry Banda Aceh
                  </p>
               </Col>
            </Row>
         </Container>
      </footer>
   );
};
export default Footer;
