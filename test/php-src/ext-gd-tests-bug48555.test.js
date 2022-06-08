// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gd/tests/bug48555.phpt
  it("Bug #48555 (ImageFTBBox() differs from previous versions for texts with new lines)", function () {
    expect(parser.parseCode("<?php\n$cwd = __DIR__;\n$font = \"$cwd/Tuffy.ttf\";\n$box = ImageFTBBox(14, 0, $font, \"Text without line-break\");\n//echo 'Top without line-break: ' . $box[7] . \"\\n\";\n$without_line_break = $box[7];\n$box = ImageFTBBox(14, 0, $font, \"Text with\\nline-break\\none more\");\n//echo 'Top with line-break: ' . $box[7] . \"\\n\";\n$with_line_break = $box[7];\nvar_dump($without_line_break);\nvar_dump($with_line_break);\nif ($with_line_break==$without_line_break) {\n  echo \"with line break == without line break\".PHP_EOL;\n} else {\n  echo \"with line break != without line break\".PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
