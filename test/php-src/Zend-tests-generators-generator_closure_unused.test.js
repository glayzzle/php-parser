// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_closure_unused.phpt
  it("Closures can be unused generators", function () {
    expect(parser.parseCode("<?php\n(function(){yield;})();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
