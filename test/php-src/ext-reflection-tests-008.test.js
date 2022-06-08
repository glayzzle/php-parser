// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/008.phpt
  it("ReflectionMethod::__construct() tests", function () {
    expect(parser.parseCode("<?php\n$a = array(\"\", 1, \"::\", \"a::\", \"::b\", \"a::b\");\nforeach ($a as $val) {\n    try {\n        new ReflectionMethod($val);\n    } catch (Exception $e) {\n        var_dump($e->getMessage());\n    }\n}\n$a = array(\"\", 1, \"\");\n$b = array(\"\", \"\", 1);\nforeach ($a as $key=>$val) {\n    try {\n        new ReflectionMethod($val, $b[$key]);\n    } catch (Exception $e) {\n        var_dump($e->getMessage());\n    }\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
