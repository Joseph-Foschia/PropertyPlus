import Calendar from "./components/Welcome/calendar";
import PropertyDirectory from "./components/Welcome/propertyDirectory";
import UrgentTasks from "./components/Welcome/urgentTasks";
import Notifications from "./components/Welcome/notifications";
import Other from "./components/Welcome/other";
import Contacts from "./components/Welcome/contacts";

function Welcome() {
  return (
    <div className="welcome">
      <header>
        <h1>Welcome, {"Insert User"}!</h1>
        <div className="image-container">
          <img src="" alt="Profile Image" />
        </div>
        <main>
          <div className="welcome-left-side">
            <Calendar />
            <PropertyDirectory />
          </div>
          <div className="welcome-right-side">
            <UrgentTasks />
            <div className="welcome-right-side-bottom-half">
              <div className="welcome-notifications-block">
                <Notifications />
                <Other />
              </div>
              <Contacts />
            </div>
          </div>
        </main>
      </header>
    </div>
  );
}

export default Welcome;
