

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playList = $(".playlist")


const app = {
    songs: [
        {
            name: 'Windy Hill',
            singer: '羽肿',
            path: './assets/song/windyhill.mp3',
            image: './assets/img/windyhill.jpg'
        },
        {
            name: 'Cô Nương Xinh Đẹp Đã Phải Đi Lấy Chồng Rồi',
            singer: 'Long Mai Tử & Lão Miêu',
            path: './assets/song/conuongxinhdep.mp3',
            image: './assets/img/conuongxinhdep.jpg'
        },
        {
            name: 'Đom Đóm',
            singer: 'J97',
            path: './assets/song/domdom.mp3',
            image: './assets/img/domdom.jpg'
        }
    ],

    render: function(){
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
                <div class="thumb" style="background-image:
                    url('./assets/img/conuongxinhdep.jpg')
                    ;">
                </div>

                <div class="body">
                    <h3 class="title">Music name</h3>
                    <p class="author">Singer</p>
                </div>
    
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })

        playList.innerHTML = htmls.join('')
    },

    start: function(){
        this.render();
    }
}
app.start();