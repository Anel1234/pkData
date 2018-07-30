// var Country = function(name, population) {
//     this.countryName = name;
//     this.countryPopulation = population;
// };

var url = "https://pokemondb.net/pokedex/all"
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// var viewModel = {
//     availableCountries : ko.observableArray([
//         new Country('UK', 65000000),
//         new Country('USA', 320000000),
//         new Country('Sweden', 29000000)
//     ]),
//     selectedCountry : ko.observable() // Nothing selected by default
// };

// ko.applyBindings(viewModel);


var type = function(name, type1, type2, type3, type4, type5, type6, type7, type8, type9, type10) {
    this.typeName = name;
    this.type1 = type1
    this.type2 = type2
    this.type3 = type3
    this.type4 = type4
    this.type5 = type5
    this.type6 = type6
    this.type7 = type7
    this.type8 = type8
    this.type9 = type9
    this.type10 = type10
}

// var viewModel = {
//     availableTypes : ko.observableArray([
//         new type('N', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1),
//         new type('F', 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 2, 1),
//         new type('P', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2)
//     ]),
//     selectedType1 : ko.observable(), // Nothing selected by default
//     selectedType2 : ko.observable(),
// };

var MyViewModel = function() {
    var self = this;
    self.availableTypes = ko.observableArray([
        new type('N', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1),
        new type('F', 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 2, 1),
        new type('P', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('E', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('G', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('S', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('F', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('R', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('W', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('B', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('D', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2),
        new type('I', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2)
    ]),
    self.selectedType1 = ko.observable(), // Nothing selected by default
    self.selectedType2 = ko.observable(),
    // this.computedType = new type (selectedType1.typeName + selectedType2.typeName,1,1,1,1,1,1,1,1,1,1)
    // {
    //     this.type1 = selectedType1.type1 * selectedType2.type1
    // };
    self.computedType = ko.computed(function() {
        if (self.selectedType1() && self.selectedType2()) {
            if (self.selectedType1().typeName != self.selectedType2().typeName) {
                return new type(
                    self.selectedType1().typeName + self.selectedType2().typeName,
                    self.selectedType1().type1 * self.selectedType2().type1,
                    self.selectedType1().type2 * self.selectedType2().type2,
                    self.selectedType1().type3 * self.selectedType2().type3,
                    self.selectedType1().type4 * self.selectedType2().type4,
                    self.selectedType1().type5 * self.selectedType2().type5,
                    self.selectedType1().type6 * self.selectedType2().type6,
                    self.selectedType1().type7 * self.selectedType2().type7,
                    self.selectedType1().type8 * self.selectedType2().type8,
                    self.selectedType1().type9 * self.selectedType2().type9,
                    self.selectedType1().type10 * self.selectedType2().type10
                )
            }
            else return new type(
                self.selectedType1().typeName,
                self.selectedType1().type1, 
                self.selectedType1().type2, 
                self.selectedType1().type3, 
                self.selectedType1().type4, 
                self.selectedType1().type5, 
                self.selectedType1().type6, 
                self.selectedType1().type7, 
                self.selectedType1().type8, 
                self.selectedType1().type9, 
                self.selectedType1().type10
            )
        }
        else return null
    })
};




window.onload = function() {

    ko.applyBindings(MyViewModel());
    
    var myTableArray = [];
    // autocomplete(document.getElementById("myInput"), myTableArray)

    // APIL - needs to be specific to the type number table!
    // $(".dropdown").change(function() {
    //     reorderTable();
    // })

    $("#result").load(url + " #pokedex", function() {
        $("#pokedex tr").each(function() {
            var arrayOfThisRow = [];
            var tableData = $(this).find('td');
            if (tableData.length > 0) {
                tableData.each(function() { arrayOfThisRow.push($(this).text()); });
                myTableArray.push(arrayOfThisRow);
            }
        });
    });
    $("#result").hide();

    console.log(myTableArray);
    autocomplete(document.getElementById("myInput"), myTableArray)
    


    $(".pkSearch").keypress(function(e) {
        if(e.which == 13) {
            console.log($(".pkSearch").val());
            // chrome.tabs.create({url: url + $(".pkSearch").val()});
            // $("#result").load(url + $(".pkSearch").val(), function() {
            // });

            // setTimeout(function(){
            //     $("#result" ).load(url, function() {
            //     });
            // }, 500)
        }
    })
}
// $('.dropdown').addEventListener("change", calculateValue());

function reorderTable() {
    var tb = $('tbody');
    var rows = tb.find('tr');
    rows.sort(function(a, b) {
        var keyA = $(a).html();
        var keyB = $(b).html();
        return keyB - keyA;
    });
    $.each(rows, function(index, row) {
        tb.append(row);
    });
    //var calculatedArray = [selectedType1.type1 * selectedType2.type1];
    //console.log(calculatedArray);
}







function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        var matchCount = 0;
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i][1].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/

            /*separates the typing into 2 if possible*/
            var typingSplit =  arr[i][2].match(/[A-Z][a-z]+/g)//substr(0,2);         
            typingSplit[0] = typingSplit[0].substr(0,2);

            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i][1].substr(0, val.length) +  "</strong>";
            b.innerHTML += arr[i][1].substr(1,2);//(val.length);

            if (typingSplit[1]) {
                typingSplit[1] = typingSplit[1].substr(0,2);
                b.innerHTML += "<span class='typing type2 " + typingSplit[1] + "' style='float:right'>" + typingSplit[1] + "</span>"
            }
            b.innerHTML += "<span class='typing type1 " + typingSplit[0] + "' style='float:right'>" + typingSplit[0] + "</span>"           

            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i][1] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/

                console.log($(this).find('.type1').html());
                console.log($(this).find('.type2').html());

                for (var i = 0; i < self.availableTypes().length; i++) {
                    if ($(this).find('.type1').html().substr(0,1) == self.availableTypes()[i].typeName) {
                        self.selectedType1(self.availableTypes()[i]);
                        if(!$(this).find('.type2').html()) {
                            self.selectedType2(self.availableTypes()[i]);
                        }
                    }
                    if ($(this).find('.type2').html()) {
                        if ($(this).find('.type2').html().substr(0,1) == self.availableTypes()[i].typeName) {
                            self.selectedType2(self.availableTypes()[i]);
                        }
                    }
                }

                //console.log(this.getElementsByClassName("typing")[0]).innerHTML();
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
            matchCount++;
            if (matchCount >= 10) {
                matchCount = 0;
                i = arr.length;
                //return;
            }
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");

    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      //$('.drop1').val('selectedType1');
      //$('.drop1').val('selectedType2');

    //   $('.drop1').val(100)
    //   console.log($('.drop1'));
    //   console.log($('.drop1').val());

    // console.log(self.availableTypes()[0]);
    // self.selectedType1(self.availableTypes()[0]);

      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }