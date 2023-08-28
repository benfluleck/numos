import { FC } from 'react';

import { InputProps } from '@entities/Form';

const Input: FC<InputProps> = ({
  type,
  name,
  error,
  title,
  value,
  onChange,
  placeholder = ' ',
  required,
  ...rest
}) => (
  <div data-testid="input-component" className="relative z-0 w-full group">
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={
        error
          ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'
          : 'block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
      }
      placeholder={placeholder}
      required={required}
      {...rest}
    />
    <label
      htmlFor={name}
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {!error && title}
    </label>
    {error ? <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p> : null}
  </div>
);

export default Input;
