// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_iterator.phpt
  it("Test ResourceBundle iterator", function () {
    expect(parser.parseCode("<?php\n    include \"resourcebundle.inc\";\n    // fall back\n    $r = new ResourceBundle( 'en_US', BUNDLE );\n    foreach ($r as $onekey => $oneval) {\n        echo \"Here comes $onekey:\\n\";\n        switch (gettype($oneval)) {\n          case 'string':\n            echo bin2hex( $oneval ) . \"\\n\";\n            break;\n          case 'integer':\n            echo \"$oneval\\n\";\n            break;\n          default:\n            print_r( $oneval );\n        }\n        echo \"\\n\";\n    }\n    echo \"Testarray Contents:\\n\";\n    $r = $r->get( 'testarray' );\n    foreach ($r as $onekey => $oneval) {\n       echo \"$onekey => $oneval\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
