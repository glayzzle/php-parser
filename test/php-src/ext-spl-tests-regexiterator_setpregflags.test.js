// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/regexiterator_setpregflags.phpt
  it("SPL: RegexIterator::setPregFlags()", function () {
    expect(parser.parseCode("<?php\nclass myIterator implements Iterator {\nfunction current (): mixed{ return null;}\nfunction key ( ): mixed{ return \"\";}\nfunction next ( ): void{}\nfunction rewind ( ): void{}\nfunction valid ( ): bool{}\n}\nclass TestRegexIterator extends RegexIterator{}\n$rege = '/^a/';\n$r = new TestRegexIterator(new myIterator, $rege);\n$r->setPregFlags(PREG_OFFSET_CAPTURE);\necho $r->getPregFlags();\n?>")).toMatchSnapshot();
  });
});
