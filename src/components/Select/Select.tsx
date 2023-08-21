import { FC } from 'react'

interface SelectProps {
  title: string;
  labelTitle?: string;
  options?: string[];
  value? : string;
  onChange?:(e: React.ChangeEvent<HTMLSelectElement>) => void
}


const Select:FC<SelectProps> = ({ title, labelTitle, value, onChange, options = [] }) => (
  <>
  <label htmlFor="countries" className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
  <select id="countries" value={value} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>{labelTitle}</option>
    {
      options.map((option) => {
        return <option key={option} value={option}>{option}</option>
      })
    }

  </select>
  </>
  
)

export default Select;