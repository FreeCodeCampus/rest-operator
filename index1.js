// Another example to sum unknown numbers those are going to be passed as arguments
const rest = (a, b, ...rest) => {
  console.log(a + b + rest.reduce((a, b) =>  a + b))
}

rest(2, 3 , 3, 4, 5)

