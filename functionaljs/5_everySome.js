function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers){
    return submittedUsers.every(function(submittedOne){
      return goodUsers.some(function(goodOne){
        return submittedOne.id === goodOne.id
      })
    })
  }
}

// // every & some done with map & filter xD
// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//
//     var submittedConfirmed= submittedUsers.filter(function(submittedOne){
//       var confirmed= goodUsers.map(function(goodOne){
//         if (submittedOne.id === goodOne.id) return true
//         else return false
//       })
//
//       if (confirmed.indexOf(true)>-1)
//       return true
//     })
//
//     if (submittedConfirmed.length === submittedUsers.length)
//     return true
//     else
//     return false
//   }
// }

module.exports = checkUsersValid
