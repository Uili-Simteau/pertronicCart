var express = require('express');

const items = {
   "item-1"       : {
      "Artist"    : "Pertronic",
      "Title"     : "OnFire!!!",
      "Label"     : "Azul",
      "Country"   : "US",
      "Year"      : "1976",
      "Format"    : "LP",
      "Price"     : "11.86",
      "thumbnail" : "56L.jpg"
   },
   "item-2"       : {
      "Artist"    : "Uili",
      "Title"     : "2 Times Revolution",
      "Label"     : "Greensleeves 2093",
      "Country"   : "GB",
      "Year"      : "2011",
      "Format"    : "LP",
      "Price"     : "11.48",
      "thumbnail" : "46L.jpg"
   },
   "item-3"       : {
      "Artist"    : "Fecteau",
      "Title"     : "Escape from Babylon",
      "Label"     : "Greensleeves 2039",
      "Country"   : "GB",
      "Year"      : "2009",
      "Format"    : "LP",
      "Price"     : "11.76",
      "thumbnail" : "06L.jpg"
   },
   "item-4"       : {
      "Artist"    : "Alborosie",
      "Title"     : "Sound the System",
      "Label"     : "Greensleeves/VP 7010",
      "Country"   : "GB",
      "Year"      : "2013",
      "Format"    : "LP",
      "Price"     : "11.76",
      "thumbnail" : "86L.jpg"
   },
   "item-5"       : {
      "Artist"    : "Alpha Blondy & The Wailers",
      "Title"     : "Jerusalem",
      "Label"     : "Vp 2424",
      "Country"   : "US",
      "Year"      : "1988",
      "Format"    : "LP",
      "Price"     : "11.76",
      "thumbnail" : "90L.jpg"
   },
   "item-6"       : {
      "Artist"    : "Alpha Steppa & Alpha and Omega Presents",
      "Title"     : "The Unrelenting Force of Dub Dynasty",
      "Label"     : "Steppas Records 01",
      "Country"   : "GB",
      "Year"      : "2013",
      "Format"    : "LP",
      "Price"     : "16.92",
      "thumbnail" : "31L.jpg"
   },
   "item-7"       : {
      "Artist"    : "Alton Ellis",
      "Title"     : "Sings Rock and Soul",
      "Label"     : "Coxsone",
      "Country"   : "GB",
      "Year"      : "",
      "Format"    : "LP",
      "Price"     : "13.94",
      "thumbnail" : "00L.jpg"
   },
   "item-8"       : {
      "Artist"    : "Alton Ellis",
      "Title"     : "Sunday Coming",
      "Label"     : "Studio One 3423",
      "Country"   : "GB",
      "Year"      : "1970",
      "Format"    : "LP",
      "Price"     : "13.94",
      "thumbnail" : "44L.jpg"
   },
   "item-9"       : {
      "Artist"    : "Alton Ellis",
      "Title"     : "The Best of",
      "Label"     : "Studio One",
      "Country"   : "GB",
      "Year"      : "",
      "Format"    : "LP",
      "Price"     : "13.94",
      "thumbnail" : "45.jpg"
   },
   "item-10"      : {
      "Artist"    : "Anthony B",
      "Title"     : "Seven Seals",
      "Label"     : "Vp 1557",
      "Country"   : "US",
      "Year"      : "1999",
      "Format"    : "LP",
      "Price"     : "10.79",
      "thumbnail" : "67L.jpg"
   },
   "item-11"      : {
      "Artist"    : "Bertus",
      "Title"     : "Seven Seals",
      "Label"     : "Vp 1557",
      "Country"   : "US",
      "Year"      : "1999",
      "Format"    : "LP",
      "Price"     : "10.79",
      "thumbnail" : "67L.jpg"
   }
};

exports.getItems = function(req,res){
   res.set('Content-Type', 'application/json');

   res.send(items);
}

