// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/selfParent_001.phpt
  it("Test when constants are initialised. See also selfParent_002.phpt.", function () {
    expect(parser.parseCode("<?php\nclass A {\n    const myConst = \"const in A\";\n    const myDynConst = self::myConst;\n    public static function test() {\n        var_dump(self::myDynConst);\n    }\n}\nclass B extends A {\n    const myConst = \"const in B\";\n    public static function test() {\n        var_dump(parent::myDynConst);\n    }\n}\nA::test();\nB::test();\n?>")).toMatchSnapshot();
  });
});
