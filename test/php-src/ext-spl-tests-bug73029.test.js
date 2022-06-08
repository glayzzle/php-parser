// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug73029.phpt
  it("Bug #73029: Missing type check when unserializing SplArray", function () {
    expect(parser.parseCode("<?php\ntry {\n$a = 'C:11:\"ArrayObject\":19:0x:i:0;r:2;;m:a:0:{}}';\n$m = unserialize($a);\n$x = $m[2];\n} catch(UnexpectedValueException $e) {\n    print $e->getMessage() . \"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
