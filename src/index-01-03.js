import React from 'react';
import { render } from 'react-dom';

// import Counter from './classBasedState/Counter01';
// import Counter from './classBasedState/Counter02';
import Counter from './classBasedState/Counter03';


import './styles.css';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter />
      </section>
    </main>
  );
};

render(<Application />, document.getElementById('root'));
