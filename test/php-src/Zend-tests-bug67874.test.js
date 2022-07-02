// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67874.phpt
  it("Bug #67874 Crash in array_map()", function () {
    expect(parser.parseCode("<?php\n$a = array(1,2,3);\n$data = array($a);\n$data = array_map('current', $data);\nvar_dump($data);\n?>")).toMatchSnapshot();
  });
});
