
import { Foot } from "./Design.style"
import { Row1 } from "./Design.style"
import { Row2 } from "./Design.style"
import { Row3 } from "./Design.style"
export const Footer=() => {
    return(
        <>
        <Foot className="foot">
        <Row1 className="row1">
      <h>Online Store</h>
      <p>Sale</p>
      <p>Features</p>
      <p>Example</p>
     
<p>Website builder</p>

<p>Online retail</p>
        </Row1>

        <Row2 className="row2">
    <h>E-commerce Website</h>
    <p>Domain Names</p>
    <p>Themes</p>
    <p>Shopping-Cart</p>
    <p>E-commerce Hosting</p>
        </Row2>

        <Row3 className="row3"> 
        <p>Mobile Commerce</p>
        <p>Ecommerce-software</p>
        <p>Online store builder</p>
        <p>Store themes</p>
        {/* <img src="data:image/jpeg;base64,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"/> */}
        </Row3>
        </Foot>
       
        
        </>   
    )
}