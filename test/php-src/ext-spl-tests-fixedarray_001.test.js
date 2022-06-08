// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fixedarray_001.phpt
  it("SPL: FixedArray: std operations", function () {
    expect(parser.parseCode("<?php\n$a = new SplFixedArray(0);\n// errors\ntry {\n    $a[0] = \"value1\";\n} catch (RuntimeException $e) {\n    echo $e::class, ': ', $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($a[\"asdf\"]);\n} catch (\\TypeError $e) {\n    echo $e::class, ': ', $e->getMessage(), \"\\n\";\n}\ntry {\n    unset($a[-1]);\n} catch (RuntimeException $e) {\n    echo $e::class, ': ', $e->getMessage(), \"\\n\";\n}\n$a->setSize(10);\n$a[0] = \"value0\";\n$a[1] = \"value1\";\n$a[2] = \"value2\";\n$a[3] = \"value3\";\n$ref = \"value4\";\n$ref2 =&$ref;\n$a[4] = $ref;\n$ref = \"value5\";\nunset($a[1]);\nvar_dump($a[0], $a[2], $a[3], $a[4]);\n// countable\nvar_dump(count($a), $a->getSize(), count($a) == $a->getSize());\n// clonable\n$b = clone $a;\n$a[0] = \"valueNew\";\nvar_dump($b[0]);\n?>")).toMatchSnapshot();
  });
});
