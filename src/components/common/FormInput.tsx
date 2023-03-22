import React from 'react';
import { useField } from 'formik';
import FormError from './FormError';
import Input from './Input';
import FormSelect from './FormSelect';

type InputProps = {
  name: string;
  type?: string;
  placeholder?: string;
  ariaLabel?: string;
  isSelect?: any;
  children?: React.ReactNode | React.ReactElement;
};

const FormInput = ({ isSelect, ariaLabel, ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      {isSelect ? (
        <div className="mb-4">
          <select
            {...field}
            {...props}
            className={`rounded-none relative block w-full px-3 py-2 sm:pr-4 sm:py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 ${
              meta.touched && meta.error ? `border-red-500` : ``
            }`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {props.children}
          </select>
          {meta.touched && meta.error ? (
            <FormError text={meta.error}></FormError>
          ) : null}
        </div>
      ) : (
        <>
          <input
            {...field}
            {...props}
            aria-label={ariaLabel}
            className="appearance-none rounded-lg relative block w-full sm:px-5 px-5 py-3 sm:py-4 border border-gray-300 placeholder-gray-500 sm:mt-1 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 placeholder:text-md sm:text-md sm:leading-5"
          />
          {meta.touched && meta.error ? (
            <FormError text={meta.error}></FormError>
          ) : null}
        </>
      )}
    </>
  );
};

export default FormInput;
