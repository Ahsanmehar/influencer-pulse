import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion as Motion } from "framer-motion"; 

const Signup = () => {
  return (
    <>
      <section className="bg-bg py-20">
        <div className="container w-full px-4 ">
          <Motion.div
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-one p-7"
          >
            <div className="flex flex-col gap-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_98_7461)">
                    <path
                      d="M19.999 10.2218C20.0111 9.53429 19.9387 8.84791 19.7834 8.17737H10.2031V11.8884H15.8267C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.999 13.2661 19.999 10.2218Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M10.2036 20C12.9586 20 15.2715 19.1111 16.9609 17.5777L13.7409 15.1332C12.8793 15.7223 11.7229 16.1333 10.2036 16.1333C8.91317 16.126 7.65795 15.7206 6.61596 14.9746C5.57397 14.2287 4.79811 13.1802 4.39848 11.9777L1.12906 14.3766C1.93622 16.1457 3.23812 17.5386 4.84801 18.512C6.45791 19.4852 8.31194 20.0005 10.2036 20Z"
                      fill="#34A853"
                    />
                    <path
                      d="M4.39899 11.9776C4.1758 11.3411 4.06063 10.673 4.05807 9.9999C4.06218 9.3279 4.1731 8.66067 4.38684 8.02221L1.1927 5.46234C0.372762 6.90337 0 8.44075 0 9.99983C0 11.5589 0.372762 13.0962 1.0884 14.4887L4.39899 11.9776Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M10.2039 3.86663C11.6661 3.84438 13.0802 4.37803 14.1495 5.35558L17.0294 2.59997C15.1823 0.90185 12.7364 -0.0298855 10.2039 -3.67839e-05C8.31239 -0.000477835 6.45795 0.514733 4.84805 1.48799C3.23816 2.46123 1.93624 3.85417 1.08789 5.51101L4.38751 8.02225C4.79107 6.82005 5.5695 5.77231 6.61303 5.02675C7.65655 4.28119 8.91254 3.87541 10.2039 3.86663Z"
                      fill="#EB4335"
                    />
                  </g>
                </svg>
                Sign Up with Google
              </Button>
            </div>

            <span className="relative z-1 block text-center mt-4">
              <span className="absolute left-0 top-1/2 w-full h-px bg-gray z-[-1]"></span>
              <span className="inline-block px-5 bg-white text-secondary font-medium">
                Or
              </span>
            </span>

            <div className="mt-5">
              <form>
                <div className="mb-5">
                  <label htmlFor="name" className="text-text block mb-2.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="text-text block mb-2.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password" className="text-text block mb-2.5">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    autoComplete="on"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="re-type-password"
                    className="text-text block mb-2.5"
                  >
                    Re-type Password <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="password"
                    id="re-type-password"
                    placeholder="Re-type your password"
                    autoComplete="on"
                  />
                </div>
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full mt-7"
                >
                  Create Account
                </Button>
                <p className="text-text text-center mt-6">
                  Already have an account?
                  <NavLink
                    to="/login"
                    className="text-secondary ease-out duration-200 hover:text-primary pl-2"
                  >
                    Sign in Now
                  </NavLink>
                </p>
              </form>
            </div>
          </Motion.div>
        </div>
      </section>
    </>
  );
};

export default Signup;
