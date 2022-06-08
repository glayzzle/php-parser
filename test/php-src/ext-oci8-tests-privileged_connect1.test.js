// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/privileged_connect1.phpt
  it("privileged connect tests", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.\"/connect.inc\";\noci_connect(\"\", \"\", \"\", false, OCI_SYSOPER);\noci_connect(\"\", \"\", \"\", false, OCI_SYSDBA);\noci_connect(\"\", \"\", \"\", false, -1);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
