// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78154.phpt
  it("Bug #78154: SEND_VAR_NO_REF does not always send reference", function () {
    expect(parser.parseCode("<?php\nnamespace {\n    try {\n        var_dump(similar_text('a', 'a', $c=0x44444444));\n        var_dump($c);\n    } catch (Throwable $e) {\n        echo \"Exception: \" . $e->getMessage() . \"\\n\";\n    }\n}\nnamespace Foo {\n    try {\n        var_dump(similar_text('a', 'a', $d=0x44444444));\n        var_dump($d);\n    } catch (\\Throwable $e) {\n        echo \"Exception: \" . $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
