describe('history factory', function () {
    beforeEach(function () {
        angular.mock.module('history');
        inject(function (historyStorage) {
            this.Parser = historyStorage;
        });
    });

    describe('getHistory', function () {
        it('should return history', function () {
            this.Parser.setHistory(1);
            expect(this.Parser.getHistory()).toEqual([1]);
        });
    });

    describe('setHistory', function () {
        it('should add elements to history array', function () {
            this.Parser.setHistory(3);
            expect(this.Parser.getHistory()).toEqual([3]);
            
            this.Parser.setHistory(4);
            expect(this.Parser.getHistory()).toEqual([3, 4]);
        });
        it('should add element to localStorage', function () {
            localStorage.removeItem('cookieHistory');
            expect(localStorage.getItem('cookieHistory')).toEqual(null);
            
            this.Parser.setHistory(2);
            expect(localStorage.getItem('cookieHistory')).toEqual('[2]');
        });
    });

    describe('clearHistory', function () {
        it('should clear history array', function () {
            this.Parser.setHistory(1);
            this.Parser.clearHistory();

            expect(this.Parser.getHistory()).toEqual([]);
        });
        it('should clear localStorage', function () {
            this.Parser.setHistory(1);
            expect(localStorage.getItem('cookieHistory')).toEqual('[1]');

            this.Parser.clearHistory();
            expect(localStorage.getItem('cookieHistory')).toEqual(null);
        });
    });
});