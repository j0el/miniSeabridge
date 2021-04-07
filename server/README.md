Sample for HOA Database

mutation{
  VehicleCreateOne(record: {
    make: "Ford"
    model: "Bronco"

    
  }){
    record{
      _id
      make
      model
    }
  }
  }

  mutation{ResidentCreateOne(record:{
  firstName: "Joel"
  lastName: "Berman"
  middleName: "Charles"
  phone: "9783025746"
  password: "Doggy"
  residentType: owner
  vehicleID: "60636d3240407dd812bb90c1"
}){
  record{
    firstName
    lastName
    _id
  }
}
}


query {
  VehicleCount
}

query {
  VehicleOne{
    _id
    make
    model
  }
}


query {
  VehicleMany{
    _id
    make
    model
  }
}


query {
  ResidentMany{
    _id
 phone
    lastName
    firstName
    residentType
  }
}

mutation{
  DwellingCreateOne(record:{
    address : "4072 Tradewinds Drive"
    subHOA: "Port Marluna"
  
  }){
    record{
      address
      subHOA
      resident{
        id
        _id
      }
    }
  }
}