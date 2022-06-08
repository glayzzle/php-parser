// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/userstreams_007.phpt
  it("User-space streams: test metadata option", function () {
    expect(parser.parseCode("<?php\nclass test_wrapper {\n    function stream_open($path, $mode, $openedpath) {\n        return true;\n    }\n    public function stream_metadata($path, $option, $var) {\n        echo \"metadata: $path, $option\\n\";\n        if(is_array($var)) {\n            echo join(\",\", $var);\n        } else {\n            echo $var;\n        }\n        echo \"\\n\";\n        return false;\n    }\n}\nvar_dump(stream_wrapper_register('test', 'test_wrapper'));\n$fd = fopen(\"test://foo\",\"r\");\ntouch(\"test://testdir/touch\");\ntouch(\"test://testdir/touch\", 1);\ntouch(\"test://testdir/touch\", 1, 2);\nchown(\"test://testdir/chown\", \"test\");\nchown(\"test://testdir/chown\", 42);\nchgrp(\"test://testdir/chgrp\", \"test\");\nchgrp(\"test://testdir/chgrp\", 42);\nchmod(\"test://testdir/chmod\", 0755);\n?>")).toMatchSnapshot();
  });
});
