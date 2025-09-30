
when to use Context api ? 
 when there are multiple components need to access the same data 
 to avoid passing props through to deeply nested components 
 for global state mangement  (small apps ) latger apps: redux or zustand 


Components/Keyparts of context api 
 createContext  : creates the context object() // create store of a app
 provider: it used for sharing the data to all components and its wraps to app or main  and provides the data
 consumer: which uses the values provided by the store 
 useContext : it is hook used for consume the context inside the child components 