"use client";
import { Card, Col, Row } from "antd";
import { pages } from "@/lib";

export default function CardList() {
  return (
    <Row>
      {pages.map((card) => (
        <Col key={card.title}>
          <Card hoverable={true} style={{ width: 240 }} cover={card.cover}>
            {/*<Meta title="Europe Street beat" description="www.instagram.com" />*/}
            <p>{card.title}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
