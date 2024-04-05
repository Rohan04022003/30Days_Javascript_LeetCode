# Sleep Easy Solution

``` javascript

let sleep = async function(millis) {
    return new Promise(resolve =>{
        setTimeout(resolve, millis)
    })
}

 let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100

let t2 = Date.now()
sleep(200).then(() => console.log(Date.now() - t)) // 200
```
