// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump05.phpt
  it("jump 05: goto from loop (forward)", function () {
    expect(parser.parseCode("<?php\n$ar = array(\"1\",\"2\",\"3\");\nforeach ($ar as $val) {\n    switch ($val) {\n        case \"1\":\n            echo \"1: ok\\n\";\n            break;\n        case \"2\":\n            echo \"2: ok\\n\";\n            goto L1;\n        case \"3\":\n            echo \"bug\\n\";\n            break;\n    }\n}\necho \"bug\\n\";\nL1:\necho \"3: ok\\n\";\n?>")).toMatchSnapshot();
  });
});
