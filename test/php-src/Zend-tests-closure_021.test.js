// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_021.phpt
  it("Closure 021: Throwing exception inside lambda", function () {
    expect(parser.parseCode("<?php\n$foo = function() {\n    try {\n        throw new Exception('test!');\n    } catch(Exception $e) {\n        throw $e;\n    }\n};\ntry {\n    $foo();\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
