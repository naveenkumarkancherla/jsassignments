// Function to greet a person after 3 seconds
function greetPerson(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name) {
          resolve(`Hello, ${name}!`);
        } else {
          reject('Name not provided.');
        }
      }, 3000);
    });
  }
  
  // Using Promise.all to wait for all promises to resolve or any to reject
  const promise1 = greetPerson('Alice');
  const promise2 = greetPerson('Bob');
  const promise3 = greetPerson('Charlie');
  
  Promise.all([promise1, promise2, promise3])
    .then((greetings) => {
      console.log('Promise.all:');
      console.log(greetings); // Array of greetings
    })
    .catch((error) => {
      console.error('Promise.all:', error);
    });
  
  // Using Promise.race to wait for the first promise to resolve or reject
  const promise4 = greetPerson('David');
  const promise5 = greetPerson('Eve');
  const promise6 = greetPerson();
  
  Promise.race([promise4, promise5, promise6])
    .then((greeting) => {
      console.log('Promise.race:');
      console.log(greeting); // The first resolved greeting
    })
    .catch((error) => {
      console.error('Promise.race:', error); // Will not be executed in this case
    });
  