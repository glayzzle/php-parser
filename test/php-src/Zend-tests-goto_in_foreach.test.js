// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/goto_in_foreach.phpt
  it("goto inside foreach", function () {
    expect(parser.parseCode("<?php\nforeach ([0] as $x) {\n    goto a;\na:\n    echo \"loop\\n\";\n}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
