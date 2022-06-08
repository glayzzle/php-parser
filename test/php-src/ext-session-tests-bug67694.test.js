// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug67694.phpt
  it("Bug #67694 Regression in session_regenerate_id()", function () {
    expect(parser.parseCode("<?php\nob_start();\n$data = date('r');\nsession_start();\n$id = session_id();\n$_SESSION['init'] = $data;\nsession_write_close();\nsession_id($id);\nsession_start();\nsession_regenerate_id(false);\n$newid = session_id();\nvar_dump($newid != $id);\nsession_write_close();\nunset($_SESSION);\nsession_id($newid);\nsession_start();\nvar_dump(isset($_SESSION['init']) && $data == $_SESSION['init']);\n?>")).toMatchSnapshot();
  });
});
