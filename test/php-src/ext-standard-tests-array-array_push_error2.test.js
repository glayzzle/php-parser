// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_push_error2.phpt
  it("Test array_push() function : error conditions - max int value as key", function () {
    expect(parser.parseCode("<?php\n/*\n * Use PHP's maximum integer value as array key\n * then try and push new elements onto the array\n */\necho \"*** Testing array_push() : error conditions ***\\n\";\n$array = array(PHP_INT_MAX => 'max');\ntry {\n    var_dump(array_push($array, 'new'));\n} catch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump($array);\n?>")).toMatchSnapshot();
  });
});
