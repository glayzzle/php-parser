// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/json/tests/bug68817.phpt
  it("Bug #68817 (Null pointer deference)", function () {
    expect(parser.parseCode("<?php\nvar_dump(json_decode('[\"\"]'));\n?>")).toMatchSnapshot();
  });
});
