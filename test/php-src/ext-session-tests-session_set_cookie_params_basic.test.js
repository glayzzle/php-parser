// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_cookie_params_basic.phpt
  it("Test session_set_cookie_params() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_cookie_params() : basic functionality ***\\n\";\nvar_dump(session_set_cookie_params(3600));\nvar_dump(session_start());\nvar_dump(session_set_cookie_params(1800));\nvar_dump(session_destroy());\nvar_dump(session_set_cookie_params(1234567890));\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
