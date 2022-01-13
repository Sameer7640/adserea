export default function() {
    return(
        <header className="site-header py-3">
            <div className="container">
                <div className="row mx-0 align-items-center header-wrap">
                    <div className="logo-wrap">
                        <a href="#" className="header-logo">
                            <img src="/images/logo.png" alt="Adserea Logo" />
                        </a>
                    </div>
                    <div className="navigation-wrap text-right">
                        <a href="#" className="login-link text-light f-smaller mr-3">Log in</a>
                        <a href="#" className="btn-bordered f-smaller text-light mb-0">Unlock Vault</a>
                    </div>
                </div>
            </div>
        </header>
    )
}