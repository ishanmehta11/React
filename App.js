import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",
{
    id:"heading1",
    key:"heading1",
    className:"headingClass"
},
"heading 1");

const heading2 = React.createElement("h2",
{
    id:"heading2",
    key : "headuing2",
    className:"headingClass"
},
"heading 2");

const heading3 = React.createElement("h3",
{
    id:"heading3",
    key:"heading3",
    className:"headingClass"
},
"heading 3");
const container = React.createElement("div",
{
    id:"container"
},
[heading1,heading2,heading3]);

const jsxHeading=(
<h1 id="jsxHeadng1" key="jsxHeadingKey">
    this is demo
</h1>
);
console.log(jsxHeading);

//React Component
const HeaderComponent =()=>{ return (
<div>
{jsxHeading}
<h2>function Component</h2>
<FooterComponent/>
</div>
);
};
const HeaderComponent1 =()=>{ return (
    <div>
    {jsxHeading}
    <h2>function Component</h2>
    <FooterComponent> </FooterComponent>
    </div>
    );
    };

    const HeaderComponent2 =()=>{ return (
        <div>
        {jsxHeading}
        <h2>function Component</h2>
        {FooterComponent()}
        </div>
        );
        };
const FooterComponent =()=>{
    return(
        <h1>footer</h1>
    );
};    


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<>{jsxHeading} <HeaderComponent/> <HeaderComponent1></HeaderComponent1>  </>); 