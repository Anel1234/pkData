// var Country = function(name, population) {
//     this.countryName = name;
//     this.countryPopulation = population;
// };

var url = "https://pokemondb.net/pokedex/all"

// var viewModel = {
//     availableCountries : ko.observableArray([
//         new Country('UK', 65000000),
//         new Country('USA', 320000000),
//         new Country('Sweden', 29000000)
//     ]),
//     selectedCountry : ko.observable() // Nothing selected by default
// };

// ko.applyBindings(viewModel);


var type = function(name, type1, type2, type3, type4, type5, type6, type7, type8, type9, type10, type11, type12, type13, type14, type15, type16, type17, type18, type19) {
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
    this.type11 = type11
    this.type12 = type12
    this.type13 = type13
    this.type14 = type14
    this.type15 = type15
    this.type16 = type16
    this.type17 = type17
    this.type18 = type18
    this.type19 = type19
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
        new type('Normal', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Fire', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Water', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Electric', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Grass', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Ice', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Fighting', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Poison', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Ground', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Flying', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Psychic', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Bug', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Rock', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Ghost', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Dragon', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Dark', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Steel', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Fairy', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
        new type('Curse', 2, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
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
                    self.selectedType1().type10 * self.selectedType2().type10,
                    self.selectedType1().type11 * self.selectedType2().type11,
                    self.selectedType1().type12 * self.selectedType2().type12,
                    self.selectedType1().type13 * self.selectedType2().type13,
                    self.selectedType1().type14 * self.selectedType2().type14,
                    self.selectedType1().type15 * self.selectedType2().type15,
                    self.selectedType1().type16 * self.selectedType2().type16,
                    self.selectedType1().type17 * self.selectedType2().type17,
                    self.selectedType1().type18 * self.selectedType2().type18,
                    self.selectedType1().type19 * self.selectedType2().type19
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
                self.selectedType1().type10,
                self.selectedType1().type11,
                self.selectedType1().type12,
                self.selectedType1().type13,
                self.selectedType1().type14,
                self.selectedType1().type15,
                self.selectedType1().type16,
                self.selectedType1().type17,
                self.selectedType1().type18,
                self.selectedType1().type19
            )
        }
        else return null
    })
};




window.onload = function() {

    chrome.runtime.connect({name: "background"});
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
                tableData.each(function() {

                    //console.log(this.className)
                    if (this.className == 'cell-num cell-fixed') {
                        arrayOfThisRow.push($(this).find('.icon-pkmn').attr('data-src'));
                        //console.log($(this).find('.icon-pkmn').attr('data-src'));
                    }                
                    //console.log(this.className);
                    //console.log($(this).find('.infocard-cell-img'));
                    arrayOfThisRow.push($(this).text());
                });
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
          if (arr[i][2].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/

            /*separates the typing into 2 if possible*/
            var typingSplit =  arr[i][3].match(/[A-Z][a-z]+/g)//substr(0,2);         
            //typingSplit[0] = typingSplit[0].substr(0,2);

            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<img src=" + arr[i][0] + "></img>";
            b.innerHTML += "<strong>" + arr[i][2].substr(0, val.length) +  "</strong>";
            b.innerHTML += arr[i][2].substr(1,2);//(val.length);

            if (typingSplit[1]) {
                //typingSplit[1] = typingSplit[1].substr(0,2);
                b.innerHTML += "<span class='typing type2 type-icon type-" + typingSplit[1] + "'>" + typingSplit[1] + "</span>" //"' style='float:right; display: block'
            }
            b.innerHTML += "<span class='typing type1 type-icon type-" + typingSplit[0] + "'>" + typingSplit[0] + "</span>"     //"' style='float:right; display: block'>"

            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i][2] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/

                console.log($(this).find('.type1').html());

                for (var i = 0; i < self.availableTypes().length; i++) {
                    if ($(this).find('.type1').html() == self.availableTypes()[i].typeName) {
                        self.selectedType1(self.availableTypes()[i]);
                        if(!$(this).find('.type2').html()) {
                            self.selectedType2(self.availableTypes()[i]);
                        }
                    }
                    if ($(this).find('.type2').html()) {
                        if ($(this).find('.type2').html() == self.availableTypes()[i].typeName) {
                            self.selectedType2(self.availableTypes()[i]);
                        }
                    }
                }

                //console.log(this.getElementsByClassName("typing")[0]).innerHTML();
                inp.value = this.getElementsByTagName("input")[0].value.substr(0,2);
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

/*
//old array
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
*/