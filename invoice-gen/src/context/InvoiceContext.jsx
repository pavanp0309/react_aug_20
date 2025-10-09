// using firebase google auth feature
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged,} from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { createContext, useContext, useEffect, useState } from "react";

// creating a instance of the feature
const getGoogleProvider = () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" }); // Always prompt
  return provider;
};
// creating the context

const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  // for storing/getting the user localstorage
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch (error) {
      return null;
    }
  });

  //  for tracking the changes of the user authentication
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) {
        const uobj = {uid: u.uid,name: u.displayName,email: u.email,photo: u.photoURL};
        //  updating the state varible with user info
        setUser(uobj);
        //  storing the logged user information into localstorage
        localStorage.setItem("user", JSON.stringify(uobj));
      } else {
        // User is signed out
        setUser(null);
        localStorage.removeItem("user");
      }
    });
    return unsub;
  }, []);

  // function to handle googlelogin
  const loginWithGoogle = async () => {
    try {
      let provider=getGoogleProvider()
      let res = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const u = res.user;
      console.log("userinfo", u);
      const uobj = {
        uid: u.uid,
        name: u.displayName,
        email: u.email,
        photo: u.photoURL,
      };
      //  updating the state varible with user info
      setUser(uobj);
      //  storing the logged user information into localstorage
      localStorage.setItem("user", JSON.stringify(uobj));
      return uobj;
    } catch (error) {
      console.log("failed to login", error);
      return error;
    }
  };

  // function to logout
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      alert("error in logout");
    }
  };

  return (
    <InvoiceContext.Provider  value={{user,setUser,loginWithGoogle,logout}}>
      {children}
    </InvoiceContext.Provider>
  )

};

// custom hook (reuseable logic)
 const useInvoice=()=>useContext(InvoiceContext)
export default useInvoice