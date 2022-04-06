import "./App.css";
import CarContextProvider from "./context/contextCar";
import CartContextProvider from "./context/cartContext";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import AuthContextProvider, { authContext } from "./context/authContext";
import Routing from "./components/Routing";
import ContextCommentProvider from "./context/commentContext";
import FavContextProvider from "./context/favContext";

function App() {
  return (
    <AuthContextProvider>
      <CarContextProvider>
        <ContextCommentProvider>
          <FavContextProvider>
            <CartContextProvider>
              <Routing />
            </CartContextProvider>
          </FavContextProvider>
        </ContextCommentProvider>
      </CarContextProvider>
    </AuthContextProvider>
  );
}

export default App;
