// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/007.phpt
  it("Verbose  tidy_getopt()", function () {
    expect(parser.parseCode("<?php\n$a = new tidy(__DIR__.\"/007.html\");\necho \"Current Value of 'tidy-mark': \";\nvar_dump($a->getopt(\"tidy-mark\"));\necho \"Current Value of 'error-file': \";\nvar_dump($a->getopt(\"error-file\"));\necho \"Current Value of 'tab-size': \";\nvar_dump($a->getopt(\"tab-size\"));\ntry {\n    $a->getopt('bogus-opt');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    tidy_getopt($a, 'non-ASCII string ���');\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
