import useCounterStore from "../../stores/useCounterStore";
import 'C:/Users/S Pro/alx-p/react-with-hc/react-router-ex/src/App.css'
function Counter() {

    const { count, increment, resetCount, decrement } = useCounterStore();

    return (
        <div className="flex flex-col space-between items-center justify-center">
            <span className="text-8xl font-bold mr-4 mb-3">{count}</span>
            <div className="flex flex-row ">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2" onClick={increment}>
                    Increment
                </button>
                <button onClick={resetCount} className="px-4 py-2 bg-slate-500 text-white rounded-md mr-2">
                    Reset
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2" onClick={decrement}>
                    Decrement
                </button>
            </div>
        </div>
    );

}

export default Counter;