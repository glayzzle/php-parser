// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba016.phpt
  it("DBA lock modifier error message test", function () {
    expect(parser.parseCode("<?php\n$handler = \"flatfile\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\n$db_file1 = dba_popen($db_filename, 'n-t', 'flatfile');\n?>")).toMatchSnapshot();
  });
});
