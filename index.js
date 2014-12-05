'use strict';

var exec;

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

        if (stderr) {
            return deferred.reject({
                buffer: stderr,
                string: stderr.toString('utf8')
            });
        }

        deferred.resolve({
            buffer: stdout,
            string: stdout.toString('utf8')
        });

    });

    return deferred.promise;

};

