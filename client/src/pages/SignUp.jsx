import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-4 rounded-xl"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-4 rounded-xl"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-4 rounded-xl"
          id="password"
        />
        <button
          className="bg-slate-800 text-white p-4 rounded-lg uppercase
         hover:opacity-55"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-3 mt-3">
        <p>Have an account ?</p>

        <Link to={"/sign-in"}>
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  );
}
