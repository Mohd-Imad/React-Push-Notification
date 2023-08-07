import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BGbisKPNBSIYy88SJhL_aqotuflL-YtQNXjWNQCW4OvJV2tvIUWQ3o2hg9yMl3VJc3-f8FseHeAPHQE_D6of3D0",
      });
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return (
    <>
      <h1>Push Notification</h1>
    </>
  );
}

export default App;