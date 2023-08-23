'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { createPensionElements } from '@utils/utils'
import Chart from '@components/Chart/Chart'


const EducationalChart = () => {

  const searchParams = useSearchParams()


  const initialDeposit = searchParams.get('initialDeposit')
  const monthlyContribution = searchParams.get('monthly')
  const riskLevel = searchParams.get('riskLevel')
  const retiredAge = searchParams.get('retiredAge')
  const currentAge = searchParams.get('currentAge')



  const pensionSavings = useMemo(() => createPensionElements(initialDeposit,monthlyContribution,riskLevel,retiredAge,currentAge), [initialDeposit,monthlyContribution,riskLevel,retiredAge,currentAge]);


  

  return (
  <>
  <h3 className="text-4xl font-extrabold dark:text-white">Educational Chart</h3>
  {!pensionSavings && <div>Loading</div>}
  {pensionSavings && <Chart data={pensionSavings} xKey="age" yKey='pensionSavings' xLabel="Time (in years)" yLabel="Total savings amount" />}
  </>)
}




export default EducationalChart;

