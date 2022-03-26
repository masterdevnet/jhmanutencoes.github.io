import Link from "next/link"

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/" className="navbar-brand">JH MANUTENÇÕES</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/servicos">Serviços</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/clientes">Clientes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/parceiros">Parceiros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/downloads">Downloads</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contatos">Contatos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar