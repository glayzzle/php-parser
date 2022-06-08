// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripcslashes_basic.phpt
  it("Test stripcslashes() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing stripcslashes() : basic functionality ***\\n\";\nvar_dump(stripcslashes('\\H\\e\\l\\l\\o \\W\\or\\l\\d'));\nvar_dump(stripcslashes('Hello World\\\\r\\\\n'));\nvar_dump(stripcslashes('\\\\\\Hello World'));\nvar_dump(stripcslashes('\\x48\\x65\\x6c\\x6c\\x6f \\x57\\x6f\\x72\\x6c\\x64'));\nvar_dump(stripcslashes('\\110\\145\\154\\154\\157 \\127\\157\\162\\154\\144'));\nvar_dump(bin2hex(stripcslashes('\\\\a')));\nvar_dump(bin2hex(stripcslashes('\\\\b')));\nvar_dump(bin2hex(stripcslashes('\\\\f')));\nvar_dump(bin2hex(stripcslashes('\\\\t')));\nvar_dump(bin2hex(stripcslashes('\\\\v')));\n?>")).toMatchSnapshot();
  });
});
