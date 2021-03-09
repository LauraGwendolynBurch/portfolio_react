import React from 'react';

class App extends React.Component {
  
  constructor(props){
  super(props);
  this.state = {  

    title: "Laura Gwendolyn Burch",
    headerLinks:[
      { title: "Home", paths: "/"},
      { title: "About", paths: "/about"},
      { title: "Contact", paths: "/contact"},
      { title: "Resume", paths: "/resume"},
      { title: "Portfolio", paths: "/portfolio"}
    ],
    home: {
      title: "Full Stack Website Developer",
      subtitle: "Ideas | Creating | Design",
      text: "Portfolio"
    },
    about: {
      title: "About Me",
    },
    contact: {
      title: "Choose your own adventure",
    },
    resume: {
      title: "Resume",
    },
    portfolio: {
      title: "Portfolio",
    },


  }
}

  render() { 
    return ( 
      <div>hello from react</div>
     );
  }
}
 
export default App;


