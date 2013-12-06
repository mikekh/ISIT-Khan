/**
 * @author Mike Khan
 */
describe("musicFactory Tests", function() {'use strict';

    var music = null;

    beforeEach(function() {
        module('musicMod');
    });

    beforeEach(inject(function($injector) {
        music = $injector.get('musicFactory');
    }));

    it("getMusicianFromAlbum test1", function() {
        expect(music.getMusicianFromAlbum("Shaman")).toEqual("Carlos Santana");
    });
    
    it("getMusicianFromAlbum test2", function() {
        expect(music.getMusicianFromAlbum("Kiss the Sky")).toEqual("Jimi Hendrix");
    });
    
    it("getMusicianFromAlbum test3", function() {
        expect(music.getMusicianFromAlbum("L.A. Woman")).toEqual("The Doors");
    });
    
    it("getMusicianFromAlbum test4", function() {
        expect(music.getMusicianFromAlbum("Red Octopus")).toEqual("Jefferson Starship");
    });
    
    it("getMusicianFromAlbum test5", function() {
        expect(music.getMusicianFromAlbum("Yellow Submarine")).toEqual("Beatles");
    });
    
    
    it("getAlbumFromMusician test1", function() {
        expect(music.getAlbumFromMusician("Carlos Santana")).toEqual("Shaman");
    });
    
    it("getAlbumFromMusician test2", function() {
        expect(music.getAlbumFromMusician("Jimi Hendrix")).toEqual("Kiss the Sky");
    });
    
    it("getAlbumFromMusician test3", function() {
        expect(music.getAlbumFromMusician("The Doors")).toEqual("L.A. Woman");
    });
    
    it("getAlbumFromMusician test4", function() {
        expect(music.getAlbumFromMusician("Jefferson Starship")).toEqual("Red Octopus");
    });
    
    it("getAlbumFromMusician test5", function() {
        expect(music.getAlbumFromMusician("Beatles")).toEqual("Yellow Submarine");
    });
});
    
describe("bookFactory Tests", function() {'use strict';

    var music = null;
    var book = null;

    beforeEach(function() {
        module('bookMod');
    });

    beforeEach(inject(function($injector) {
        book = $injector.get('bookFactory');
    }));

    it("getAuthorFromBook test1", function() {
        expect(book.getAuthorFromBook("Delphi 4 Unleashed")).toEqual("Charlie Calvert");
    });
    
    it("getAuthorFromBook test2", function() {
        expect(book.getAuthorFromBook("War and Peace")).toEqual("Leo Tolstoy");
    });
    
    it("getAuthorFromBook test3", function() {
        expect(book.getAuthorFromBook("Les Miserables")).toEqual("Victor Hugo");
    });
    
    it("getAuthorFromBook test4", function() {
        expect(book.getAuthorFromBook("The Black Girl in Search of God")).toEqual("George Bernard Shaw");
    });
    
    it("getAuthorFromBook test5", function() {
        expect(book.getAuthorFromBook("Roughing It")).toEqual("Mark Twain");
    });
    
  
    it("getBookFromAuthor test1", function() {
        expect(book.getBookFromAuthor("Mark Twain")).toEqual("Roughing It");
    });
    
    it("getBookFromAuthor test2", function() {
        expect(book.getBookFromAuthor("George Bernard Shaw")).toEqual("The Black Girl in Search of God");
    });
    
    it("getBookFromAuthor test3", function() {
        expect(book.getBookFromAuthor("Victor Hugo")).toEqual("Les Miserables");
    });
    
    it("getBookFromAuthor test4", function() {
        expect(book.getBookFromAuthor("Leo Tolstoy")).toEqual("War and Peace");
    });
    
    it("getBookFromAuthor test5", function() {
        expect(book.getBookFromAuthor("Charlie Calvert")).toEqual("Delphi 4 Unleashed");
    });
});
    
