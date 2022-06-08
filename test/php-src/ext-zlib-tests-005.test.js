// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/005.phpt
  it("gzcompress()/gzuncompress() and invalid params", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gzcompress(\"\", 1000));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gzcompress(\"\", -1));\nvar_dump(gzcompress(\"\"));\nvar_dump(gzcompress(\"\", 9));\n$string = \"Answer me, it can't be so hard\nCry to relieve what's in your heart\nDesolation, grief and agony\";\nvar_dump($data1 = gzcompress($string));\nvar_dump($data2 = gzcompress($string, 9));\ntry {\n    var_dump(gzuncompress(\"\", 1000));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gzuncompress(\"\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gzuncompress(\"\"));\nvar_dump(gzuncompress(\"\", 9));\nvar_dump(gzuncompress($data1));\nvar_dump(gzuncompress($data2));\n$data2[4] = 0;\nvar_dump(gzuncompress($data2));\n?>")).toMatchSnapshot();
  });
});
