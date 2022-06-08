// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/debug_backtrace_options.phpt
  it("debug_backtrace options", function () {
    expect(parser.parseCode("<?php\nfunction backtrace_print($opt = null)\n{\n    if(is_null($opt)) {\n        print_r(debug_backtrace());\n    } else {\n        print_r(debug_backtrace($opt));\n    }\n}\nfunction doit($a, $b, $how)\n{\n    echo \"==default\\n\";\n    $how();\n    echo \"==true\\n\";\n    $how(true);\n    echo \"==false\\n\";\n    $how(false);\n    echo \"==DEBUG_BACKTRACE_PROVIDE_OBJECT\\n\";\n    $how(DEBUG_BACKTRACE_PROVIDE_OBJECT);\n    echo \"==DEBUG_BACKTRACE_IGNORE_ARGS\\n\";\n    $how(DEBUG_BACKTRACE_IGNORE_ARGS);\n    echo \"==both\\n\";\n    $how(DEBUG_BACKTRACE_PROVIDE_OBJECT|DEBUG_BACKTRACE_IGNORE_ARGS);\n}\nclass foo {\n    protected function doCall($dowhat, $how)\n    {\n       $dowhat('a','b', $how);\n    }\n    static function statCall($dowhat, $how)\n    {\n        $obj = new self();\n        $obj->doCall($dowhat, $how);\n    }\n}\nfoo::statCall(\"doit\", \"debug_print_backtrace\");\nfoo::statCall(\"doit\", \"backtrace_print\");\n?>")).toMatchSnapshot();
  });
});
