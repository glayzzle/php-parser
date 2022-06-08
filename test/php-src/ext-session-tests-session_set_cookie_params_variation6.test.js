// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_cookie_params_variation6.phpt
  it("Test session_set_cookie_params() function : variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_cookie_params() : variation ***\\n\";\nvar_dump(ini_get(\"session.cookie_samesite\"));\nvar_dump(session_set_cookie_params([\"samesite\" => \"nothing\"]));\nvar_dump(ini_get(\"session.cookie_samesite\"));\nvar_dump(session_start());\nvar_dump(ini_get(\"session.cookie_samesite\"));\nvar_dump(session_set_cookie_params([\"samesite\" => \"test\"]));\nvar_dump(ini_get(\"session.cookie_samesite\"));\nvar_dump(session_destroy());\nvar_dump(ini_get(\"session.cookie_samesite\"));\nvar_dump(session_set_cookie_params([\"samesite\" => \"other\"]));\nvar_dump(ini_get(\"session.cookie_samesite\"));\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
