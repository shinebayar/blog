import { Alert } from "react-bootstrap";

export default () => {
  return (
    <Alert variant='danger'>
      You are in preview mode.
      <Alert.Link href='/api/preview-exit'> Click here </Alert.Link> to exit preview mode.
    </Alert>
  );
};