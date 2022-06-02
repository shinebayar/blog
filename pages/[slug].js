import { Row, Col } from "react-bootstrap";
import BlockContent from "@sanity/block-content-to-react";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


import Layout from "components/layout";
import { getPostBySlug, getAllPosts, listenPostUpdate } from "lib/api";
import HiglightCode from "components/higlight-code";
import { urlFor } from "lib/api";
import PostHeader from "components/post-header";
import PreviewAlert from 'components/preview-alert';

export default ({ post: initialPost, preview }) => {

  const [post, setPost] = useState(initialPost);

  // useEffect( () => {
  //   const sub = listenPostUpdate(post.slug, (update)=> {
  //     console.log(update);
  //     // debugger;
  //     setPost(update.result);

  //     return sub && sub.unsubscribe?.();
  //   })
  // }, [] )

  const router = useRouter();

  if(router.isFallback)
    return (
      <Layout>
        <div>Please wait ...</div>
      </Layout>
    );

  if(!router.isFallback && !post?.slug)
    return (
      <Layout>
        <div>Sorry, There is no post ...</div>
      </Layout>
    );

  return (
    <Layout>
      <Row>
        <Col md="12">
          <pre>{/*JSON.stringify(post, null, 2)*/}</pre>
          <pre>{ preview && <PreviewAlert /> }</pre>
          <PostHeader post={post} />
          <br />
          <BlockContent
            blocks={post.content}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

const serializers = {
  types: {
    code: (props) => (
      <HiglightCode language={props.node.language}>
        {props.node.code}
        <div className="code-filename">{props.node.filename}</div>
      </HiglightCode>
    ),
    image: (props) => (
      <div className={`blog-image blog-image-${props.node.position}`}>
        <img src={urlFor(props.node).height(400).url()} />
        <div className="code-filename" style={{ textAlign: "center" }}>
          {props.node.alt}
        </div>
      </div>
    ),
  },
};

export const getStaticProps = async ({ params, preview = false }) => {
  console.log(preview);
  const post = await getPostBySlug(params.slug, preview);
  return {
    props: {
      post: post.length > 1 ? post[1] : post.length > 0 ? post[0] : {},
      preview,
    }
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
