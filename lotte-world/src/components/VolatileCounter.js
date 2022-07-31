
import React, { useState } from 'react';

const VolatileCounter = () => {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default VolatileCounter;