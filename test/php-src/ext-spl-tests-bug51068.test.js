// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug51068.phpt
  it("SPL: glob wrapper interactions with DirectoryIterator", function () {
    expect(parser.parseCode("<?php\ntouch('bug.51068');\nmkdir('bug.51068.dir');\ntouch('bug.51068.dir/lvl2.bug.51068');\n$iter = new DirectoryIterator('glob://*.51068');\nforeach ($iter as $f) {\n    var_dump($f->getFilename());\n    var_dump($f->getSize());\n}\n$iter = new DirectoryIterator('glob://bug.51068.dir/*.51068');\nforeach ($iter as $f) {\n  var_dump($f->getFilename());\n  var_dump($f->getSize());\n}\n$iter = new DirectoryIterator('glob://bug.51068.dir');\nforeach ($iter as $f) {\n  var_dump($f->getFilename());\n  var_dump($f->getSize() >= 0);\n}\n?>")).toMatchSnapshot();
  });
});
