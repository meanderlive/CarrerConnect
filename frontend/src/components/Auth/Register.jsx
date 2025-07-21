// import React, { useContext, useState } from "react";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";
// import { FaPencilAlt } from "react-icons/fa";
// import { FaPhoneFlip } from "react-icons/fa6";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { Context } from "../../main";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !phone || !role || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     try {
//       setLoading(true);
//       const { data } = await axios.post(
//         "http://localhost:4000/api/v1/user/register",
//         { name, phone, email, role, password },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       toast.success(data.message || "Registration successful");
//       setIsAuthorized(true);
//       setUser(data.user || {}); // optional, if API returns user
//       // Reset form
//       setName("");
//       setEmail("");
//       setPhone("");
//       setPassword("");
//       setRole("");
//     } catch (error) {
//       console.error("Register Error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (isAuthorized) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <section className="authPage">
//       <div className="container">
//         <div className="header">
//           <img src="/careerconnect-black.png" alt="logo" />
//           <h3>Create a new account</h3>
//         </div>
//         <form onSubmit={handleRegister}>
//           <div className="inputTag">
//             <label>Register As</label>
//             <div>
//               <select value={role} onChange={(e) => setRole(e.target.value)}>
//                 <option value="">Select Role</option>
//                 <option value="Employer">Employer</option>
//                 <option value="Job Seeker">Job Seeker</option>
//               </select>
//               <FaRegUser />
//             </div>
//           </div>
//           <div className="inputTag">
//             <label>Name</label>
//             <div>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <FaPencilAlt />
//             </div>
//           </div>
//           <div className="inputTag">
//             <label>Email Address</label>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <MdOutlineMailOutline />
//             </div>
//           </div>
//           <div className="inputTag">
//             <label>Phone Number</label>
//             <div>
//               <input
//                 type="tel"
//                 placeholder="Enter your phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//               <FaPhoneFlip />
//             </div>
//           </div>
//           <div className="inputTag">
//             <label>Password</label>
//             <div>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <RiLock2Fill />
//             </div>
//           </div>
//           <button type="submit" disabled={loading}>
//             {loading ? "Registering..." : "Register"}
//           </button>
//           <Link to="/login">Login Now</Link>
//         </form>
//       </div>
//       <div className="banner">
//         <img src="/register.png" alt="register" />
//       </div>
//     </section>
//   );
// };

// export default Register;


import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !role || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // important for cookie/session-based auth
        }
      );

      toast.success(data.message || "Registration successful");
      setIsAuthorized(true);
      setUser(data.user || {});
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRole("");
    } catch (error) {
      console.error("Register Error:", error.response?.data || error.message);
      toast.error(
        error?.response?.data?.message || error?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <section className="authPage">
      <div className="container">
        <div className="header">
          <img src="/careerconnect-black.png" alt="logo" />
          <h3>Create a new account</h3>
        </div>
        <form onSubmit={handleRegister} style={{ opacity: loading ? 0.6 : 1 }}>
          <div className="inputTag">
            <label>Register As</label>
            <div>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
              <FaRegUser />
            </div>
          </div>
          <div className="inputTag">
            <label>Name</label>
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FaPencilAlt />
            </div>
          </div>
          <div className="inputTag">
            <label>Email Address</label>
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdOutlineMailOutline />
            </div>
          </div>
          <div className="inputTag">
            <label>Phone Number</label>
            <div>
              <input
                type="tel"
                placeholder="Enter your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <FaPhoneFlip />
            </div>
          </div>
          <div className="inputTag">
            <label>Password</label>
            <div>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <RiLock2Fill />
            </div>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <Link to="/login">Login Now</Link>
        </form>
      </div>
      <div className="banner">
        <img src="/register.png" alt="register" />
      </div>
    </section>
  );
};

export default Register;
