describe('history factory', function () {
    beforeEach(function () {
        angular.mock.module('history');
        inject(function (historyStorage) {
            this.Parser = historyStorage;
        });
    });

    describe('getHistory', function () {
        it('should return history', function () {
            const history = this.Parser.getHistory();
            expect(history).toEqual([]);
        });
    });

    describe('setHistory', function () {
        it('should add element to history array', function () {
            const history = this.Parser.setHistory(1);
            expect(this.Parser.getHistory()).toEqual([1]);
        });
    });
});