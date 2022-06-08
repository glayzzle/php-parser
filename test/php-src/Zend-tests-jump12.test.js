// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump12.phpt
  it("jump 09: goto in declare statement", function () {
    expect(parser.parseCode("<?php\na: print \"ok!\\n\";\ngoto c;\ndeclare (ticks=1) {\n    b:\n        print \"ok!\\n\";\n        exit;\n}\nc:\n    print \"ok!\\n\";\n    goto b;\n?>")).toMatchSnapshot();
  });
});
