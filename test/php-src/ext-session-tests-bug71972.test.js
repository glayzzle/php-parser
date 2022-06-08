// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug71972.phpt
  it("Bug #71972 (Cyclic references causing session_start(): Failed to decode session object)", function () {
    expect(parser.parseCode("<?php\nob_start();\nsession_start();\n$_SESSION['boogie'] = 1;\n$_SESSION['obj1'] = new stdClass();\nfor ( $x=2; $x < 20; $x++) {\n    cyclic_ref($x);\n}\nfunction cyclic_ref($num) {\n    $_SESSION['obj'.$num] = new stdClass();\n    $_SESSION['obj'.$num]->test = new stdClass();//NOTE: No bug if try commenting out this too.\n    $_SESSION['obj'.$num]->obj1 = $_SESSION['obj1'];\n}\nvar_dump(session_decode(session_encode()) == $_SESSION);\n?>")).toMatchSnapshot();
  });
});
