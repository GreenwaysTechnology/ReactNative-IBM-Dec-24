import { createRoot } from "react-dom/client"

//Header,Footer,Main
const Header = () => {
    return <header>
        <h1>Header</h1>
    </header>
}
const Footer = () => {
    return <footer>
        <h2>Footer</h2>
    </footer>
}
const Main = () => {
    return <div>
        <section>
            <p>React is best javascript lib</p>
        </section>
        <section>
            <p>Reac Native is javascript lib used to build Native Mobile Apps</p>
        </section>
    </div>
}

const Page = () => {
    return <>
        <Header />
        <Main />
        <Footer />
    </>
}

const App = () => {
    return <Page />
}


createRoot(document.getElementById('root')).render(<App />)