import {
  blue,
  cyan,
  geekblue,
  gold,
  green,
  grey,
  lime,
  magenta,
  orange,
  purple,
  red,
  volcano,
  yellow,
} from '@ant-design/colors'
import cocoMessage from 'coco-message'
import copy from 'copy-to-clipboard'
import './App.scss'

const colors = [
  ...blue,
  ...cyan,
  ...geekblue,
  ...gold,
  ...green,
  ...grey,
  ...lime,
  ...magenta,
  ...orange,
  ...purple,
  ...red,
  ...volcano,
  ...yellow,
]

function App() {
  return (
    <div className="App">
      <ul>
        {colors.map((color, i) => {
          const fontColor = i % 10 >= 5 ? 'white' : 'black'
          return (
            <li
              key={i}
              style={{ background: color, color: fontColor }}
              onClick={() => {
                cocoMessage.success(color)
                copy(color)
              }}
            >
              {color}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
