// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug43344_1.phpt
  it("Bug #43344.1 (Wrong error message for undefined namespace constant)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nuse Error;\nfunction f1($a=bar) {\n    return $a;\n}\nfunction f2($a=array(bar)) {\n    return $a[0];\n}\nfunction f3($a=array(bar=>0)) {\n    reset($a);\n    return key($a);\n}\ntry {\n    echo bar.\"\\n\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    echo f1().\"\\n\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    echo f2().\"\\n\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    echo f3().\"\\n\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
