// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-write-properties-cache-slot.phpt
  it("Readonly enum properties should not be writable via cache slot merging", function () {
    expect(parser.parseCode("<?php\nenum Test {\n    case A;\n    public function modify() {\n        // Cache slots for the read and write are merged.\n        var_dump($this->name);\n        $this->name = 'foobar';\n    }\n}\ntry {\n    Test::A->modify();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(Test::A->name);\n?>")).toMatchSnapshot();
  });
});
