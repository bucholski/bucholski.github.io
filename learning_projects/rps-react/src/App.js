import DefaultButton from './components/DefaultButton';
import Footer from './components/Footer';
import HandContainer from './components/HandContainer';
import Header from './components/Header'

function App() {
  return (
    <div className="flex-column">
      <Header />
      <HandContainer />
      <DefaultButton text='Rules'/>
      <Footer />
    </div>
  );
}

export default App;
