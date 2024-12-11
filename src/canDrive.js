function canDrive(age) {
  if(age >= 18){
    console.log("Você pode dirigir.");
    
  } else {
    console.log("Você não pode dirigir.")
  }
}

canDrive(18)


module.exports = {
  canDrive
}
