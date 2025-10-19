import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Cursor from './Cursor'

describe('Cursor Component', () => {
  beforeEach(() => {
    // Clear any event listeners between tests
    document.removeEventListener('mousemove', jest.fn())
    document.removeEventListener('mouseover', jest.fn())
    document.removeEventListener('click', jest.fn())
  })

  it('should render without crashing', () => {
    const { container } = render(<Cursor />)
    expect(container).toBeInTheDocument()
  })

  it('should not render when disabled', () => {
    const { container } = render(<Cursor disabled={true} />)
    const cursors = container.querySelectorAll('[class*="cursor"]')
    expect(cursors.length).toBe(0)
  })

  it('should render with default variant', () => {
    const { container } = render(<Cursor variant="default" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('default')
  })

  it('should render with pointer variant', () => {
    const { container } = render(<Cursor variant="pointer" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('pointer')
  })

  it('should render with glow variant', () => {
    const { container } = render(<Cursor variant="glow" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('glow')
  })

  it('should render with ripple variant', () => {
    const { container } = render(<Cursor variant="ripple" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('ripple')
  })

  it('should render with magnetic variant', () => {
    const { container } = render(<Cursor variant="magnetic" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('magnetic')
  })

  it('should render with trail variant', () => {
    const { container } = render(<Cursor variant="trail" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('trail')
  })

  it('should apply small size class', () => {
    const { container } = render(<Cursor size="small" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('small')
  })

  it('should apply medium size class', () => {
    const { container } = render(<Cursor size="medium" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('medium')
  })

  it('should apply large size class', () => {
    const { container } = render(<Cursor size="large" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('large')
  })

  it('should apply primary color class', () => {
    const { container } = render(<Cursor color="primary" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('primary')
  })

  it('should apply accent color class', () => {
    const { container } = render(<Cursor color="accent" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('accent')
  })

  it('should apply success color class', () => {
    const { container } = render(<Cursor color="success" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('success')
  })

  it('should apply danger color class', () => {
    const { container } = render(<Cursor color="danger" />)
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('danger')
  })

  it('should update cursor position on mouse move', () => {
    const { container } = render(<Cursor />)
    const cursor = container.querySelector('[class*="cursor"]') as HTMLElement

    fireEvent.mouseMove(document, { clientX: 100, clientY: 200 })

    // Wait for state update
    setTimeout(() => {
      expect(cursor?.style.left).toBe('100px')
      expect(cursor?.style.top).toBe('200px')
    }, 0)
  })

  it('should render cursor dot for default variant', () => {
    const { container } = render(<Cursor variant="default" />)
    const cursorDot = container.querySelector('[class*="cursorDot"]')
    expect(cursorDot).toBeInTheDocument()
  })

  it('should render cursor dot for glow variant', () => {
    const { container } = render(<Cursor variant="glow" />)
    const cursorDot = container.querySelector('[class*="cursorDot"]')
    expect(cursorDot).toBeInTheDocument()
  })

  it('should render cursor dot for magnetic variant', () => {
    const { container } = render(<Cursor variant="magnetic" />)
    const cursorDot = container.querySelector('[class*="cursorDot"]')
    expect(cursorDot).toBeInTheDocument()
  })

  it('should not render cursor dot for pointer variant', () => {
    const { container } = render(<Cursor variant="pointer" />)
    const cursorDot = container.querySelector('[class*="cursorDot"]')
    expect(cursorDot).not.toBeInTheDocument()
  })

  it('should combine multiple classes correctly', () => {
    const { container } = render(
      <Cursor variant="glow" size="large" color="accent" />
    )
    const cursor = container.querySelector('[class*="cursor"]')
    expect(cursor).toHaveClass('glow')
    expect(cursor).toHaveClass('large')
    expect(cursor).toHaveClass('accent')
  })
})
