var coinsApp = angular.module('CoinsApp', []);
coinsApp.controller('ListCtrl', function ($scope) {
  $scope.map = AmCharts.makeChart( "chartdiv", {
    "language": "ru",
    "type": "map",
    "theme": "light",

    "dataProvider": {
      "map": "worldHigh",
      "getAreasFromMap": true,
      "areas": []
    },
    "areasSettings": {
      "unlistedAreasColor": "#DDDDDD",
      "rollOverOutlineColor": "#FFFFFF",
      "rollOverColor": "#000D81"
    },
    "smallMap": {},
    "export": {
      "enabled": true,
      "position": "bottom-right"
    }
  });

  $scope.setAreas = function(map, coins, sets) {
    for (var i = 0; i < sets.length; i++) {
      var set = sets[i];
      var area = {
        id: set.country,
        color: '#CC0000',
        selectable: true
      };
      map.dataProvider.areas.push(area);
    }
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i];
      var area = {
        id: coin.country,
        color: '#CC0000',
        selectable: true
      };
      map.dataProvider.areas.push(area);
    }
  };

  $scope.coins = 
  [
    {
      country: "TH",
      currency: "THB",
      denomination: 10,
      commemorative: true,
      year: 2010,
      description: "150th HRH Panurungsri swangwong"
    },
    {
      country: "TH",
      currency: "THB",
      denomination: 10,
      commemorative: true,
      year: 2009,
      description: "100th Military Academy College"
    },
    {
      country: "TH",
      currency: "THB",
      denomination: 10,
      commemorative: true,
      year: 2012,
      description: "100th Ministry of Transport"
    },
    {
      country: "VA",
      currency: "EUR",
      denomination: 0.5,
      year: 2013,
      mintMark: "R"
    },
    {
      country: "VA",
      currency: "EUR",
      denomination: 0.5,
      year: 2014,
      mintMark: "R",
      qty: 2
    },
    {
      country: "ES",
      currency: "EUR",
      denomination: 2,
      year: 2014,
      mintMark: "M",
      commemorative: true,
      description: "UNESCO's World Cultural and Natural Heritage Sites – Park Guell"
    }
  ];

  $scope.sets = 
  [  
    {
      country: "GR",
      currency: "EUR",
      denominations: [ 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01 ],
      photos: [ 
        'photo/GR/2002/2E_gr_2002.jpg',
        'photo/GR/2002/1E_gr_2002.jpg',
        'photo/GR/2002/50c_gr_2002.jpg',
        'photo/GR/2002/20c_gr_2002.jpg',
        'photo/GR/2002/10c_gr_2002.jpg',
        'photo/GR/2002/5c_gr_2002.jpg',
        'photo/GR/2002/2c_gr_2002.jpg',
        'photo/GR/2002/1c_gr_2002.jpg',
      ],
      year: 2002
    },
    {
      country: "DE",
      currency: "EUR",
      denominations: [ 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01 ],
      year: 2003,
      mintMark: "F"
    },
    {
      country: "TH",
      currency: "THB",
      denominations: [10, 5, 2, 1, 0.5, 0.25]
    },
    {
      country: "ES",
      currency: "EUR",
      denominations: [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01 ],
      mintMark: "M",
      year: 2014
    }
  ];

  $scope.countries = 
  {
    "GR": 
    {
      name: "Греция",
      currencies: ["EUR"] 
    },
    "DE": 
    {
      name: "Германия",
      currencies: ["EUR"]
    },
    "TH": 
    {
      name: "Таиланд",
      currencies: ["THB"]
    },
    "VA": 
    {
      name: "Ватикан",
      currencies: ["EUR"]
    },
    "ES": 
    {
      name: "Испания",
      currencies: ["EUR"]
    }
  };

  $scope.currencies = 
  {
    "EUR": [ "евро", "евро-цент" ],
    "THB": [ "бат", "сатанг" ]
  };

  $scope.setAreas($scope.map, $scope.coins, $scope.sets);

  $scope.map.addListener("clickMapObject", function (event) {
   $scope.currentCountry = event.mapObject.id
   $scope.$apply();
  });
});

$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 