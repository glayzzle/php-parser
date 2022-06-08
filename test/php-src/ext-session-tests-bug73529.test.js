// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug73529.phpt
  it("Bug #73529 session_decode() silently fails on wrong input", function () {
    expect(parser.parseCode("<?php\nob_start();\nini_set(\"session.serialize_handler\", \"php_serialize\");\nsession_start();\n$result1 = session_decode('foo|s:3:\"bar\";');\n$session1 = $_SESSION;\nsession_destroy();\nini_set(\"session.serialize_handler\", \"php\");\nsession_start();\n$result2 = session_decode(serialize([\"foo\" => \"bar\"]));\n$session2 = $_SESSION;\nsession_destroy();\necho ob_get_clean();\nvar_dump($result1);\nvar_dump($session1);\nvar_dump($result2);\nvar_dump($session2);\n?>")).toMatchSnapshot();
  });
});
