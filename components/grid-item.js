import { Card } from "react-bootstrap";
import Link from 'next/link';
import moment from 'moment';
import { useEffect } from "react";

export default function gridItem({post}) {

  useEffect(() => {
    moment.locale("mn");
  }, [])

  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={post.publisher.picture}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {post.publisher.name}
            </Card.Title>
            <Card.Text className="card-date">{moment(post.date).endOf('day').fromNow()}</Card.Text>
          </div>
        </Card.Header>
        <Link href={`/${post.slug}`}>
          <a>
            <div className="view overlay">
              <Card.Img src={post.image} alt={post.title} />
            </div>
            <Card.Body>
              <Card.Title className="card-main-title">{post.title}</Card.Title>
              <Card.Text>{post.subtitle}</Card.Text>
            </Card.Body>
          </a>
        </Link>
      </div>
    </Card>
  );
};
