// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug53502.phpt
  it("Bug #53502 (strtotime with timezone memory leak)", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 1000; $i++) {\n    strtotime('Monday 00:00 Europe/Paris');    // Memory leak\n}\necho \"Nothing, test only makes sense through valgrind.\\n\";\n?>")).toMatchSnapshot();
  });
});
