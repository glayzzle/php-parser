// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug65475.phpt
  it("Bug #65475: Session ID is not initialized when session.usr_strict_mode=1", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"Testing file module\".PHP_EOL;\nsession_start();\n$_SESSION['foo'] = 1234;\n$_SESSION['cnt'] = 1;\n$session_id = session_id();\nsession_write_close();\nsession_start();\nvar_dump($session_id === session_id());\n$_SESSION['cnt']++;\nsession_write_close();\nsession_start();\nvar_dump($session_id === session_id());\nvar_dump($_SESSION['cnt']); // Should be int(2)\nsession_write_close();\n?>")).toMatchSnapshot();
  });
});
