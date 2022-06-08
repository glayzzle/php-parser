// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_cookie_params_variation5.phpt
  it("Test session_set_cookie_params() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_cookie_params() : variation ***\\n\";\nvar_dump(ini_get(\"session.cookie_httponly\"));\nvar_dump(session_set_cookie_params(3600, \"/path\", \"blah\", FALSE, FALSE));\nvar_dump(ini_get(\"session.cookie_httponly\"));\nvar_dump(session_start());\nvar_dump(ini_get(\"session.cookie_httponly\"));\nvar_dump(session_set_cookie_params(3600, \"/path\", \"blah\", FALSE, TRUE));\nvar_dump(ini_get(\"session.cookie_httponly\"));\nvar_dump(session_destroy());\nvar_dump(ini_get(\"session.cookie_httponly\"));\nvar_dump(session_set_cookie_params(3600, \"/path\", \"blah\", FALSE, FALSE));\nvar_dump(ini_get(\"session.cookie_httponly\"));\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
