import React from "react";

function PictureCard(props) {
  const {children} = props;
  
  const divStyle = {
    width: '200px',
    height: '230px',
    border: '1.5px solid black',
    borderRadius: '2px',
    padding: '4px',
    margin: '4px',
    backgroundColor: "#FBF4E2",
  }
  
  return (
    <div style={divStyle}>
      {children}
    </div>
  );
}

export default PictureCard;


// EPICODUS WAY:
// function PictureCard(props) {   <----------props
  
//   const divStyle = {
//     width: '200px',
//     height: '200px',
//     border: '1.5px solid black',
//     borderRadius: '2px',
//     padding: '4px',
//     margin: '4px',
//     backgroundColor: "#FBF4E2",
//   }
  
//   return(
//       <div style={divStyle}>
//         {props.children}  <------------------
//       </div>


//   )
// }

// export default PictureCard;


// DESTRUCTURING PROPS
// function PictureCard(props) {
//   const {children} = props;
  
//   const divStyle = {
//     width: '200px',
//     height: '200px',
//     border: '1.5px solid black',
//     borderRadius: '2px',
//     padding: '4px',
//     margin: '4px',
//     backgroundColor: "#FBF4E2",
//   }
  
//   return (
//     <div style={divStyle}>
//       {children}
//     </div>
//   );
// }

// export default PictureCard;


// SHORTCUT
// function PictureCard({children}) {
  
//   const divStyle = {
//     width: '200px',
//     height: '200px',
//     border: '1.5px solid black',
//     borderRadius: '2px',
//     padding: '4px',
//     margin: '4px',
//     backgroundColor: "#FBF4E2",
//   }
  
//   return (
//     <div style={divStyle}>
//       {children}
//     </div>
//   );
// }

// export default PictureCard;