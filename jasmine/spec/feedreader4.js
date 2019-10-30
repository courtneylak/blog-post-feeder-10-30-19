//jasmine test functions as follows (code that tests code...code here, code there...code, code, everywhere!):

$(function() {

    // A test suite that assures that the Udacity blog feeds display and navigate appropriately.

    describe('RSS Feeds', function() {

        // this tests to make sure that the blog feeds actually exist.

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // this tests to make sure that the blog url is active and works.
        
        it('url sub-component is defined and not empty', function() {
            for (url of allFeeds) {
                expect(url).toBeDefined();
                expect(url.length).not.toBe(0);
            };
        });

        // this tests to make sure that the blog name is present.

        it('name sub-component is defined and not empty', function() {
            for (name of allFeeds) {
                expect(name).toBeDefined();
                expect(name.length).not.toBe(0);
            };
        });

    });

    describe('The Menu', function() {

        // this tests to make sure the hamburger menu exists and functions accordingly.

        let x = document.body;
        menuIcon = $('.menu-icon-link');

        // this tests to make sure the side-bar menu doesn't inadvertantly appear before activated by user.

        it('menu element by default is hidden upon refreshing page', function() {
            expect(x.className).toContain('menu-hidden');
        });

        // this tests to make sure that when activated, the side-menu appears and disappears, accordingly.

        it('when clicked, menu becomes visible / invisible', function() {

            menuIcon.click();
            expect(x.className).not.toContain('menu-hidden');
            
            menuIcon.click();
            expect(x.className).toContain('menu-hidden');

        });

    });

    describe('Initial Entries', function() {

        // this tests to make sure the blog posts are uploaded, one by one, correctly by the server.

        var container = $('.feed');

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('Asynch: minimum 1 entry in the container of .feed', function(done) {
            expect($(`.entry, .feed`)).toBeDefined();
                done();
            });

    });

    describe('New Feed Selection', function() {

        // this tests to make sure that the uploaded blog posts are different.
        
        let feedOne;
        let feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                done();
            });

            loadFeed(1, function() {
                feedTwo = $('.feed').html();
                done();
            });

        });

        it('loaded new feed updates correctly', function() {
            expect (feedOne === feedTwo).toBe(false);
            });

    });

}());
