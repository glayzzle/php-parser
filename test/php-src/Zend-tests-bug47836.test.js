// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47836.phpt
  it("Bug #47836 (array operator [] inconsistency when the array has PHP_INT_MAX index value)", function () {
    expect(parser.parseCode("<?php\n$arr[PHP_INT_MAX] = 1;\ntry {\n    $arr[] = 2;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($arr);\n?>")).toMatchSnapshot();
  });
});
