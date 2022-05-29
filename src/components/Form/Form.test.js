import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Form from './Form'

describe('Form', () => {
  test('Pre-fills uuid', async () => {
    render(<Form />, { wrapper: MemoryRouter })
    const idLabel = screen.getByLabelText('ID')
    expect(idLabel.value).toHaveLength(36) // uuid length
  })

  test('Pre-fills startDate', async () => {
    render(<Form />, { wrapper: MemoryRouter })
    const startDateInput = screen.getByLabelText('Start Date')
	const today = new Date()
    expect(startDateInput.value).toBe(today.toLocaleDateString())
  })

  test('Pre-fills endDate', async () => {
    render(<Form />, { wrapper: MemoryRouter })
    const endDateInput = screen.getByLabelText('End Date')
    const today = new Date()
    expect(endDateInput.value).toBe(new Date(today.setMonth(today.getMonth() + 3)).toLocaleDateString())
  })
})
