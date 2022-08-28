import { render, screen, expect, fireEvent } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  // expect(screen.getAllByText(`Edit`).toBeInTheDocument())

  //GetBy повертає елемент або помилку
  //querybytext якщо елемента нема в розмітці
  //find для асинхронного пошуку, коли не було , а після феча є(async await)
  //Кожен поверає лише один елемент
  //queryAllBy... щоб отримати всі елементи

  //Assertive functions
  //toHaveClass
  //.not.toBeRequired
  //toBeEmpty
  //toHaveAttribute("id")
})

describe('events', () => {
  it('checkbox clicked', () => {
    const handleChange = jest.fn()
    render(<input onChange={handleChange} type="checkbox" />)
    // const checkbox = container.firstChild
    // expect(checkbox).not.toBeChecked()
    // fireEvent.click(checkbox)
    // expect(handleChange).toHaveBeenCalledTimes(1)
    // expect(checkbox).toBeChecked()
  })
})
