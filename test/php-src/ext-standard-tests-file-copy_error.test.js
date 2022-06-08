// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_error.phpt
  it("Test copy() function: error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing copy() function: error conditions --\\n\";\n/* Invalid args */\nvar_dump( copy(\"/no/file\", \"file\") );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
