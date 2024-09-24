import headerImage from '../../assets/react-core-concepts.png'
const reactDeacription = ["Fundamental", "Core", "Crucial" ]

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

const description = reactDeacription[getRandomInt(2)];

function Header(){
  return(
    <header>
        <img src={headerImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

export default Header