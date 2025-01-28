import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, settoken] = useState(localStorage.getItem('token'));
  const [otptoken, setotptoken] = useState(localStorage.getItem('otptoken'));
  const [User, setuser] = useState({});
  const [servicedata, setservicedata] = useState([]);
  const [productss, setproductss] = useState([]);
  const jwttoken = token;

  const settoKentoLS = (servertoken) => {
    settoken(servertoken);
    localStorage.setItem('token', servertoken);
  }

  const setotptokentols = (otptoken) => {
    setotptoken(otptoken);
    localStorage.setItem('otptoken', otptoken);
  }

  const isLoggedIn = !!token;

  const LogoutTrue = () => {
    settoken(null);
    localStorage.removeItem('token');
  }

  const userAuthentication = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/user', {
        method: 'GET',
        headers: {
          Authorization:  token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setuser(data); // Set user data
      } else {
        console.log('Failed to authenticate user');
        LogoutTrue(); // Logout if authentication fails
      }
    } catch (error) {
      console.log('Error fetching user authentication data:', error);
    }
  };

  const fetchshop = () => {
    fetch('http://localhost:5000/api/Shop/shop', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setproductss(data);
      })
      .catch((error) => {
        console.log('Error fetching shop data:', error);
      });
  };

  const fetchService = () => {
    fetch('http://localhost:5000/api/Services/service', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setservicedata(data);
      })
      .catch((error) => {
        console.log('Error fetching service data:', error);
      });
  };

  useEffect(() => {
    fetchshop();
    fetchService();
  }, []);

  // Only call userAuthentication if token changes
  useEffect(() => {
    if (token) {
      userAuthentication();
    }
  }, [token]); // This ensures the authentication only runs when token changes

  return (
    <AuthContext.Provider
      value={{
        settoKentoLS,
        LogoutTrue,
        isLoggedIn,
        User,
        servicedata,
        jwttoken,
        userAuthentication,
        productss,
        setotptokentols,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const COntextValue = useContext(AuthContext);
  if (!COntextValue) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return COntextValue;
};
