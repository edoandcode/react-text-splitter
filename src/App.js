
import './App.css';
import RevealText from './components/RevealText';
import TextSplitter from './components/TextSplitter';
import {useState} from 'react'

function App() {
  const [active, setActive] = useState(false)

  setTimeout(()=>{
    setActive(true)
  }, 2000)
  return (
    <div className="App">
      <h1>
        <TextSplitter>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </TextSplitter>
      </h1>
      <h1>
        <RevealText 
          inview={active}
          //animateLines
          maskLines
          config={{
            friction: 56,
            tension: 2000,
            mass: 0.5,
          }}
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </RevealText>
      </h1>

      <h2>
        <RevealText 
          inview={active}
          animateLines={true}
          maskLines
          config={{
            friction: 40,
            tension: 300,
            mass: 1,
          }}
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </RevealText>
      </h2>

      <h2>
        <RevealText 
          inview={active}
          animateWords={true}
          maskLines
          config={{
            friction: 40,
            tension: 300,
            mass: 1,
          }}
        >
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
        </RevealText>
      </h2>

      <h1>
        <RevealText 
          inview={active}
          animateLines
          maskLines
          config={{
            friction: 40,
            tension: 300,
            mass: 1,
          }}
        >
          Ciao
        </RevealText>
      </h1>
    </div>
  );
}

export default App;
