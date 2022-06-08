// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_021.phpt
  it("SPL: FixedArray: misc small tests", function () {
    expect(parser.parseCode("<?php\n/* empty count */\n$a = new SplFixedArray();\nvar_dump(count($a));\nvar_dump($a->count());\n/* negative init value */\ntry {\n    $b = new SplFixedArray(-10);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n/* resize and negative value */\n$b = new SplFixedArray();\ntry {\n    $b->setSize(-5);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n/* calling __construct() twice */\n$c = new SplFixedArray(0);\nvar_dump($c->__construct());\n/* fromArray() from empty array */\n$d = new SplFixedArray();\n$d->fromArray(array());\nvar_dump(count($a));\nvar_dump($a->count());\nvar_dump($a);\n/* foreach by ref */\n$e = new SplFixedArray(10);\n$e[0] = 1;\n$e[1] = 5;\n$e[2] = 10;\ntry {\n    foreach ($e as $k=>&$v) {\n        var_dump($v);\n    }\n} catch (\\Error $e) {\n    var_dump($e->getMessage());\n}\n//non-long indexes\n$a = new SplFixedArray(4);\n$a[\"2\"] = \"foo\";\n$a[\"1\"] = \"foo\";\n$a[\"3\"] = \"0\";\nvar_dump(isset($a[\"0\"], $a[-1]), $a[\"1\"]);\nvar_dump(empty($a[\"3\"]));\n?>")).toMatchSnapshot();
  });
});
