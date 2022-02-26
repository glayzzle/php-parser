const parser = require("./main");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const code = `
  <?php
  class foo extends bar {
    const A = 1, B = 2, C = 3;
    protected $foo = null;
    public function __construct($a, $b, $c, array $d = []) {
      echo $a . $b . $c . implode(";", $d);
    }
    static public function bar(): foo {
      return new self(1, 2, 3);
    }
  }
  `;

suite.add("tokenizer", function () {
  const reader = new parser();
  reader.tokenGetAll(code);
});

suite.add("parser", function () {
  const reader = new parser();
  reader.parseCode(code);
});
suite.on("cycle", (event) => {
  console.log(String(event.target));
});
suite.run();
