import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react"
import Alert from "./components/ui/Alert/Alert"
function App() {

  return (
    <>
      <div >
        <Alert type={"alert-error"} title={"Something went wrong"} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil, corporis. Totam qui facilis praesentium quis, sunt impedit architecto hic et?" icon={<Ban size={20} />} />
        <Alert type={"alert-info"} title={"Something went wrong"} icon={<Info size={20} />}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium corrupti beatae recusandae qui officiis itaque quisquam libero sunt neque illo adipisci,<a href="/">excepturi ducimus magni,</a>  necessitatibus assumenda eaque magnam. Saepe, corrupti!
          </p>
        </Alert>
        <Alert type={"alert-success"} title={"Something went wrong"} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil, corporis. Totam qui facilis praesentium quis, sunt impedit architecto hic et?" icon={<CheckCheck size={20} />} />
        <Alert type={"alert-warning"} title={"Something went wrong"} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil, corporis. Totam qui facilis praesentium quis, sunt impedit architecto hic et?" icon={<AlertTriangle size={20} />} />
        <Alert type={"alert-default"} title={"Upgrade your plan"} description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.Nihil, corporis. Totam qui facilis praesentium quis, sunt impedit architecto hic et?" icon={<Bell size={20} />} />
      </div>
    </>
  )
}

export default App
