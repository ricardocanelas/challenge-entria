import React from 'react'
import styled from 'styled-components'
import { responsive } from '@ricardocanelas/styled-responsive'

// ---------
// FormGroup

export const FormGroup = styled.div`
  display: block;
  margin-bottom: 16px;
  ${responsive('width')}
  ${responsive('padding', 'p')}

  ${props => props.error && `
    input,
    textarea {
      border-color: red !important;
    }
  `}

  label {
    color: rgb(131, 131, 131);
    display:block;
    margin-bottom: 10px;
    font-size: 13px;
  }
  input,
  textarea {
    display: block;
    padding: 6px;
    border: 1px solid #F5F5F5;
    border-radius: 3px;
    width: 100%;
  }
  label.error:after{
    content: " *"
  }
  input.error,
  textarea.error {
    border-color: red;
  }
  div.error {
    display: block;
    font-size: 11px;
    color: red;
    padding-top: 3px;
  }
`

// ---------
// FormInput

export const FormInput = ({ field, form, ...props }) => {
  const { touched, errors } = form;
  const hasError = touched[field.name] && errors[field.name]
  return (
    <>
      <label htmlFor={field.name} className={hasError && 'error'}>
        {props.label || field.name.charAt(0).toUpperCase() + field.name.slice(1)}
      </label>
      <input type="text" id={field.name} className={hasError && 'error'} {...field} {...props}  />
      {hasError && <div className="error">{errors[field.name]}</div>}
    </>
  )
}

// ------------
// FormTextarea

export const FormTextarea = ({ field, form, ...props }) => {
  const { touched, errors } = form;
  const hasError = touched[field.name] && errors[field.name]
  return (
    <>
      <label htmlFor={field.name} className={hasError && 'error'}>
        {props.label || field.name.charAt(0).toUpperCase() + field.name.slice(1)}
      </label>
      <textarea id={field.name} className={hasError && 'error'} rows={7} {...field} {...props}></textarea>
      {hasError && <div className="error">{errors[field.name]}</div>}
    </>
  )
}
