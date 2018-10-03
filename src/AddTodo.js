import React, {Component} from 'react'

class AddTodo extends Component {
  state = {
      content: '',
      id: null
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
      id: Math.random()
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({
      content: ''
    })
  }

  render() {
    return(
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s11">
              <input type="text" placeholder="Add Todo" id="content" onChange={this.handleChange} value={this.state.content} autoFocus/>
            </div>
            <div className="input-field col s1">
              <button className="btn-floating btn-small green" type="submit">
                <i className="material-icons">add</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodo