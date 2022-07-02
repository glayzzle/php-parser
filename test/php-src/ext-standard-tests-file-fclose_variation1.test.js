// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fclose_variation1.phpt
  it("fclose() actually closes streams with refcount > 1", function () {
    expect(parser.parseCode("<?php\n$s = fopen(__FILE__, \"rb\");\nfunction separate_zval(&$var) { }\n$s2 = $s;\nseparate_zval($s2);\nfclose($s);\ntry {\n    echo fread($s2, strlen(\"<?php\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\nDone.\\n\";\n?>")).toMatchSnapshot();
  });
});
