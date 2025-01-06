"use client";
import { Card, Col, Row } from "antd";
import { pages } from "@/lib";
import Link from "next/link";

export default function CardList() {
  return (
    <Row gutter={[16, 16]}>
      {pages.map((card) => (
        <Link href={card.path}>
          <Col key={card.title}>
            <Card hoverable={true} style={{ width: 240 }} cover={card.cover}>
              {/*<Meta title="Europe Street beat" description="www.instagram.com" />*/}
              <p>{card.title}</p>
            </Card>
          </Col>
        </Link>
      ))}
    </Row>
  );
}
