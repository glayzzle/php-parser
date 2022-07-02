// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump03.phpt
  it("jump 03: goto inside control structures", function () {
    expect(parser.parseCode("<?php\ndo {\n    if (1) {\n        echo \"1: ok\\n\";\n        goto L1;\n    } else {\n        echo \"bug\\n\";\nL1:\n        echo \"2: ok\\n\";\n    }\n} while (0);\n?>")).toMatchSnapshot();
  });
});
