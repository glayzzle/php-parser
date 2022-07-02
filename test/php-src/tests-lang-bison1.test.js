// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bison1.phpt
  it("Bison weirdness", function () {
    expect(parser.parseCode("<?php\necho \"blah-$foo\\n\";\n?>")).toMatchSnapshot();
  });
});
