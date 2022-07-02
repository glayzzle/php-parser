// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_variation4.phpt
  it("Test getimagesize() function : variation - For shockwave-flash format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getimagesize() : variation ***\\n\";\nvar_dump( getimagesize(__DIR__.\"/test13pix.swf\", $info) );\nvar_dump( $info );\n?>")).toMatchSnapshot();
  });
});
