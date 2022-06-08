// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67368.phpt
  it("Bug #67368 (Memory leak with immediately dereferenced array in class constant)", function () {
    expect(parser.parseCode("<?php\nclass FooBar {\n        const bar = [\"bar\" => 3][\"bar\"];\n}\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
