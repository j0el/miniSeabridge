Sample for HOA Database

mutation {
  ResidentCreateOne(
    record: {
      name: "Fred"
      vehicles: {
        make: "Ford"
        model: "Bronco"
        year: 2010
        color: "Blue"
        plate: "1ABC234"
      }
      dwellings: { address: "4072 Tradewinds Drive" subHOA:{enum:"Marluna"} }
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
