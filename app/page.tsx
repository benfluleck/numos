'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from "next/navigation";
import Input from '@components/Input/Input'
import Select from '@components/Select/Select'

const options = ["conservative", "moderate", "aggressive"]


type Risk = "conservative" | 'moderate' | 'aggressive' | '';

interface UseFormState {
  initialDeposit: string;
  monthlyContribution: string;
  desiredAge: string;
  currentAge: string;
  riskLevel: Risk;
}



export default function Home() {

  const [formData, setFormData] = useState<UseFormState>({
    initialDeposit: "",
    monthlyContribution: "",
    desiredAge: "",
    currentAge: "",
    riskLevel: "",
  })

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    const { initialDeposit, monthlyContribution, desiredAge, currentAge, riskLevel } = formData;

    e.preventDefault()
    router.push(`/interactive?initialDeposit=${initialDeposit}&monthly=${monthlyContribution}&retiredAge=${desiredAge}&currentAge=${currentAge}&riskLevel=${riskLevel}`);
  }


  return (
    <>
      <h3 className="text-4xl font-extrabold dark:text-white">Pension Plan Configurator</h3> 
      <form onSubmit={handleSubmit} className='space-y-12'>
        <Input type="number"  value={formData.initialDeposit} onChange={(e) => setFormData({...formData, initialDeposit: e.target.value })}  name="floating_initial_deposit" title="Initial Deposit" required  min="0" step="100"/>
        <Input type="number" value={formData.monthlyContribution} onChange={(e) => setFormData({...formData, monthlyContribution: e.target.value })}  name="floating_monthly_contribution" title="Monthly Contribution" required  min="0" />
        <Input type="number" value={formData.desiredAge} onChange={(e) => setFormData({...formData, desiredAge: e.target.value })} name="floating_desired_age" title="Desired retirement age" required  min="0" max="100" />
        <Input type="number" value={formData.currentAge} onChange={(e) => setFormData({...formData, currentAge: e.target.value })} name="floating_current_age" title="Current age" required min="0" />
        <div className="mb-6">
          <Select title='Risk level' labelTitle="Choose a risk level" onChange={(e) => setFormData({...formData, riskLevel: e.target.value as Risk })} value={formData.riskLevel} options={options}/>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </>
  )
}
