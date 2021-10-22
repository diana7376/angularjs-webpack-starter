export const contactServiceModule = angular.module('contactServiceModule', [])
  .service('ContactService', ContactService);

export default contactServiceModule.name;

ContactService.$inject = ['$q'];
function ContactService($q){

  let contacts: any[] = [
    { id: 1, firstName: 'John', lastName: 'Doe' }
  ];

  return {
    getAll,
    add,
    remove
  };

  function getAll(){
    return $q.resolve(contacts);
  }

  function add(contact: { lastName: string, firstName: string }){
    const highestId = contacts
      .map(c => c.id)
      .reduce((a, b) => Math.max(a, b), 1);

    contacts.push({
      id: highestId + 1,
      firstName: contact.firstName,
      lastName: contact.lastName
    });
  }
  function remove(id: number){
    contacts = contacts.filter(contact => contact.id !== id);
  }

}
