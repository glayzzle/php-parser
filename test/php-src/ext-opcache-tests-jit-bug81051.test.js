// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug81051.phpt
  it("Bug #80839: PHP problem with JIT", function () {
    expect(parser.parseCode("<?php\nclass Binary{\n\tpublic static function readUnsignedVarInt(string $buffer, int &$offset) : int{\n\t\t$offset++;\n\t\treturn 0;\n\t}\n}\nclass BinaryStream{\n\tprivate string $buffer;\n\tprivate int $offset;\n\tpublic function __construct(string $buffer, int $offset = 0){\n\t\t$this->buffer = $buffer;\n\t\t$this->offset = $offset;\n\t}\n\tpublic function getUnsignedVarInt() : int{\n\t\treturn Binary::readUnsignedVarInt($this->buffer, $this->offset);\n\t}\n\tpublic function get(int $len) : string{\n\t\treturn $len === 1 ? $this->buffer[$this->offset++] : substr($this->buffer, ($this->offset += $len) - $len, $len);\n\t}\n}\n$stream = new BinaryStream(str_repeat(\"\\x01a\", 1000));\nvar_dump($stream->getUnsignedVarInt());\nvar_dump($stream->get(1));\n?>")).toMatchSnapshot();
  });
});
