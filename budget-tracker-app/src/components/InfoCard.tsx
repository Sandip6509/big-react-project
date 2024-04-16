import React from 'react'

const isIncome: number = Math.round(Math.random());
const InfoCard:React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '0 10%' }} className="shadow-md bg-white rounded-lg p-4">
      Try saying: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '$100 ' : '$50 '}  
      in Category {isIncome ? 'Salary ' : 'Travel '}
      for {isIncome ? 'Monday ' : 'Thursday '}
    </div>
  )
}

export default InfoCard