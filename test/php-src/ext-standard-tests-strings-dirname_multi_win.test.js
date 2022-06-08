// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/dirname_multi_win.phpt
  it("Test dirname() function : usage variations", function () {
    expect(parser.parseCode("<?php\nfor ($i=0 ; $i<5 ; $i++) {\n    try {\n        var_dump(dirname(\"/foo/bar/baz\", $i));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\nvar_dump(dirname(\"/foo/bar/baz\", PHP_INT_MAX));\nvar_dump(dirname(\"g:/foo/bar/baz\", PHP_INT_MAX));\nvar_dump(dirname(\"g:foo/bar/baz\", PHP_INT_MAX));\n?>")).toMatchSnapshot();
  });
});
