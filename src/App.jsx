import { useState } from "react"
import explorer from "./data/folderData"
import Folder from "./components/Folder";
function App() {

  const [explorerData, setExplorerData] = useState(explorer)
  // console.log(explorerData);

  return (
    <>
      <Folder explorer={explorerData}/>
    </>
  )
}

export default App
