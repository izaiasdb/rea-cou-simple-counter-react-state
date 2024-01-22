import React from 'react';
import { render } from 'react-dom';

// import Counter from './classBasedState/Counter04';
// import Counter from './classBasedState/Counter05';
// import Counter from './classBasedState/Counter06';
import Counter from './classBasedState/Counter07-08';

import './styles.css';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter max={15} step={5} />
      </section>
    </main>
  );
};

render(<Application />, document.getElementById('root'));
