wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: '{$appid}', // 必填，公众号的唯一标识
        timestamp: "{$signPackage.timestamp}", // 必填，生成签名的时间戳
        nonceStr: '{$signPackage.nonceStr}', // 必填，生成签名的随机串
        signature: '{$signPackage.signature}',// 必填，签名，见附录1
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
wx.ready(function(){
    var baseURL = 'http://og4jdajcq.bkt.clouddn.com/';
    var list1 = [
            {
                quesNum: '1-1',
                portraitName: '安藤忠雄',
                portraitQues: '下面哪個不是安藤忠雄的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-1.jpg',
                optionUrlA: baseURL + 'right-1-1.jpg',
                optionUrlB: baseURL + 'wrong1-1-1.jpg',
                optionUrlC: baseURL + 'wrong2-1-1.jpg',
                optionUrlD: baseURL + 'wrong3-1-1.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-1',
                portraitName: '雷姆·庫哈斯',
                portraitQues: '下面哪個不是雷姆·庫哈斯的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-1.jpg',
                optionUrlA: baseURL + 'right-2-1.jpg',
                optionUrlB: baseURL + 'wrong1-2-1.jpg',
                optionUrlC: baseURL + 'wrong2-2-1.jpg',
                optionUrlD: baseURL + 'wrong3-2-1.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-1',
                portraitName: '弗蘭克·蓋里',
                portraitQues: '下面哪個是弗蘭克·蓋里的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-1.jpg',
                optionUrlA: baseURL + 'right-3-1.jpg',
                optionUrlB: baseURL + 'wrong1-3-1.jpg',
                optionUrlC: baseURL + 'wrong2-3-1.jpg',
                optionUrlD: baseURL + 'wrong3-3-1.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list2 = [
            {
                quesNum: '1-2',
                portraitName: '藍天組',
                portraitQues: '下面哪個不是藍天組的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-1.jpg',
                optionUrlA: baseURL + 'right-1-2.jpg',
                optionUrlB: baseURL + 'wrong1-1-2.jpg',
                optionUrlC: baseURL + 'wrong2-1-2.jpg',
                optionUrlD: baseURL + 'wrong3-1-2.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-2',
                portraitName: '雷姆·庫哈斯',
                portraitQues: '下面哪個不是雷姆·庫哈斯的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-2.jpg',
                optionUrlA: baseURL + 'right-2-2.jpg',
                optionUrlB: baseURL + 'wrong1-2-2.jpg',
                optionUrlC: baseURL + 'wrong2-2-2.jpg',
                optionUrlD: baseURL + 'wrong3-2-2.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-2',
                portraitName: '弗蘭克·蓋里',
                portraitQues: '下面哪個是弗蘭克·蓋里的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-2.jpg',
                optionUrlA: baseURL + 'right-3-2.jpg',
                optionUrlB: baseURL + 'wrong1-3-2.jpg',
                optionUrlC: baseURL + 'wrong2-3-2.jpg',
                optionUrlD: baseURL + 'wrong3-3-2.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list3 = [
            {
                quesNum: '1-3',
                portraitName: '倫佐·皮亞諾',
                portraitQues: '下面哪個不是倫佐·皮亞諾的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-3.jpg',
                optionUrlA: baseURL + 'right-1-3.jpg',
                optionUrlB: baseURL + 'wrong1-1-3.jpg',
                optionUrlC: baseURL + 'wrong2-1-3.jpg',
                optionUrlD: baseURL + 'wrong3-1-3.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-3',
                portraitName: '倫佐·皮亞諾',
                portraitQues: '下面哪個不是倫佐·皮亞諾的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-3.jpg',
                optionUrlA: baseURL + 'right-2-3.jpg',
                optionUrlB: baseURL + 'wrong1-2-3.jpg',
                optionUrlC: baseURL + 'wrong2-2-3.jpg',
                optionUrlD: baseURL + 'wrong3-2-3.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-3',
                portraitName: '弗蘭克·蓋里',
                portraitQues: '下面哪個不是弗蘭克·蓋里的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-3.jpg',
                optionUrlA: baseURL + 'right-3-3.jpg',
                optionUrlB: baseURL + 'wrong1-3-3.jpg',
                optionUrlC: baseURL + 'wrong2-3-3.jpg',
                optionUrlD: baseURL + 'wrong3-3-3.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list4 = [
            {
                quesNum: '1-4',
                portraitName: '隈研吾',
                portraitQues: '下面哪個不是隈研吾的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-4.jpg',
                optionUrlA: baseURL + 'right-1-4.jpg',
                optionUrlB: baseURL + 'wrong1-1-4.jpg',
                optionUrlC: baseURL + 'wrong2-1-4.jpg',
                optionUrlD: baseURL + 'wrong3-1-4.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-4',
                portraitName: '雷姆·庫哈斯',
                portraitQues: '下面哪個不是雷姆·庫哈斯的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-4.jpg',
                optionUrlA: baseURL + 'right-2-4.jpg',
                optionUrlB: baseURL + 'wrong1-2-4.jpg',
                optionUrlC: baseURL + 'wrong2-2-4.jpg',
                optionUrlD: baseURL + 'wrong3-2-4.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-4',
                portraitName: '藍天組',
                portraitQues: '下面哪個不是藍天組的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-4.jpg',
                optionUrlA: baseURL + 'right-3-4.jpg',
                optionUrlB: baseURL + 'wrong1-3-4.jpg',
                optionUrlC: baseURL + 'wrong2-3-4.jpg',
                optionUrlD: baseURL + 'wrong3-3-4.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list5 = [
            {
                quesNum: '1-5',
                portraitName: '扎哈·哈達迪',
                portraitQues: '下面哪個不是扎哈·哈達迪的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-5.jpg',
                optionUrlA: baseURL + 'right-1-5.jpg',
                optionUrlB: baseURL + 'wrong1-1-5.jpg',
                optionUrlC: baseURL + 'wrong2-1-5.jpg',
                optionUrlD: baseURL + 'wrong3-1-5.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-5',
                portraitName: '丹尼爾·里伯斯金',
                portraitQues: '下面哪個不是丹尼爾·里伯斯金的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-5.jpg',
                optionUrlA: baseURL + 'right-2-5.jpg',
                optionUrlB: baseURL + 'wrong1-2-5.jpg',
                optionUrlC: baseURL + 'wrong2-2-5.jpg',
                optionUrlD: baseURL + 'wrong3-2-5.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-5',
                portraitName: '弗蘭克·勞埃德·賴特',
                portraitQues: '下面哪個不是弗蘭克·勞埃德·賴特的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-5.jpg',
                optionUrlA: baseURL + 'right-3-5.jpg',
                optionUrlB: baseURL + 'wrong1-3-5.jpg',
                optionUrlC: baseURL + 'wrong2-3-5.jpg',
                optionUrlD: baseURL + 'wrong3-3-5.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list6 = [
            {
                quesNum: '1-6',
                portraitName: '斯蒂文·霍爾',
                portraitQues: '下面哪個不是斯蒂文·霍爾的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-6.jpg',
                optionUrlA: baseURL + 'right-1-6.jpg',
                optionUrlB: baseURL + 'wrong1-1-6.jpg',
                optionUrlC: baseURL + 'wrong2-1-6.jpg',
                optionUrlD: baseURL + 'wrong3-1-6.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-6',
                portraitName: '丹下健三',
                portraitQues: '下面哪個不是丹下健三的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-6.jpg',
                optionUrlA: baseURL + 'right-2-6.jpg',
                optionUrlB: baseURL + 'wrong1-2-6.jpg',
                optionUrlC: baseURL + 'wrong2-2-6.jpg',
                optionUrlD: baseURL + 'wrong3-2-6.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-6',
                portraitName: '丹下健三',
                portraitQues: '下面哪個不是丹下健三的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-6.jpg',
                optionUrlA: baseURL + 'right-3-6.jpg',
                optionUrlB: baseURL + 'wrong1-3-6.jpg',
                optionUrlC: baseURL + 'wrong2-3-6.jpg',
                optionUrlD: baseURL + 'wrong3-3-6.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list7 = [
            {
                quesNum: '1-7',
                portraitName: '湯姆·梅恩',
                portraitQues: '下面哪個不是湯姆·梅恩的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-7.jpg',
                optionUrlA: baseURL + 'right-1-7.jpg',
                optionUrlB: baseURL + 'wrong1-1-7.jpg',
                optionUrlC: baseURL + 'wrong2-1-7.jpg',
                optionUrlD: baseURL + 'wrong3-1-7.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-7',
                portraitName: '丹下健三',
                portraitQues: '下面哪個不是丹下健三的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-7.jpg',
                optionUrlA: baseURL + 'right-2-7.jpg',
                optionUrlB: baseURL + 'wrong1-2-7.jpg',
                optionUrlC: baseURL + 'wrong2-2-7.jpg',
                optionUrlD: baseURL + 'wrong3-2-7.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-7',
                portraitName: '奧斯卡·尼邁耶',
                portraitQues: '下面哪個不是奧斯卡·尼邁耶的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-7.jpg',
                optionUrlA: baseURL + 'right-3-7.jpg',
                optionUrlB: baseURL + 'wrong1-3-7.jpg',
                optionUrlC: baseURL + 'wrong2-3-7.jpg',
                optionUrlD: baseURL + 'wrong3-3-7.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list8 = [
            {
                quesNum: '1-8',
                portraitName: '亞力杭德羅·阿拉維納',
                portraitQues: '下面哪個不是亞力杭德羅·阿拉維納的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-8.jpg',
                optionUrlA: baseURL + 'right-1-8.jpg',
                optionUrlB: baseURL + 'wrong1-1-8.jpg',
                optionUrlC: baseURL + 'wrong2-1-8.jpg',
                optionUrlD: baseURL + 'wrong3-1-8.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-8',
                portraitName: '奧斯卡·尼邁耶',
                portraitQues: '下面哪個不是奧斯卡·尼邁耶的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-8.jpg',
                optionUrlA: baseURL + 'right-2-8.jpg',
                optionUrlB: baseURL + 'wrong1-2-8.jpg',
                optionUrlC: baseURL + 'wrong2-2-8.jpg',
                optionUrlD: baseURL + 'wrong3-2-8.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-8',
                portraitName: '路易斯·康',
                portraitQues: '下面哪個不是路易斯·康的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-8.jpg',
                optionUrlA: baseURL + 'right-3-8.jpg',
                optionUrlB: baseURL + 'wrong1-3-8.jpg',
                optionUrlC: baseURL + 'wrong2-3-8.jpg',
                optionUrlD: baseURL + 'wrong3-3-8.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list9 = [
            {
                quesNum: '1-9',
                portraitName: '阿爾多·羅西',
                portraitQues: '下面哪個不是阿爾多·羅西的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-9.jpg',
                optionUrlA: baseURL + 'right-1-9.jpg',
                optionUrlB: baseURL + 'wrong1-1-9.jpg',
                optionUrlC: baseURL + 'wrong2-1-9.jpg',
                optionUrlD: baseURL + 'wrong3-1-9.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-9',
                portraitName: '黑川紀章',
                portraitQues: '下面哪個不是黑川紀章的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-9.jpg',
                optionUrlA: baseURL + 'right-2-9.jpg',
                optionUrlB: baseURL + 'wrong1-2-9.jpg',
                optionUrlC: baseURL + 'wrong2-2-9.jpg',
                optionUrlD: baseURL + 'wrong3-2-9.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-9',
                portraitName: '湯姆·梅恩',
                portraitQues: '下面哪個不是湯姆·梅恩的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-9.jpg',
                optionUrlA: baseURL + 'right-3-9.jpg',
                optionUrlB: baseURL + 'wrong1-3-9.jpg',
                optionUrlC: baseURL + 'wrong2-3-9.jpg',
                optionUrlD: baseURL + 'wrong3-3-9.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ],
        list10 = [
            {
                quesNum: '1-10',
                portraitName: '阿爾瓦羅·西扎',
                portraitQues: '下面哪個不是阿爾瓦羅·西扎的作品？',
                portraitPicUrl: baseURL + 'fengmian-1-10.jpg',
                optionUrlA: baseURL + 'right-1-10.jpg',
                optionUrlB: baseURL + 'wrong1-1-10.jpg',
                optionUrlC: baseURL + 'wrong2-1-10.jpg',
                optionUrlD: baseURL + 'wrong3-1-10.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '2-10',
                portraitName: '黑川紀章',
                portraitQues: '下面哪個不是黑川紀章的作品？',
                portraitPicUrl: baseURL + 'fengmian-2-10.jpg',
                optionUrlA: baseURL + 'right-2-10.jpg',
                optionUrlB: baseURL + 'wrong1-2-10.jpg',
                optionUrlC: baseURL + 'wrong2-2-10.jpg',
                optionUrlD: baseURL + 'wrong3-2-10.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            },
            {
                quesNum: '3-10',
                portraitName: '雷姆·庫哈斯',
                portraitQues: '下面哪個不是雷姆·庫哈斯的作品？',
                portraitPicUrl: baseURL + 'fengmian-3-10.jpg',
                optionUrlA: baseURL + 'right-3-10.jpg',
                optionUrlB: baseURL + 'wrong1-3-10.jpg',
                optionUrlC: baseURL + 'wrong2-3-10.jpg',
                optionUrlD: baseURL + 'wrong3-3-10.jpg',
                aValue: 1,      
                bValue: 3,
                cValue: 2,
                dValue: 4,
                answer: -1
            }
        ];
    var listAll = [list1,list2,list3,list4,list5,list6,list7,list8,list9,list10];
    var listDisplay = listAll.map(function(x){
        var n = parseInt(Math.random()*3);
        return x[n];
    });

    var shareTitle='';//用来动态更改分享标题
    var vm = new Vue({
        el: '#app',
        data: {
            displayItems: listDisplay,
            answerList: [],//答题过程中收集的答案list，包括题号和答案正确与否
            rightNums: 0,   //答对题目的个数
            rightNames: '', //答对题目的相关人名
            wrongNames: '',  //答错题目的相关人名
            comment: ''
        },
        methods: {
            collectAnswer: function () {
                this.displayItems.forEach((x) => {
                    this.answerList.push({
                        num: x.quesNum,
                        answer: x.answer
                    });
                    //取得正确和错误的题目的名字，以便展示在最后一页
                    if(x.answer == 1){
                        this.rightNums++;
                        this.rightNames = (this.rightNames=='')?this.rightNames.concat(x.portraitName):this.rightNames.concat(','+x.portraitName);
                    } else {
                        this.wrongNames = (this.wrongNames=='')?this.wrongNames.concat(x.portraitName):this.wrongNames.concat(','+x.portraitName);
                    };
                });
            },
            setComment:function(ratio){
                //设置最后的评语
                var ratioText = ratio*100 + '%';
                if(0<=this.rightNums<4){
                    this.comment = '您已經擊敗了全國'+ratioText+'的對手，大師作品是什麼，他認識我，可我不認識他';
                } else if(4<=this.rightNums<6) {
                    this.comment = '您已經擊敗了全國'+ratioText+'的對手，一臉萌比不會做您已经击败了全国40%的对手，一脸萌比不会做。';
                } else if(6<=this.rightNums<8) {
                    this.comment = '您已經擊敗了全國'+ratioText+'的對手，不要小看自己，不信讓同學來答題哦。';
                }else if(8<=this.rightNums<10) {
                    this.comment = '您已經擊敗了全國'+ratioText+'的對手，沒想到是這樣的大師作品';
                }else {
                    this.comment = '你是建築圈百曉生麼？建築圈無人不知，無人不曉';
                }
            },
            setShareTitle:function(shareTitle){
                //设置分享title
                if(0<=this.rightNums<4){
                    shareTitle = '我在建筑大师游戏中答对了' + this.rightNums +'道题，大师作品是什么，他认识我，可我不认识他';
                } else if(4<=this.rightNums<6) {
                    shareTitle = '我在建筑大师游戏中答对了' + this.rightNums +'道题，一脸萌比，不会做';
                } else if(6<=this.rightNums<8) {
                    shareTitle = '我在建筑大师游戏中答对了' + this.rightNums +'道题，不要小看我，不信你来答。';
                }else if(8<=this.rightNums<10) {
                    shareTitle = '我在建筑大师游戏中答对了' + this.rightNums +'道题，没想到是这样的大师作品。';
                }else {
                    shareTitle = '哈哈哈，我在建筑大师游戏中答对了10道题，建筑圈百晓生就是在下。';
                }
                console.log(shareTitle);
            },
            next: function () {
                nextPage.next();
            },
            submit: function (num) {
                this.next();
                this.collectAnswer();
                this.setShareTitle();
                this.setComment(0.44);
                //提交逻辑
                runJSONP(this.answerList, function (ratio,num) {
                    // vm.setComment(ratio);
                    // this.answerList = [];
                    // wx.onMenuShareTimeline({
                    //     title: '我做对了'+num+'题，击败了'+rate+'人，你来看看？', // 分享标题
                    //     link: 'baidu.com', // 分享链接
                    //     imgUrl: 'shit', // 分享图标
                    //     success: function () {
                    //         // 用户确认分享后执行的回调函数
                    //     },
                    //     cancel: function () {
                    //         // 用户取消分享后执行的回调函数
                    //     }
                    // });
                });
                
            }

        }
    });

    var url = "http://test.squarance.com/game.php";
    function callback() {
        console.log(arguments);
    }
    var _game_call_back_shit_not_conflict_ = callback;
    function runJSONP(result, callback) {
        if (typeof callback === "function") {
            _game_call_back_shit_not_conflict_ = callback
        }
        var jsonpDOM = document.getElementById('jsonp');
        var testArr = result;
        var result = escape(JSON.stringify(testArr));
        var scriptDOM = document.createElement('script');
        scriptDOM.type = 'text/javascript';
        scriptDOM.src = url + "?result=" + result + "&callback=_game_call_back_shit_not_conflict_";
        jsonpDOM.appendChild(scriptDOM);
    };

     wx.onMenuShareTimeline({
            title: shareTitle, // 分享标题
            link: 'aaa', // 分享链接
            imgUrl: 'aaa', // 分享图标
            success: function () { 
                // 用户确认分享后执行的回调函数
                alert('分享成功');
            },
            cancel: function () { 
                // 用户取消分享后执行的回调函数
            }
        });
        wx.error(function(res){
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            alert("errorMSG:"+res);
        });

}); 


// var baseURL = 'http://og4jdajcq.bkt.clouddn.com/';
// var list1 = [
//         {
//             quesNum: '1-1',
//             portraitName: '安藤忠雄',
//             portraitQues: '下面哪個不是安藤忠雄的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-1.jpg',
//             optionUrlA: baseURL + 'right-1-1.jpg',
//             optionUrlB: baseURL + 'wrong1-1-1.jpg',
//             optionUrlC: baseURL + 'wrong2-1-1.jpg',
//             optionUrlD: baseURL + 'wrong3-1-1.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-1',
//             portraitName: '雷姆·庫哈斯',
//             portraitQues: '下面哪個不是雷姆·庫哈斯的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-1.jpg',
//             optionUrlA: baseURL + 'right-2-1.jpg',
//             optionUrlB: baseURL + 'wrong1-2-1.jpg',
//             optionUrlC: baseURL + 'wrong2-2-1.jpg',
//             optionUrlD: baseURL + 'wrong3-2-1.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-1',
//             portraitName: '弗蘭克·蓋里',
//             portraitQues: '下面哪個是弗蘭克·蓋里的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-1.jpg',
//             optionUrlA: baseURL + 'right-3-1.jpg',
//             optionUrlB: baseURL + 'wrong1-3-1.jpg',
//             optionUrlC: baseURL + 'wrong2-3-1.jpg',
//             optionUrlD: baseURL + 'wrong3-3-1.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list2 = [
//         {
//             quesNum: '1-2',
//             portraitName: '藍天組',
//             portraitQues: '下面哪個不是藍天組的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-1.jpg',
//             optionUrlA: baseURL + 'right-1-2.jpg',
//             optionUrlB: baseURL + 'wrong1-1-2.jpg',
//             optionUrlC: baseURL + 'wrong2-1-2.jpg',
//             optionUrlD: baseURL + 'wrong3-1-2.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-2',
//             portraitName: '雷姆·庫哈斯',
//             portraitQues: '下面哪個不是雷姆·庫哈斯的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-2.jpg',
//             optionUrlA: baseURL + 'right-2-2.jpg',
//             optionUrlB: baseURL + 'wrong1-2-2.jpg',
//             optionUrlC: baseURL + 'wrong2-2-2.jpg',
//             optionUrlD: baseURL + 'wrong3-2-2.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-2',
//             portraitName: '弗蘭克·蓋里',
//             portraitQues: '下面哪個是弗蘭克·蓋里的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-2.jpg',
//             optionUrlA: baseURL + 'right-3-2.jpg',
//             optionUrlB: baseURL + 'wrong1-3-2.jpg',
//             optionUrlC: baseURL + 'wrong2-3-2.jpg',
//             optionUrlD: baseURL + 'wrong3-3-2.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list3 = [
//         {
//             quesNum: '1-3',
//             portraitName: '倫佐·皮亞諾',
//             portraitQues: '下面哪個不是倫佐·皮亞諾的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-3.jpg',
//             optionUrlA: baseURL + 'right-1-3.jpg',
//             optionUrlB: baseURL + 'wrong1-1-3.jpg',
//             optionUrlC: baseURL + 'wrong2-1-3.jpg',
//             optionUrlD: baseURL + 'wrong3-1-3.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-3',
//             portraitName: '倫佐·皮亞諾',
//             portraitQues: '下面哪個不是倫佐·皮亞諾的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-3.jpg',
//             optionUrlA: baseURL + 'right-2-3.jpg',
//             optionUrlB: baseURL + 'wrong1-2-3.jpg',
//             optionUrlC: baseURL + 'wrong2-2-3.jpg',
//             optionUrlD: baseURL + 'wrong3-2-3.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-3',
//             portraitName: '弗蘭克·蓋里',
//             portraitQues: '下面哪個不是弗蘭克·蓋里的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-3.jpg',
//             optionUrlA: baseURL + 'right-3-3.jpg',
//             optionUrlB: baseURL + 'wrong1-3-3.jpg',
//             optionUrlC: baseURL + 'wrong2-3-3.jpg',
//             optionUrlD: baseURL + 'wrong3-3-3.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list4 = [
//         {
//             quesNum: '1-4',
//             portraitName: '隈研吾',
//             portraitQues: '下面哪個不是隈研吾的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-4.jpg',
//             optionUrlA: baseURL + 'right-1-4.jpg',
//             optionUrlB: baseURL + 'wrong1-1-4.jpg',
//             optionUrlC: baseURL + 'wrong2-1-4.jpg',
//             optionUrlD: baseURL + 'wrong3-1-4.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-4',
//             portraitName: '雷姆·庫哈斯',
//             portraitQues: '下面哪個不是雷姆·庫哈斯的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-4.jpg',
//             optionUrlA: baseURL + 'right-2-4.jpg',
//             optionUrlB: baseURL + 'wrong1-2-4.jpg',
//             optionUrlC: baseURL + 'wrong2-2-4.jpg',
//             optionUrlD: baseURL + 'wrong3-2-4.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-4',
//             portraitName: '藍天組',
//             portraitQues: '下面哪個不是藍天組的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-4.jpg',
//             optionUrlA: baseURL + 'right-3-4.jpg',
//             optionUrlB: baseURL + 'wrong1-3-4.jpg',
//             optionUrlC: baseURL + 'wrong2-3-4.jpg',
//             optionUrlD: baseURL + 'wrong3-3-4.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list5 = [
//         {
//             quesNum: '1-5',
//             portraitName: '扎哈·哈達迪',
//             portraitQues: '下面哪個不是扎哈·哈達迪的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-5.jpg',
//             optionUrlA: baseURL + 'right-1-5.jpg',
//             optionUrlB: baseURL + 'wrong1-1-5.jpg',
//             optionUrlC: baseURL + 'wrong2-1-5.jpg',
//             optionUrlD: baseURL + 'wrong3-1-5.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-5',
//             portraitName: '丹尼爾·里伯斯金',
//             portraitQues: '下面哪個不是丹尼爾·里伯斯金的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-5.jpg',
//             optionUrlA: baseURL + 'right-2-5.jpg',
//             optionUrlB: baseURL + 'wrong1-2-5.jpg',
//             optionUrlC: baseURL + 'wrong2-2-5.jpg',
//             optionUrlD: baseURL + 'wrong3-2-5.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-5',
//             portraitName: '弗蘭克·勞埃德·賴特',
//             portraitQues: '下面哪個不是弗蘭克·勞埃德·賴特的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-5.jpg',
//             optionUrlA: baseURL + 'right-3-5.jpg',
//             optionUrlB: baseURL + 'wrong1-3-5.jpg',
//             optionUrlC: baseURL + 'wrong2-3-5.jpg',
//             optionUrlD: baseURL + 'wrong3-3-5.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list6 = [
//         {
//             quesNum: '1-6',
//             portraitName: '斯蒂文·霍爾',
//             portraitQues: '下面哪個不是斯蒂文·霍爾的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-6.jpg',
//             optionUrlA: baseURL + 'right-1-6.jpg',
//             optionUrlB: baseURL + 'wrong1-1-6.jpg',
//             optionUrlC: baseURL + 'wrong2-1-6.jpg',
//             optionUrlD: baseURL + 'wrong3-1-6.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-6',
//             portraitName: '丹下健三',
//             portraitQues: '下面哪個不是丹下健三的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-6.jpg',
//             optionUrlA: baseURL + 'right-2-6.jpg',
//             optionUrlB: baseURL + 'wrong1-2-6.jpg',
//             optionUrlC: baseURL + 'wrong2-2-6.jpg',
//             optionUrlD: baseURL + 'wrong3-2-6.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-6',
//             portraitName: '丹下健三',
//             portraitQues: '下面哪個不是丹下健三的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-6.jpg',
//             optionUrlA: baseURL + 'right-3-6.jpg',
//             optionUrlB: baseURL + 'wrong1-3-6.jpg',
//             optionUrlC: baseURL + 'wrong2-3-6.jpg',
//             optionUrlD: baseURL + 'wrong3-3-6.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list7 = [
//         {
//             quesNum: '1-7',
//             portraitName: '湯姆·梅恩',
//             portraitQues: '下面哪個不是湯姆·梅恩的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-7.jpg',
//             optionUrlA: baseURL + 'right-1-7.jpg',
//             optionUrlB: baseURL + 'wrong1-1-7.jpg',
//             optionUrlC: baseURL + 'wrong2-1-7.jpg',
//             optionUrlD: baseURL + 'wrong3-1-7.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-7',
//             portraitName: '丹下健三',
//             portraitQues: '下面哪個不是丹下健三的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-7.jpg',
//             optionUrlA: baseURL + 'right-2-7.jpg',
//             optionUrlB: baseURL + 'wrong1-2-7.jpg',
//             optionUrlC: baseURL + 'wrong2-2-7.jpg',
//             optionUrlD: baseURL + 'wrong3-2-7.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-7',
//             portraitName: '奧斯卡·尼邁耶',
//             portraitQues: '下面哪個不是奧斯卡·尼邁耶的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-7.jpg',
//             optionUrlA: baseURL + 'right-3-7.jpg',
//             optionUrlB: baseURL + 'wrong1-3-7.jpg',
//             optionUrlC: baseURL + 'wrong2-3-7.jpg',
//             optionUrlD: baseURL + 'wrong3-3-7.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list8 = [
//         {
//             quesNum: '1-8',
//             portraitName: '亞力杭德羅·阿拉維納',
//             portraitQues: '下面哪個不是亞力杭德羅·阿拉維納的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-8.jpg',
//             optionUrlA: baseURL + 'right-1-8.jpg',
//             optionUrlB: baseURL + 'wrong1-1-8.jpg',
//             optionUrlC: baseURL + 'wrong2-1-8.jpg',
//             optionUrlD: baseURL + 'wrong3-1-8.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-8',
//             portraitName: '奧斯卡·尼邁耶',
//             portraitQues: '下面哪個不是奧斯卡·尼邁耶的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-8.jpg',
//             optionUrlA: baseURL + 'right-2-8.jpg',
//             optionUrlB: baseURL + 'wrong1-2-8.jpg',
//             optionUrlC: baseURL + 'wrong2-2-8.jpg',
//             optionUrlD: baseURL + 'wrong3-2-8.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-8',
//             portraitName: '路易斯·康',
//             portraitQues: '下面哪個不是路易斯·康的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-8.jpg',
//             optionUrlA: baseURL + 'right-3-8.jpg',
//             optionUrlB: baseURL + 'wrong1-3-8.jpg',
//             optionUrlC: baseURL + 'wrong2-3-8.jpg',
//             optionUrlD: baseURL + 'wrong3-3-8.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list9 = [
//         {
//             quesNum: '1-9',
//             portraitName: '阿爾多·羅西',
//             portraitQues: '下面哪個不是阿爾多·羅西的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-9.jpg',
//             optionUrlA: baseURL + 'right-1-9.jpg',
//             optionUrlB: baseURL + 'wrong1-1-9.jpg',
//             optionUrlC: baseURL + 'wrong2-1-9.jpg',
//             optionUrlD: baseURL + 'wrong3-1-9.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-9',
//             portraitName: '黑川紀章',
//             portraitQues: '下面哪個不是黑川紀章的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-9.jpg',
//             optionUrlA: baseURL + 'right-2-9.jpg',
//             optionUrlB: baseURL + 'wrong1-2-9.jpg',
//             optionUrlC: baseURL + 'wrong2-2-9.jpg',
//             optionUrlD: baseURL + 'wrong3-2-9.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-9',
//             portraitName: '湯姆·梅恩',
//             portraitQues: '下面哪個不是湯姆·梅恩的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-9.jpg',
//             optionUrlA: baseURL + 'right-3-9.jpg',
//             optionUrlB: baseURL + 'wrong1-3-9.jpg',
//             optionUrlC: baseURL + 'wrong2-3-9.jpg',
//             optionUrlD: baseURL + 'wrong3-3-9.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ],
//     list10 = [
//         {
//             quesNum: '1-10',
//             portraitName: '阿爾瓦羅·西扎',
//             portraitQues: '下面哪個不是阿爾瓦羅·西扎的作品？',
//             portraitPicUrl: baseURL + 'fengmian-1-10.jpg',
//             optionUrlA: baseURL + 'right-1-10.jpg',
//             optionUrlB: baseURL + 'wrong1-1-10.jpg',
//             optionUrlC: baseURL + 'wrong2-1-10.jpg',
//             optionUrlD: baseURL + 'wrong3-1-10.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '2-10',
//             portraitName: '黑川紀章',
//             portraitQues: '下面哪個不是黑川紀章的作品？',
//             portraitPicUrl: baseURL + 'fengmian-2-10.jpg',
//             optionUrlA: baseURL + 'right-2-10.jpg',
//             optionUrlB: baseURL + 'wrong1-2-10.jpg',
//             optionUrlC: baseURL + 'wrong2-2-10.jpg',
//             optionUrlD: baseURL + 'wrong3-2-10.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         },
//         {
//             quesNum: '3-10',
//             portraitName: '雷姆·庫哈斯',
//             portraitQues: '下面哪個不是雷姆·庫哈斯的作品？',
//             portraitPicUrl: baseURL + 'fengmian-3-10.jpg',
//             optionUrlA: baseURL + 'right-3-10.jpg',
//             optionUrlB: baseURL + 'wrong1-3-10.jpg',
//             optionUrlC: baseURL + 'wrong2-3-10.jpg',
//             optionUrlD: baseURL + 'wrong3-3-10.jpg',
//             aValue: 1,      
//             bValue: 3,
//             cValue: 2,
//             dValue: 4,
//             answer: -1
//         }
//     ];
// var listAll = [list1,list2,list3,list4,list5,list6,list7,list8,list9,list10];
// var listDisplay = listAll.map(function(x){
//     var n = parseInt(Math.random()*3);
//     return x[n];
// });

// var shareTitle='';//用来动态更改分享标题

// var vm = new Vue({
//     el: '#app',
//     data: {
//         displayItems: listDisplay,
//         answerList: [],//答题过程中收集的答案list，包括题号和答案正确与否
//         rightNums: 0,   //答对题目的个数
//         rightNames: '', //答对题目的相关人名
//         wrongNames: '',  //答错题目的相关人名
//         comment: ''
//     },
//     methods: {
//         collectAnswer: function () {
//             this.displayItems.forEach((x) => {
//                 this.answerList.push({
//                     num: x.quesNum,
//                     answer: x.answer
//                 });
//                 //取得正确和错误的题目的名字，以便展示在最后一页
//                 if(x.answer == 1){
//                     this.rightNums++;
//                     this.rightNames = (this.rightNames=='')?this.rightNames.concat(x.portraitName):this.rightNames.concat(','+x.portraitName);
//                 } else {
//                     this.wrongNames = (this.wrongNames=='')?this.wrongNames.concat(x.portraitName):this.wrongNames.concat(','+x.portraitName);
//                 };
//             });
//         },
//         setComment:function(ratio){
//             //设置最后的评语
//             var ratioText = ratio*100 + '%';
//             if(0<=this.rightNums<4){
//                 this.comment = '您已經擊敗了全國'+ratioText+'的對手，大師作品是什麼，他認識我，可我不認識他';
//             } else if(4<=this.rightNums<6) {
//                 this.comment = '您已經擊敗了全國'+ratioText+'的對手，一臉萌比不會做您已经击败了全国40%的对手，一脸萌比不会做。';
//             } else if(6<=this.rightNums<8) {
//                 this.comment = '您已經擊敗了全國'+ratioText+'的對手，不要小看自己，不信讓同學來答題哦。';
//             }else if(8<=this.rightNums<10) {
//                 this.comment = '您已經擊敗了全國'+ratioText+'的對手，沒想到是這樣的大師作品';
//             }else {
//                 this.comment = '你是建築圈百曉生麼？建築圈無人不知，無人不曉';
//             }
//         },
//         setShareTitle:function(shareTitle){
//             //设置分享title
//             if(0<=this.rightNums<4){
//                 shareTitle = '我在建筑大师游戏中答对了' + this.rightNums +'道题，大师作品是什么，他认识我，可我不认识他';
//             } else if(4<=this.rightNums<6) {
//                 shareTitle = '我在建筑大师游戏中答对了' + this.rightNums +'道题，一脸萌比，不会做';
//             } else if(6<=this.rightNums<8) {
//                 shareTitle = '我在建筑大师游戏中答对了' + this.rightNums +'道题，不要小看我，不信你来答。';
//             }else if(8<=this.rightNums<10) {
//                 shareTitle = '我在建筑大师游戏中答对了' + this.rightNums +'道题，没想到是这样的大师作品。';
//             }else {
//                 shareTitle = '哈哈哈，我在建筑大师游戏中答对了10道题，建筑圈百晓生就是在下。';
//             }
//             console.log(shareTitle);
//         },
//         next: function () {
//             nextPage.next();
//         },
//         submit: function (num) {
//             this.next();
//             this.collectAnswer();
//             this.setShareTitle();
//             this.setComment(0.44);
//             //提交逻辑
//             runJSONP(this.answerList, function (ratio,num) {
//                 // vm.setComment(ratio);
//                 // this.answerList = [];
//             });
            
//         }

//     }
// });

// var url = "http://test.squarance.com/game.php";
// function callback() {
//     console.log(arguments);
// }
// var _game_call_back_shit_not_conflict_ = callback;
// function runJSONP(result, callback) {
//     if (typeof callback === "function") {
//         _game_call_back_shit_not_conflict_ = callback
//     }
//     var jsonpDOM = document.getElementById('jsonp');
//     var testArr = result;
//     var result = escape(JSON.stringify(testArr));
//     var scriptDOM = document.createElement('script');
//     scriptDOM.type = 'text/javascript';
//     scriptDOM.src = url + "?result=" + result + "&callback=_game_call_back_shit_not_conflict_";
//     jsonpDOM.appendChild(scriptDOM);
// };