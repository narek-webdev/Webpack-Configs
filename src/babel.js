async function start () {
    return await Promise.resolve("Some resolve promise");
}

start().then(console.log)

class Util {
    static id = Date.now()
}

console.log("id: ", Util.id);