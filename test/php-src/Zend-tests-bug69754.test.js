// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69754.phpt
  it("Bug #69754 (Use of ::class inside array causes compile error)", function () {
    expect(parser.parseCode("<?php\nclass Example {\n    public function test() {\n        var_dump(static::class);\n        var_dump(static::class . 'IsAwesome');\n        var_dump(static::class . date('Ymd'));\n        var_dump([static::class]);\n    }\n}\n(new Example)->test();\n?>")).toMatchSnapshot();
  });
});
