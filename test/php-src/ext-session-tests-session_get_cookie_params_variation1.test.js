// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_get_cookie_params_variation1.phpt
  it("Test session_get_cookie_params() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_get_cookie_params() : variation ***\\n\";\nvar_dump(session_get_cookie_params());\nini_set(\"session.cookie_lifetime\", 3600);\nvar_dump(session_get_cookie_params());\nini_set(\"session.cookie_path\", \"/path\");\nvar_dump(session_get_cookie_params());\nini_set(\"session.cookie_domain\", \"foo\");\nvar_dump(session_get_cookie_params());\nini_set(\"session.cookie_secure\", TRUE);\nvar_dump(session_get_cookie_params());\nini_set(\"session.cookie_httponly\", TRUE);\nvar_dump(session_get_cookie_params());\nini_set(\"session.cookie_samesite\", \"foo\");\nvar_dump(session_get_cookie_params());\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
