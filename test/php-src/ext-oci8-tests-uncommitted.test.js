// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/uncommitted.phpt
  it("uncommitted connection", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\n$stmt = oci_parse($c, \"select 1 from dual\");\noci_execute($stmt, OCI_DEFAULT);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
