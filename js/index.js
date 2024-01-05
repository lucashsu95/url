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
                    description: '一個可支援txt檔的TodoList,使用了LocalStorage,所以沒辦法存留太久 :D',
                    href: './todoList',
                    download: '',
                    copy: '',
                },
                {
                    title: '<img src="./images/icon.png" class="icon" />碳計算App',
                    description: '為了讓我們可以簡單得知我們一餐含多少碳足跡，於是我們製作了碳計算App可以輸入公克數目的方式來獲得碳足跡',
                    href: '',
                    download: './file/排碳計算機App-en/carbon.apk',
                    copy: '',
                },
                {
                    title: '<img src="./images/icon.png" class="icon" />減碳大作戰',
                    description: '遊戲內容主要是以玩家操控角色躲避 高碳食物吃到低碳食物，介由玩遊戲的方式讓玩家了解到什麼是低碳食物什麼是高碳食物。',
                    href: './減碳大作戰1/減碳大作戰.html',
                    download: '',
                    copy: '',
                },
                {
                    title: '<img src="./images/icon.png" class="icon" />AI減碳相機',
                    description: '可以使用網站的攝像頭 來去辨識出是什麼食物，並且呈現出一公克排出多少的碳。',
                    href: './減碳相機1/減碳相機.html',
                    download: '',
                    copy: '',
                },
                {
                    title: '<img src="./images/js.png" class="icon" />n.js',
                    description: '這是為了簡單重複html元素的一個小功具，只要在html元素上打上n-for="3"裡面的內容就會被斷重複的產生3次',
                    href: '',
                    download: './file/n.js',
                    copy: 'https://lucashsu95.github.io/url/file/n.js',
                },
                {
                    title: '<img src="./images/python.png" class="icon" />檔案分類器.py',
                    description: '如果資料夾或是桌面太過雜亂...沒關係! 只要使用檔案分頪器 只要丟到想要分類的資料夾在按下bat檔即可開始',
                    href: '',
                    download: './file/檔案分類器.zip',
                    copy: '',
                },
                {
                    title: '<img src="./images/text.png" class="icon" />vscode字體樣式',
                    description: '好看護眼的IntelOne Mono字體',
                    href: '',
                    download: './file/style.zip',
                    copy: '',
                },
                {
                    title: '<img src="./images/python.png" class="icon" />距離目標日期還有多久.py',
                    description: '執行bat檔後，會出一現一個彈跳視窗，要改目標日期要到程式碼裡改喔!',
                    href: '',
                    download: './file/date_distance.zip',
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
                if (product.title.includes(this.search) || product.description.includes(this.search)) {
                    return true
                } else {
                    return false
                }
            }
            return true
        }
    },
});
app.mount('#app')
