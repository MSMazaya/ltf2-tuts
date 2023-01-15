import './App.css'

const createLink = (link: string, name: string): {
    link: string,
    name: string,
} => ({
    link,
    name
})

function App() {
    const links = [
        createLink(
            "",
            "Pengumpulan TP Sementara"
        ),
        createLink(
            "",
            "Format Laporan"
        ),
        createLink(
            "",
            "Modul"
        ),
        createLink(
            "",
            "Tutorial C++"
        ),
        createLink(
            "",
            "Tutorial Arduino"
        ),
    ]

    return (
        <div className="container">
            <h1>LTF II</h1>
            {links.map(({ link, name }) => (
                <a href={link} target="_blank">{name}</a>
            ))}
        </div>
    )
}

export default App
