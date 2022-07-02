// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug69425.phpt
  it("Bug #69425: Use After Free in unserialize()", function () {
    expect(parser.parseCode("<?php\n// POC 1\nclass test\n{\n    var $ryat;\n    function __wakeup()\n    {\n        $this->ryat = 1;\n    }\n}\n$data = unserialize('a:2:{i:0;O:4:\"test\":1:{s:4:\"ryat\";R:1;}i:1;i:2;}');\nvar_dump($data);\n// POC 2\n$data = unserialize('a:2:{i:0;O:12:\"DateInterval\":1:{s:1:\"y\";R:1;}i:1;i:2;}');\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
