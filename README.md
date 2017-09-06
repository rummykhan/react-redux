Revisiting Redux with React
---

Working on react and redux, Simple todo app.

## 1. Actions:
Action is just a plain javascript object, containing some 
data that will be sent to store from your application. And 
store decision for changing the state is only based on 
this data. We send action to store using 
`store.dispatch()`

```
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```
### 1.1 Action Creators:
Action Creators are function that are used to create actions.
e.g.
```ecmascript 6
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

### 1.2 Dispatching actions:
After you've created the store, store has a method
called dispatch you can dispatch the action.

```ecmascript 6
store.dispatch(addTodo('Read book'));
```

## 2. Reducer:
Reducer are functions that tells the store about the initial state 
of the app, and subsequently this function is responsible of how 
your app state should change based on the dispatched action, 
or more specifically based on the type of action.

> It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). 

#### Reference Links
* http://redux.js.org/docs/basics/

#### Contact
[rehan_manzoor@outlook.com](mailto://rehan_manzoor@outlook.com)