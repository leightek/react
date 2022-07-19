const h1 = document.createElement("h1")
h1.textContent = "Hello World"
h1.className = "header"
console.log(h1)

// <h1 class="header">Hello World</h1

const element = <h1 className="header">This is JSX</h1>
console.log(element)

/*
{
    type: "h1"
    key: null
    ref: null
    props: {
        className: "header",
        children: "This is JSX"
    },
    _owner: null,
    _store: {}
}
 */

// JSX
const navbar = (
    <nav>
        <h1>Uncle Tom's Cottage</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

console.log(navbar)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)
