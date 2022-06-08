// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug46806.phpt
  it("Bug #46806 (mb_strimwidth cutting too early)", function () {
    expect(parser.parseCode("<?php\necho mb_strimwidth('helloworld', 0, 5, '...', 'UTF-8') . \"\\n\";\necho mb_strimwidth('hello', 0, 5, '...', 'UTF-8');\n?>")).toMatchSnapshot();
  });
});
