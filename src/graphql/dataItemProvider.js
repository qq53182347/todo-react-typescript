import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ITEMS} from "./query";

const ItemsContext = React.createContext(null)


export const ItemsContextProvider = (props) => {
  const {loading, error, data} = useQuery(GET_ITEMS);
    if(error){
        return null;
    }
    if(loading){
        return(
            <p >loading...</p>
        );
    }
  return (
      <ItemsContext.Provider value={data.getItems}>
        {props.children}
      </ItemsContext.Provider>
  )
}

export default ItemsContext




