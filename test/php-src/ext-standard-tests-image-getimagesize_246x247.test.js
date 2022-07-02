// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/getimagesize_246x247.phpt
  it("GetImageSize() with 246x247 pixels", function () {
    expect(parser.parseCode("<?php\n    // Note: SWC requires zlib\n    $dir = opendir(__DIR__) or die('cannot open directory: '.__DIR__);\n    $result = array();\n    $files  = array();\n    while (($file = readdir($dir)) !== FALSE) {\n        if (preg_match('/^246x247\\./',$file)) {\n            $files[] = $file;\n        }\n    }\n    closedir($dir);\n    sort($files);\n    foreach($files as $file) {\n        $result[$file] = getimagesize(__DIR__.\"/$file\");\n    }\n    var_dump($result);\n?>")).toMatchSnapshot();
  });
});
