// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzread_error2.phpt
  it("Test function gzread() by calling it invalid lengths", function () {
    expect(parser.parseCode("<?php\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\nvar_dump(gzread($h, 10));\ntry {\n    var_dump(gzread($h, 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gzread($h, 5));\ntry {\n    var_dump(gzread($h, -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gzread($h, 8));\ngzclose($h);\n?>")).toMatchSnapshot();
  });
});
