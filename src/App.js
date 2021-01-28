import './App.css';
import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';
//import HeaderBlock from './HeaderBlock';
import Pokemon from './assets/images/bg2.jpg';

const App= () => {
  return (
    <>
      <Header 
          title="This is new Title"
          descr="This is new description"
      />
      <Layout 
          id="layout1"
          title="Layout title 1 "
          descr="Layout description 1 "
          urlBg={Pokemon}
      
      />
      <Layout 
          id="layout2"
          title="Layout title 2 "
          descr="Layout description 2 "
          colorBg="orange"
      />
      <Layout 
          id="layout3"
          title="Layout title 3 "
          descr="Layout description 3 "
          urlBg={Pokemon}
      />
      <Footer />

    {/*
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
