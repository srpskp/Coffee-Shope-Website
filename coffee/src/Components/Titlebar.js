// import React from 'react'
// const Productstyle = {
//     textAlign:'center',
//     backgroundColor:'orange',
//     marginTop:'2%'
// }
// export default function Titlebar(props) {
//   return (
//     <h2 style={Productstyle}>{props.name}</h2>
//   )
// }

import React from 'react'
const Productstyle = {
  textAlign:'center',
  marginTop:'2%',

}

export default function Titlebar(props) {
  return (
    <h2  style={Productstyle} >{props.name}</h2>
  )
}

