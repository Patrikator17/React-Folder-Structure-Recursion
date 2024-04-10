import { useState } from "react"

const Folder = ({explorer}) => {

    const [expand, setExpand] = useState(false)
    
    const handleExpand = () => {
        setExpand(!expand)
    }
    return(
        <div>
            <div>
                <span style={{cursor:'pointer'}} onClick={handleExpand}>{explorer.isFolder ? '📁' : '📄'}{explorer.name}
                    {explorer.isFolder && (
                        <>
                            <button>New Folder</button>
                            <button>New File</button>
                        </>
                    )}
                </span>
            </div>

            <div>
                {expand && explorer.items && explorer.items.length>0 &&(
                    <div style={{marginLeft: 10}}>
                        {explorer.items.map((exp) => (
                            <div key={exp.id}>
                                {/* <span style={{marginLeft: 5}}>{exp.isFolder? '📁' : '📄'}{exp.name}</span> */}
                                <Folder key={exp.id} explorer={exp} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Folder