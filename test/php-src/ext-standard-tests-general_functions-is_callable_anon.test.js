// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/is_callable_anon.phpt
  it("Test is_callable() function : usage variations - anonymous class method", function () {
    expect(parser.parseCode("<?php\nnew class {\n    function __construct() {\n        $fname = null;\n        if (is_callable([$this, 'f'], false, $fname)) {\n            call_user_func($fname);\n        } else {\n            echo \"dang\\n\";\n        }\n    }\n    function f() {\n        echo \"nice\\n\";\n    }\n};\n?>")).toMatchSnapshot();
  });
});
