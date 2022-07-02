// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/url/bug52327.phpt
  it("Bug #52327 (base64_decode() improper handling of leading padding)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    base64_decode('=VGhl=ICc9=JyBz=eW1i=b2xz=IGFy=ZW4n=dCBh=bGxv=d2Vk=IHdo=ZXJl=IGkg=cHV0=IHRo=ZW0g=by5P'),\n    base64_decode('=VGhl=ICc9=JyBz=eW1i=b2xz=IGFy=ZW4n=dCBh=bGxv=d2Vk=IHdo=ZXJl=IGkg=cHV0=IHRo=ZW0g=by5P', true)\n);\n?>")).toMatchSnapshot();
  });
});
