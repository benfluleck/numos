'use client'

import { useState, FormEvent } from 'react'
import { useFormik } from 'formik'
import { useRouter } from "next/navigation";
import Input from '@components/Input/Input'
import Select from '@components/Select/Select'

const options = ["conservative", "moderate", "aggressive"]



type Risk = "conservative" | "moderate" | "aggressive" | "";

interface UseFormState {
  initialDeposit: string;
  monthlyContribution: string;
  retiredAge: string;
  currentAge: string;
  riskLevel: Risk;
}

interface ErrorState {
  retiredAge: string;
  currentAge: string;
  riskLevel: string;
}


const formData = {
  initialDeposit: "",
  monthlyContribution: "",
  retiredAge: "",
  currentAge: "",
  riskLevel: "" as Risk,
}



export default function Home() {


  const validate = (values: UseFormState) => {
    const errors = {} as ErrorState;
  

    if(values.retiredAge < values.currentAge ) {
      errors.retiredAge = "The retired age cannot be less than the current age"
      errors.currentAge = "The current age cannot be greater than the retired age"
    }

   if(!values.riskLevel) {
     errors.riskLevel = "Please select a risk level";
   }

    return errors;

  }

  const router = useRouter();

  const { handleSubmit, handleChange, values, errors} = useFormik({
    initialValues : {
      ...formData,
    },
    validate,
    onSubmit(values) {
      console.log(values)
      const { initialDeposit, monthlyContribution, retiredAge, currentAge, riskLevel } = values;
      router.push(`/interactive?initialDeposit=${initialDeposit}&monthly=${monthlyContribution}&retiredAge=${retiredAge}&currentAge=${currentAge}&riskLevel=${riskLevel}`);
    }
  })


  return (
    <>
      <h3 className="text-4xl font-extrabold dark:text-white">Pension Plan Configurator</h3> 
      <form onSubmit={handleSubmit} className='space-y-12'>
        <Input type="number"  value={values.initialDeposit} onChange={handleChange}  name="initialDeposit" title="Initial Deposit" required  min="0" step="100"/>
        <Input type="number" value={values.monthlyContribution} onChange={handleChange}  name="monthlyContribution" title="Monthly Contribution" required  min="0" />
        <Input type="number" error={errors.retiredAge} value={values.retiredAge} onChange={handleChange} name="retiredAge" title="Desired retirement age" required  min="0" max="100" />
        <Input type="number" error={errors.currentAge} value={values.currentAge} onChange={handleChange} name="currentAge" title="Current age" required min="0" max="100" />
        <Select title='Risk level' name="riskLevel" error={errors.riskLevel} labelTitle="Choose a risk level" onChange={handleChange} value={values.riskLevel} options={options}/>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </>
  )
}
