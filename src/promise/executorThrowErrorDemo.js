/**
 * It's possible to throw an error inside the executor of a promise
 * In that case JS will call rejection handler
 * 
 * Note that inside the executor, there is an implicit try-catch to catch the error 
 * and pass it to the rejection handler. 
 */

 let p = new Promise(function(resolve, reject){
     /**
      * This is equivalent to 
      try {
          throw new Error('An error occured');
      } catch (error) {
          reject(error);
      }
      */
    throw new Error('An error occured');
 });

 p.catch((error) => console.log(error.message));