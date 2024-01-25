const ProduceBox = {
    template: `
      <section class='product-box p-5 h-100 border rounded'>
        <header class='row mb-3'>
            <slot name='title'></slot>
        </header>
        <hr>
        <main class='row mb-3'>
            <div class='col'>
                <slot name='body'></slot>
            </div>
        </main>
        <div class='control row'>
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
                    class: ['js'],
                    description: '這是為了簡單重複html元素的一個小功具，只要在html元素上打上n-for="3"裡面的內容就會被斷重複的產生3次',
                    href: '',
                    download: './file/n.js',
                    copy: 'https://lucashsu95.github.io/url/file/n.js',
                },
                {
                    title: '<img src="./images/python.png" class="icon" />檔案分類器.py',
                    class: ['python'],
                    description: '如果資料夾或是桌面太過雜亂...沒關係! 只要使用檔案分頪器 只要丟到想要分類的資料夾在按下bat檔即可開始',
                    href: '',
                    download: 'https://github.com/lucashsu95/File_classification',
                    copy: '',
                },
                {
                    title: '<img src="./images/python.png" class="icon" />檔案命名器.py',
                    class: ['python'],
                    description: '想要快速把很多檔案重新命名就用它吧',
                    href: '',
                    download: 'https://github.com/lucashsu95/File_renamer',
                    copy: '',
                },
                {
                    title: '<img src="./images/python.png" class="icon" />大量調整影像大小.py',
                    class: ['python'],
                    description: '這個名稱反映了它的主要功能，即批量調整圖片的大小',
                    href: '',
                    download: 'https://github.com/lucashsu95/batch_resize_images',
                    copy: '',
                },
                {
                    title: '<img src="./images/python.png" class="icon" />資料夾路徑README生成器.py',
                    class: ['python'],
                    description: '這個Python腳本的功能是讀取指定資料夾的結構，並生成一個包含目錄信息的README.md文件',
                    href: '',
                    download: 'https://github.com/lucashsu95/folder_path_readme_generator',
                    copy: '',
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
                },
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
