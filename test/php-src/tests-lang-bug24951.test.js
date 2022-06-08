// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug24951.phpt
  it("Bug #24951 (ob_flush() destroys output handler)", function () {
    expect(parser.parseCode("<?php\nfunction test($s, $mode)\n{\n    return (($mode & PHP_OUTPUT_HANDLER_START)?\"[\":\"\") . $s . (($mode & PHP_OUTPUT_HANDLER_END)?\"]\\n\":\"\");\n}\nfunction t1()\n{\n    ob_start(\"test\");\n    echo \"Hello from t1 1 \";\n        echo \"Hello from t1 2 \";\n        ob_end_flush();\n}\nfunction t2()\n{\n    ob_start(\"test\");\n    echo \"Hello from t2 1 \";\n        ob_flush();\n        echo \"Hello from t2 2 \";\n        ob_end_flush();\n}\nfunction t3()\n{\n    ob_start(\"test\");\n        echo \"Hello from t3 1 \";\n        ob_clean();\n        echo \"Hello from t3 2 \";\n        ob_end_flush();\n}\nt1(); echo \"\\n\";\nt2(); echo \"\\n\";\nt3(); echo \"\\n\";\n?>")).toMatchSnapshot();
  });
});
