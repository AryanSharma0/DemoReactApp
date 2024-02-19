import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import store from "./redux/store";
import "../src/styles/tailwind_input.css";
// import "../src/styles/tailwind_output.css";
import "../src/styles/index.css";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
