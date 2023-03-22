import React from 'react';
import { useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import FormSuccess from '@/components/common/FormSuccess';
import FormError from '@/components/common/FormError';
import FormInput from '@/components/common/FormInput';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import GoogleButton from './common/GoogleButton';
import GithubButton from './common/GithubButton';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required(`Email is required`),
  password: Yup.string().required(`Password is required`),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitCredentials = async (credentials: any) => {
    console.log(credentials);
  };
  return (
    <div className="w-full">
      <Formik
        initialValues={{
          email: ``,
          password: ``,
        }}
        onSubmit={(values) => submitCredentials(values)}
        validationSchema={LoginSchema}
      >
        {() => (
          <Form>
            {/* {loginSuccess && <FormSuccess text={loginSuccess} />}
            {loginError && <FormError text={loginError} />} */}
            <div>
              <FormInput
                ariaLabel="Email"
                name="email"
                type="text"
                placeholder="Email address"
              />
            </div>
            <div className="mt-4 relative flex items-center">
              <div className="w-full">
                <FormInput
                  ariaLabel="Password"
                  name="password"
                  type={showPassword ? `text` : `password`}
                  placeholder="Password"
                />
              </div>
              <div
                className="absolute right-4 top-5 z-9 cursor-pointer"
                onClick={handleShowPassword}
              >
                {!showPassword ? (
                  <FaRegEyeSlash className="w-5 h-5 text-gray-500" />
                ) : (
                  <FaRegEye className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </div>
            <Link href="/">
              <p className="text-right sm:my-4 my-2  text-sm text-sky-700">
                Forgot Password?
              </p>
            </Link>
            <Button
              loading={false}
              loadingText="Loading..."
              className="w-full sm:my-4 my-1 py-3 rounded-md text-gray-100 font-semibold bg-sky-700"
            >
              Sign in
            </Button>
            <GoogleButton />
            <GithubButton />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
