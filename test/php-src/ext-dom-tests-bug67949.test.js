// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug67949.phpt
  it("Bug #67949: DOMNodeList elements should be accessible through array notation", function () {
    expect(parser.parseCode("<?php\n$html = <<<HTML\n<div>data</div>\n<a href=\"test\">hello world</a>\nHTML;\n$doc = new DOMDocument;\n$doc->loadHTML($html);\n$nodes = $doc->getElementsByTagName('div');\necho \"testing has_dimension\\n\";\nvar_dump(isset($nodes[0]));\nvar_dump(isset($nodes[1]));\nvar_dump(isset($nodes[-1]));\necho \"testing property access\\n\";\nvar_dump($nodes[0]->textContent);\nvar_dump($nodes[1]->textContent);\necho \"testing offset not a long\\n\";\n$offset = ['test'];\nvar_dump($offset);\nvar_dump(isset($nodes[$offset]), $nodes[$offset]->textContent);\nvar_dump($offset);\n$something = 'test';\n$offset = &$something;\nvar_dump($offset);\nvar_dump(isset($nodes[$offset]), $nodes[$offset]->textContent);\nvar_dump($offset);\n$offset = 'test';\nvar_dump($offset);\nvar_dump(isset($nodes[$offset]), $nodes[$offset]->textContent);\nvar_dump($offset);\necho \"testing read_dimension with null offset\\n\";\ntry {\n    var_dump($nodes[][] = 1);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"testing attribute access\\n\";\n$anchor = $doc->getElementsByTagName('a')[0];\nvar_dump($anchor->attributes[0]->name);\necho \"==DONE==\\n\";\n?>")).toMatchSnapshot();
  });
});
