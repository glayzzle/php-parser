// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug71298.phpt
  it("Bug #71298: MB_CASE_TITLE misbehaves with curled apostrophe/quote (HTML &rsquo;)", function () {
    expect(parser.parseCode("<?php\necho mb_convert_case(\"People's issues versus people’s issues\", MB_CASE_TITLE);\n?>")).toMatchSnapshot();
  });
});
