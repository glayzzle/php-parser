// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/operators/coalesce.phpt
  it("Test ?? operator", function () {
    expect(parser.parseCode("<?php\n$var = 7;\n$var2 = NULL;\n$obj = new StdClass;\n$obj->boo = 7;\n$arr = [\n    2 => 7,\n    \"foo\" => \"bar\",\n    \"foobar\" => NULL,\n    \"qux\" => $obj,\n    \"bing\" => [\n        \"bang\"\n    ]\n];\nfunction foobar() {\n    echo \"called\\n\";\n    return ['a'];\n}\nvar_dump($nonexistent_variable ?? 3);\necho PHP_EOL;\nvar_dump($var ?? 3);\nvar_dump($var2 ?? 3);\necho PHP_EOL;\nvar_dump($obj->boo ?? 3);\nvar_dump($obj->bing ?? 3);\nvar_dump($arr[\"qux\"]->boo ?? 3);\nvar_dump($arr[\"qux\"]->bing ?? 3);\necho PHP_EOL;\nvar_dump($arr[2] ?? 3);\nvar_dump($arr[\"foo\"] ?? 3);\nvar_dump($arr[\"foobar\"] ?? 3);\nvar_dump($arr[\"qux\"] ?? 3);\nvar_dump($arr[\"bing\"][0] ?? 3);\nvar_dump($arr[\"bing\"][1] ?? 3);\necho PHP_EOL;\nvar_dump(foobar()[0] ?? false);\necho PHP_EOL;\nfunction f($x)\n{\n    printf(\"%s(%d)\\n\", __FUNCTION__, $x);\n    return $x;\n}\n$a = f(null) ?? f(1) ?? f(2);\n?>")).toMatchSnapshot();
  });
});
