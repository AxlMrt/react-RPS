import styled from 'styled-components';

function Sign({ sign, handleClick, getPlayerChoice }) {
  const Selection = styled.div`
    width: 9rem;
    height: 9rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1.2rem solid ${sign.color};

    @media screen and (max-width: 639px){
      width: 6rem;
      height: 6rem;
      border: .8rem solid ${sign.color};
    }
  `;

  function playerChoice() {
    handleClick();
    getPlayerChoice(sign);
  }

  return (
    <Selection>
      <img src={sign.url} alt="" onClick={playerChoice} className="cursor-pointer sm:w-8"/>
    </Selection>
  )
}

export default Sign;