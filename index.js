'use strict';

var exec, getBufferContents;

exec = require('child_process').exec;

module.exports = function (command) {

    var q, deferred;

    q = require('q');

    if (!command || typeof command !== 'string') {
        throw {
            message: 'Command must be a string.'
        };
    }

    deferred = q.defer();

    exec(command, function (error, stdout, stderr) {

        if (error) {
            return deferred.reject(error);
        }

        if (stderr && !stdout) {
            return deferred.reject(new Error(stderr));
        }

        deferred.resolve(stdout.toString('utf8'));

    });

    return deferred.promise;

};

