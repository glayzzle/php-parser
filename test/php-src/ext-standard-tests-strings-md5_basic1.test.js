// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/md5_basic1.phpt
  it("Test md5() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing md5() : basic functionality ***\\n\";\nvar_dump(md5(\"apple\"));\n?>")).toMatchSnapshot();
  });
});
