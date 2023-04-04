import { createContext } from 'react'

const TodoContext = createContext()

function TodoProvider({children}) {
    
    return(
        <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>
    )
} 