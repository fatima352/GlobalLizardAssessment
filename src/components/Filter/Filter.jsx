import React, {useEffect, useState} from 'react'
import "./Filter.css"

const Filter = ({ onSearch }) => {
  return (
    <div>
      <select className="select-categories" onChange={(e) => {onSearch(e.target.value)}} defaultValue="">
        <option value="">All categories</option>
        <option value="Data Management">Data Management</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Ecommerce">Ecommerce</option>
        <option value="Email Marketing">Email Marketing</option>
        <option value="Landing Pages">Landing Pages</option>
        <option value="Marketing Analytics">Marketing Analytics</option>
        <option value="Marketing Automation">Marketing Automation</option>
        <option value="Platform News and Updates">Platform News and Updates</option>
        <option value="Surveys and Forms">Surveys and Forms</option>
        <option value="Tips and Best Practise">Tips and Best Practise</option>
      </select>
    </div>
  )
}
export default Filter
