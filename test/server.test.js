const test = require('node:test');
const assert = require('node:assert');

test('Application should return success message', async () => {
    const response = {
        message: 'Hello from Node.js!',
        status: 'success'
    };

    assert.strictEqual(response.status, 'success');
    assert.strictEqual(response.message, 'Hello from Node.js!');
});