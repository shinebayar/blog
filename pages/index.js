import {
  Row,
  Col,
} from "react-bootstrap";

import GridItem from "components/grid-item";
import { getAllPosts } from "lib/api";
import Layout from "components/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      {/* <pre>{JSON.stringify(posts, 0, 2)}</pre> */}
      <Row className="mb-5">
        <Col md="10">{/* <ListItem /> */}</Col>

        {posts.map((post) => (
          <Col md="4" key={post.title}>
            <GridItem post={post} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
