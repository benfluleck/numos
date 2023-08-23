function calculatePension(initialDeposit, monthlyContribution, riskLevel, time) {

  const riskLevels = {
    conservative: 0.02,
    moderate: 0.04,
    aggressive: 0.06,
  };

  const annualInterestRate = riskLevels[riskLevel.toLowerCase()];

  return (initialDeposit + monthlyContribution) * Math.pow(1+ annualInterestRate/12, 12 * time)
}


export const createPensionElements = (initialDeposit, monthlyContribution, riskLevel, retirementAge, age) => {
  let pensionAmounts = []

  const timeSpentSaving = retirementAge - age;

  for(let i=0; i<= timeSpentSaving; i++ ){
    pensionAmounts.push({ pensionSavings: Math.round(calculatePension(initialDeposit, monthlyContribution, riskLevel, i )), age: Number(age) + i })
  }

  return pensionAmounts; 
}