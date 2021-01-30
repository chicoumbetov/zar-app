import './App.css';
import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';
//import HeaderBlock from './HeaderBlock';
import Pokemon from './assets/images/bg2.jpg';
import Pokem from './assets/images/bg1.jpg';
import logoIMG from './assets/logo.svg'

const App = () => {
  return (
    <>
      <Header
        title="Pokemon Game"
        descr="This is simple triple triad card game"
      />
      <Layout
        id="rules"
        title="This is First Layout"
        //descr="Layout description 1 "
        urlBg={Pokemon}
      >
        <p>2 players face off against one another</p>
        <p>Each player has 5 cards in a hand and the aim is to capture each other</p>
        <img src={logoIMG} alt="Logo" />
      </Layout>

      <Layout
        id="cards"
        title="This is Second Layout"
        //descr="Layout description 2 "
        colorBg="#202736"
      >
        <p>2 players face off against one another</p>
        <p>Each player has 5 cards in a hand and the aim is to capture each other</p>
      </Layout>
      <Layout
        id="about"
        title="This is Third Layout "
        //descr="Layout description 3 "
        urlBg={Pokem}
      >
        <p>2 players face off against one another</p>
        <p>Each player has 5 cards in a hand and the aim is to capture each other</p>
      </Layout>
      <Footer />

      {/*   Block to train


      <HeaderBlock 
        title="This is new Title"
        descr="This is new description"
      />
      <HeaderBlock 
          title="This is new Title"
          hideBackground
          //same as
          //hideBackground={true}

      />*/}
    </>
  );
}

export default App;
