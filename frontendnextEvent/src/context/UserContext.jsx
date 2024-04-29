import { createContext, useState,useEffect } from "react";

export const AppContext = createContext(null);

export const AppProvider=({children})=>{
    const [user,setUser]=useState(null);
    const [event,setEvent]=useState(null);
    const [packages,setPackages]=useState(null);
    const [vendor,setVendor]=useState(null);
    
    const handleUserLogin=(userDate)=>{
        setUser(userDate);
    }

    const handleUserLogout=()=>{
        setUser(null);
    }

    const handleUserUpdate = (userData)=>{
        setUser(preUser=> preUser.map(user=> user.id===userData.id ? userData : user))  
    }   
    

    const handleVendorLogin=(vendorData)=>{
        setVendor(vendorData);
    }

    const handleVendorLogout=()=>{
        setVendor(null);
    }
    const handleVendorUpdate=(vendorData)=>{    
        vendor.map((vendor)=>{
            if(vendor.id===vendorData.id){
                setVendor([...vendor,vendorData])
        }else{
            setVendor([...vendor])
        }
    }
    )
    }

    const handleVendorDelete=(vendorId)=>{
        setVendor(null);
    }           


    const handleEventCreate=(eventData)=>{  
        setEvent([...event,eventData]);
    }

    const handleEventUpdate=(eventData,updatedEventData)=>{
        event.map((event)=>{
            if(event.id===eventData.id){
                setEvent([...event,updatedEventData]);
            }else{
                setEvent([...event]);
            }

        })
    }

    const handleEventDelete=(eventId)=>{
        setEvent(null);
    }

    const handlePackageCreate=(packageData)=>{
        setPackages([...packages,packageData]);
    }

    const handlePackageUpdate=(packageData)=>{
        packages.map((packages)=>{
            if(packages.id===packageData.id){
                setPackages([...packages,packageData]);
            }else{
                setPackages([...packages]);
            }
        })
    }

    const handlePackageDelete=(packageId)=>{
        setPackages(null);
    }

    return(
        <AppContext.Provider value={{
            
            user:user,
            event:event,
            package:packages,
            handleUserLogin:handleUserLogin,
            handleUserLogout:handleUserLogout,
            handleUserUpdate:handleUserUpdate,
            handleEventCreate:handleEventCreate,
            handleEventUpdate:handleEventUpdate,
            handleEventDelete:handleEventDelete,
            handlePackageCreate:handlePackageCreate,
            handlePackageUpdate:handlePackageUpdate,
            handlePackageDelete:handlePackageDelete,
            handleVendorLogin:handleVendorLogin,
            handleVendorLogout:handleVendorLogout,
            handleVendorUpdate:handleVendorUpdate,
            handleVendorDelete:handleVendorDelete,
            
        }}>
            {children}
        </AppContext.Provider>
    )           
}

