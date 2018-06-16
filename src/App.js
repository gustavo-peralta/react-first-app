import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
import TodoForm from './components/TodoForm';

//console.log(todos);

class App extends Component {
  constructor(){
    // Super hereda toda la funcionalidad de React para componentes
    super();
    // Creo el estado de este componente o el estado de las tareas
    this.state = {
      todos: todos
    }

     // Para que el metodo handleInput no pierda el Scope
      // Con esto decimos que este this.handleInput pertenece a este componente.
      this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  
  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){

    // Como es un evento propio del navegador hay que agregarle la palabra window por delante
    if(window.confirm('Are you sure you want to delete i')){
      this.setState({
        // Filter recorre uno a uno los elementos y si un dato no cumple con la condición no lo agrega al nuevo arreglo
        todos: this.state.todos.filter((el, i) => {
          return i !== index
        })
      })
    }
   
  }
  
  render() {

    //console.log('Antes de renderizar el componente');

    // Las tareas son un arreglo y lo puedo recorrer con el metodo map() de JS
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ todo.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { todo.priority }
              </span>
            </div>
            <div className="card-body"> 
              <p>{ todo.description }</p>
              <p><mark>{ todo.responsible }</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)} // No solo llamo al metodo sino que lo bindo a esta clase para que sepa que es sullo
              >
              Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              { this.state.todos.length }
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
          
      </div>
    );
  }
}

export default App;
