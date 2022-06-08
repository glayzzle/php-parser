// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/connect.phpt
  it("oci_connect()", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\nif (!empty($dbase)) {\n    var_dump(oci_connect($user, $password, $dbase));\n}\nelse {\n    var_dump(oci_connect($user, $password));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
