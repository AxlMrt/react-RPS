import styled from 'styled-components';

function PlayerSelect({ playerChoice, isWin, display }) {
  const PSelect = styled.div`
    width: 18rem;
    height: 18rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2rem solid ${playerChoice.color};

    @media screen and (max-width: 1023px){
      width: 13rem;
      height: 13rem;
      border: 1.5rem solid ${playerChoice.color};
    }

    @media screen and (max-width: 639px){
      width: 8rem;
      height: 8rem;
      border: 1rem solid ${playerChoice.color};
    }
  `;

  return (
    <div className="selector">
      <h1 className="selector-text">You picked</h1>
      <PSelect className={`${isWin === "You win" && display === "flex" ? "ping" : ""}`}>
        <img src={playerChoice.url} alt="" className="w-1/2" />
      </PSelect>
    </div>
  )
}

export default PlayerSelect;
