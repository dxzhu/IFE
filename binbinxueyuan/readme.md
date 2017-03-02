# 2017百度IFE  斌斌学院

标签（空格分隔）： JavaScript初级

---

### [任务三：零基础JavaScript编码（三）](http://ife.baidu.com/course/detail/id/98)


>* JavaScript中高级选择器
>* 数组的遍历、读写、排序操作
>* 字符串的简单处理

    <ul id="source">
        <li>北京空气质量：<b>90</b></li>
        <li>上海空气质量：<b>70</b></li>
        <li>天津空气质量：<b>80</b></li>
        <li>广州空气质量：<b>50</b></li>
        <li>深圳空气质量：<b>40</b></li>
        <li>福州空气质量：<b>32</b></li>
        <li>成都空气质量：<b>90</b></li>
    </ul>
任务要求：
---

 1. getData() : 获取城市名及空气质量的数组 [['北京',90]...]
 2. sortApiData(data) : 按照空气质量对数组进行排序
 3. render(data) : 将排序后的数组渲染在DOM中

任务分析：
--- 
对于getData(),可以获取source下的所有li标签，然后对其进行遍历，每一个li标签内的innerText为   "北京空气质量：90"。这里获取了字符串之后，要将城市名和空气质量数值提取出来，在实际情况中，城市名为几个字符是不确定的，空气质量也是同理。我们可以利用string中的indexOf()方法获取"："的位置,然后使用str.slice()截取城市名和数值，然后使用array.push()方法传入数组；这样就得到了数组

    function getData() {
      var data = [];
      var li = source.getElementsByTagName('li');
      for(let i =0 ; i<li.length;i++){
        var arr =[];
        var str = li[i].innerText,
        num = str.indexOf('：');
        arr.push(str.slice(0,num-4))
        arr.push(str.slice(num+1))
        data.push(arr)
      }
      return data;
    }

对于sortApiData()使用sort方法对数组进行排序

    function sortAqiData(data) {
      return data.sort(function(a,b){
        return b[1]-a[1]
      })
    }

render()方法有很多
1. 使用innerHTML
2. 使用appendChild
