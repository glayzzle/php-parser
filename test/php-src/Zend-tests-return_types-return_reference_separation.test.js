// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/return_reference_separation.phpt
  it("Return value separation", function () {
    expect(parser.parseCode("<?php\nfunction test1(&$abc) : string {\n    return $abc;\n}\nfunction &test2(int $abc) : string {\n    return $abc;\n}\nfunction &test3(int &$abc) : string {\n    return $abc;\n}\n$a = 123;\nvar_dump(test1($a));\nvar_dump($a);\nvar_dump(test2($a));\nvar_dump($a);\nvar_dump(test3($a));\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
