import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchLatitudeRequest, loadJsonDataRequest } from '../actions/actions';
import { hotelList, HotelState } from '../store/reducer'

interface Props {
  fetchLatitudeDetails: any;
  loadJsonData: any;
  hotelList: any;
};

const mapStateToProps = (state: HotelState) => ({
  ...hotelList(state)
});

const mapDispatchToProps = {
  fetchLatitudeDetails: fetchLatitudeRequest,
  loadJsonData: loadJsonDataRequest
};

const App = (props: Props) => {

  // Storing typed location using react useState hooks.
  const [location, setLocation] = useState("");

  useEffect(() => {
    // Only called in first render of this component.
    props.loadJsonData();
  }, []);

  return (
    <div className="App" style={{ display: 'flex', flexFlow: 'column wrap' }}>
      <label htmlFor="search">Search your Location</label>
      <input type="text" onChange={e => setLocation(e.target.value)} value={location} style={{ width: 'fit-content' }} />
      <button type="submit" onClick={() => props.fetchLatitudeDetails(location)} style={{ width: 100 }}>
        Search
        </button>
      {
        props.hotelList ? <h2> {props.hotelList} </h2> : null
      }
    </div>

  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
