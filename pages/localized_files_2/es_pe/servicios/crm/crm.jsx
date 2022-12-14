import React from 'react'
import Hero from '../../../../../components/Crm/Hero/Hero'
import Vision from '../../../../../components/Crm/Vision/Vision'
import Questions from '../../../../../components/Questions/Questions'
import SolutionsChapter from '../../../../../components/SolutionsChapter/SolutionsChapter'
import SuccessCase from '../../../../../components/SuccessCase/SuccessCase'
import Contact from '../../../../../components/Contact/Contact'
import { crmSolutions } from '../../../../../utilities/global/solutionsChpater'
import { questionsCrm } from '../../../../../utilities/crm/questions'
import Team from '../../../../../components/Team/Team'
import { team } from '../../../../../utilities/crm/team'
const crm = () => {
  return (
    <>
      <Hero />
      <Vision />
      <SolutionsChapter solutions={crmSolutions} />
      <Team team={team}/>
      <SuccessCase />
      <Questions questions={questionsCrm} />
      <Contact param={'crm'} />
    </>
  )
}

export default crm
