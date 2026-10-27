const Member = (props) => {
  return (
    <div className="member">
      <p className="label">{props.label}</p>
      <h2>{props.name}</h2>
      <p>{props.detail}</p>
    </div>
  );
};

export default Member;
