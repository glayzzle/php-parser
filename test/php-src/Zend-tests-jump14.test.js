// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump14.phpt
  it("Testing GOTO inside blocks", function () {
    expect(parser.parseCode("<?php\ngoto A;\n{\n    B:\n        goto C;\n        return;\n}\nA:\n    goto B;\n{\n    C:\n    {\n        print \"Done!\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
