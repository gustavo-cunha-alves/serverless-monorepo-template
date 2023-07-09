

export const main = async () => {
  console.log('*** event ***');
  return { 
    statusCode: 200,
    body: JSON.stringify({message: 'Hello world!'})
  }
}