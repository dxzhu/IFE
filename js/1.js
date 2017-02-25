//不同浏览器对事件绑定函数的处理有差异
function addEvent(element, e, listener) {
    if (element.addEventListener) {
        element.addEventListener(e, listener, false)
    } else if (element.attachEvent) {
        element.attachEvent('on' + e, listener)
    } else {
        element['on' + listener] = listener;
    }
}

//遍历数组的方法

function each(items, fn) {
    for (let i = 0; i < items.length; i++) {
        fn(items[i], i)
    }
}

window.onload = function() {
    var container = document.getElementById('game'),
        btn = document.getElementsByTagName('button'),
        input = document.getElementById('input'),
        game = {
            list: [],
            leftPush: function(num) {
                this.list.unshift(num);
                this.paint();
            },
            rightPush: function(num) {
                this.list.push(num);
                this.paint();
            },
            isEmpty: function() {
                return (this.list.length === 0)
            },
            leftPop: function() {
                if (!this.isEmpty()) {
                    alert('您删除的是：' + this.list.shift());
                    this.paint();
                } else {
                    alert('列表已空');
                }
            },
            rightPop: function() {
                if (!this.isEmpty()) {
                    alert('您删除的是：' + this.list.pop());
                    this.paint();
                } else {
                    alert('列表已空');
                }
            },
            paint: function() {
                var str = '';
                each(this.list, function(item) {
                    str += '<span>' + item + '</span>';
                });
                container.innerHTML = str;
                addSpanDelEvent();
            },
            deleteID: function(id) {
                this.list.splice(id, 1);
                this.paint()
            }
        }

    //绑定删除事件
    function addSpanDelEvent() {
        for (let i = 0; i < game.list.length; i++) {
            addEvent(container.childNodes[i], click, function() {
                return function() {
                    return game.deleteID(i)
                }
            }(i))
        }
    }

    addEvent(btn[0], 'click', function() {
        var val = input.value;
        if ((/^[0-9]+$/).test(val)) {
            game.leftPush(val);
        } else {
            alert('输入非法！')
        }
    });
    addEvent(btn[1], 'click', function() {
        var val = input.value;
        if ((/^[0-9]+$/).test(val)) {
            game.rightPush(val)
        } else {
            alert('输入非法！')
        }
    });
    addEvent(btn[2], 'click', function() { game.leftPop() });
    addEvent(btn[3], 'click', function() { game.rightPop() })


}
