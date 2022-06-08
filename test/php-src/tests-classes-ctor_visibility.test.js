// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/ctor_visibility.phpt
  it("ZE2 A private constructor cannot be called", function () {
    expect(parser.parseCode("<?php\nclass Test\n{\n    function __construct()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n}\nclass Derived extends Test\n{\n    function __construct()\n    {\n        echo __METHOD__ . \"()\\n\";\n        parent::__construct();\n    }\n    static function f()\n    {\n        new Derived;\n    }\n}\nDerived::f();\nclass TestPriv\n{\n    private function __construct()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n    static function f()\n    {\n        new TestPriv;\n    }\n}\nTestPriv::f();\nclass DerivedPriv extends TestPriv\n{\n    function __construct()\n    {\n        echo __METHOD__ . \"()\\n\";\n        parent::__construct();\n    }\n    static function f()\n    {\n        new DerivedPriv;\n    }\n}\nDerivedPriv::f();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
