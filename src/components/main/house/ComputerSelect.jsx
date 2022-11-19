import Computer from "../../computer/Computer"

function ComputerSelect({ computerChoice }) {
  return (
    <div className="selector">
      <h1 className="selector-text">The House picked</h1>
      <Computer data={computerChoice} />
    </div>
  );
}

export default ComputerSelect;
