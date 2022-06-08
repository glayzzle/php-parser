// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_save_handler_class_014.phpt
  it("Test session_set_save_handler() : calling default handler when save_handler=user", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_save_handler() : calling default handler when save_handler=user ***\\n\";\n$oldHandler = ini_get('session.save_handler');\n$handler = new SessionHandler;\nsession_set_save_handler($handler);\nsession_start();\n?>")).toMatchSnapshot();
  });
});
