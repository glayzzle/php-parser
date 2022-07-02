// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/clone_006.phpt
  it("ZE2 object cloning, 6", function () {
    expect(parser.parseCode("<?php\nclass MyCloneable {\n    static $id = 0;\n    function __construct() {\n        $this->id = self::$id++;\n    }\n    function __clone() {\n        $this->address = \"New York\";\n        $this->id = self::$id++;\n    }\n}\n$original = new MyCloneable();\n$original->name = \"Hello\";\n$original->address = \"Tel-Aviv\";\necho $original->id . \"\\n\";\n$clone = clone $original;\necho $clone->id . \"\\n\";\necho $clone->name . \"\\n\";\necho $clone->address . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
