import React from "react";

class RetrievePrevious extends React.Component {
  retrieveIDfromDB = () => {
    console.log("form detail retrieved from DB");
  };
  idProvided = () => {
    console.log("idProvided button pushed");
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>This Page is for retrieving previous form entered into DB: </h4>

        <br />
        <form onSubmit={this.retrieveIDfromDB}>
          <div>
            <label>Please Enter Form ID Required:</label>{" "}
            <input
              type="number"
              id="number"
              placeholder="ID Reference"
              /* value="use prop id from db" */
              onChange={this.props.idProvided}
            />{" "}
            <input
              className="retrieveButton"
              type="submit"
              value="Retrieve Form"
            />
          </div>
        </form>

        <hr />
        <hr />
        <p>
          Retrieving/Editing the expense with ID of:{" "}
          {this.props.match.params.id}{" "}
        </p>
      </div>
    );
  }
}

export default RetrievePrevious;
