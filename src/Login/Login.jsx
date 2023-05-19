import React, { useContext } from "react";
import logo from "../assets/logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContextProvider);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        const loggedUser = res.user;
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.message}`,
          text: "Please check and try again",
          icon: "warning",
          confirmButtonText: "Okey",
        });
      });
  };
  return (
    <div className="mb-5 mt-16">
      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700 rounded-xl">
        <div className="container h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48 mb-10"
                          src={logo}
                          alt="logo"
                        />
                      </div>

                      <form onSubmit={handleLogin}>
                        <h4 className="mb-4">Please login to your account</h4>

                        <div className="mb-4">
                          <label className="label">Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Type your email here"
                            className="input input-bordered w-full"
                          />
                        </div>

                        <div className="mb-4">
                          <label className="label">Password</label>
                          <input
                            type="password"
                            name="password"
                            placeholder="Type your password here"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="mb-12 pb-1 pt-1 text-center mt-6">
                          <input
                            type="submit"
                            value="Login"
                            className=" mb-2 btn btn-block bg-[#ECCC68] border-none"
                          />
                        </div>
                      </form>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <Link to={"/register"}>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            Register
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background: "#ECCC68",
                    }}
                  >
                    <div className="px-4 py-6 text-gray-800 md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-gray-700">
                        ToyCarLand is a premier destination for toy car
                        enthusiasts, offering a diverse range of high-quality
                        toy cars. As a leading provider in the industry,
                        ToyCarLand prides itself on delivering a captivating and
                        immersive experience for children and collectors alike.
                        Their extensive collection features an array of
                        meticulously crafted and durable toy cars, designed to
                        ignite imagination and inspire hours of imaginative
                        play. With a commitment to safety and exceptional
                        quality, ToyCarLand ensures that every toy car meets the
                        highest standards, providing endless joy and excitement
                        for car enthusiasts of all ages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
