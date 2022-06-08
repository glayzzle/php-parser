// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/027.phpt
  it("unset($_SESSION[\"name\"]); should work", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nob_start();\nsession_id(\"test027\");\n### Phase 1 cleanup\nsession_start();\nsession_destroy();\n### Phase 2 $_SESSION[\"c\"] does not contain any value\nsession_id(\"test027\");\nsession_start();\nvar_dump($_SESSION);\n$_SESSION[\"name\"] = \"foo\";\nvar_dump($_SESSION);\nsession_write_close();\n### Phase 3 $_SESSION[\"c\"] is set\nsession_start();\nvar_dump($_SESSION);\nunset($_SESSION[\"name\"]);\nvar_dump($_SESSION);\nsession_write_close();\n### Phase 4 final\nsession_start();\nvar_dump($_SESSION);\nsession_destroy();\n?>")).toMatchSnapshot();
  });
});
