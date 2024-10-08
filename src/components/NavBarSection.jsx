function NavBarSection() {
    return (
        <>
        <nav class="navbar text-center navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="  container-fluid ">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse justify-content-center fw-bold navbar-collapse" id="navbarSupportedContent">
                    <ul class=" navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#projects">projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#contact">contact</a>
                        </li>
                    </ul>
              
                </div>
            </div>
            </nav>
        </>
    );
}

export default NavBarSection;