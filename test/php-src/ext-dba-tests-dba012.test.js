// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba012.phpt
  it("DBA dba.default_handler tests", function () {
    expect(parser.parseCode("<?php\n$handler = \"flatfile\";\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\necho \"Test 1\\n\";\nini_set('dba.default_handler', 'does_not_exist');\nvar_dump(dba_open($db_filename, 'c'));\necho \"Test 2\\n\";\nini_set('dba.default_handler', '');\nvar_dump(dba_open($db_filename, 'n'));\n?>")).toMatchSnapshot();
  });
});
