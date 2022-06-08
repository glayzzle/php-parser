// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/constants_comments_001.phpt
  it("Class constants and doc comments", function () {
    expect(parser.parseCode("<?php\nclass X {\n    /** comment X1 */\n    const X1 = 1;\n    const X2 = 2;\n    /** comment X3 */\n    const X3 = 3;\n}\nclass Y extends X {\n    /** comment Y1 */\n    const Y1 = 1;\n    const Y2 = 2;\n    /** comment Y3 */\n    const Y3 = 3;\n}\n$r = new ReflectionClass('Y');\nforeach ($r->getReflectionConstants() as $rc) {\n    echo $rc->getName() . \" : \" . $rc->getDocComment() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
