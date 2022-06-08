// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug54970.phpt
  it("Bug #54970 (SplFixedArray::setSize() isn't resizing)", function () {
    expect(parser.parseCode("<?php\n$fa = new SplFixedArray(2);\n$fa[0] = 'Hello';\n$fa[1] = 'World';\n$fa->setSize(3);\n$fa[2] = '!';\nvar_dump($fa);\n$fa->setSize(2);\nvar_dump($fa);\nvar_dump($fa->getSize());\n?>")).toMatchSnapshot();
  });
});
