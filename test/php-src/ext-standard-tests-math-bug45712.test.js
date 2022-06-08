// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug45712.phpt
  it("Bug #45712 (NaN/INF comparison)", function () {
    expect(parser.parseCode("<?php\n// NaN\n$nan = acos(1.01);\nvar_dump($nan);\nvar_dump(is_nan($nan));\n//\nvar_dump($nan=='');\nvar_dump($nan==0.5);\nvar_dump($nan==50);\nvar_dump($nan=='500');\nvar_dump($nan=='abc');\nvar_dump($nan==$nan);\n//\nvar_dump($nan==='');\nvar_dump($nan===0.5);\nvar_dump($nan===50);\nvar_dump($nan==='500');\nvar_dump($nan==='abc');\nvar_dump($nan===$nan);\n// INF\n$inf = pow(0,-2);\nvar_dump($inf);\nvar_dump(is_infinite($inf));\n//\nvar_dump($inf=='');\nvar_dump($inf==0.5);\nvar_dump($inf==50);\nvar_dump($inf=='500');\nvar_dump($inf=='abc');\nvar_dump($inf==$inf);\n//\nvar_dump($inf==='');\nvar_dump($inf===0.5);\nvar_dump($inf===50);\nvar_dump($inf==='500');\nvar_dump($inf==='abc');\nvar_dump($inf===$inf);\n?>")).toMatchSnapshot();
  });
});
