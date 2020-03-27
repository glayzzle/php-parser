const parser = require("../main");

describe("foreach", function () {
  it("as variable", function () {
    expect(
      parser.parseEval(`
foreach ($array as $var) {
    echo $a;
}
    `)
    ).toMatchSnapshot();
  });

  it("as variable by ref", function () {
    expect(
      parser.parseEval(`
foreach ($array as &$var) {
    echo $a;
}
    `)
    ).toMatchSnapshot();
  });

  it("as list", function () {
    expect(
      parser.parseEval(`
foreach ($array as list($a, $b)) {
    echo $a;
}
    `)
    ).toMatchSnapshot();
  });

  it("as short list", function () {
    expect(
      parser.parseEval(`
foreach ($array as [$a, $b]) {
    echo $a;
}
    `)
    ).toMatchSnapshot();
  });

  it("as list with key", function () {
    expect(
      parser.parseEval(`
foreach ($array as $v => list($a, $b)) {
    echo $v;
}
    `)
    ).toMatchSnapshot();
  });

  it("as short list with key", function () {
    expect(
      parser.parseEval(`
foreach ($array as $v => [$a, $b]) {
    echo $v;
}
    `)
    ).toMatchSnapshot();
  });

  it("unpacking", function () {
    expect(
      parser.parseEval(`
foreach ([...$var, 2, 3, 4] as $value) {
   print_r($value);
}
    `)
    ).toMatchSnapshot();
  });

  it("unpacking #2", function () {
    expect(
      parser.parseEval(`
foreach (array(...$var, 2, 3, 4) as $value) {
   print_r($value);
}
    `)
    ).toMatchSnapshot();
  });

  it("unpacking #3", function () {
    expect(
      parser.parseEval(`
foreach ([[...$var], 2, 3, 4] as $value) {
   print_r($value);
}
    `)
    ).toMatchSnapshot();
  });

  it("unpacking #4", function () {
    expect(
      parser.parseEval(`
foreach (array(array(...$var), 2, 3, 4) as $value) {
   print_r($value);
}
    `)
    ).toMatchSnapshot();
  });
});
