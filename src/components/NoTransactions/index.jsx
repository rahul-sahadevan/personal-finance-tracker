import { Flex } from "antd";
import React from "react";

function NoTransaction(){

    return (
        <div style={{display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            marginBottom:'2rem',
            flexDirection:'column'
        }}>
            <p style={{textAlign:'center', fontSize:'1.2rem'}}>No Transactions !</p>

        </div>
       
    )
}
export default NoTransaction