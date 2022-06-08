// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/old_oci_close.phpt
  it("oci8.old_oci_close_semantics On", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nvar_dump($c);\nvar_dump(oci_close($c));\nvar_dump(oci_parse($c, \"select 1 from dual\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
