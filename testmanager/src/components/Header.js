import React from 'react'

export default function Header() {
  return (
    <heder>
             <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <a className="navbar-brand" href="https://github.com/IvanSuchilin/testManager-frontend">Testmanager</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <NavLink className='nav-link' to='/specimens'>Образцы испытаний</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className='nav-link' to='/programs'>Программы</NavLink>
                    </li> */}
                  </ul>
              </div>

            </nav>
    </heder>
  )
}
