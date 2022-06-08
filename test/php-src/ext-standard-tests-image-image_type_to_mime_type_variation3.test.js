// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/image_type_to_mime_type_variation3.phpt
  it("image_type_to_mime_type() (passinf equivalent integer values)", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing image_type_to_mime_type() : usage variations ***\\n\";\nfor($imagetype = 0; $imagetype <= IMAGETYPE_COUNT; ++$imagetype) {\n  echo \"\\n-- Iteration $imagetype --\\n\";\n  var_dump(image_type_to_mime_type($imagetype));\n}\n?>")).toMatchSnapshot();
  });
});
