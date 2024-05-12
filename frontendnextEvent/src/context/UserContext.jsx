import React, { createContext, useState,useEffect,useContext } from "react";

export const AppContext = createContext(null); 

export const AppProvider=({children})=>{

    const venToken = localStorage.getItem('ventoken');
    const userToken = localStorage.getItem('token');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    React.useEffect(()=>{
        if(userToken || venToken){
          setIsAuthenticated(true);
        }else{
          setIsAuthenticated(false);
        }
    },[venToken, userToken, isAuthenticated])
  
    const [userdetails,setUserDetails]=useState();
    const [eventdetails,setEventDetails]=useState();
    const [packagesdetails,setPackagesDetails]=useState();
    const [vendordetails,setVendorDetails]=useState();
    const [admindetails,setAdminDetails]=useState();
    const [userType,setUserType]=useState("");
//======================================================================================
    
    
    let isLogin= !!userdetails || !!vendordetails || !!admindetails;
//======================================================================================

    const handleUserLogin=(user)=>{
        if(user){
            localStorage.setItem("token",user);
            
            
            setUserType("user");
            
        }
        else{
            console.log("user is null in context");
        }
    }
//======================================================================================
    const handleUserLogout=()=>{     
        setUserDetails("");
        setUserType("");
        localStorage.removeItem("token");
    }

      
    
//======================================================================================
    const handleVendorLogin=(vendorData)=>{
        if(vendorData){
            
            setUserType("vendor");
            localStorage.setItem("ventoken",vendorData);
            
        }
        else{
            console.log("vendor is null in context");
        }
      
    }
//======================================================================================
    const handleVendorLogout=()=>{
        
        setVendorDetails(null);
        setUserType("");
        localStorage.removeItem("ventoken");
    }
    

//======================================================================================


    const handleEventCreate=(eventData)=>{  
        setEventDetails(eventData)
    }

    

//======================================================================================

    const handlePackageCreate=(packageData)=>{
        setPackagesDetails([...packagesdetails,packageData]);
    }

    
//======================================================================================
    

    return(
        <AppContext.Provider value={{ 
            
            userdetails,
            eventdetails,
            packagesdetails,
            vendordetails,
            handleUserLogin,
            handleUserLogout,
            handleEventCreate,
            handlePackageCreate,
            handleVendorLogin,
            handleVendorLogout,
            isLogin,
            admindetails,
            isAuthenticated,
            setIsAuthenticated,
            setUserDetails,
            setVendorDetails

        }}>
            {children}
        </AppContext.Provider>
    )           
}



