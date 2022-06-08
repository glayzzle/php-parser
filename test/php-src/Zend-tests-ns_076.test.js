// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_076.phpt
  it("076: Unknown constants in namespace", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nuse Error;\ntry {\n    $a = array(unknown => unknown);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    echo unknown;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    echo \\unknown;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
