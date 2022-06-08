// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getDocComment_001.phpt
  it("ReflectionClass::getDocComment()", function () {
    expect(parser.parseCode("<?php\n/**\n        My\nDoc\n        * Comment\nfor A\n* */\nclass A {}\n/** My DocComment for B */\nclass B extends A { }\nclass C extends B {}\n/**\n * Interface doc comment\n */\ninterface I {}\n/*.*\n * Not a doc comment\n */\nclass D implements I {}\n/**** Not a doc comment */\nclass E extends C implements I {} {}\n/**?** Not a doc comment */\nclass F extends C implements I {} {}\n/**\t** Doc comment for G */\nfinal class G extends C implements I {} {}\n$classes = array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'I');\nforeach ($classes as $class) {\n    echo \"\\n\\n---> Doc comment for class $class:\\n\";\n    $rc = new ReflectionClass($class);\n    var_dump($rc->getDocComment());\n}\n?>")).toMatchSnapshot();
  });
});
