// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/bug72278.phpt
  it("Bug #72278 (getimagesize returning FALSE on valid jpg)", function () {
    expect(parser.parseCode("<?php\ndefine('FILENAME', __DIR__ . DIRECTORY_SEPARATOR . 'bug72278.jpg');\nvar_dump(getimagesize(FILENAME));\n?>")).toMatchSnapshot();
  });
});
