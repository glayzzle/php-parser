// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_cookie_params_variation3.phpt
  it("Test session_set_cookie_params() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_cookie_params() : variation ***\\n\";\nvar_dump(ini_get(\"session.cookie_domain\"));\nvar_dump(session_set_cookie_params(3600, \"/path\", \"blah\"));\nvar_dump(ini_get(\"session.cookie_domain\"));\nvar_dump(session_start());\nvar_dump(ini_get(\"session.cookie_domain\"));\nvar_dump(session_set_cookie_params(3600, \"/path\", \"guff\"));\nvar_dump(ini_get(\"session.cookie_domain\"));\nvar_dump(session_destroy());\nvar_dump(ini_get(\"session.cookie_domain\"));\nvar_dump(session_set_cookie_params(3600, \"/path\", \"foo\"));\nvar_dump(ini_get(\"session.cookie_domain\"));\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
