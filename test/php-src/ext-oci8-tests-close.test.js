// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/close.phpt
  it("connect/close/connect", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/connect.inc';\noci_close($c);\noci_connect($user, $password, $dbase);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
