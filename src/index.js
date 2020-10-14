import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Contacts";

ReactDOM.render(
  <>
    <h1>My Contacts</h1>
    <Card
    name = "Beyonce"
    phone = "867-532-1148"
    email = "bey@gmail.com"
    photo = "https://cdn.cnn.com/cnnnext/dam/assets/200531232831-beyonce-london-2019-super-tease.jpg"/>

    <Card name = "Joe"
    phone = "554-585-6693"
    email = "JoeDirt@gmail.com"
    photo = "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/2001/B000P4FFPQ_JoeDirt_UXSY1._V142727189_RI_.jpg"/>
  </>
  ,document.getElementById("root")
);
