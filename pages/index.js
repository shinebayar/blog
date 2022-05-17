import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Alert from 'react-bootstrap/Alert';
import { Badge } from 'react-bootstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <>
        {[
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info",
          "light",
          "dark",
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert with{" "}
            <Alert.Link href="#">an example link</Alert.Link>. Give it a click
            if you like.
          </Alert>
        ))}
      </>

      <div>
  <h1>
    Example heading <Badge bg="secondary">New</Badge>
  </h1>
  <h2>
    Example heading <Badge bg="secondary">New</Badge>
  </h2>
  <h3>
    Example heading <Badge bg="secondary">New</Badge>
  </h3>
  <h4>
    Example heading <Badge bg="secondary">New</Badge>
  </h4>
  <h5>
    Example heading <Badge bg="secondary">New</Badge>
  </h5>
  <h6>
    Example heading <Badge bg="secondary">New</Badge>
  </h6>
</div>
    </div>
  );
}
