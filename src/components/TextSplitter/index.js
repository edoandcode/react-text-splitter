
import { useState, useRef, useEffect, useCallback, forwardRef } from 'react'
import S from './style'
import useMeasure from 'react-use-measure'
import {mergeRefs} from 'react-merge-refs'
import Line from './Line'
import Word from './Word'
import Char from './Char'

const TextSplitter = forwardRef((props, ref) => {
  const { children, className, style: s,  onUpdate } = props
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
      throw new Error('TextSplitter expect a text as children')
    }
  }, [children])

  const createLines = useCallback(() => {
    const el = $guideText.current
    if (!el) return
    let prevY
    const newLines = []
    const words = Array.from(el.children)
    console.log('words', words)
    const isSingleWord = words.length === 1
    //let isLastWord = false
    for (let i = 0; i < words.length; i++) {
      //isLastWord = i === words.length - 1
      const w = words[i]
      const y = w.getBoundingClientRect().top
      if (prevY !== y && w.textContent.trim().length) {
        if(isSingleWord) newLines.push([w.textContent.trim().split('')])
        else newLines.push([])
        prevY = y
      }
      if (prevY === y) {
        //if (!isLastWord) newLines[newLines.length - 1].push(w.textContent.trim().split(''), [' '])
        newLines[newLines.length - 1].push(w.textContent.trim().split(''), [' '])
      }
      prevY = y
    }
    setLines(newLines)
  }, [$guideText])

  const [$measureRef, bounds] = useMeasure()

  useEffect(() => {
    createLines()
  }, [text, bounds, createLines])

  useEffect(() => {
    if (typeof onUpdate === 'function') onUpdate(lines)
  }, [lines, onUpdate])

  return (
    <S.TextSplitterRoot
      className={`text-splitter ${className}`}
      style={s}
    >
      <S.GuideText
        ref={mergeRefs([$guideText, $measureRef])}
      >
        {text}
      </S.GuideText>
      <S.SplittedText
        className={`splitted-text`}
        ref={ref}
      >
        {
            lines.map((line, i) => {
              return (
                <Line key={line.join() + i}>
                  {
                      line.map((word, j) => {
                        const wrd = word.join('')
                        return wrd === ' '
                          ? <Char key={i.toString() + j.toString()}>{wrd}</Char>
                          : (
                            <Word key={i.toString() + j.toString()}>
                              {
                                      word.map((char, k) => {
                                        return (
                                          <Char
                                            key={char + k.toString()}
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
    </S.TextSplitterRoot>
  )
})

export default TextSplitter
