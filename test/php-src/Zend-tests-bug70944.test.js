// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70944.phpt
  it("Bug #70944 (try{ } finally{} can create infinite chains of exceptions)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $e = new Exception(\"Foo\");\n    try {\n        throw  new Exception(\"Bar\", 0, $e);\n    } finally {\n        throw $e;\n    }\n} catch (Exception $e) {\n    var_dump((string)$e);\n}\ntry {\n    $e = new Exception(\"Foo\");\n    try {\n        throw new Exception(\"Bar\", 0, $e);\n    } finally {\n        throw new Exception(\"Dummy\", 0, $e);\n    }\n} catch (Exception $e) {\n    var_dump((string)$e);\n}\n?>")).toMatchSnapshot();
  });
});
