class Directory
  contacts: []
  addContact: (contact) -> this.contacts.push contact
  removeContact: (contact) ->
    index = this.contacts.indexOf contact
    this.contacts.splice index, 1 if index isnt -1