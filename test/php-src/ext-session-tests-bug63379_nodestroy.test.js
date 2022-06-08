// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug63379_nodestroy.phpt
  it("Bug #63379: Warning when using session_regenerate_id(TRUE) with a SessionHandler", function () {
    expect(parser.parseCode("<?php\nob_start();\n$handler = new SessionHandler;\nsession_set_save_handler($handler);\nsession_start();\n$_SESSION['foo'] = 'hello';\nvar_dump($_SESSION);\nsession_regenerate_id(false);\necho \"*** Regenerated ***\\n\";\nvar_dump($_SESSION);\n$_SESSION['bar'] = 'world';\nvar_dump($_SESSION);\nsession_write_close();\nsession_unset();\nsession_start();\nvar_dump($_SESSION);\n?>")).toMatchSnapshot();
  });
});
