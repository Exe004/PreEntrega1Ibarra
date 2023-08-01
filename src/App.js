import Footer from "./Footer";
import Header  from "./Header";
import Main from "./Main";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";



function App() {

  return (
    <div>    
      
      <Header />  
      
      <NavBar link1='precio'/>
      <ItemListContainer greeting='Saludos del Greeting'/>
      <Main />
      <Footer />  
    </div>
  );
}

export default App;
