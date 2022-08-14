var autocannon=require('autocannon')
async function foo () {
    const result = await autocannon({
      url: 'http://localhost:3000/',
     
      connections: 100, //default
  pipelining: 100, // default
  
    })
    console.log(result.latency)
  }
  foo();