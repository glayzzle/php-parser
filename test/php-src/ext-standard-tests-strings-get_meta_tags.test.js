// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/get_meta_tags.phpt
  it("get_meta_tags() tests", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/get_meta_tags.html\";\n$data = <<<DATA\n<meta name=\"author\" content=\"name\">\n<meta name=\"keywords\" content=\"php documentation\">\n<meta name=\"DESCRIPTION\" content=\"a php manual\">\n<meta name=\"geo.position\" content=\"49.33;-86.59\">\n</head> <!-- parsing stops here -->\nDATA;\n$data1 = <<<DATA\n<html>\n    <head>\n        <meta name=\"author\" content=\"name\">\n        <meta name=\"keywords\" content=\"php documentation\">\n        <meta name=\"DESCRIPTION\" content=\"a php manual\">\n        <meta name=\"geo.position\" content=\"49.33;-86.59\">\n    </head>\n    <body>\n        <meta name=\"author\" content=\"name1\">\n        <meta name=\"keywords\" content=\"php documentation1\">\n        <meta name=\"DESCRIPTION\" content=\"a php manual1\">\n        <meta name=\"geo.position\" content=\"49.33;-86.591\">\n    </body>\n</html>\nDATA;\n$data2 = <<<DATA\n<meta name=\"author\" content=\"name\"\n<meta name=\"keywords\" content=\"php documentation\">\nDATA;\n$data3 = <<<DATA\n<meta <meta name=\"keywords\" content=\"php documentation\">\nDATA;\n$data4 = <<<DATA\n<meta name=\"author\" content=\"name\"\n<meta name=\"keywords\" content=\"php documentation\"\nDATA;\n$array = array($data, $data1, $data2, $data3, $data4, \"\", \"<>\", \"<meta<<<<<\");\nforeach ($array as $html) {\n    file_put_contents($filename, $html);\n    var_dump(get_meta_tags($filename));\n}\n@unlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
