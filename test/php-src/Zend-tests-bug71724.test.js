// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug71724.phpt
  it("Bug #71724: yield from does not count EOLs", function () {
    expect(parser.parseCode("<?php\nfunction test()\n{\n    yield\n    from [__LINE__];\n}\nvar_dump(test()->current());\n?>")).toMatchSnapshot();
  });
});
