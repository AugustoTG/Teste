import "./index.css";

function Button(props) {
  console.log("PROOPS", props);
  return (
    <button className={props?.design === "outline" ? "outline" : ""}>AH</button>
  );
}

export default Button;
