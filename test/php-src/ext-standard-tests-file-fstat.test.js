// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fstat.phpt
  it("fstat() tests", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/fstat.dat\";\n$fp = fopen($filename, \"w\");\nvar_dump(fstat($fp));\nfclose($fp);\ntry {\n    var_dump(fstat($fp));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
