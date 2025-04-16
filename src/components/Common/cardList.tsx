"use client";
import { Card, Col, Row } from "antd";
import Link from "next/link";
import { sections } from "@/lib";

export default function CardList() {
  return (
    <Row gutter={[16, 16]}>
      {sections.map((card) => (
        <Col key={card.title}>
          <Link
            href={card.path}
            passHref
            legacyBehavior
            className={"scroll-mt-20"}
          >
            <a>
              <Card
                hoverable={true}
                style={{ width: 240 }}
                cover={<img src={card.coverSrc} alt={card.title} />}
              >
                {/*<Meta title="Europe Street beat" description="www.instagram.com" />*/}
                <p>{card.title}</p>
              </Card>
            </a>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
