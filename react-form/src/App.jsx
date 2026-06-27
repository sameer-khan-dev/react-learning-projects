import './App.css'
import CommentForm from './CommentForm.jsx';
import MultiInputs from './MultiInputs.jsx';
import SingleInput from "./SingleInput.jsx";

function App() {

  return (
    <div>   
      <h1>Sinlge Input:</h1>
        <SingleInput/>
      <h1>Multiple Inputs:</h1>
        <MultiInputs/>
      <h1>Comment Form : </h1>
      <CommentForm/>
        
    </div>
  )
}

export default App
