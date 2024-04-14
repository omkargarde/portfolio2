---
title: "Creating a counter in React using setInterval"
description: "Creating a React counter where value is incremented every second"
date: "apr 14 2024"
---

This is example of how a regular react counter is made, here value of the counter is increased based on button clicks

```ts
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </>
  );
}
```

To increase the value of count based every second we need use `setInterval()` hook and not `setTimeout()` because of the way [React rerender](https://www.joshwcomeau.com/react/why-react-re-renders/)

This is the code for counter based on interval

```ts
const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => Math.min(prevCount + 1, 30));
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // this is called when component is destroyed/Unmounted when component rerenders and basically remove the callback created by the
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};
```

so what does the code do exactly?

`useEffect` is used to setup the interval and perform clean up of interval when component unmount during rerender

`setInterval` takes two arguments a callback and interval for when to call the callback and return a id

`clearInterval` takes a single argument which is id returned by `setInterval` and clear the callback during unmount so that it does not interfere during the next render cycle
