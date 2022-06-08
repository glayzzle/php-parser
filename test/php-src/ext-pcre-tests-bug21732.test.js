// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug21732.phpt
  it("Bug #21732 (preg_replace() segfaults with invalid parameters)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    function cb($param) {\n        var_dump($param);\n        return \"yes!\";\n    }\n}\ntry {\n    var_dump(preg_replace('', array(), ''));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(preg_replace_callback(\"/(ab)(cd)(e)/\", array(new foo(), \"cb\"), 'abcde'));\n?>")).toMatchSnapshot();
  });
});
