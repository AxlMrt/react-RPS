import Computer from "../../computer/Computer"

function ComputerSelect({ computerChoice, isWin, display }) {
  return (
    <div className="selector">
      <h1 className="selector-text">The House picked</h1>
      <Computer data={computerChoice} isWin={isWin} display={display} />
    </div>
  );
}

export default ComputerSelect;
