// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/passByReference_010.phpt
  it("Passing assignments by reference", function () {
    expect(parser.parseCode("<?php\nfunction f(&$a) {\n  var_dump($a);\n  $a = \"a.changed\";\n}\necho \"\\n\\n---> Pass constant assignment by reference:\\n\";\ntry {\n    f($a=\"a.original\");\n    var_dump($a);\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() .\"\\n\";\n}\necho \"\\n\\n---> Pass variable assignment by reference:\\n\";\ntry {\n    unset($a);\n    $a = \"a.original\";\n    f($b = $a);\n    var_dump($a);\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() .\"\\n\";\n}\necho \"\\n\\n---> Pass reference assignment by reference:\\n\";\ntry {\n    unset($a, $b);\n    $a = \"a.original\";\n    f($b =& $a);\n    var_dump($a);\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() .\"\\n\";\n}\necho \"\\n\\n---> Pass concat assignment by reference:\\n\";\ntry {\n    unset($a, $b);\n    $b = \"b.original\";\n    $a = \"a.original\";\n    f($b .= $a);\n    var_dump($a);\n} catch (Throwable $e) {\n    echo \"Exception: \" . $e->getMessage() .\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
