import { FC } from 'react'
import { SelectProps } from "@entities/Form"


const Select:FC<SelectProps> = ({ title, name, error, labelTitle, value, onChange, options = [] }) => (
  <div className="mb-6">
  <label htmlFor={name} className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
  <select id={name} name={name} value={value} onChange={onChange} className={error?"bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}>
    <option defaultValue="">{labelTitle}</option>
    {
      options.map((option) => {
        return <option key={option} value={option}>{option}</option>
      })
    }
  </select>
  {error? <p className="mt-2 text-sm text-red-600 dark:text-red-500">{error}</p> : null}
  </div>
  
)

export default Select;