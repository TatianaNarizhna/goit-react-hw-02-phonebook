import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container/Container";
import Input from "./components/ContactForm/InputForm";
import PhonebookList from "./components/PhonebookList/PhonebookList";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  formSubmit = (data) => {
    console.log(data);
    const contactData = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };
    this.setState((prevState) => ({
      contacts: [contactData, ...prevState.contacts],
    }));
  };

  deleteList = (listId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== listId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <Input onFormSubmit={this.formSubmit} />
        <PhonebookList
          contacts={contacts}
          title="Contacts"
          onDeleteList={this.deleteList}
        />
      </Container>
    );
  }
}

export default App;
