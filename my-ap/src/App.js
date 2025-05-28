
import './App.css';
// COMPonents
// WE CAN PASS PROPS/PLACEHOLDER
import {PizzaComponent} from "./components/PizzaComponent";
import {Header} from "./components/Header";
import{Footer} from "./components/Footer";
import{Menu} from "./components/Menu";
// MULTIPLE WAYS TO CREATE FUNCTIONS
// const App = () =>



// functions are reusable lines of code
function App() {
  return (
    <div className="App">
      <Header />
    
      
      

      {/* CREATE A NEW COMPONENT CALLED MENU */}
      
        
        
      


      {/* create a footer.jsx
      put a <div>footer</div>, don't style
      import, export,
      call it here */}
      
      <Menu/>
      <Footer />
    </div>
  
  );
}

export default App;
