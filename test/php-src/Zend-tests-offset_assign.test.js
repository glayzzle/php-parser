// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/offset_assign.phpt
  it("Crash on $x['2x']['y'] += 1 when $x is string", function () {
    expect(parser.parseCode("<?php\n$x = \"a\";\n$x['2x']['y'] += 1;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
