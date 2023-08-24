'use client'

import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { createPensionElements } from '@utils/utils'
import Chart from '@components/Chart/Chart'
import { Risk } from '@/src/Entities/Form'


const EducationalChart = () => {

  const searchParams = useSearchParams()

  const initialDeposit = Number(searchParams.get('initialDeposit'))
  const monthlyContribution = Number(searchParams.get('monthly'))
  const riskLevel = searchParams.get('riskLevel') as Risk
  const retiredAge = Number(searchParams.get('retiredAge'))
  const currentAge = Number(searchParams.get('currentAge'))

  const pensionSavings = useMemo(() => createPensionElements(initialDeposit,monthlyContribution,riskLevel,retiredAge,currentAge), [initialDeposit,monthlyContribution,riskLevel,retiredAge,currentAge]);

  return (
  <>
  <h3 className="text-4xl font-extrabold dark:text-white">Educational Interactive Chart for Pension Plan</h3>
  {!pensionSavings && <div>Loading</div>}
  {pensionSavings && <Chart data={pensionSavings} xKey="age" yKey='pensionSavings' xLabel="Time (in years)" yLabel="Total savings amount" />}
  </>)
}




export default EducationalChart;

