import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
import { Link, Outlet, useLocation } from 'react-router-dom';



const Dashboard = () => {

    const {userAuth}=useContext(UserContext);
    const location=useLocation();
    const isDashboard=location.pathname==='/dashboard';



  return (
    <div>
        <Navbar/>
        <div className="page-title-area bg-img bg-cover" style={{backgroundColor:'black'}} data-bg-image="assets/images/page-title-bg-1.png">
    <div className="container">
      <div className="content">
        <h2 className='text-2xl'>User Dashboard</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div className="user-dashboard pt-100 pb-60">
    <div className="container">
      <div className="row gx-xl-5">
        <div className="col-lg-3">
          <aside className="widget-area mb-40 mt-10">
            <div className="widget p-25 radius-md">
              <ul className="links">
                <li><Link to="/dashboard" className={location.pathname === '/dashboard' ? "active" : ''}>Dashboard</Link></li>
                <li><Link to="/dashboard/reservation" className={location.pathname ==='/dashboard/reservation' ? "active" : ''}>Reservations</Link></li>
                <li>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        {isDashboard ? <div className="col-lg-9">
          <div className="user-profile-details mb-30">
            <div className="account-info radius-md">
              <div className="title">
                <h4>Account Information</h4>
              </div>
              <div className="main-info">
                <h6>User</h6>
                <ul className="list">
                  <li><span>Name:</span> <span>{userAuth?.name}</span></li>
                  <li><span>Phone:</span> <span>{userAuth?.phone}</span></li>
                  <li><span>City:</span> <span>-</span></li>
                  <li><span>Zip:</span> <span>-</span></li>
                  <li><span>Address:</span> <span>-</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-box radius-md mb-30 color-1">
                <div className="card-icon mb-15">
                  <i className="fal fa-shopping-bag" />
                </div>
                <div className="card-info">
                  <h3 className="mb-0">000</h3>
                  <p className="mb-0">Total Add Posted</p>
                </div>
                <div className="card-line">
                  <svg className="mw-100" data-src="assets/images/chart-line.svg" data-unique-ids="disabled" data-cache="disabled" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-box radius-md mb-30 color-2">
                <div className="card-icon mb-15">
                  <i className="fal fa-clipboard-list-check" />
                </div>
                <div className="card-info">
                  <h3 className="mb-0">000</h3>
                  <p className="mb-0">Total Add Review</p>
                </div>
                <div className="card-line">
                  <svg className="mw-100" data-src="assets/images/chart-line.svg" data-unique-ids="disabled" data-cache="disabled" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-box radius-md mb-30 color-3">
                <div className="card-icon mb-15">
                  <i className="far fa-users" />
                </div>
                <div className="card-info">
                  <h3 className="mb-0">000</h3>
                  <p className="mb-0">Total Revenue</p>
                </div>
                <div className="card-line">
                  <svg className="mw-100" data-src="assets/images/chart-line.svg" data-unique-ids="disabled" data-cache="disabled" />
                </div>
              </div>
            </div>
          </div>
          <div className="account-info radius-md mb-40">
            <div className="title">
              <h4>Recent Orders</h4>
            </div>
            <div className="main-info">
              <div className="main-table">
                <div className="table-responsiv">
                  <table id="myTable" className="table table-striped w-100">
                    <thead>
                      <tr>
                        <th>Order number</th>
                        <th>Date</th>
                        <th>Total Order Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#mza11</td>
                        <td>2020-04-21</td>
                        <td><span className="reject">Reject</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza12</td>
                        <td>2020-04-21</td>
                        <td><span className="complete">Complete</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza13</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza11</td>
                        <td>2020-04-21</td>
                        <td><span className="reject">Reject</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza12</td>
                        <td>2020-04-21</td>
                        <td><span className="complete">Complete</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza16</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza17</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza18</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza19</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza20</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza21</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza22</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> : <Outlet/>}
      </div>
    </div>
  </div>
    </div>
  )
}

export default Dashboard
