// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/006.phpt
  it("gzdeflate()/gzinflate() and invalid params", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gzcompress(\"\", 1000));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gzdeflate(\"\", -1));\nvar_dump(gzdeflate(\"\"));\nvar_dump(gzdeflate(\"\", 9));\n$string = \"Answer me, it can't be so hard\nCry to relieve what's in your heart\nDesolation, grief and agony\";\nvar_dump($data1 = gzdeflate($string));\nvar_dump($data2 = gzdeflate($string, 9));\nvar_dump(gzinflate(\"\"));\nvar_dump(gzinflate(\"asfwe\", 1000));\ntry {\n    var_dump(gzinflate(\"asdf\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gzinflate(\"asdf\"));\nvar_dump(gzinflate(\"asdf\", 9));\nvar_dump(gzinflate($data1));\nvar_dump(gzinflate($data2));\n$data2[4] = 0;\nvar_dump(gzinflate($data2));\n?>")).toMatchSnapshot();
  });
});
