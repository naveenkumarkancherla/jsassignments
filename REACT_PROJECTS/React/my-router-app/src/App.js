import {Apps} from './Apps.js'
import {Menu} from './Menu.js'
import {Emp} from './Emp.js'
import EmployeeList from './EmployeeList.js';
import UserForm from './Mail.js'
import {Counter} from './Counter.js' 
import {Product} from './Product.js'
import Email from './Email.js'
import CustApp from './CustApp.js'
// import {Fetch} from './Fetch.js'
import {Router} from './Router.js'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
function App() {
  return (
    <>
    <Menu/>
    <h1>This is first Heading</h1>
    <h2>These are Student details</h2>
    <Apps/>
    <h2>These are Employee Details Assignment-01</h2>
    <Emp/>
    <h2>Assignment-02</h2>
    <EmployeeList/>
    <h2>Assignment-03</h2>
    <UserForm/>
    <br></br>
    <h3>Updating Price value using useState method</h3>
    <Counter/>
    <br></br>
    <h3>Updating Product (Model) name using useState method</h3>
    <Product/>
    <br></br>
    <Email/>
    <br></br>
    <CustApp/>
    <br/>
    <br/>
    <br/>
    <Router/>
    {/* <Fetch/> */}
    </>
  );
}

export default App
