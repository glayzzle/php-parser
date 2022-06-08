// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/global_with_side_effect_name.phpt
  it("Global variable import using a name with side effects", function () {
    expect(parser.parseCode("<?php\nfunction sf($arg) {\n    echo \"called\\n\";\n    return $arg;\n}\nfunction test() {\n    global ${sf(\"a\")};\n    var_dump($a);\n}\n$a = 42;\ntest();\n?>")).toMatchSnapshot();
  });
});
