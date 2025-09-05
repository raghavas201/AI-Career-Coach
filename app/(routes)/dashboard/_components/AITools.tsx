import React from 'react'
import AIToolsCard from './AIToolsCard'

const AIToolsList=[
    {
        name:'AI Career Q&A Chat',
        desc:'Chat with AI Agent',
        icons:'/chatbot.png',
        button:'Lets Chat',
        path:'/ai-chat'
    },
    {
        name:'AI Resume Analyzer',
        desc:'Improve your resume',
        icons:'/resume.png',
        button:'Analyze Now',
        path:'/ai-resume-analyzer'
    },
    {
        name:'Career Roadmap Generator',
        desc:'Build your Roadmap',
        icons:'/roadmap.png',
        button:'Generate Now',
        path:'/career-roadmap-generator'
    },
    {
        name:'Cover Letter Generator',
        desc:'Write a cover Letter',
        icons:'/cover.png',
        button:'Create Now',
        path:'/cover-letter-generator'
    },
]

function AITools() {
  return (
    <div className='mt-7 p-5 bg-white border rounded-xl'>
      <h2 className='font-bold text-lg'>Availabe AI Tools</h2>
      <p>Start Building and Shape Your Career with this exclusive AI Tools</p>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4'>
        {AIToolsList.map((tools:any ,index)=>(
            <AIToolsCard tools={tools} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default AITools
