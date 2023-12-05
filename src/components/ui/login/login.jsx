import GoogleIcon from "@/icons/google";
import FacebookIcon from "@/icons/facebook";
import FormLoginEmail from "@/components/ui/login/form-login-email";

export default function Login({}) {
  return (
    <>
      <div className="flex justify-center  ">
        <div className=" rounded p-6 mt-10 bg-blue-500 shadow-xl">
          <p className="place-self-center p-2 mb-6">
            Ingrese y disfrute de E-commerce
          </p>
          <div></div>
          <div className="place-self-center p-2 flex  flex-col space-y-6">
            <FormLoginEmail />
            <button className="bg-blue-600 p-2 rounded flex flex-row items-center justify-center gap-2 text-white  w-80">
              <GoogleIcon />
              Iniciar sesion con google
            </button>
            <button className="bg-blue-600 p-2 rounded flex flex-row items-center justify-center gap-2 text-white  w-80">
              <FacebookIcon />
              Iniciar sesion con facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
