import Sign from "./Sign";
import styled from 'styled-components';
import pentagon from "./bg-pentagon.svg";

function Player({ data, handleClick, getPlayerChoice, appearTime }) {
  const SignContainer = styled.div`
    position: relative;
    width: 22rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${pentagon}) no-repeat center center;
    background-size: 340px;
    -webkit-background-size: 340px;
    -moz-background-size: 340px;
    -o-background-size: 340px;

    @media screen and (max-width: 639px) {
      background-size: 220px;
      -webkit-background-size: 220px;
      -moz-background-size: 220px;
      -o-background-size: 220px;
    }
  `;

  return (
    <div className="w-full flex items-center justify-center mt-12 sm:mt-4">
      <SignContainer className="sign-container">
        {
          data.map((sign, idx) => (
            <div key={idx}>
              <Sign
                sign={sign}
                handleClick={handleClick}
                getPlayerChoice={getPlayerChoice}
                appearTime={appearTime}
              />
            </div>
          ))
        }
      </SignContainer>
    </div>
  );
}

export default Player;
