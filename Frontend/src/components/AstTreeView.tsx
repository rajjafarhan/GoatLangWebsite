import  { useRef } from 'react'
import '../App.css'
import Tree from 'react-d3-tree'

const AstTreeView = ({astree}) => {
    const treeContainerRef = useRef(null)

  return (
    
     <>
            <div id="treeWrapper" ref={treeContainerRef} style={{ width: '100%', height: '100%'}}>
                {astree?
                <div>
                <Tree
                    enableLegacyTransitions={true}
                    separation={{
                        siblings: 4,
                    }}
                    rootNodeClassName="node__root"
                    branchNodeClassName="node__branch"
                    leafNodeClassName="node__leaf"
                    orientation="vertical"
                    collapsible={true}
                    zoomable={true}
                    draggable={true}
                    data={astree}
                    translate={{
                        x:0.45*window.innerWidth,
                        y:20
                    }}
                />
                </div>
                
                
                :null}
            </div>
        </>
  )
}

export default AstTreeView