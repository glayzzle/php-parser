// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/compact_variation1.phpt
  it("Test compact() function : usage variations  - arrays containing references.", function () {
    expect(parser.parseCode("<?php\n/*\n* compact variations - arrays with references\n*/\necho \"*** Testing compact() : usage variations  - arrays containing references ***\\n\";\n$a = 1;\n$b = 2;\n$c = 3;\n$string = \"c\";\n$arr1 = array(\"a\", &$arr1);\n$arr2 = array(\"a\", array(array(array(\"b\"))));\n$arr2[1][0][0][] = &$arr2;\n$arr2[1][0][0][] = &$arr2[1];\n$arr3 = array(&$string);\ntry {\n    var_dump(compact($arr1));\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(compact($arr2));\n} catch (Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(compact($arr3));\n?>")).toMatchSnapshot();
  });
});
