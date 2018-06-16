import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };

        // Para que el metodo handleInput no pierda el Scope
        // Con esto decimos que este this.handleInput pertenece a este componente.
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        console.log(e.target.value, e.target.name);

        // Deestructuring javascript
        const { value, name } = e.target;

        //Metodo usado para poder modificar el estado del componente
        this.setState({
            [name] : value
        })

        // Ahora quiero enviar los datos sin necesidad de refrescar el navegador

        console.log(this.state);
    }

    handleSubmit(e){
        // Evento que evita refrescar la pantalla
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending data....');

    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}> 
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <select                 
                            name="priority"
                            className="form-control"         
                            onChange={this.handleInput}
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>    
            </div> 
        )
    }

}

export default TodoForm;