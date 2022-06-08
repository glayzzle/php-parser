// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/dba011.phpt
  it("DBA argument tests", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ .'/test.inc');\necho \"database handler: $handler\\n\";\nvar_dump(dba_open($db_file, 'n'));\nvar_dump(dba_open($db_file, 'n', 'bogus'));\nvar_dump(dba_open($db_file, 'q', $handler));\nvar_dump(dba_open($db_file, 'nq', $handler));\nvar_dump(dba_open($db_file, 'n', $handler, 2, 3, 4, 5, 6, 7, 8));\n?>")).toMatchSnapshot();
  });
});
