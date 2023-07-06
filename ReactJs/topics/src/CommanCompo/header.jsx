


// import React from 'react';

// const HeaderCompo = () => {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//         </div>
//     );
// };

// export default HeaderCompo;


import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

export default function NavbarCompo() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              {/* <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink> */}
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink href='aboutus'>about</MDBNavbarLink>
            </MDBNavbarItem> */}
            <MDBNavbarItem active>
              <Link class="nav-link" to="/">Home</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link class="nav-link" to="/aboutus">About Us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link class="nav-link" to="/contact">Contact Us</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <Link class="nav-link" to="/examples">Examples</Link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  pages
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='contactus'>Contact</MDBDropdownItem>
                  <MDBDropdownItem link href='aboutus'>About us</MDBDropdownItem>
                  <MDBDropdownItem link href='examples'>Examples</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>


          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}