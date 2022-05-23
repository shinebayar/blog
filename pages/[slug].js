import {Row, Col} from 'react-bootstrap'
import Layout from "components/layout";
import { getAllPosts, getPostBySlug } from "lib/api";
import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from 'components/highlight-code';
import { urlFor } from 'lib/api';
import PostHeader from 'components/post-header';

const serializers = {
  types: {
    code: (props) => (
      <HighlightCode language={props.node.language}>
        <code>{props.node.code}</code>
        <br />
        <div className='code-filename'>{props.node.filename}</div>
      </HighlightCode>
    ),
    image: (props) => (
      <div className={`blog-image blog-image-${props.node.position}`}>
        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
        <img src={urlFor(props.node).height(400).url()} />
        <div className='code-filename' style={{textAlign:'center'}}>{props.node.alt}</div>
      </div>
    ),
  },
}

export default function Post ({post}) {
  // console.log("AAAAAAAAAA: ", post.content)
  return (
    <Layout>
      <Row>
        {/* {Math.random()} */}
        <Col md="12">
          {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
          <PostHeader post={post} />
          <br />
          <BlockContent
            blocks={post.content}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
          <hr />
          
        </Col>
      </Row>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post[0],
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};