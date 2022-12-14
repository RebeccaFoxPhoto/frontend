import styled from 'styled-components';
import bg from '../PlaceholderAssets/image000000.jpg';

export default function Home() {
  return (
    <StyledHome>
      <header className='App-header'>
        <h1>Rebecca</h1>
        <h2>FOX</h2>
        <h3>PHOTOGRAPHY</h3>
      </header>
      <img src={bg} alt='Placeholder background' />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  /* .App-header {
    float: none;
    position: absolute;
    width: 30%;
    margin: 3% 0% 0% 10%;
    text-align: center;
  } */
  img {
    width: max-content;
    height: max-content;
  }
`;
