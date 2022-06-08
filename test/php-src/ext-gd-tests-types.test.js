// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/types.phpt
  it("imagetypes", function () {
    expect(parser.parseCode("<?php\n$flags = imagetypes();\nif ($flags&0x1 && !function_exists(\"imagegif\")) {\n    echo \"gif failed\\n\";\n}\nif ($flags&0x2 && !function_exists(\"imagejpeg\")) {\n    echo \"jpeg failed\\n\";\n}\nif ($flags&0x4 && !function_exists(\"imagepng\")) {\n    echo \"png failed\\n\";\n}\nif ($flags&0x8 && !function_exists(\"imagewbmp\")) {\n    echo \"wbmp failed\\n\";\n}\nif ($flags&16 && !function_exists(\"imagecreatefromxpm\")) {\n    echo \"xom failed\\n\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
