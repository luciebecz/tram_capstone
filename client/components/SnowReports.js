import React from 'react';
import { getSnowReports } from '../actions/reports'
import { connect } from 'react-redux';

class SnowReports extends React.Component {


componentDidMount() {
    this.props.dispatch(getSnowReports())
  }


render() {
  let reports = this.props.reports.map( report => {
  return(
    <div key={report.resort_id}>
    <h5>Resort Name:{report.name}</h5>
    <img src={report.service_icon_svg_url} alt='Ski Area Logo'/>
    <h5>Resort Snow Base:{report.snow_base}</h5>
    <h5>Resort New Snow Past 24 Hours:{report.new_snow_24}</h5>
    <h5>Resort New Snow Past 48 Hours:{report.new_snow_48}</h5>
    <h5>Resort Conditions:{report.conditions}</h5>
    <h5>Resort Website:{report.website_url}</h5>
    </div>
  )
});
if(reports.length !== 0) {
    return(
      <div>
        {reports}
      </div>
    )
} else {
  return (
    <h5>No Available Snow Reports</h5>
          )
        }
      }
    }

const mapStateToProps = (state) => {
  return { reports: state.reports }
}

export default connect(mapStateToProps)(SnowReports);
