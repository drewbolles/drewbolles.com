function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ req, res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  // trailing slashes are throwing a 404, this is a quick fix
  if (statusCode === 404 && req.url.endsWith("/")) {
    res.writeHead(301, { Location: req.url.substring(0, req.url.length - 1) });
    res.end();
  }
  return { statusCode };
};

export default Error;
