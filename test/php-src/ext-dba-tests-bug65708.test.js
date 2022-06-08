// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug65708.phpt
  it("Bug #65708 (dba functions cast $key param to string in-place, bypassing copy on write)", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nrequire_once(__DIR__ .'/test.inc');\n$db = dba_popen($db_filename, 'c');\n$key = 1;\n$copy = $key;\necho gettype($key).\"\\n\";\necho gettype($copy).\"\\n\";\ndba_exists($key, $db);\necho gettype($key).\"\\n\";\necho gettype($copy).\"\\n\";\ndba_close($db);\n?>")).toMatchSnapshot();
  });
});
