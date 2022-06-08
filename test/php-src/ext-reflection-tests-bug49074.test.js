// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug49074.phpt
  it("Bug #49074 (private class static fields can be modified by using reflection)", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    private static $data1 = 1;\n    private static $data4 = 4;\n}\nclass Test2 extends Test {\n    private static $data2 = 2;\n    public static $data3 = 3;\n}\n$r = new ReflectionClass('Test2');\n$m = $r->getStaticProperties();\n$m['data1'] = 100;\n$m['data2'] = 200;\n$m['data3'] = 300;\n$m['data4'] = 400;\nvar_dump($r->getStaticProperties());\n?>")).toMatchSnapshot();
  });
});
