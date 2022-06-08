// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_013.phpt
  it("Nested function definition", function () {
    expect(parser.parseCode("<?php\ntest();\ntest2();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
