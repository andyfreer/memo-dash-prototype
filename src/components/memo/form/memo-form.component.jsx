import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import TextAreaWithCharCounter from '../../common/textarea-with-char-counter/textarea-with-char-counter.component'

import './memo-form.component.styles.css'

const MemoFormComponent = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleBlur,
    handleSubmit,
    handleChange,
    onCanceled,
    buttonLabel
  } = props
  return (
    <Form reply onSubmit={handleSubmit} onClick={e => e.stopPropagation()} className="memo-form">
      <TextAreaWithCharCounter
        autoFocus
        autoHeight
        name="message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={e => e.stopPropagation()}
        className={errors.message && touched.message ? ' error' : ''}
        disabled={isSubmitting}
        maxLength="144"
      />
      <Button
        type="submit"
        size="mini"
        content={buttonLabel}
        primary
        disabled={isSubmitting || !!errors.message || !values.message}
      />
      <Button type="reset" size="mini" content="Cancel" onClick={onCanceled} />
    </Form>
  )
}

export default MemoFormComponent
