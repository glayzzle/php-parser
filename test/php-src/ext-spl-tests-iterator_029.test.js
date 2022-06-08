// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_029.phpt
  it("SPL: RegexIterator", function () {
    expect(parser.parseCode("<?php\n$ar = array(0, \"123\", 123, 22 => \"abc\", \"a2b\", 22, \"a2d\" => 7, 42);\nforeach(new RegexIterator(new ArrayIterator($ar), \"/2/\") as $k => $v)\n{\n    echo \"$k=>$v\\n\";\n}\n?>\n===KEY===\n<?php\nforeach(new RegexIterator(new ArrayIterator($ar), \"/2/\", 0, RegexIterator::USE_KEY) as $k => $v)\n{\n    echo \"$k=>$v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
