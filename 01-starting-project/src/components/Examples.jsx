import React, {useState} from 'react'
import { EXAMPLES } from '../data'
import TabButton from './TabButton.jsx'
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'

function Examples() {
    const [selectedTopic, setselectedTopic] = useState('')

    let tabContent = <p>Please select a topic</p>
    
    function handleSelect(selectedButton){
        setselectedTopic(selectedButton)
    }

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
    <Section title="Examples" id='examples'>

      <Tabs 
      ButtonContainers="menu"
      buttons={
        <>
          <TabButton isSelected={selectedTopic ==='components'} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic ==='jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic ==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic ==='state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </>
      }>
      { tabContent}
      </Tabs>
  </Section>
  )
}

export default Examples