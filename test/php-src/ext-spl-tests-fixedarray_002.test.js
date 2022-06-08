// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_002.phpt
  it("SPL: FixedArray: overloading", function () {
    expect(parser.parseCode("<?php\nclass A extends SplFixedArray {\n    public $prop1 = NULL;\n    public $prop2 = NULL;\n    public function count(): int {\n        return 2;\n    }\n    public function offsetGet($n): mixed {\n        echo \"A::offsetGet\\n\";\n        return parent::offsetGet($n);\n    }\n    public function offsetSet($n, $v): void {\n        echo \"A::offsetSet\\n\";\n        parent::offsetSet($n, $v);\n    }\n    public function offsetUnset($n): void {\n        echo \"A::offsetUnset\\n\";\n        parent::offsetUnset($n);\n    }\n    public function offsetExists($n): bool {\n        echo \"A::offsetExists\\n\";\n        return parent::offsetExists($n);\n    }\n}\n$a = new A;\n// errors\ntry {\n    $a[0] = \"value1\";\n} catch (RuntimeException $e) {\n    echo $e::class, ': ', $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($a[\"asdf\"]);\n} catch (\\TypeError $e) {\n    echo $e::class, ': ', $e->getMessage(), \"\\n\";\n}\ntry {\n    unset($a[-1]);\n} catch (RuntimeException $e) {\n    echo $e::class, ': ', $e->getMessage(), \"\\n\";\n}\n$a->setSize(10);\n$a[0] = \"value0\";\n$a[1] = \"value1\";\n$a[2] = \"value2\";\n$a[3] = \"value3\";\n$ref = \"value4\";\n$ref2 =&$ref;\n$a[4] = $ref;\n$ref = \"value5\";\nunset($a[1]);\nvar_dump(isset($a[1]), isset($a[2]), empty($a[1]), empty($a[2]));\nvar_dump($a[0], $a[2], $a[3], $a[4]);\n// countable\nvar_dump(count($a), $a->getSize(), count($a) == $a->getSize());\n?>")).toMatchSnapshot();
  });
});
