function run(func, options) {
    const task = func.default;
    console.log(`Running ${task.name}`);
    return task().then(() => {
        console.log(`Finished ${task.name}`);
    });
}

if (process.argv.length > 2) {
    const module = require(`./${process.argv[2]}.js`);
    console.log(module);
    run(module);
}

export default run;
