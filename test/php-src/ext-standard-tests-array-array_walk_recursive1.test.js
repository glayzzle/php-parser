// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_walk_recursive1.phpt
  it("array_walk_recursive() tests", function () {
    expect(parser.parseCode("<?php\nfunction foo($v1, $v2, $v3) {\n    var_dump($v1);\n    var_dump($v2);\n    var_dump($v3);\n}\n$var = array(1,2, array(2,3));\nvar_dump(array_walk_recursive($var, \"foo\", \"data\"));\nfunction foo2($v1, $v2, $v3) {\n    throw new Exception($v3);\n}\ntry {\n    var_dump(array_walk_recursive($var,\"foo2\", \"data\"));\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
