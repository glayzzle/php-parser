// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/class_implements_variation.phpt
  it("SPL: Test class_implements() function : variation - no interfaces and autoload", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing class_implements() : variation ***\\n\";\necho \"--- testing no interfaces ---\\n\";\nclass fs {}\nvar_dump(class_implements(new fs));\nvar_dump(class_implements('fs'));\nspl_autoload_register(function ($classname) {\n   echo \"attempting to autoload $classname\\n\";\n});\necho \"\\n--- testing autoload ---\\n\";\nvar_dump(class_implements('non_existent'));\nvar_dump(class_implements('non_existent2', false));\n?>")).toMatchSnapshot();
  });
});
