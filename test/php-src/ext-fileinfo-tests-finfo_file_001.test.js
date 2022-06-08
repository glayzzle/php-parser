// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_file_001.phpt
  it("finfo_file(): Testing file names", function () {
    expect(parser.parseCode("<?php\n$fp = finfo_open();\ntry {\n    var_dump(finfo_file($fp, \"\\0\"));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(finfo_file($fp, ''));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(finfo_file($fp, '.'));\nvar_dump(finfo_file($fp, '&'));\n?>")).toMatchSnapshot();
  });
});
