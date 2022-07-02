// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/033.phpt
  it("Using undefined multidimensional array", function () {
    expect(parser.parseCode("<?php\n$arr[1][2][3][4][5];\necho $arr[1][2][3][4][5];\n$arr[1][2][3][4][5]->foo;\ntry {\n    $arr[1][2][3][4][5]->foo = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$arr[][] = 2;\ntry {\n    $arr[][]->bar = 2;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
