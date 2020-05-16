import { assertEquals } from '../tests.js'

console.log('\n\n\n\n\n\n\n\n\nTESTES:');

var petfinderData = {
    key: '12345',
    shelterID: 'abc00',
    count: 20,
    animal: 'dogs'
};

var petfinderData2 = {
    id: '124',
    shelterID: '000000',
    count: 50,
    animal: 'bird'
};

  

assertEquals(buildQuery(petfinderData), 'key=12345&shelterID=abc00&count=20&animal=dogs') 
assertEquals(buildQuery(petfinderData2), 'id=124&shelterID=000000&count=50&animal=bird') 