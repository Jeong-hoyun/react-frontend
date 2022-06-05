import React from "react";
import { Routes,BrowserRouter,Link,Route} from "react-router-dom";


const App=()=>{
    return(
<BrowserRouter>
<div>    
    <Link to="/about/">about</Link><br/>
    <Link to="/about/company">about company</Link><br/>
    <Link to="/about/profile/">profile</Link><br/>
    <Link to="/about/blog/">blog</Link>  <br/>
    <Routes>
   <Route path="/about/company/" element={<AboutPage/>}/>
   <Route path="/about/*" component={<ProfilePage/>}/>
   <Route path="/about/*" component={<BlogPage/>}/>
   </Routes>
</div>
</BrowserRouter>
    );
 };

 const AboutPage=()=>{
     return(
         <div>
             <h2>AboutPage aaaaa</h2>
         </div>
     );
 };

 const ProfilePage=()=>{
     return(
         <div>
             <h2>ProfilePage nbbbb</h2></div>
     );
 };

 const BlogPage=()=>{
    return(
        <div>
            <h2>BlogPage ccccc</h2></div>
    );
};

export default App;