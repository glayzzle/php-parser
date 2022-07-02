// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/autoload_018.phpt
  it("Ensure __autoload() allows for recursive calls if the class name differs.", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n  echo \"IN:  autoload($name)\\n\";\n  static $i = 0;\n  if ($i++ > 10) {\n      echo \"-> Recursion detected - as expected.\\n\";\n      return;\n  }\n  class_exists('UndefinedClass' . $i);\n  echo \"OUT: autoload($name)\\n\";\n});\nvar_dump(class_exists('UndefinedClass0'));\n?>")).toMatchSnapshot();
  });
});
