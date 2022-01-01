import React from 'react'

export default function Navbar() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg bg-dark">
              <div class="container-fluid container">
                <a class="navbar-brand text-white" href="/"><h2>HERO RIDER</h2></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                     <a class="nav-link active text-white me-4" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active text-white me-3" href="/login">Admin</a>
                    </li>
                </ul>
                </div>
               </div>
            </nav>
        </div>
    )
}
