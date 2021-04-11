mutation {
  ResidentCreateOne(
    record: {
      name: "Fred Jones"
      vehicles: [{
        make: "chevy"
        model: "nova"
        year: 2010
        color: "Blue"
        plate: "1ABC244"
      }{
        make: "BMW"
        model: "M3"
        year: 2011
        color: "silver"
        plate: "3ABD333"
      }]
      dwellings: {
        address: "4074 Tradewinds Drive"

        
        
      }
    }
  ) {
    record: record {
      name
      dwellings {
        address
      }
    }
    record: record {
      vehicles {
        make
        model
      }
    }
  }
}

mutation {
  ResidentCreateOne(
    record: {
      name: "Al Fresco"
      vehicles: [{
        make: "Ford"
        model: "Fairlane"
        year: 2010
        color: "RED"
        plate: "1ABC303"
      }{
        make: "Toyota"
        model: "Corolla"
        year: 2011
        color: "Green"
        plate: "3ABD444"
      }]
      dwellings: {
        address: "4079 Tradewinds Drive"

        
        
      }
    }
  ) {
    record: record {
      name
      dwellings {
        address
      }
    }
    record: record {
      vehicles {
        make
        model
      }
    }
  }
}

