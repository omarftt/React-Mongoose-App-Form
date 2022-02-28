import React, {Component} from 'react'
import axios from 'axios'
import "./Form.css";

export default class Form extends Component {
    state = {
        users: [],
        username: '',
        email: '',
        flag_form : true,
        error : false
    }

    async componentDidMount() {
        this.getUsers();
        console.log(this.state.users)
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/users');
        this.setState({users: res.data});
    }

    onChangeusername = (e) => {
        this.setState({
            username: e.target.value
        })
        console.log(e.target.value)
    }
    onChangeemail = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(e.target.value)
    }

    onSubmit = async (e) => {
        try{
            e.preventDefault();
            await axios.post('http://localhost:4000/users', {
                username: this.state.username,
                email : this.state.email
            })
            this.getUsers();
            this.setState({
                flag_form: false
            
            })
        } catch(e) {
            console.error("Error al enviar formulario")
        }
        
    }


    render(){
        if(this.state.flag_form){
            return (
                <div className="container">
    
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>Formulario de Registro</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="control-label" for="user-github">
                                Usuario Github:
                                </label>
                                <input
                                type="text"
                                className="form-control input-lg"
                                id="user-github"
                                placeholder="Ingresa un usuario"
                                value = {this.state.username}
                                onChange={this.onChangeusername}
                                />
                                <p class="help-block"></p>
                            </div>
                        <div className="form-group">
                            <label className="control-label" for="email">
                            Correo:
                            </label>
                            <input
                            type="email"
                            className="form-control input-lg"
                            id="passcode"
                            placeholder="Ingresa un correo"
                            value = {this.state.email}
                            onChange={this.onChangeemail}
                            />
                            <p className="help-block"></p>
                        </div>
    
                        <div className="action text-right">
                            <button type="submit" class="btn btn-primary btn-block btn-lg">
                            Registrarse
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            )
        } else{
            return(
                <div className="container">
                    <div className="">
                        <div className="col-sm-10 col-sm-offset-1">
                        <h1>Lista de Usuarios</h1>

                        <table className="table bordered-table table-striped">
                            <thead>
                            <tr>
                                <th className="text-center">Usuario Github</th>
                                <th className="text-center">Correo</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(user => (
                                        <tr className='' key={user._id}>
                                            <td>{user.username} </td>
                                            <td>{user.email} </td>
                                        </tr>
                                        
                                        )
            
                                    )
                                }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            )
        }
        
    }
}