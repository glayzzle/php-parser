// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/isset_002.phpt
  it("Testing isset with several undefined variables as argument", function () {
    expect(parser.parseCode("<?php\nvar_dump(isset($a, ${$b}, $$c, $$$$d, $e[$f->g]->d));\n?>")).toMatchSnapshot();
  });
});
