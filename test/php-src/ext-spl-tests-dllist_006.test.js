// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_006.phpt
  it("SPL: DoublyLinkedList: ArrayAccess", function () {
    expect(parser.parseCode("<?php\n$a = new SplDoublyLinkedList();\n$a->push(1);\n$a->push(2);\n$a->push(3);\n$a[] = \"foo\";\n$a[3] = 4;\nvar_dump($a[0]);\nvar_dump($a[1]);\nvar_dump($a[2]);\nvar_dump($a[3]);\necho \"Unsetting..\\n\";\nvar_dump($a[2]);\nunset($a[2]);\nvar_dump($a[2]);\ntry {\n    var_dump($a[\"1\"]);\n} catch (OutOfRangeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    var_dump($a[\"a\"]);\n} catch (TypeError $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    var_dump($a[\"0\"]);\n} catch (OutOfRangeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\ntry {\n    var_dump($a[\"9\"]);\n} catch (OutOfRangeException $e) {\n    echo \"Exception: \".$e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
