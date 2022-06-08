// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79947.phpt
  it("Bug #79947: Memory leak on invalid offset type in compound assignment", function () {
    expect(parser.parseCode("<?php\n$array = [];\n$key = [];\ntry {\n    $array[$key] += [$key];\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
