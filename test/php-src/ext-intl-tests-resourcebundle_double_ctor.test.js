// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_double_ctor.phpt
  it("ResourceBundle double construction should not be allowed", function () {
    expect(parser.parseCode("<?php\ninclude \"resourcebundle.inc\";\n$r = new ResourceBundle('en_US', BUNDLE);\ntry {\n    $r->__construct('en_US', BUNDLE);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
