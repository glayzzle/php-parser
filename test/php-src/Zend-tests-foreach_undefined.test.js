// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/foreach_undefined.phpt
  it("foreach() & undefined var", function () {
    expect(parser.parseCode("<?php\nforeach($a as $val);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
