import './App.css';
import CardComponent from './CardComponent';
import FilterBar from './FilterBar';
import Header from './Header';
import PageSection from './PageSection';
function App() {
  return (
    <div className="App">
      <div className="pt-16">
      <Header/>
      <main className="section">
        <PageSection />
        <FilterBar />
        <CardComponent />
      </main>
    </div>
    </div>
  );
}

export default App;
