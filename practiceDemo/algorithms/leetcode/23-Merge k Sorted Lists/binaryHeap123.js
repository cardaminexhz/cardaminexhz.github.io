/**
 * Created by carda on 2016/9/4.
 */

function BinaryHeap(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {

    push: function (elem) {
        this.content.push(elem);
        this.bubbleUp(this.content.length-1);
    },

    pop: function () {
        var elem = this.content[0],
            end = this.content.pop();

        if(this.content.length > 0) {
            this.content[0] = end;
            this.sinkDown(0);
        }

        return elem;
    },

    remove: function (elem) {
        var len = this.content.length;

        for(var i = 0; i < len; i++) {
            if(this.content[i] !== elem) continue;

            var end = this.content.pop();
            if(i === len-1) break;

            this.content[i] = end;
            this.bubbleUp(i);
            this.sinkDown(i);
            break;
        }
    },

    bubbleUp: function (n) {
        var elem = this.content[n],
            score = this.scoreFunction(elem);

        while(n > 0) {
            var parentN = Math.floor((n+1)/2) - 1,
                parent = this.content[parentN];

            if(score < this.scoreFunction(parent)) {
                this.content[n] = parent;
                this.content[parentN] = elem;

                n = parentN;
            } else {
                break;
            }
        }
    },
    
    sinkDown: function (n) {
        var len = this.content.length,
            elem = this.content[n],
            score = this.scoreFunction(elem);

        while(true) {
            var child1N = 2*(n+1)-1,
                child2N = 2*(n+1),
                swap = null;

            if(child1N < len) {
                var child1 = this.content[child1N],
                    child1Score = this.scoreFunction(child1);

                if(score > child1Score) {
                    swap = child1N;
                }
            }

            if(child2N < len) {
                var child2 = this.content[child2N],
                    child2Score = this.scoreFunction(child2);

                if(score > child2Score) {
                    swap = child2N;
                }
            }

            if(swap === null) break;

            this.content[n] = this.content[swap];
            this.content[swap] = elem;
            n = swap;
        }

    },

    print: function () {
        console.log(this.content.join(", "));
    }
};


// -------------------------------------- test
var heap = new BinaryHeap(function (x) {
    return x;
});

[3, 4, 5, 6, 8, 7].forEach(function (elem) {
    heap.push(elem);
});

heap.push(2);
heap.print();

console.log(heap.pop());
heap.print();

heap.remove(3);
heap.print();

