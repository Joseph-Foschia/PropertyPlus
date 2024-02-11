

import { formatDate } from "../../../helpers/dateHelper"

function GeneralInfoCard({detail}) {




  const dateString = detail?.date_started
  const formattedDateStarted = formatDate(dateString)

  const dateStringFinished = detail?.date_completed
  const formattedDateFinished = formatDate(dateStringFinished)

 
  const getStatusClassName = (status) => {
    switch (status) {
      case 'In Progress':
        return 'prog';
      case 'Completed':
        return 'comp';
      case 'Requested':
        return 'req';
      default:
        return '';
    }
  };

  return (
    <div className="general-info-card">
      <div >
        <div class="header-info">
        <h3 >Information</h3>
        </div>
        <div className="general-info-list">
          <p className="info-p">Type</p>
          <p className="more-detail">{detail && detail.service}</p>
        </div>
        <div className="general-info-list">
          <p className="info-p">Description</p>
         <p className="more-detail">{detail && detail.description}</p>
        </div >
        <div className="general-info-list">
          <p className="info-p">Date Request Made</p>
          <p className="more-detail">{formattedDateStarted}</p>
        </div >
        <div className="general-info-list">
          <p className="info-p">Date Request Solved</p>
          <p className="more-detail">{formattedDateFinished}</p>
        </div>
        <div className="general-info-list">
          <p className="info-p">Cost</p>
          <p className="more-detail">{detail && detail.cost ? detail.cost : "N/A"}</p>
        </div>
        <div className="general-info-list">
          <p className="info-p">Status</p>
          <p className={`stat ${getStatusClassName(detail && detail.status)}`}>
            {detail && detail.status}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfoCard;