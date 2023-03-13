
import Card from './components/UI/Card';

const App = () => {
  const display = [
    {
      name: 'Molly',
      age: '2 años',
      breed: 'Labrador',
      sex: 'Hembra',
      neutered: 'Si',
      vaxxed: 'Si',
      chipped: 'Si',
    },
  ]

  return (
    <div>
      <Card/>
    </div>
  )
}

export default App;
