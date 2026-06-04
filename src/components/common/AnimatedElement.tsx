import React from 'react'
import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

type AnimationType =
  | 'fade-in'
  | 'slide-up'
  | 'slide-down'
  | 'slide-in-left'
  | 'slide-in-right'

interface AnimatedElementProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}

const getAnimationClass = (animation: AnimationType, isInView: boolean) => {
  if (!isInView) return 'opacity-0'
  
  switch (animation) {
    case 'fade-in':
      return 'animate-fade-in'
    case 'slide-up':
      return 'animate-slide-up'
    case 'slide-down':
      return 'animate-slide-down'
    case 'slide-in-left':
      return 'animate-slide-in-left'
    case 'slide-in-right':
      return 'animate-slide-in-right'
    default:
      return 'animate-slide-up'
  }
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'slide-up',
  delay = 0,
  className = '',
}) => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`${getAnimationClass(animation, isInView)} ${className}`}
      style={{
        animationDelay: isInView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedElement
