// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35393.phpt
  it("Bug #35393 (changing static protected members from outside the class)", function () {
    expect(parser.parseCode("<?php\nclass ObjectPath\n{\n    static protected $type = array(0=>'main');\n    static function getType()\n    {\n        return self::$type;\n    }\n}\nprint_r(ObjectPath::getType());\n$object_type = array_pop((ObjectPath::getType()));\nprint_r(ObjectPath::getType());\n?>")).toMatchSnapshot();
  });
});
