import liff from "@line/liff";
import { Fragment, useEffect, useState } from "react";

function App() {
  // const [pictureUrl, setPictureUrl] = useState(logo)
  // eslint-disable-next-line no-unused-vars
  const [idToken, setIdToken] = useState("");
  // const [displayName, setDisplayName] = useState('')
  // const [statusMessage, setStatusMessage] = useState('')
  // const [userId, setUserId] = useState('')

  // const logout = () => {
  //   liff.logout()
  //   window.location.reload()
  // }

  const initLine = () => {
    liff.init(
      { liffId: "1656654849-0gQezROW" },
      () => {
        if (liff.isLoggedIn()) {
          runApp();
        } else {
          liff.login();
        }
      },
      (err) => console.error(err)
    );
  };

  const runApp = () => {
    const idToken = liff.getIDToken();
    setIdToken(idToken);
    liff
      .getProfile()
      .then((profile) => {
        console.log(profile)

        
        setTimeout(() => {
            window.location.href = '/Dashboard'
        }, 3000);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    initLine();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment></Fragment>
  );
}

export default App;
