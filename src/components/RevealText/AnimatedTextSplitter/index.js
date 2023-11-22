
import { useState, useRef, useEffect, useCallback, forwardRef, useMemo } from 'react'
import S from './style'
import useMeasure from 'react-use-measure'
import {mergeRefs} from 'react-merge-refs'
import Line from './Line'
import Word from './Word'
import Char from './Char'
import { useIsomorphicLayoutEffect } from '@react-spring/web'

const AnimatedTextSplitter = forwardRef((props, ref) => {
  const { children, className, style: s,  onUpdate, animatedTrail, animateLines, animateWords, maskLines } = props
  const [text, setText] = useState('')
  const [lines, setLines] = useState([])
  const $guideText = useRef(null)

  useEffect(() => {
    if (typeof children === 'string' || typeof children === 'number') {
      const splitted = children.split(' ')
      const t = splitted.map((word, i) => {
        return (
          <span key={i.toString()} className="word">
            {word}
            {' '}
          </span>
        )
      })
      setText(t)
    } else {
      throw new Error('AnimatedTextSplitter expect a text as children')
    }
  }, [children])

  const createLines = useCallback(() => {
    const el = $guideText.current
    if (!el) return
    let prevY
    const newLines = []
    const words = Array.from(el.children)
    let isLastWord = false
    for (let i = 0; i < words.length; i++) {
      isLastWord = i === words.length - 1
      const w = words[i]
      const y = w.getBoundingClientRect().top
      if (prevY !== y && w.textContent.trim().length) {
        newLines.push(words.length === 1 ? [w.textContent.trim().split('')] : [])
        prevY = y
      }
      if (prevY === y) {
        if (!isLastWord) newLines[newLines.length - 1].push(w.textContent.trim().split(''), [' '])
      }
      prevY = y
    }
    setLines(newLines)
  }, [$guideText])

  const [$measureRef, bounds] = useMeasure()

  useIsomorphicLayoutEffect(() => {
    createLines()
  }, [text, bounds, createLines])

  useEffect(() => {
    console.log('lines', lines)
    if (typeof onUpdate === 'function') onUpdate(lines)
  }, [lines, onUpdate])

  const animationIndex = useMemo(() => ({
    value: 0,
  }), [animatedTrail])

  console.log('animatedTrail', animatedTrail)

  return (
    <S.AnimatedTextSplitterRoot
      className={`text-splitter ${className}`}
      style={s}
    >
      <S.GuideText
        ref={mergeRefs([$guideText, $measureRef])}
      >
        {text}
      </S.GuideText>
      {lines.length ? (
        <S.SplittedText
        className={`splitted-text`}
        ref={ref}
      >
        {
            lines.map((line, i) => {
              let lstyle = {}
              if(animateLines) {
                let index
                if (animationIndex.value < animatedTrail.length) index = animationIndex.value++
                lstyle = animatedTrail[index]
              }
              return (
                <Line key={line.join() + i} style={lstyle} maskLines={maskLines}>
                  {
                      line.map((word, j) => {
                        console.log('word', word)
                        const wrd = word.join('')
                        let wstyle = {}
                        if (animateWords && wrd !== ' ') {
                          let index
                          if (animationIndex.value < animatedTrail.length) index = animationIndex.value++
                          wstyle = animatedTrail[index]
                      }
                        return wrd === ' '
                          ? <Char key={i.toString() + j.toString()}>{wrd}</Char>
                          : (
                            <Word key={i.toString() + j.toString()} style={wstyle}>
                              {
                                    word.map((char, k) => {
                                      let cstyle = {}
                                      if (!animateLines && !animateWords) {
                                          let index
                                          if (animationIndex.value < animatedTrail.length) index = animationIndex.value++
                                          cstyle = animatedTrail[index]
                                      }

                                      return (
                                        <Char
                                          key={char + k.toString()}
                                          style={cstyle}
                                        >
                                          {char}
                                        </Char>
                                      )
                                    })
                                }
                            </Word>
                          )
                      })
                  }
                </Line>
              )
            })
        }
      </S.SplittedText>
      ) : null}
    
    </S.AnimatedTextSplitterRoot>
  )
})

export default AnimatedTextSplitter
