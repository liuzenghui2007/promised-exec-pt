'use strict';

describe('Testing of module.', function () {

    var module;

    module = require('../index.js');

    function pass (value) {

        try {

            module(value);

            return true;

        } catch (e) {

            return false;

        }

    }

    it('Module must returns function.', function () {

        var type;

        type = typeof module;

        expect(type).toBe('function');

    });

    it('If function called with object, they must throw exception.', function () {

        var state;

        state = pass(); // try to pass undefined

        expect(state).toBe(false);

    });

    it('If function called with number, they must throw exception.', function () {

        var state;

        state = pass(17); // try to pass undefined

        expect(state).toBe(false);

    });

    it('If function called with null, they must throw exception.', function () {

        var state;

        state = pass(null); // try to pass undefined

        expect(state).toBe(false);

    });

    it('If function called with NaN, they must throw exception.', function () {

        var state;

        state = pass(NaN); // try to pass undefined

        expect(state).toBe(false);

    });

    it('If function called with string, they must works not throw exception.', function () {

        var state;

        state = pass('ls'); // try to pass undefined

        expect(state).toBe(true);

    });

});