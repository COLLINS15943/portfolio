/**
 * useForm.js
 *
 * Generic controlled form hook.
 * Handles field values, change events, validation, and reset.
 *
 * @param {object} initialValues  - Initial field values.
 * @param {function} [validate]   - Optional validator: (values) => errorObject.
 * @returns {{ values, errors, isSubmitting, handleChange, handleSubmit, reset }}
 *
 * @example
 *   const { values, errors, handleChange, handleSubmit } = useForm(
 *     { name: '', email: '', message: '' },
 *     (v) => (!v.email.includes('@') ? { email: 'Invalid email' } : {})
 *   )
 */

import { useState, useCallback } from 'react'

const useForm = (initialValues = {}, validate = null) => {
  const [values,       setValues]       = useState(initialValues)
  const [errors,       setErrors]       = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  /** Update a single field by name */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))

    // Clear the error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }, [errors])

  /** Run validation and call onSubmit if no errors */
  const handleSubmit = useCallback((onSubmit) => async (e) => {
    e.preventDefault()

    if (validate) {
      const validationErrors = validate(values)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        return
      }
    }

    setIsSubmitting(true)
    try {
      await onSubmit(values)
    } finally {
      setIsSubmitting(false)
    }
  }, [values, validate])

  /** Reset the form to its initial state */
  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
  }, [initialValues])

  return { values, errors, isSubmitting, handleChange, handleSubmit, reset }
}

export default useForm
