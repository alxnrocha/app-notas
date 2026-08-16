import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from '../App'

describe('App', () => {
  it('renders the app brand', () => {
    render(<App />)

    expect(screen.getByText('Noteflow')).toBeInTheDocument()
  })

  it('renders demo note titles', () => {
    render(<App />)

    expect(screen.getAllByText('Ideas para portfolio').length).toBeGreaterThan(0)
  })
})