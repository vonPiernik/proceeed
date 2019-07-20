import { Link } from 'react-router-dom';

export const Sidebar = () =>{
    return(
        <ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" style={{background: '#506578'}} id="accordionSidebar">

      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-angle-double-right"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Proceeed <sup><i className="fas fa-registered"></i></sup></div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to='/a/'>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">
        Procedures
      </div>

     
      
      <li className="nav-item">
        <Link className="nav-link" to="/a/procedures">
          <i className="fas fa-fw fa-angle-double-right"></i>
          <span>Your procedures</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/a/procedures/new">
          <i className="fas fa-fw fa-plus"></i>
          <span>New procedure</span></Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>

    </ul>
    )
}