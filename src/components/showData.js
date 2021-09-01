import React from 'react';

class ShowData extends React.Component{

    componentDidUpdate(){
        console.log(this.props)
    }
    
    render(){
    return( <div>
        <div>
            {console.log("console",(this.props.val[0].address))}
            
             {this.props.val && this.props.val.length>0 &&  this.props.val.map((item)=>{
                    return <div>{item.address}</div>
             })
               }     
            
                        
                    
                
            
        </div>
    </div>
    )
}
}
export default ShowData;