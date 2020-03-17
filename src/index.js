module.exports = function towelSort (matrix) {
  if (!(Array.isArray(matrix) && (matrix.length >0))){
    return [];
  }
  let newmass = matrix.reduce( (a,b,index) => {
    if ((index%2) != 1){
      return a.concat(b);
    } else {
      return a.concat(b.reverse());
    }
 
  },[]);
  return newmass;
}
