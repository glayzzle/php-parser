// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/class_uses_variation.phpt
  it("SPL: Test class_uses() function : variation - no interfaces and autoload", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing class_uses() : variation ***\\n\";\necho \"--- testing no traits ---\\n\";\nclass fs {}\nvar_dump(class_uses(new fs));\nvar_dump(class_uses('fs'));\nspl_autoload_register(function ($classname) {\n   echo \"attempting to autoload $classname\\n\";\n});\necho \"\\n--- testing autoload ---\\n\";\nvar_dump(class_uses('non_existent'));\nvar_dump(class_uses('non_existent2', false));\n?>")).toMatchSnapshot();
  });
});
