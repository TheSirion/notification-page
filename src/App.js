import { useContext } from "react";

import { NotificationContext } from "./Contexts/Notification.context";

import MarkAllAsReadButton from "./components/MarkAllAsReadButton/MarkAllAsReadButton.component";
import NotificationCounter from "./components/Notification Counter/NotificationCounter.component";
import Notification from "./components/Notification/Notification.component";

import { HomePageHeader, HomePageStyles } from "./App.styles";

function App() {
  const notificationsArray = useContext(NotificationContext);

  return (
    <HomePageStyles>
      <HomePageHeader>
        <NotificationCounter />
        <MarkAllAsReadButton />
      </HomePageHeader>
      {notificationsArray.map(notification => {
        return (
          <Notification key={notification.id} notification={notification} />
        );
      })}
    </HomePageStyles>
  );
}

export default App;
