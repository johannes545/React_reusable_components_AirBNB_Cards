import './App.css'
import Navbar from './Navbar'
import MainContent from './MainContent'
import Card from './Card'
import data from './data'

function App() {
  const cards = data.map(props => {
    return(
    <Card 
    img={props.coverImg}
    rating={props.stats.rating}
    review={props.stats.reviewCount}
    country={props.location}
    title={props.title}
    price={props.price}
    star={props.star}
    tag={props.openSpots}
    
    />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  )
}

export default App
