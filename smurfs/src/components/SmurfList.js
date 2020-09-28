import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../reducer";

const SmurfList = (props) => {
  useEffect(() => {
    props.getSmurfs();
  });
  return (
    <div>
      {props.smurfs.map((smurf) => {
        return (
          <div key={smurf.id} style={{ border: "2px solid black", margin: "5%" }}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    // isFetching: state.isFetching,
    // isUploading: state.isUploading,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  getSmurfs,
})(SmurfList);