import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetail = () => {
  const {projectId} = useParams()
  return (
    <h3>Project: {}projectId</h3>
  )
}

export default ProjectDetail