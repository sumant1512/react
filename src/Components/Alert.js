function Alert(props) {
  return (
    props.alertData && (
      <div class="alert alert-success d-flex align-items-center" role="alert">
        <div>{props.alertData.msg}</div>
      </div>
    )
  );
}

export default Alert;
