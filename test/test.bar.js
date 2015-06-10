describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

   describe('create a new bar', function() {
    it('should create a new instance of bar', function () {
      expect(bar instanceof Bar).to.equal(true);
    });
  });

  describe('squared', function() {
    it('is a method', function() {
      expect(typeof bar.squared).eq('function');
    });

    it('multiplies a number by itself', function() {
      expect(bar.squared(3)).eq(9);
    });
  });

  describe('cubed', function() {
    it('returns a number raised to the 3rd power', function () {
      expect(bar.cubed(2)).eq(8);
    });
  });

  describe('exponentOf', function () {
    it('is a method', function () {
      expect(typeof bar.exponentOf).eq('function');
    });

    it('returns a function that accepts another number', function () {
      expect(bar.exponentOf(5)).to.be.a('function');
    });
  });

  describe('reverseString', function () {
    it('should accept a word or words', function() {
      expect(bar.reverseString('whaaaat?')).to.be.a('string');
    });

    it('returns a string in reverse', function() {
      expect(bar.reverseString('stressed')).eq('desserts');
    });
  });

  describe("cipher", function () {
    it('returns a string encoded with Unicode values', function() {
      expect(bar.cipher("atlanta")).eq('ÅØÐÅÒØÅ');
    })
  });

  describe("decipher", function () {
    it('converts a coded string into normal language', function() {
      expect(bar.decipher("ÍÖÓÒÝÅÖÈ")).eq("iron yard");
    });
  });

  describe("rot13", function () {
    it('returns a sentence coded', function() {
      expect(bar.rot13("When is the weekend coming?")).eq("Jura vf gur jrrxraq pbzvat?");
    })
  });

});

