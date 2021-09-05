function superbowlWin(records){
    const found = records.find(function(record){
        return record.result === "W"
    })
    if(found){
        return found.year
    }
  }



//   const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// expected output: 12