'use client'

import { useEffect, useState } from 'react'
import styles from './Cursor.module.css'

export type CursorVariant = 'default' | 'pointer' | 'glow' | 'ripple' | 'magnetic' | 'trail'
export type CursorSize = 'small' | 'medium' | 'large'
export type CursorColor = 'primary' | 'accent' | 'success' | 'danger'

interface CursorProps {
  variant?: CursorVariant
  size?: CursorSize
  color?: CursorColor
  disabled?: boolean
}

export default function Cursor({
  variant = 'default',
  size = 'medium',
  color = 'primary',
  disabled = false
}: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    if (disabled) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Add trail effect
      if (variant === 'trail') {
        setTrail(prev => {
          const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]
          return newTrail.slice(-10) // Keep last 10 positions
        })
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.getAttribute('role') === 'button' ||
        target.style.cursor === 'pointer' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (variant === 'ripple' && isHovering) {
        setRipples(prev => [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }])
        setTimeout(() => {
          setRipples(prev => prev.slice(1))
        }, 600)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('click', handleClick)
    }
  }, [variant, isHovering, disabled])

  if (disabled) return null

  const cursorClasses = [
    styles.cursor,
    styles[variant],
    styles[size],
    styles[color],
    isHovering ? styles.hovering : ''
  ].filter(Boolean).join(' ')

  return (
    <>
      {/* Main cursor */}
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        <div className={styles.cursorInner} />
      </div>

      {/* Cursor dot (for some variants) */}
      {(variant === 'default' || variant === 'glow' || variant === 'magnetic') && (
        <div
          className={`${styles.cursorDot} ${styles[color]}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        />
      )}

      {/* Trail effect */}
      {variant === 'trail' && trail.map((pos, index) => (
        <div
          key={pos.id}
          className={`${styles.trailDot} ${styles[color]}`}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: (index + 1) / trail.length * 0.6
          }}
        />
      ))}

      {/* Ripple effect */}
      {variant === 'ripple' && ripples.map(ripple => (
        <div
          key={ripple.id}
          className={`${styles.ripple} ${styles[color]}`}
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`
          }}
        />
      ))}
    </>
  )
}
