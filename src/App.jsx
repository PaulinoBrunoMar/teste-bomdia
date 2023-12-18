import "./App.css";
import EditPanel from "./components/editPanel/main";
import Footer from "./uiComponents/footer";
import Header from "./uiComponents/header/main";

export default function App() {
  return (
    <div>
      <Header />
      <EditPanel />
      <Footer />
    </div>
  );
}
