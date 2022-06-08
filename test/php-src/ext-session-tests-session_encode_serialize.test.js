// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_encode_serialize.phpt
  it("Test session_encode() function : Numeric key raise error. bug65359", function () {
    expect(parser.parseCode("<?php\nob_start();\nini_set('session.serialize_handler', 'php_serialize');\nvar_dump(session_start());\n$_SESSION[-3] = 'foo';\n$_SESSION[3] = 'bar';\n$_SESSION['var'] = 123;\nvar_dump(session_encode());\nsession_write_close();\n// Should finish without errors\necho 'Done'.PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
