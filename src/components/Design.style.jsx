import styled from "styled-components"

export const Display =styled.div `
    width:250px;
    height:290px;
    border:1px solid grey;
    margin: 15px;
    text-align: center;
`

export const Image=styled.img`
     width: 100%;
     height:130px;
     
`

export const Entire=styled.div`
 
    display: grid;
    grid-template-columns: repeat(4,150px);
    grid-template-rows: (3,300px);
    grid-gap: 15%;
    margin: 10px;
`

export const Foot =styled.div`
    width:100% ;
    border:2px solid transparent;
    display: flex;
    background-color: gray;
  
`

export const Row1 = styled.div`
    width:25%;
    height:500px;
    margin: 50px;
    
    color: white;
    text-align: center;
`


export const Row2 = styled.div`
    width:25%;
    margin: 50px;
    color: white;
    text-align: center;
   
`


export const Row3 = styled.div`
    width:25%;
    margin: 50px;
     
    color: white;
    text-align: center;
`