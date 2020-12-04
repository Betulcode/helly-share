import './App.css';
import RouterApp from "./router/Router"
import AuthContextProvider from "./context/AuthContext"
function App() {
  return (
    <AuthContextProvider>
    <RouterApp/>
    </AuthContextProvider>
      
   
  );
}

export default App;
