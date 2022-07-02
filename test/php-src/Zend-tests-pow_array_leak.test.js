// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/pow_array_leak.phpt
  it("Memory leak on ** with result==op1 array", function () {
    expect(parser.parseCode("<?php\n$x = [0];\ntry {\n    $x **= 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($x);\n$x = [0];\ntry {\n    $x **= $x;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
