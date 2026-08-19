import './App.css'

const Subtitulo = (props) => {
  return <div>
    <h2>{props.texto}</h2>
    <a href="">Link</a>
  </div>
}

const App = () => {
  return <div>
    <h1>Hello React</h1>
    <Subtitulo texto = "Subtitulo 1" />
    <Subtitulo texto = "Subtitulo 2" />
    <Subtitulo texto = "Subtitulo 3" />
  </div>
} 
export default App