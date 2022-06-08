// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/007.phpt
  it("gzencode() and invalid params", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(gzencode(\"\", -10));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gzencode(\"\", 100));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(gzencode(\"\", 1, 100));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gzencode(\"\", -1, ZLIB_ENCODING_GZIP));\nvar_dump(gzencode(\"\", 9, ZLIB_ENCODING_DEFLATE));\n$string = \"Light of my sun\nLight in this temple\nLight in my truth\nLies in the darkness\";\ntry {\n    var_dump(gzencode($string, 9, 3));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(gzencode($string, -1, ZLIB_ENCODING_GZIP));\nvar_dump(gzencode($string, 9, ZLIB_ENCODING_DEFLATE));\n?>")).toMatchSnapshot();
  });
});
