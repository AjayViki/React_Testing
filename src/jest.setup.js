// Source - https://stackoverflow.com/a
// Posted by Shanon Jackson, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-13, License - CC BY-SA 4.0

// jest.environment.js

const Environment = require("jest-environment-jsdom").default;

module.exports = class CustomTestEnvironment extends Environment {
    async setup() {
        await super.setup();
        this.global.TextEncoder = TextEncoder;
        this.global.TextDecoder = TextDecoder;
        this.global.Response = Response;
        this.global.Request = Request;
        
    }
};
