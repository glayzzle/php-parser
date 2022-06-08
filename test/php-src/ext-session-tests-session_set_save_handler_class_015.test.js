// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_015.phpt
  it("Test session_set_save_handler() : register session handler but don't start", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : register session handler but don't start  ***\\n\";\nsession_set_save_handler(new SessionHandler);\n?>")).toMatchSnapshot();
  });
});
