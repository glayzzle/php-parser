// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_literal_next_element_error.phpt
  it("Next free element may overflow in array literals", function () {
    expect(parser.parseCode("<?php\n$i = PHP_INT_MAX;\ntry {\n    $array = [$i => 42, new stdClass];\n    var_dump($array);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nfunction test($x = [PHP_INT_MAX => 42, \"foo\"]) {}\ntry {\n    test();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
