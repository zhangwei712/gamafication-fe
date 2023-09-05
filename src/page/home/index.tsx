import { FC, useState } from 'react';

import { Button } from 'antd';

const Home: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      home
      <div className="App">
        <Button type="primary" onClick={() => setCount(count + 1)}>
          Button {count}
        </Button>
      </div>
    </>
  );
};

export default Home;
