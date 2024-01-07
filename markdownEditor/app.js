class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], newTodo: '' };
  }

  handleOnChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  download = (e) => {
    const doc = new window.jspdf.jsPDF();
    doc.text(this.state.newTodo, 15, 15
      );
    doc.save("text.pdf");
  }

  render() {
    return (
      <main className='container-fluid bg-dark'>
      <div className='container'>
      <div className='row d-flex'>
      <h3 className='text-center me-5 text-white my-4'>Markdown Editor</h3>
      <div className='col-md-6'>
      
      <textarea
        type='text'
        className='form-control mb-3 bg-secondary text-white'
        value={this.state.newTodo}
        onChange={this.handleOnChange}
      />
    </div>
        <div className='col-md-6'>
          <textarea className='form-control' value={this.state.newTodo} readOnly></textarea>
        </div>

      </div>
      </div>
      <div className='text-center mx-auto'>
      <button className='text-center bg-primary rounded text-white fs-3' onClick={this.download}>
        Download Text
      </button>
      </div>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))