// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_bug70484.phpt
  it("Bug #70484 selectordinal doesn't work with named parameters", function () {
    expect(parser.parseCode("<?php\n$locale = array(\"de\", \"fr\", \"en\", \"ru\",);\n$data = array(42, 42.42, 2147483643, 2147483643.12345, 5);\nforeach ($locale as $lc) {\n    echo \"$lc string key\\n\";\n    $m = new MessageFormatter($lc, \"{n, selectordinal, =5 {five} zero {#-zero} one {#-one} two {#-two} few {#-few} many {#-many} other {#-other}}\");\n    foreach ($data as $i) {\n        var_dump($m->format(array(\"n\" => $i)));\n        if ($m->getErrorCode()) {\n            echo \"$lc $i \", $m->getErrorMessage();\n        }\n    }\n    echo \"\\n\";\n    echo \"$lc numeric key\\n\";\n    $m = new MessageFormatter($lc, \"{0, selectordinal, =5 {five} zero {#-zero} one {#-one} two {#-two} few {#-few} many {#-many} other {#-other}}\");\n    foreach ($data as $i) {\n        var_dump($m->format(array($i)));\n        if ($m->getErrorCode()) {\n            echo \"$lc $i \", $m->getErrorMessage();\n        }\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
