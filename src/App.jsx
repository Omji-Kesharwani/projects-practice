import React from 'react'

const App = () => {
  return (
    <AppStyled  bg={bg} className="App">
      
    </AppStyled>
  )
}

const AppStyled=styled.div`
height:100vh;
background-image:url(${props=>props.bg})

`;

export default App
