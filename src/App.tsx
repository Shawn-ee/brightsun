import { BrowserRouter, HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Utility from './pages/Utility';
import Design from './pages/Design';
import Financing from './pages/Financing';
import InstallDoc from './pages/InstallDoc';
import InstallForm from './pages/InstallForm';
import Pricing from './pages/Pricing';
import Proposal from './pages/Proposal';
import SiteSurvey from './pages/SiteSurvey';
import UtilityBill from './pages/UtilityBill';
import WelcomeCall from './pages/WelcomeCall';
import Home from './pages/Home';


import { Divider, Form, Menu } from "antd";


export function App() {
  
  return (
    <div>
      <Header></Header>
    <div style={{display:"flex" ,flexDirection: "row"}}>
    <SideMenu/>
    <Content/>
    </div>
     <Footer></Footer>
    </div>



  );
}
function Content(){
  return <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/utility" element={<Utility/>}></Route>
      <Route path="/Design" element={<Design/>}></Route>
      <Route path="/Pricing" element={<Pricing/>}></Route>
      <Route path="/Proposal" element={<Proposal/>}></Route>
      <Route path="/Financing" element={<Financing/>}></Route>
      <Route path="/SiteSurvey" element={<SiteSurvey/>}></Route>
      <Route path="/UtilityBill" element={<UtilityBill/>}></Route>
      <Route path="/InstallDoc" element={<InstallDoc/>}></Route>
      <Route path="/WelcomeCall" element={<WelcomeCall/>}></Route>
      <Route path="/InstallForm" element={<InstallForm/>}></Route>
    </Routes>
  </div>
}

function Header(){
  return <div>Solar energy</div>
}
function Footer(){
  return <div>Exit</div>
}

function SideMenu(){
  const navigate = useNavigate();
 return <Menu 
  onClick={({key})=>{
    navigate(key)
  }}
  defaultSelectedKeys = {[window.location.pathname]}
  items = {[
    {key:"/",label:"home" },
    {key:"/profile",label:"profile"},
    {key:"/utility",label:"utility"},
    {key:"/Design" ,label:"Design"},
    {key:"/Pricing" ,label:"Pricing"},
    {key:"/Proposal" ,label:"Proposal"},
    {key:"/Financing" ,label:"Financing"},
    {key:"/SiteSurvey" ,label:"SiteSurvey"},
    {key:"/UtilityBill" ,label:"UtilityBill"},
    {key:"/InstallDoc" ,label:"InstallDoc"},
    {key:"/WelcomeCall", label:"WelcomeCall"},
    {key:"/InstallForm" ,label:"InstallForm"},
    
  ]}
mode="vertical">
</Menu>
}



export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
