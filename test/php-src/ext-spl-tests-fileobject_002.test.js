// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_002.phpt
  it("SPL: SplFileObject::fgetc", function () {
    expect(parser.parseCode("<?php\nfunction test($name)\n{\n    echo \"===$name===\\n\";\n    $o = new SplFileObject(__DIR__ . '/' . $name);\n    var_dump($o->key());\n    while(($c = $o->fgetc()) !== false)\n    {\n        // Kinda ugly but works around new lines mess\n        if ($c === \"\\r\") {\n            continue;\n        }\n        var_dump($o->key(), $c, $o->eof());\n    }\n    echo \"===EOF?===\\n\";\n    var_dump($o->eof());\n    var_dump($o->key());\n    var_dump($o->eof());\n}\ntest('fileobject_001a.txt');\ntest('fileobject_001b.txt');\n?>")).toMatchSnapshot();
  });
});
