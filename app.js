let spawn = require('child_process').spawn;
free = spawn('lite-server');

free.stdout.on('data', function(data) {
    console.log('standard output:\n' + data);
});

free.stderr.on('data', function(data) {
    console.log('standard error output:\n' + data);
});

free.on('exit', function(code, signal) {
    console.log('child process eixt ,exit:' + code);
});
