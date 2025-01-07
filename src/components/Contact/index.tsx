import Image from "next/image";
import { Col, Flex, Row } from "antd";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <Flex className={"w-full h-full"} justify="space-between">
      <div>
        <h1>Contact me</h1>
        <Row>
          <Col>
            <FaLinkedin />
          </Col>
          <Col>https://linkedin.com/in/matineh-ghazanfari</Col>
        </Row>
        <Row>
          <Col>
            <FaGithub />
          </Col>
          <Col>https://github.com/matine-gh</Col>
        </Row>
        <Row>
          <Col>
            <FaPhoneAlt />
          </Col>
          <Col>09127988430</Col>
        </Row>
        <Row>
          <Col>
            <MdEmail />
          </Col>
          <Col>matine.ghazanfari@gmail.com</Col>
        </Row>
      </div>
      <Image
        src={"/Images/sticker.webp"}
        alt={"my image"}
        width={400}
        height={400}
        className={"w-auto opacity-30"}
      />
    </Flex>
  );
}
