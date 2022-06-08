// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_abort_basic.phpt
  it("Test session_abort() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_abort() : basic functionality ***\\n\";\nsession_start();\n$session_id = session_id();\n$_SESSION['foo'] = 123;\nsession_commit();\nsession_id($session_id);\nsession_start();\n$_SESSION['bar'] = 456;\nvar_dump($_SESSION);\nsession_abort();\nsession_id($session_id);\nsession_start();\nvar_dump($_SESSION); // Should only have 'foo'\necho \"Done\".PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
