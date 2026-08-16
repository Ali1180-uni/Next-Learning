// bcz next js is use the server side rendering and the DOM is all client side thats why we use the "use client" to make the component work on the client side and use the DOM
"use client"

import Button from "@/component/button"

export default function DataInfo() {
    return (
        <div>
            <h1>This is Information Page</h1>
            <Button />
        </div>
    )
}