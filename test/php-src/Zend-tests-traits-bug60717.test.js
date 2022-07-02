// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bug60717.phpt
  it("Bug #60717 (Order of traits in use statement can cause unexpected unresolved abstract method)", function () {
    expect(parser.parseCode("<?php\nnamespace HTML\n{\n    interface Helper\n    {\n        function text($text);\n        function attributes(array $attributes = null);\n        function textArea(?array $attributes, $value);\n    }\n    trait TextUTF8\n    {\n        function text($text) {}\n    }\n    trait TextArea\n    {\n        function textArea(?array $attributes, $value) {}\n        abstract function attributes(array $attributes = null);\n        abstract function text($text);\n    }\n    trait HTMLAttributes\n    {\n        function attributes(array $attributes = null) {\t}\n        abstract function text($text);\n    }\n    class HTMLHelper implements Helper\n    {\n        use TextArea, HTMLAttributes, TextUTF8;\n    }\n    class HTMLHelper2 implements Helper\n    {\n        use TextArea, TextUTF8, HTMLAttributes;\n    }\n    class HTMLHelper3 implements Helper\n    {\n        use HTMLAttributes, TextArea, TextUTF8;\n    }\n    class HTMLHelper4 implements Helper\n    {\n        use HTMLAttributes, TextUTF8, TextArea;\n    }\n    class HTMLHelper5 implements Helper\n    {\n        use TextUTF8, TextArea, HTMLAttributes;\n    }\n    class HTMLHelper6 implements Helper\n    {\n        use TextUTF8, HTMLAttributes, TextArea;\n    }\n    $o = new HTMLHelper;\n    $o = new HTMLHelper2;\n    $o = new HTMLHelper3;\n    $o = new HTMLHelper4;\n    $o = new HTMLHelper5;\n    $o = new HTMLHelper6;\n    echo 'Done';\n}\n?>")).toMatchSnapshot();
  });
});
