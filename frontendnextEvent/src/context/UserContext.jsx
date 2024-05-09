import { createContext, useState,useEffect,useContext } from "react";

export const AppContext = createContext(null); 

export const AppProvider=({children})=>{

    const [userdetails,setUserDetails]=useState(JSON.parse(localStorage.getItem("user")));
    const [eventdetails,setEventDetails]=useState(JSON.parse(localStorage.getItem("event")));
    const [packagesdetails,setPackagesDetails]=useState(JSON.parse(localStorage.getItem("packages")));
    const [vendordetails,setVendorDetails]=useState(JSON.parse(localStorage.getItem("vendor")));
    const [admindetails,setAdminDetails]=useState(JSON.parse(localStorage.getItem("admin")));
    
    const [userType,setUserType]=useState("");

    
    
    let isLogin= !!userdetails || !!vendordetails || !!admindetails;
    const handleUserLogin=(user)=>{
        if(user){
            localStorage.setItem("token",user);
            
            setUserDetails(user);
            
            setUserType("user");
            
        }
        else{
            console.log("user is null in context");
        }
    }

    const handleUserLogout=()=>{     
        setUserDetails("");
        
        setUserType("");
        return  localStorage.removeItem("token");
    }

    const handleUserUpdate = (userData)=>{

        setUserDetails(preUser=> preUser.map(user=> user.id===userData.id ? userData : user))  
    }   
    

    const handleVendorLogin=(vendorData)=>{
        if(vendorData){
            
            setUserType("vendor");
            localStorage.setItem("ventoken",vendorData);
            setVendorDetails(vendorData);
        }
        else{
            console.log("vendor is null in context");
        }
      
    }

    const handleVendorLogout=()=>{
        
        setVendorDetails(null);
        setUserType("");
        return  localStorage.removeItem("ventoken");
    }
    const handleVendorUpdate=(vendorData)=>{    
        vendor.map((vendor)=>{
            if(vendor.id===vendorData.id){
                setVendorDetails([...vendor,vendorData])
        }else{
            setVendorDetails([...vendor])
        }
    }
    )
    }

    const handleVendorDelete=(vendorId)=>{
        setVendorDetails(null);
    }           


    const handleEventCreate=(eventData)=>{  
        setEventDetails(eventData)
    }

    const handleEventUpdate=(eventData,updatedEventData)=>{
        eventdetails.map((event)=>{
            if(event.id===eventData.id){
                setEventDetails([...event,updatedEventData]);
            }else{
                setEventDetails([...event]);
            }

        })
    }

    const handleEventDelete=(eventId)=>{
        setEventDetails(null);
    }

    const handlePackageCreate=(packageData)=>{
        setPackagesDetails([...packagesdetails,packageData]);
    }

    const handlePackageUpdate=(packageData)=>{
        packagesdetails.map((packages)=>{
            if(packages.id===packageData.id){
                setPackagesDetails([...packages,packageData]);
            }else{
                setPackagesDetails([...packages]);
            }
        })
    }

    const handlePackageDelete=(packageId)=>{
        setPackagesDetails(null);
    }

    return(
        <AppContext.Provider value={{ 
            userdetails,
            eventdetails,
            packagesdetails,
            vendordetails,
            handleUserLogin,
            handleUserLogout,
            handleUserUpdate,
            handleEventCreate,
            handleEventUpdate,
            handleEventDelete,
            handlePackageCreate,
            handlePackageUpdate,
            handlePackageDelete,
            handleVendorLogin,
            handleVendorLogout,
            handleVendorUpdate,
            handleVendorDelete,
            isLogin,
            
            admindetails,
            
        }}>
            {children}
        </AppContext.Provider>
    )           
}



