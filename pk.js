// var Country = function(name, population) {
//     this.countryName = name;
//     this.countryPopulation = population;
// };

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
        new type('P', 0.5, 2, 2, 0.5, 1, 1, 0.5, 1, 0.5, 2)
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

ko.applyBindings(MyViewModel());


window.onload = function() {
    $(".dropdown").change(function() {
        reorderTable();
    })

    $(".pkSearch").keypress(function(e) {
        if(e.which == 13) {
            console.log($("pkSearch").val());
            // $("#result" ).load("https://www.smogon.com/dex/sm/pokemon/" + $(".pkSearch").val(), function() {
            // });
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