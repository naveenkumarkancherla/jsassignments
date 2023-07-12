function filter1(arr) {   //this arr represents numbers array
    var result = arr.filter(function(element) {    
      return element % 5 == 0;
    });
    return result;
  }
  
  var numbers = [10, 7, 15, 24, 35, 42, 50, 63];
  var filteredNumbers = filter1(numbers);
  console.log(filteredNumbers);
  
  