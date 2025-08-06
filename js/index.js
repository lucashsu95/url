const ProduceBox = {
    template: `
      <section class='product-box p-5 h-100 border rounded'>
        <header class='col-12 mb-3'>
            <slot name='title'></slot>
        </header>
        <hr>
        <main class='col-12  mb-3'>
            <div class='col'>
                <slot name='body'></slot>
            </div>
        </main>
        <div class='col-12 control'>
            <div class='col d-flex justify-content-start'>
                <slot name='control'></slot>
            </div>
        </div>
      </section>
    `
};


const app = Vue.createApp({
    data() {
        return {
            search: '',
            products: [
                {
                    title: '字體',
                    class: ['other'],
                    description: 'IntelOne Mono字串，下載後解壓縮，全選點擊右鍵安裝即可',
                    href: '',
                    download: 'file/otf.zip',
                    copy: '',
                },
                {
                    title: '2025-08-06 網頁設計陪訓',
                    class: ['python'],
                    description: '',
                    href: '',
                    download: './file/0806_web_design_training.zip',
                    copy: '',
                },
                {
                    title: 'keyviz',
                    class: ['tool'],
                    description: '視覺化按鍵和滑鼠操作',
                    href: 'https://github.com/mulaRahul/keyviz/releases/tag/v2.0.0a2',
                    download: '',
                    copy: '',
                },
                {
                    title: 'live-draw',
                    class: ['tool'],
                    description: '即時在螢幕上繪圖',
                    href: 'https://github.com/antfu/live-draw/releases/tag/v0.1.2',
                    download: '',
                    copy: '',
                },
                {
                    title: '<img src="./images/html.png" class="icon" />TodoList',
                    class: ['web'],
                    description: '一個可支援txt檔的TodoList,使用了LocalStorage,所以沒辦法存留太久 :D',
                    href: './todoList',
                    download: '',
                    copy: '',
                },
                {
                    title: '<img src="./images/icon.png" class="icon" />碳計算App',
                    class: ['tool', 'appinventor'],
                    description: '為了讓我們可以簡單得知我們一餐含多少碳足跡，於是我們製作了碳計算App可以輸入公克數目的方式來獲得碳足跡',
                    href: '',
                    download: './file/排碳計算機App-en/carbon.apk',
                    copy: '',
                },
                {
                    title: '<img src="./images/icon.png" class="icon" />減碳大作戰',
                    class: ['game', 'Construct2'],
                    description: '遊戲內容主要是以玩家操控角色躲避 高碳食物吃到低碳食物，介由玩遊戲的方式讓玩家了解到什麼是低碳食物什麼是高碳食物。',
                    href: './減碳大作戰/減碳大作戰.html',
                    download: '',
                    copy: '',
                },
                {
                    title: '<img src="./images/icon.png" class="icon" />AI減碳相機',
                    class: ['tool', 'teachable'],
                    description: '可以使用網站的攝像頭 來去辨識出是什麼食物，並且呈現出一公克排出多少的碳。',
                    href: './減碳相機/減碳相機.html',
                    download: '',
                    copy: '',
                },
                {
                    title: '<img src="./images/js.png" class="icon" />n.js',
                    class: ['library'],
                    description: '這是為了簡單重複html元素的一個小功具，只要在html元素上打上n-for="3"裡面的內容就會被斷重複的產生3次',
                    href: '',
                    download: './file/n.js',
                    copy: 'https://lucashsu95.github.io/url/file/n.js',
                },
                {
                    title: '<img src="./images/python.png" class="icon" />距離目標日期還有多久.py',
                    class: ['python'],
                    description: '輸出距離目標日期的月數,天數',
                    href: '',
                    download: './file/how-many-days-left.zip',
                    copy: '',
                },
                {
                    title: '筆劃練習.exe',
                    class: ['smartApp'],
                    description: '這是一個用smart app 軟體製做的，教你寫我的名字的軟體，這樣因該就不會有人寫錯字了吧?是「綸」啦!這是電腦可以用的.exe檔',
                    href: '',
                    download: 'file/筆劃練習/筆劃練習.exe',
                    copy: '',
                },
                {
                    title: '筆劃練習.apk',
                    class: ['smartApp'],
                    description: '這是一個用smart app 軟體製做的，教你寫我的名字的軟體，這樣因該就不會有人寫錯字了吧?是「綸」啦!這是android手機可以用的.apk檔，iphone的話不太行喔',
                    href: '',
                    download: 'file/筆劃練習/筆劃練習.apk',
                    copy: '',
                },
                {
                    title: '貓貓拼圖.apk',
                    class: ['smartApp'],
                    description: '這是一個用smart app 軟體製做的，簡單的拼圖遊戲，不用管遊戲結束的那一張圖，這是電腦可以用的.exe檔',
                    href: '',
                    download: 'file/貓貓拼圖/貓貓拼圖.apk',
                    copy: '',
                },
                {
                    title: '貓貓拼圖.apk',
                    class: ['smartApp'],
                    description: '這是一個用smart app 軟體製做的，簡單的拼圖遊戲，不用管遊戲結束的那一張圖，這是android手機可以用的.apk檔，iphone的話不太行喔',
                    href: '',
                    download: 'file/貓貓拼圖/貓貓拼圖.apk',
                    copy: '',
                }
            ]
        };
    },
    components: {
        'product-box': ProduceBox,
    },
    methods: {
        copyToClipboard(text) {
            navigator.clipboard.writeText(text)
        },
        onSearch(product) {
            if (this.search) {
                if (product.title.includes(this.search) || product.description.includes(this.search) || product.class.some(x => x.includes(this.search))) {
                    return true
                } else {
                    return false
                }
            }
            return true
        },
    },
    mounted() {
        this.$refs.searchInput.focus();
    },
});
app.mount('#app')
