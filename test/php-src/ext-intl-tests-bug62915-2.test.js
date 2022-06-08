// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug62915-2.phpt
  it("Bug #62915: cloning of several classes is defective", function () {
    expect(parser.parseCode("<?php\nclass A extends IntlDateFormatter {\n        static $ARGS = array(\"en_US\" ,IntlDateFormatter::FULL, IntlDateFormatter::FULL,\n            'America/Los_Angeles', IntlDateFormatter::GREGORIAN);\n}\nclass B extends NumberFormatter {\n        static $ARGS = array('de_DE', NumberFormatter::DECIMAL);\n}\nclass C extends MessageFormatter {\n        static $ARGS = array(\"en_US\", \"foo\");\n}\nclass D extends Spoofchecker {\n        static $ARGS = array();\n}\nforeach (range('A', 'D') as $subclass) {\n        $rc = new ReflectionClass($subclass);\n            $obj = $rc->newInstanceArgs($subclass::$ARGS);\n                $clone = clone $obj;\n                    var_dump(get_class($clone));\n}\n?>")).toMatchSnapshot();
  });
});
