function Button(props) {
  console.log(props); //{name: 'Home'}
  console.log(props.name); // 'Home'
  return (
    <button
      className={`
        btn ${props.btncolor} w-50 m-1 px-2`}
    >
      {props.icon}
      {props.name}
    </button>
  );
}

export default Button;
