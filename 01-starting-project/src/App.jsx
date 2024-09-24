import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';


function App() {

  const [selectedTopic, setselectedTopic] = useState('')

  function handleSelect(selectedButton){
    // console.log("Buuton clicked");
    setselectedTopic(selectedButton)
    // console.log(selectedTopic);  
}

let tabContent = <p>Please select a topic</p>

if (selectedTopic) {
  tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
      </pre>
      </div>
  )
  
}
  return (
    <div>
      <Header/>
      <main>
      <section id='core-concepts'>
        <h2>Core Concept</h2>
        <ul>
          { CORE_CONCEPTS.map((items) => (
            <CoreConcepts key={items.title} {...items}/>
            
          ) )}
        </ul>
      </section>
      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic ==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic ==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic ==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic ==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
     
          { tabContent}
      </section>
      </main>
      
    </div>
  );
}

export default App;
