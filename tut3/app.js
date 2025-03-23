import React from 'react'
import ReactDOM from 'react-dom/client';

//React element
const element=<h3 id='heading' className='heading'>Hello using JSX</h3>;
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

//React functional component
const HeadingComponent=()=>{
    return <h3>Functional Component {element}</h3>
}
root.render(<>
<HeadingComponent/>
{HeadingComponent()}
</>)