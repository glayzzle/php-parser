// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79599.phpt
  it("Bug #79599 (coredump in set_error_handler)", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($code, $message){\n    throw new \\Exception($message);\n});\nfunction test1(){\n    $a[] = $b;\n}\nfunction test2(){\n    $a[$c] = $b;\n}\ntry{\n    test1();\n}catch(\\Exception $e){\n    var_dump($e->getMessage());\n}\ntry{\n    test2();\n}catch(\\Exception $e){\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
