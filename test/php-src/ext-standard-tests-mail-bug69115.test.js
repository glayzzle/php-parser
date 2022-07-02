// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/mail/bug69115.phpt
  it("Bug #69115 crash in mail (plus indirect pcre test)", function () {
    expect(parser.parseCode("<?php\n/* Just ensure it doesn't crash when trimming headers */\n$message = \"Line 1\\r\\nLine 2\\r\\nLine 3\";\nmail('user@example.com', 'My Subject', $message, \"From: me@me.me\");\n?>")).toMatchSnapshot();
  });
});
