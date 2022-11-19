import Sign from "./Sign";
function Player({ data, handleClick, getPlayerChoice }) {
  return (
    <div className="w-full flex items-center justify-center mt-12 sm:mt-4" >
      <div className="sign-container">
        {
          data.map((sign, idx) => (
            <div key={idx}>
              <Sign
                sign={sign}
                handleClick={handleClick}
                getPlayerChoice={getPlayerChoice}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Player;