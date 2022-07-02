// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/offset_array.phpt
  it("using different variables to access array offsets", function () {
    expect(parser.parseCode("<?php\n$arr = array(1,2,3,4,5,6,7,8);\nvar_dump($arr[1]);\nvar_dump($arr[0.0836]);\nvar_dump($arr[NULL]);\nvar_dump($arr[\"run away\"]);\nvar_dump($arr[TRUE]);\nvar_dump($arr[FALSE]);\n$fp = fopen(__FILE__, \"r\");\nvar_dump($arr[$fp]);\n$obj = new stdClass;\ntry {\n    var_dump($arr[$obj]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$arr1 = Array(1,2,3);\ntry {\n    var_dump($arr[$arr1]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
