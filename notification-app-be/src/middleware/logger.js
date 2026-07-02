const logger = (req, res, next) => {
    const start=Date.now();

    console.log(`${req.method} ${req.originalUrl}`);
    
    res.on("finish",() => {
        const time=Date.now()-start;
        console.log(`status : ${res.statusCode}`);
        console.log(`response time : ${time}ms`);
});
next();
};