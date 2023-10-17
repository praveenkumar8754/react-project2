import React, { useState } from 'react'
export const UserDataContext = React.createContext(null)

function UserContext({children}) {
    const [data,setData] = useState([
        {
            title:'Feedbacks',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'        
        },
        {
            title:'Weely Task',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'    
        },
        {
            title:'Lyrics',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'    
        }
    ])
  return <UserDataContext.Provider value={{data,setData}}>
    {children}
  </UserDataContext.Provider>
}

export default UserContext