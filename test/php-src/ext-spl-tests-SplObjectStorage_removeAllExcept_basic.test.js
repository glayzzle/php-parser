// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_removeAllExcept_basic.phpt
  it("Check that SplObjectStorage::removeUncommon functions when receiving proper input", function () {
    expect(parser.parseCode("<?php\n$a = (object) 'a';\n$b = (object) 'b';\n$c = (object) 'c';\n$foo = new SplObjectStorage;\n$foo->attach($a);\n$foo->attach($b);\n$bar = new SplObjectStorage;\n$bar->attach($b);\n$bar->attach($c);\n$foo->removeAllExcept($bar);\nvar_dump($foo->contains($a));\nvar_dump($foo->contains($b));\n?>")).toMatchSnapshot();
  });
});
