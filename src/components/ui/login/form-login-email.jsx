"use client";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/actions";
import Email from "@/icons/email";
import Key from "@/icons/key";
import LoginIcon from "@/icons/login";
import ExclamationIcon from "@/icons/exclamation";

export default function FormLoginEmail() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(authenticate, initialState);

  return (
    <>
      <form action={dispatch} className="space-y-3 flex justify-center">
        <div className=" rounded-lg bg-gray-50 px-6 ">
          {/* <div className="w-full"> */}
          <div>
            <div>
              <label
                className="mb-3 mt-5 block font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer w-full block rounded-md border border-gray-200 py-[9px] pl-10  outline-2 placeholder:text-gray-500"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  aria-describedby="email-error"
                  required
                />
                <Email className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              <div
                id="email-error"
                aria-live="polite"
                aria-atomic="true"
                className="flex  items-end space-x-1"
              >
                {state?.errors?.email &&
                  state.errors.email.map((error) => (
                    <>
                      <ExclamationIcon className="h-5 w-5 text-red-500" />
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    </>
                  ))}
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block  font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full  rounded-md border border-gray-200 py-[9px] pl-10  outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  aria-describedby="password-error"
                  required
                />
                <Key className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              <div
                id="email-error"
                aria-live="polite"
                aria-atomic="true"
                className="flex  items-end space-x-1"
              >
                {state?.errors?.password &&
                  state.errors.password.map((error) => (
                    <>
                      <ExclamationIcon className="h-5 w-5 text-red-500" />
                      <p className="mt-2 text-sm text-red-500" key={error}>
                        {error}
                      </p>
                    </>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <LoginButton />
          </div>
          <div
            className="flex  items-end space-x-1 mt-4 mb-2"
            aria-live="polite"
            aria-atomic="true"
          >
            {state?.message && (
              <>
                <ExclamationIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{state.message}</p>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="shadow rounded mt-4 flex hover:bg-green-100 items-center"
      aria-disabled={pending}
    >
      <LoginIcon className=" pointer-events-none   h-[18px] w-[18px]  text-gray-900 peer-focus:text-gray-900" />
      <p className="p-2">Iniciar sesion</p>
      {/* Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /> */}
    </button>
  );
}
