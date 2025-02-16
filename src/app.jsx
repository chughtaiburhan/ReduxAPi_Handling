import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './redux/slice/todo';

const App = () => {
  const dispatch = useDispatch();
  const { data: todos, isLoading, isError } = useSelector((state) => state.todo);

  console.log("Fetched Todos:", todos);

  const handleFetchTodos = useCallback(() => {
    dispatch(fetchTodos()); 
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkBlue p-4">
    <div className="bg-cardBlue shadow-lg rounded-xl p-6 w-full max-w-md sm:max-w-lg lg:max-w-xl border border-borderBlue">  
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 tracking-wide">
          Todo List
        </h1>
        
        {/* Button with loader */}
        <button 
          onClick={handleFetchTodos}
          disabled={isLoading}
          className="w-full flex items-center justify-center bg-[#00A7E1] hover:bg-[#0079A1] active:bg-[#005F7F] text-white font-semibold py-2 px-4 rounded-lg transition duration-200 disabled:bg-gray-400"
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-2 border-white border-2 rounded-full border-t-transparent" viewBox="0 0 24 24"></svg>
          ) : "Fetch Todos"}
        </button>

        {/* Error Message */}
        {isError && <p className="text-red-500 text-center mt-2">Error fetching todos</p>}

        {/* Todos List */}
        <ul className="mt-4 space-y-3">
          {isLoading ? (
            <p className="text-center text-gray-300">Loading todos...</p>
          ) : todos?.length > 0 ? (
            todos.map((e) => (
              <li key={e.id} className="bg-[#115173] p-3 rounded-lg shadow-md border border-[#1D6F98] text-white text-lg tracking-wide leading-relaxed">
                {e.title}
              </li>
            ))
          ) : (
            <p className="text-gray-300 text-center mt-2">No Todos Available</p>
          )}
        </ul>
      </div>
    </div>
  );   
}

export default App;
