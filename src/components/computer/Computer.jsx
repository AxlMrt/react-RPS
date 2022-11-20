import styled from 'styled-components';
import Sign from './Sign';

function Computer({ data, isWin, display }) {
  const CSelect = styled.div`
    width: 18rem;
    height: 18rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2rem solid ${data.color};
    @media screen and (max-width: 1023px){
      width: 13rem;
      height: 13rem;
      border: 1.5rem solid ${data.color};
    }

    @media screen and (max-width: 639px){
      width: 8rem;
      height: 8rem;
      border: 1rem solid ${data.color};
    }
  `;

  return (
    <div style={data === "" ? {display: 'none', opacity: 0} : {display: 'block'}}>
      <CSelect className={`${isWin === "You lose" && display === "flex" ? "ping" : ""}`}>
        <Sign data={data} />
      </CSelect>
    </div>
  );
}

export default Computer;
