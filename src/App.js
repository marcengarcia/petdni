import Display from './components/Data/Display';

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
    <Display items={display} />
  )
}

export default App;
