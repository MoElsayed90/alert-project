import { Ban } from "lucide-react"
import Alert from "./components/ui/Alert/Alert"
function App() {

  return (
    <>
      <div >
        <Alert type={"alert-danger"} title={"Something went wrong"} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.      Nihil, corporis. Totam qui facilis praesentium quis, sunt impedit architecto hic et?" icon={<Ban size={20} />} />
      </div>
    </>
  )
}

export default App
