// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_get_cookie_params_basic.phpt
  it("Test session_get_cookie_params() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_get_cookie_params() : basic functionality ***\\n\";\nvar_dump(session_get_cookie_params());\nvar_dump(session_set_cookie_params(3600, \"/path\", \"blah\", FALSE, FALSE));\nvar_dump(session_get_cookie_params());\nvar_dump(session_set_cookie_params(1234567890, \"/guff\", \"foo\", TRUE, TRUE));\nvar_dump(session_get_cookie_params());\nvar_dump(session_set_cookie_params([\n  \"lifetime\" => 123,\n  \"path\" => \"/bar\",\n  \"domain\" => \"baz\",\n  \"secure\" => FALSE,\n  \"httponly\" => FALSE,\n  \"samesite\" => \"please\"]));\nvar_dump(session_get_cookie_params());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
