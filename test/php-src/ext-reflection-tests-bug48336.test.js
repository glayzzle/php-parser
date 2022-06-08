// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug48336.phpt
  it("Bug #48286 (ReflectionProperty::getDeclaringClass() does not work with redeclared properties)", function () {
    expect(parser.parseCode("<?php\nclass A {\n}\nclass B extends A {\n  static protected $prop;\n}\nclass C extends B {\n  static protected $prop;\n}\nclass D extends C {\n}\nclass E extends D {\n}\nclass F extends E {\n  static protected $prop;\n}\n$class = 'A';\nfor($class = 'A'; $class <= 'F'; $class ++) {\n  print($class.' => ');\n  try {\n    $rp = new ReflectionProperty($class, 'prop');\n    print($rp->getDeclaringClass()->getName());\n  } catch(Exception $e) {\n    print('N/A');\n  }\n  print(\"\\n\");\n}\n?>")).toMatchSnapshot();
  });
});
