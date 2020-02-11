/* Facade Pattern */

// TLDR; This pattern provides a convenient higher-level interface to a larger body of code, hiding its true underlying complexity

// Code example from: https://anasshekhamis.com/2017/09/21/facade-design-pattern-in-javascript/

function TraveFacade(reservationType) {
  this.reservationType = reservationType;
  this.flight = new FlightBooker();
  this.hotel = new HotelBooker();
  this.train = new TrainBooker();
}

TravelFacade.prototype.book = function(reservationInfo) {
  switch (this.reservationType) {
    case "Flight":
      this.flight.book(reservationInfo);
      break;
    case "Hotel":
      this.hotel.book(reservationInfo);
      break;
    case "Train":
      this.train.book(reservationInfo);
      break;
    case "Flight_And_Hotel":
      this.flight.book(reservationInfo);
      this.hotel.book(reservationInfo);
      break;
    case "Train_And_Hotel":
      this.train.book(reservationInfo);
      this.hotel.book(reservationInfo);
      break;
    default:
      throw Error("Reservation type is not supported");
  }
};

function FlightBooker() {
  function book(bookingInfo) {
    // handle booking flight
    console.log(bookingInfo.flight);
  }
  return {
    book
  };
}

function TrainBooker() {
  function book(bookingInfo) {
    // handle train booking
    console.log(bookingInfo.train);
  }
  return {
    book
  };
}

function HotelBooker() {
  function book(bookingInfo) {
    console.log(bookingInfo.train);
  }
  return {
    book
  };
}

let flight = {
  departure_datetime: "21/09/2017 09:00",
  return_datetime: "25/09/2017 22:00",
  from: "New York",
  to: "London"
};

let train = {
  departure_datetime: "22/09/2017 20:00",
  return_datetime: "25/09/2017 10:00",
  from: "London",
  to: "Edinburgh"
};

let hotel = {
  check_in_date: "22/09/2017",
  nights: 1,
  city: "London",
  hotel_name: "Four Seasons Hotel"
};

let tripOne = new TravelFacade("Flight_And_Hotel");
tripOne.book({ flight, hotel });

hotel = {
  check_in_date: "22/09/2017 20:00",
  nights: 3,
  city: "Edinbrugh",
  hotel_name: "The Balmoral"
};
let tripTwo = new TravelFacade("Train_And_Hotel");
tripTwo.book({ train, hotel });

/*
    NOTES:
        - To build on what we’ve learned, the Facade pattern both simplifies the interface of a class and decouples the class from the code that uses it
*/

function Analytics(settings) {
  this.settings = settings;
  this.request = new AnalyticsRequest();
  this.select = new AnalyticsSelector();
  this.save = new AnalyticsSaver();
  this.buildChart = new AnalyticsChart();
}

function AnalyticsRequest(settings) {
  // subsystem that builds an analytics request
}

function AnalyticsSelector(settings) {
  // subsystem  generates a permutation string and selects data from redux state slifce
}

function AnalyticsSaver(settings) {
  // subsystem that generates a permutation string and dispatches a load event for redux
}

function AnalyticsChart(config) {
  // subsystem that relies on a base ChartBuilder to build a chart config tailored for analytics
}
