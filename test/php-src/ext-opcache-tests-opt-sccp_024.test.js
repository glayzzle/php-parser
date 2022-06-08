// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/sccp_024.phpt
  it("SCCP 024: Const replacing to op2 of INSTANCEOF", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function t($obj) {\n        $a = \"A\";\n        $b = \"self\";\n        $c = 1;\n        echo ($obj instanceof $a);\n        echo ($obj instanceof $b);\n        echo ($obj instanceof $c);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
