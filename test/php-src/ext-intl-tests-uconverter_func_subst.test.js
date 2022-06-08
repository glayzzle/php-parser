// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_func_subst.phpt
  it("Basic UConverter::convert() w/ Subsitution", function () {
    expect(parser.parseCode("<?php\nforeach(array('?','','??') as $subst) {\n  $opts = array('to_subst' => $subst);\n  $ret = UConverter::transcode(\"This is an ascii string\", 'ascii', 'utf-8', $opts);\n  if ($ret === FALSE) {\n    echo \"Error: \", intl_get_error_message(), \"\\n\";\n  } else {\n    var_dump($ret);\n  }\n  $ret = UConverter::transcode(\"Snowman: (\\xE2\\x98\\x83)\", 'ascii', 'utf-8', $opts);\n  if ($ret === FALSE) {\n    echo \"Error: \", intl_get_error_message(), \"\\n\";\n  } else {\n    var_dump($ret);\n  }\n}\n?>")).toMatchSnapshot();
  });
});
