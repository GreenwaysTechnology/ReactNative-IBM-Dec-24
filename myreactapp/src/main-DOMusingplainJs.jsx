//DOM Element creation in plain js
// <h1>Hello</h1>
function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = "Hello"
    //get the root node
    const RootNode = document.getElementById("root")
    //connect Heading Node with Root Node,
    RootNode.appendChild(Heading)
}
createElement()