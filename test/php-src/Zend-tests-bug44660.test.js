// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug44660.phpt
  it("Bug #44660 (Indexed and reference assignment to property of non-object don't trigger warning)", function () {
    expect(parser.parseCode("<?php\n$s = \"hello\";\n$a = true;\necho \"--> read access:\";\necho $a->p;\necho \"\\n--> direct assignment:\\n\";\ntry {\n    $a->p = $s;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n--> increment:\\n\";\ntry {\n    $a->p++;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n--> reference assignment:\\n\";\ntry {\n    $a->p =& $s;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n--> reference assignment:\\n\";\ntry {\n    $s =& $a->p;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n--> indexed assignment:\\n\";\ntry {\n    $a->p[0] = $s;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n--> Confirm assignments have had no impact:\\n\";\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
