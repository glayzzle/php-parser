// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_variation_005.phpt
  it("Test getimagesize() function : basic functionality for shockwave-flash", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing getimagesize() : basic functionality ***\\n\";\nvar_dump( getimagesize(__DIR__.\"/test13pix.swf\", $info) );\nvar_dump( $info );\n?>")).toMatchSnapshot();
  });
});
