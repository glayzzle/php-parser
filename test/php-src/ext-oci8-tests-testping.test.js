// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/testping.phpt
  it("Exercise OCIPing functionality on reconnect (code coverage test)", function () {
    expect(parser.parseCode("<?php\nrequire(__DIR__.'/details.inc');\nfor ($i = 0; $i < 2; $i++) {\n    if (!empty($dbase)) {\n        $c = oci_pconnect($user,$password,$dbase);\n    }\n    else {\n        $c = oci_pconnect($user,$password);\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
