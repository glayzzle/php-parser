// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/namespace_name_reserved_keywords.phpt
  it("Reserved keywords in namespace name", function () {
    expect(parser.parseCode("<?php\nnamespace iter\\fn {\n    function test() {\n        echo __FUNCTION__, \"\\n\";\n    }\n}\nnamespace fn {\n    function test() {\n        echo __FUNCTION__, \"\\n\";\n    }\n}\nnamespace self {\n    function test() {\n        echo __FUNCTION__, \"\\n\";\n    }\n}\nnamespace {\n    use iter\\fn;\n    use function fn\\test as test2;\n    use function self\\test as test3;\n    fn\\test();\n    test2();\n    test3();\n}\n?>")).toMatchSnapshot();
  });
});
