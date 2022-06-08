// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/017.phpt
  it("setting $_SESSION before session_start() should not cause segfault", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass Kill {\n    function __construct() {\n        global $HTTP_SESSION_VARS;\n        session_start();\n    }\n}\n$k = new Kill();\nprint \"I live\\n\";\n?>")).toMatchSnapshot();
  });
});
