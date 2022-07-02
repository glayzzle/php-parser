// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump11.phpt
  it("jump 08: goto inside switch in constructor", function () {
    expect(parser.parseCode("<?php\nclass foobar {\n    public function __construct() {\n        switch (1) {\n            default:\n                goto b;\n                a:\n                    print \"ok!\\n\";\n                    break;\n                b:\n                    print \"ok!\\n\";\n                    goto a;\n        }\n        print \"ok!\\n\";\n    }\n}\nnew foobar;\n?>")).toMatchSnapshot();
  });
});
