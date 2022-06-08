// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug62915.phpt
  it("Bug #62915: incomplete cloning of IntlTimeZone objects", function () {
    expect(parser.parseCode("<?php\nclass foo extends IntlTimeZone {\n        public $foo = 'test';\n                public function __construct() { }\n}\n$x = new foo;\ntry {\n        $z = clone $x;\n} catch (Exception $e) {\n        var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
