// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/method_exists_002.phpt
  it("Testing method_exists()", function () {
    expect(parser.parseCode("<?php\nclass bar {\n    static public function stat_a2() {\n    }\n    static private function stat_b2() {\n    }\n    static protected function stat_c2() {\n    }\n    private function method_a() {\n    }\n    protected function method_b() {\n    }\n    public function method_c() {\n    }\n}\nclass baz extends bar {\n    static public function stat_a() {\n    }\n    static private function stat_b() {\n    }\n    static protected function stat_c() {\n    }\n    private function method_a() {\n    }\n    protected function method_b() {\n    }\n    public function method_c() {\n    }\n}\nvar_dump(method_exists('baz', 'stat_a'));\nvar_dump(method_exists('baz', 'stat_b'));\nvar_dump(method_exists('baz', 'stat_c'));\nprint \"----\\n\";\nvar_dump(method_exists('baz', 'stat_a2'));\nvar_dump(method_exists('baz', 'stat_b2'));\nvar_dump(method_exists('baz', 'stat_c2'));\nprint \"----\\n\";\n$baz = new baz;\nvar_dump(method_exists($baz, 'method_a'));\nvar_dump(method_exists($baz, 'method_b'));\nvar_dump(method_exists($baz, 'method_c'));\nprint \"----\\n\";\nvar_dump(method_exists($baz, 'stat_a'));\nvar_dump(method_exists($baz, 'stat_b'));\nvar_dump(method_exists($baz, 'stat_c'));\n?>")).toMatchSnapshot();
  });
});
