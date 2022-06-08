// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug48023.phpt
  it("Bug #48023 (spl_autoload_register didn't addref closures)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function(){});\nnew Foo;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
