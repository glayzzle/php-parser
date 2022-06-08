// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/oci8/tests/null_byte_1.phpt
  it("Protect against null bytes in LOB filenames", function () {
    expect(parser.parseCode("<?php\n// See http://news.php.net/php.internals/50202\n//     http://svn.php.net/viewvc?view=revision&revision=311870\nrequire(__DIR__.'/connect.inc');\n// Run Test\necho \"Test 1: Import\\n\";\n$lob = oci_new_descriptor($c, OCI_D_LOB);\ntry {\n    $lob->saveFile(\"/tmp/abc\\0def\");\n} catch (ValueError $e) {\n       echo $e->getMessage(), \"\\n\";\n}\necho \"Test 2: Export\\n\";\ntry {\n    $lob->export(\"/tmp/abc\\0def\");\n} catch (ValueError $e) {\n       echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
