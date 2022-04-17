const mults = [
    "UWfYW-oJ4mk",
    "QF6ODcdrr0o",
    "lUM-ORxz6CM",
    "_Yim_w4M1Gc",
    "FMKQLu-0Xpo",
    "zQZo1cNWRdE",
    "Iw0ELqwOfeo",
    "siSlI6_By6U",
    "4Mavi9L7RYc",
    "kMaVUizPxJ0",
    "O-ZX3-I6c9s",
    "U_6BhPFvLCs",
    "DWmDilbYNMQ",
    "dep2K0y4fAs",
    "3TdEicg03nY",
    "1CukKf_6_LU",
    "NR-NC7Ya6DE",
    "eyJMIFhN0rE",
    "VOkgKdfFOgU",
    "M1Qnl8Elmw0"
    ];

const films = [
    "HuTWWmcBKAI",
    "zpPfwz1ZTy0",
    "Halirsu-v2Y",
    "pxfRJ0lv6OM",
    "ttnOe1kGL5o",
    "gIPKH6Mjfe8",
    "3VN_NIydDCs",
    "rl8dCqtd4Hk",
    "N6_L_WIT2zQ",
    "TTo9vTpJoYA",
    "zgPc_eMbdU4",
    "J52Fw9Bs4Fs",
    "PQtjwN6TjIE",
    "rlKxX8bFJtE",
    "mwaAHVrdvWE",
    "TlNC1KsOm2E",
    "VJ58kq43qzg",
    "zLUNDce08II",
    "a6ZpKYNxm6M",
    "gw8sSQvMVfU",
    "YqngU6R1ZTc",
    "2IkJT0PK-CU"
    ];

    const music = [
        "YdRteC0t5fQ",
        "vAlxohJi0Kk",
        "IStuKrtihxk",
        "mLj7cpTqQXg",
        "K77eakyRX7A",
        "gByOv63JXmw",
        "OtQTUoZyV_w",
        "jw-8SGcC3Cg",
        "zuttYuk7Znk",
        "K_fnUPfXbyc",
        "cpuC6UC7HTE"
        ];

window.onload = function() {
    var playerDiv = $(".random_player");

    for (var i = 0; i < playerDiv.length; i++) {
        var player = document.createElement("iframe");
        var randomVideoUrl = 'https://www.youtube.com/embed/' + mults[Math.floor(Math.random() * mults.length)];
        player.setAttribute('src', randomVideoUrl);
        player.setAttribute("allowfullscreen", "");
        playerDiv[i].appendChild(player);
    };

    var playerDiv2 = $(".random_player_films");

    for (var k = 0; k < playerDiv2.length; k++) {
        var player2 = document.createElement("iframe");
        var randomVideoUrl2 = 'https://www.youtube.com/embed/' + films[Math.floor(Math.random() * films.length)];
        player2.setAttribute('src', randomVideoUrl2);
        player2.setAttribute("allowfullscreen", "");
        playerDiv2[k].appendChild(player2);
    };

    var playerDiv3 = $(".random_player_music");

    for (var a = 0; a < playerDiv3.length; a++) {
        var player3 = document.createElement("iframe");
        var randomVideoUrl3 = 'https://www.youtube.com/embed/' + music[Math.floor(Math.random() * music.length)];
        player3.setAttribute('src', randomVideoUrl3);
        player3.setAttribute("allowfullscreen", "");
        playerDiv3[a].appendChild(player3);
    };
};

$(".home_page").click(function(){
    location.reload();
});