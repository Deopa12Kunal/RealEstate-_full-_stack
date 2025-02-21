import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, 
      [e.target.id]: e.target.value
     });
  };
   const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
 //!adding functionality for loadind and error sTATE
    setLoading(true);
    const res = await fetch('/api/auth/signup',
       {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json',
           },
        body: JSON.stringify(formData),
      });
       const data = await res.json();
    console.log(data);
    if(data.success === false) 
      {
        setLoading(false);
      setError(data.message);
      return;
    }
     setLoading(false);
     setError(null);
     navigate('/sign-in');
    }
    catch(error){
      setLoading(false);
      setError(error.message);
    }
   };
  // console.log(formData)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center 
      font-semibold my-7">SignUp</h1>
      <form onSubmit={handleSubmit}className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username "
          className="border p-4 rounded-xl"
          id="username" onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-4 rounded-xl"
          id="email"onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-4 rounded-xl"
          id="password"onChange={handleChange}
        />
        <button
        disabled={loading}
          className="bg-slate-800 text-white p-4 rounded-lg uppercase
         hover:opacity-55"
        >
          {loading ? 'Loading...' :'Sign Up'}
          
        </button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Have an account ?</p>

        <Link to={"/sign-in"}>
          <span className='text-red-500 font-bold'>Sign in</span>
        </Link>
      </div>
    </div>
  );
}
