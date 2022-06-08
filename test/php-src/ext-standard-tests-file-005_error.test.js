// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/005_error.phpt
  it("Test fileatime(), filemtime(), filectime() & touch() functions : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions ***\\n\";\necho \"\\n-- Testing with  Non-existing files --\";\n/* Both invalid arguments */\nvar_dump( fileatime(\"/no/such/file/or/dir\") );\nvar_dump( filemtime(\"/no/such/file/or/dir\") );\nvar_dump( filectime(\"/no/such/file/or/dir\") );\nvar_dump( touch(\"/no/such/file/or/dir\", 10) );\necho \"\\nDone\";\n?>")).toMatchSnapshot();
  });
});
