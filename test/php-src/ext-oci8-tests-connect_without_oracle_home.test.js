// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/connect_without_oracle_home.phpt
  it("oci_connect() without ORACLE_HOME set (OCIServerAttach() segfaults)", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/details.inc\";\nif (!empty($dbase)) {\n    var_dump(oci_connect($user, $password, $dbase));\n}\nelse {\n    var_dump(oci_connect($user, $password));\n}\n?>")).toMatchSnapshot();
  });
});
