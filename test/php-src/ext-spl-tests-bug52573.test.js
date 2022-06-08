// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug52573.phpt
  it("Bug #52573 (SplFileObject::fscanf Segmentation fault)", function () {
    expect(parser.parseCode("<?php // test\n$result = null;\n$f = new SplFileObject(__FILE__, 'r');\nvar_dump($f->fscanf('<?php // %s', $result));\nvar_dump($result);\nvar_dump($f->fscanf('<?php // %s'));\n?>")).toMatchSnapshot();
  });
});
