import useCountStore from "../store/useCountStore";

function Main() {
  const count = useCountStore((state) => state.count);
  const increaseCount = useCountStore((state) => state.increaseCount);

  return (
    <main className="main">
      <h1>메인 페이지</h1>
      <h4>{count}</h4>
      <button onClick={increaseCount}>Count</button>
    </main>
  )
}

export default Main;