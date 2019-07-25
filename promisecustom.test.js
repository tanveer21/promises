const Treasure = require('./promisecustom.js');


describe('Treasure' , function(){
    

    it('should exist' , function(){
        expect(Treasure).toBeDefined();
    });


    it('should be a function' , function(){
        expect(typeof Treasure ).toBe("function");
    });




})