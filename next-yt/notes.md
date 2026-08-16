- bcz next js is use the server side rendering and the DOM is all client side thats why we use the "use client" to make the component work on the client side and use the DOM
- "use client"
- So instead of This: 

"use client"
export default function DataInfo() {
    return (
        <div>
            <!-- <h1>This is Information Page</h1> -->
            <button onClick={() => alert("Not working")}>Click Alert</button>
        </div>
    )
}

- We Never make the whole page client side bcz this is the reason we not use the Nextjs Potential -> Performance and SEO etc.
1. We always make smallest compnent for this 
- Like Button we make it a component and use it in that code and write "use client" in button component

"use client"
export default function Button() {
    return (
        <button onClick={()=>{alert("This is clicked")}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
        </button>
    );
}

