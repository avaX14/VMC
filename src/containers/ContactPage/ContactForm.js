import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      subject: ''
    };
  }

  handleSubmit(e) {
    // e.preventDefault();
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:3002/send',
    //   data: this.state
    // }).then(response => {
    //   if (response.data.status === 'success') {
    //     alert('Message Sent.');
    //     this.resetForm();
    //   } else if (response.data.status === 'fail') {
    //     alert('Message failed to send.');
    //   }
    // });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '', subject: '' });
  }

  render() {
    return (
      <div className="contact-form">
        <form
          id="contact-form"
          onSubmit={() => this.handleSubmit()}
          method="POST"
        >
          <div className="d-flex justify-content-between">
            <div className="form-group child-48">
              <label htmlFor="name">Vaše Ime</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={e => this.onChange(e)}
              />
            </div>
            <div className="form-group child-48">
              <label htmlFor="exampleInputEmail1">Email adresa</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={e => this.onChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="">Naslov</label>
            <input
              type="subject"
              className="form-control"
              id="subject"
              value={this.state.subject}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Poruka</label>
            <textarea
              className="form-control"
              rows="10"
              id="message"
              value={this.state.message}
              onChange={e => this.onChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Pošalji
          </button>
        </form>
      </div>
    );
  }

  onChange(event) {
    const value = event.target.value;

    this.setState({ [event.target.id]: value });
  }
}

export default ContactForm;
