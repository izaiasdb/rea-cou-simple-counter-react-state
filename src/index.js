import React from 'react';
import { render } from 'react-dom';
// import Counter from './hooksState/Counter09';
// import Counter from './hooksState/Counter10';
// import Counter from './hooksState/Counter11';
// import Counter from './hooksState/Counter12';
// import Counter from './hooksState/Counter13';
// import Counter from './hooksState/Counter14-01';
import Counter from './hooksState/Counter14-02';
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