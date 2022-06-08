// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzclose_basic.phpt
  it("Test function gzclose() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\n// note that gzclose is an alias to fclose. parameter checking tests will be\n// the same as fclose\n$f = __DIR__.\"/004.txt.gz\";\n$h = gzopen($f, 'r');\ngzread($h, 20);\nvar_dump(gzclose($h));\n//should fail.\ntry {\n    gzread($h, 20);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$h = gzopen($f, 'r');\ngzread($h, 20);\nvar_dump(fclose($h));\n//should fail.\ntry {\n    gzread($h, 20);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
