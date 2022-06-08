// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ord.phpt
  it("mb_ord()", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    0x20bb7 === mb_ord(\"\\u{20bb7}\"),\n    false === mb_ord(\"\\u{d800}\"),\n    0x50aa === mb_ord(\"\\x8f\\xa1\\xef\", \"EUC-JP-2004\")\n);\n// Empty string\ntry {\n    var_dump( mb_ord(\"\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// Invalid\ntry {\n    var_dump( mb_ord(\"\\u{d800}\", \"typo\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_ord(\"\\u{d800}\", \"pass\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_ord(\"\\u{d800}\", \"jis\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_ord(\"\\u{d800}\", \"cp50222\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_ord(\"\\u{d800}\", \"utf-7\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nmb_internal_encoding(\"utf-7\");\ntry {\n    var_dump( mb_ord(\"\\u{d800}\") );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
