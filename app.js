const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
const safe = value => String(value == null ? "" : value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const image = (name, width) => "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(name) + "?width=" + (width || 700);
const photo = {
  squad1970:image("Brazil national team 1970.jpg",900),
  squad1958:image("Brasil - 1958.jpg",800),
  pele:image("Pele con brasil.jpg",600),
  garrincha:image("Garrincha 1962.jpg",500),
  garrincha2:image("Garrincha na copa de 1962.jpg",600),
  ronaldo:image("Ronaldo 2002 cropped2.jpg",600),
  trophy1958:image("Winning brazilian National team 1958.jpg",700)
};

const tournaments = [
{year:1930,host:"Uruguay",result:"Group stage",tag:"FIRST APPEARANCE",type:"ordinary",summary:"Brasil memulai perjalanan Piala Dunia pada turnamen perdana. Tim tersingkir di fase grup setelah satu kemenangan dan satu kekalahan.",detail:"Brasil mengikuti edisi perdana Piala Dunia di Uruguay. Kekalahan dari Yugoslavia membuat tim tidak melaju dari grup, tetapi turnamen ini menjadi awal partisipasi Brasil di panggung dunia.",score:"—",image:photo.squad1958},
{year:1934,host:"Italy",result:"Round of 16",tag:"SHORT CAMPAIGN",type:"ordinary",summary:"Format gugur membuat perjalanan Brasil berakhir setelah satu pertandingan melawan Spanyol.",detail:"Piala Dunia 1934 menggunakan format gugur. Brasil kalah dari Spanyol pada babak pertama, sehingga hanya memainkan satu pertandingan.",score:"1–3",image:photo.squad1958},
{year:1938,host:"France",result:"Third place",tag:"FIRST PODIUM",type:"turning",summary:"Brasil mencapai semifinal dan finis di posisi ketiga. Leônidas da Silva menjadi salah satu bintang turnamen.",detail:"Di Prancis 1938, Brasil mencatat pencapaian podium pertamanya. Leônidas menjadi pencetak gol penting dan membantu memperkenalkan sepak bola Brasil kepada audiens yang lebih luas.",score:"4–2",image:photo.squad1958},
{year:1950,host:"Brazil",result:"Runner-up · final round",tag:"MARACANAZO",type:"turning",summary:"Bermain di kandang sendiri, Brasil kalah 1–2 dari Uruguay pada laga penentu final round di Maracanã.",detail:"Turnamen 1950 tidak menggunakan satu pertandingan final. Juara ditentukan lewat grup final empat tim. Kekalahan Brasil dari Uruguay di Maracanã menjadi salah satu peristiwa paling membekas dalam sejarah sepak bola Brasil.",score:"1–2",image:photo.trophy1958},
{year:1954,host:"Switzerland",result:"Quarter-finals",tag:"REBUILDING",type:"ordinary",summary:"Brasil mencapai perempat final sebelum kalah dari Hungaria dalam laga yang dikenal sebagai Battle of Berne.",detail:"Brasil melangkah ke perempat final 1954. Kekalahan dari Hungaria mengakhiri kampanye dan menjadi salah satu bab penting sebelum revolusi generasi yang datang pada 1958.",score:"2–4",image:photo.squad1958},
{year:1958,host:"Sweden",result:"CHAMPIONS",tag:"THE FIRST STAR",type:"champion",summary:"Brasil mengalahkan Swedia 5–2 di final dan meraih gelar dunia pertama. Pelé berusia 17 tahun.",detail:"Brasil menjuarai Piala Dunia untuk pertama kalinya setelah mengalahkan tuan rumah Swedia 5–2. Pelé mencetak dua gol di final; Vavá juga mencetak dua gol dan Zagallo satu gol.",score:"5–2",image:photo.squad1958},
{year:1962,host:"Chile",result:"CHAMPIONS",tag:"BACK-TO-BACK",type:"champion",summary:"Brasil mempertahankan gelar di Chile. Garrincha tampil luar biasa setelah Pelé mengalami cedera.",detail:"Brasil menjadi juara untuk kedua kali secara beruntun. Garrincha mengambil peran besar dalam perjalanan tim, sementara Amarildo tampil penting setelah Pelé cedera pada fase grup.",score:"3–1",image:photo.garrincha2},
{year:1966,host:"England",result:"Group stage",tag:"A HARD LESSON",type:"turning",summary:"Brasil tersingkir di fase grup. Pelé mendapat pengawalan keras dan tim gagal mempertahankan dominasi.",detail:"Sebagai juara bertahan, Brasil datang dengan harapan besar tetapi tersingkir di fase grup. Hasil ini mendorong evaluasi besar sebelum turnamen 1970.",score:"—",image:photo.pele},
{year:1970,host:"Mexico",result:"CHAMPIONS",tag:"THE BEAUTIFUL TEAM",type:"champion",summary:"Tim asuhan Mário Zagallo mengalahkan Italia 4–1. Brasil memenangi semua enam pertandingan.",detail:"Brasil 1970 dikenang karena kreativitas dan kualitas kolektifnya. Pelé, Jairzinho, Tostão, Gérson, Rivellino, dan Carlos Alberto menjadi bagian dari tim yang mengalahkan Italia 4–1 di final.",score:"4–1",image:photo.squad1970},
{year:1974,host:"West Germany",result:"Fourth place",tag:"A NEW CHAPTER",type:"ordinary",summary:"Brasil mencapai perebutan tempat ketiga setelah generasi 1970 mulai berganti.",detail:"Setelah era Pelé berakhir di Piala Dunia, Brasil menghadapi fase transisi. Tim finis keempat setelah kalah dari Polandia dalam perebutan tempat ketiga.",score:"0–1",image:photo.squad1970},
{year:1978,host:"Argentina",result:"Third place",tag:"UNBEATEN, BUT THIRD",type:"turning",summary:"Brasil finis di posisi ketiga. Kontroversi hasil pertandingan grup final ikut membentuk cerita turnamen.",detail:"Brasil tidak terkalahkan sepanjang turnamen dan finis ketiga. Argentina menjadi juara setelah menang pada laga terakhir grup final.",score:"2–1",image:photo.squad1970},
{year:1982,host:"Spain",result:"Second group stage",tag:"THE 1982 SIDE",type:"turning",summary:"Generasi penuh teknik—Zico, Sócrates, Falcão, dan Júnior—gagal melaju ke semifinal.",detail:"Brasil 1982 sangat dipuji karena kreativitas dan permainan menyerang. Kekalahan 2–3 dari Italia pada laga penentu grup kedua membuat perjalanan mereka berakhir.",score:"2–3",image:photo.pele},
{year:1986,host:"Mexico",result:"Quarter-finals",tag:"PENALTY HEARTBREAK",type:"ordinary",summary:"Brasil tersingkir dari Prancis melalui adu penalti setelah imbang 1–1.",detail:"Brasil dan Prancis bermain imbang 1–1 pada perempat final. Brasil akhirnya kalah dalam adu penalti, mengakhiri harapan generasi yang dipimpin Sócrates dan Zico.",score:"1–1 · pens",image:photo.squad1970},
{year:1990,host:"Italy",result:"Round of 16",tag:"EARLY EXIT",type:"ordinary",summary:"Brasil tersingkir oleh Argentina dalam laga babak 16 besar yang ketat.",detail:"Gol Claudio Caniggia pada babak kedua membawa Argentina menang 1–0. Brasil pulang lebih awal meski tampil dominan pada sebagian besar pertandingan.",score:"0–1",image:photo.ronaldo},
{year:1994,host:"United States",result:"CHAMPIONS",tag:"THE FOURTH STAR",type:"champion",summary:"Brasil mengalahkan Italia melalui adu penalti setelah final berakhir 0–0.",detail:"Brasil meraih gelar keempat setelah final tanpa gol melawan Italia. Romário dan Bebeto memimpin lini depan, sementara Dunga menjadi kapten dan mengeksekusi penalti penentu.",score:"0–0 · 3–2 pens",image:photo.squad1958},
{year:1998,host:"France",result:"Runner-up",tag:"A FINAL IN PARIS",type:"turning",summary:"Brasil mencapai final, tetapi kalah 0–3 dari tuan rumah Prancis.",detail:"Brasil kembali ke final tetapi kalah dari Prancis di Stade de France. Zinedine Zidane mencetak dua gol pada babak pertama dan Emmanuel Petit menutup skor.",score:"0–3",image:photo.ronaldo},
{year:2002,host:"Korea/Japan",result:"CHAMPIONS",tag:"THE FIFTH STAR",type:"champion",summary:"Brasil mengalahkan Jerman 2–0 di Yokohama. Ronaldo mencetak kedua gol final.",detail:"Brasil menjuarai Piala Dunia untuk kelima kalinya. Ronaldo mencetak dua gol pada babak kedua melawan Jerman, sementara tim asuhan Luiz Felipe Scolari menyelesaikan turnamen dengan rekor sempurna.",score:"2–0",image:photo.ronaldo},
{year:2006,host:"Germany",result:"Quarter-finals",tag:"THE GALÁCTICOS ERA",type:"ordinary",summary:"Brasil tersingkir oleh Prancis di perempat final meski datang sebagai juara bertahan.",detail:"Tim bertabur bintang yang menampilkan Ronaldo, Ronaldinho, Kaká, dan Adriano kalah 0–1 dari Prancis. Gol Thierry Henry menjadi pembeda.",score:"0–1",image:photo.ronaldo},
{year:2010,host:"South Africa",result:"Quarter-finals",tag:"A PROMISING START",type:"ordinary",summary:"Brasil unggul lebih dulu melawan Belanda, tetapi akhirnya kalah 1–2.",detail:"Brasil tersingkir pada perempat final setelah Belanda membalikkan keadaan. Hasil ini menandai akhir perjalanan tim Dunga di turnamen tersebut.",score:"1–2",image:photo.squad1970},
{year:2014,host:"Brazil",result:"Fourth place",tag:"HOME SOIL",type:"turning",summary:"Tuan rumah mencapai semifinal, lalu kalah dari Jerman dan Belanda.",detail:"Brasil mengalami kekalahan 1–7 dari Jerman pada semifinal di Belo Horizonte. Tim kemudian kalah 0–3 dari Belanda dalam perebutan tempat ketiga.",score:"1–7",image:photo.squad1970},
{year:2018,host:"Russia",result:"Quarter-finals",tag:"THE NEXT CHAPTER",type:"ordinary",summary:"Brasil kalah 1–2 dari Belgia pada perempat final.",detail:"Tim asuhan Tite tersingkir setelah gol bunuh diri Fernandinho dan gol Kevin De Bruyne membawa Belgia unggul. Renato Augusto memperkecil ketertinggalan.",score:"1–2",image:photo.ronaldo},
{year:2022,host:"Qatar",result:"Quarter-finals",tag:"A BITTER END",type:"turning",summary:"Brasil tersingkir oleh Kroasia melalui adu penalti setelah imbang 1–1.",detail:"Neymar membawa Brasil unggul pada babak tambahan waktu, tetapi Bruno Petković menyamakan skor. Kroasia menang dalam adu penalti dan melaju ke semifinal.",score:"1–1 · pens",image:photo.ronaldo}
];

const players = [
{id:"pele",name:"Pelé",full:"Edson Arantes do Nascimento",number:"10",position:"Forward",role:"attacker",era:"1958 · 1962 · 1966 · 1970",goals:12,apps:14,titles:3,image:photo.pele,summary:"Pemain termuda yang mencetak gol di final Piala Dunia. Pelé menjadi pusat kreativitas dan penyelesaian akhir Brasil pada tiga kampanye juara.",bio:"Pelé memenangkan Piala Dunia pada 1958, 1962, dan 1970. Ia mencetak enam gol pada 1958 dan dua gol di final melawan Swedia. Pada 1970, ia menjadi penghubung penting dalam tim yang dianggap salah satu generasi terhebat.",style:"Visi bermain, kontrol bola, penyelesaian klinis, dan kemampuan membaca ruang."},
{id:"garrincha",name:"Garrincha",full:"Manoel Francisco dos Santos",number:"7",position:"Winger",role:"attacker",era:"1958 · 1962 · 1966",goals:5,apps:12,titles:2,image:photo.garrincha,summary:"Winger dengan dribel khas yang menjadi tokoh penting saat Brasil mempertahankan gelar pada 1962.",bio:"Garrincha memainkan peran luar biasa di Chile 1962. Ketika Pelé cedera, ia menjadi pusat serangan Brasil dan membantu tim meraih gelar kedua.",style:"Dribel satu lawan satu, perubahan arah, dan kreativitas dari sisi kanan."},
{id:"jairzinho",name:"Jairzinho",full:"Jair Ventura Filho",number:"7",position:"Forward",role:"attacker",era:"1966 · 1970 · 1974",goals:9,apps:16,titles:1,summary:"Mencetak gol pada setiap pertandingan Brasil di Piala Dunia 1970.",bio:"Jairzinho menjadi bagian vital tim juara 1970. Kecepatan, kekuatan, dan pergerakan dari sisi lapangan memberinya ancaman konstan.",style:"Power, kecepatan, penetrasi dari sayap, dan penyelesaian."},
{id:"tostao",name:"Tostão",full:"Eduardo Gonçalves de Andrade",number:"9",position:"Forward",role:"attacker",era:"1966 · 1970",goals:3,apps:6,titles:1,summary:"Penyerang cerdas yang sering turun menghubungkan lini tengah dan lini depan pada 1970.",bio:"Tostão beroperasi bukan hanya sebagai finisher. Pergerakan dan kombinasi permainannya membantu membuka ruang untuk Pelé dan Jairzinho.",style:"Link-up play, pergerakan tanpa bola, dan kreativitas di ruang sempit."},
{id:"romario",name:"Romário",full:"Romário de Souza Faria",number:"11",position:"Striker",role:"attacker",era:"1990 · 1994",goals:5,apps:8,titles:1,summary:"Pemain paling menentukan dalam perjalanan Brasil menuju gelar keempat pada 1994.",bio:"Romário mencetak lima gol di Piala Dunia 1994 dan menjadi bagian dari duet penting bersama Bebeto. Ia memenangkan Golden Ball sebagai pemain terbaik turnamen.",style:"Insting kotak penalti, sentuhan cepat, dan ketenangan dalam penyelesaian."},
{id:"ronaldo",name:"Ronaldo Nazário",full:"Ronaldo Luís Nazário de Lima",number:"9",position:"Striker",role:"attacker",era:"1994 · 1998 · 2002 · 2006",goals:15,apps:19,titles:2,image:photo.ronaldo,summary:"Pencetak 15 gol Piala Dunia dan pencetak dua gol pada final 2002.",bio:"Ronaldo mencetak delapan gol pada 2002 dan membawa Brasil menjadi juara. Dua golnya di final melawan Jerman memastikan gelar kelima.",style:"Akselerasi, dribel langsung, keseimbangan, dan finishing dua kaki."},
{id:"rivaldo",name:"Rivaldo",full:"Rivaldo Vítor Borba Ferreira",number:"10",position:"Attacking midfielder",role:"midfielder",era:"1998 · 2002",goals:8,apps:14,titles:1,summary:"Kreator dan pencetak gol penting dalam perjalanan menuju gelar kelima.",bio:"Rivaldo mencetak lima gol di 2002 dan membentuk trio serang yang terkenal bersama Ronaldo dan Ronaldinho. Ia juga menjadi runner-up pada 1998.",style:"Kaki kiri kuat, tendangan jarak jauh, visi, dan kreativitas."},
{id:"ronaldinho",name:"Ronaldinho",full:"Ronaldo de Assis Moreira",number:"11",position:"Attacking midfielder",role:"midfielder",era:"2002 · 2006",goals:2,apps:10,titles:1,summary:"Playmaker kreatif yang mencetak gol lob terkenal melawan Inggris pada 2002.",bio:"Ronaldinho adalah bagian dari skuad juara 2002. Gol melawan Inggris di perempat final menjadi salah satu momen paling ikoniknya.",style:"Skill, improvisasi, umpan terobosan, dan kreativitas set-piece."},
{id:"zico",name:"Zico",full:"Arthur Antunes Coimbra",number:"10",position:"Attacking midfielder",role:"midfielder",era:"1978 · 1982 · 1986",goals:4,apps:14,titles:0,summary:"Playmaker dan eksekutor bola mati yang menjadi ikon generasi 1980-an.",bio:"Zico dikenal sebagai salah satu pemain kreatif terbaik Brasil. Ia menjadi bagian dari generasi 1982 yang sangat dipuji karena teknik dan permainan menyerangnya.",style:"Visi, umpan, kontrol bola, dan tendangan bebas."},
{id:"gerson",name:"Gérson",full:"Gérson de Oliveira Nunes",number:"8",position:"Midfielder",role:"midfielder",era:"1966 · 1970",goals:1,apps:4,titles:1,summary:"Pengatur tempo dari lini tengah tim juara 1970.",bio:"Gérson memberi keseimbangan dan distribusi bola bagi generasi 1970. Golnya pada final melawan Italia membantu Brasil mengambil kendali pertandingan.",style:"Passing range, kontrol tempo, dan visi permainan."},
{id:"dunga",name:"Dunga",full:"Carlos Caetano Bledorn Verri",number:"8",position:"Defensive midfielder",role:"midfielder",era:"1990 · 1994 · 1998",goals:0,apps:12,titles:1,summary:"Kapten yang memimpin Brasil meraih gelar keempat pada 1994.",bio:"Dunga melambangkan ketegasan dan keseimbangan tim 1994. Ia mengangkat trofi sebagai kapten setelah kemenangan adu penalti melawan Italia.",style:"Disiplin posisi, duel, kepemimpinan, dan distribusi sederhana."},
{id:"cafu",name:"Cafu",full:"Marcos Evangelista de Morais",number:"2",position:"Right-back",role:"defender",era:"1994 · 1998 · 2002 · 2006",goals:0,apps:20,titles:2,summary:"Kapten Brasil saat memenangkan Piala Dunia 2002 dan pemain dengan tiga penampilan final beruntun.",bio:"Cafu tampil di final Piala Dunia 1994, 1998, dan 2002. Ia menjadi kapten juara pada 2002 dan salah satu full-back paling berpengaruh pada masanya.",style:"Daya jelajah, overlap, stamina, dan kepemimpinan."},
{id:"roberto-carlos",name:"Roberto Carlos",full:"Roberto Carlos da Silva Rocha",number:"6",position:"Left-back",role:"defender",era:"1998 · 2002 · 2006",goals:1,apps:18,titles:1,summary:"Bek kiri dengan tendangan kuat dan kontribusi menyerang yang besar.",bio:"Roberto Carlos menjadi bagian dari tim juara 2002. Tendangan keras, akselerasi, dan kemampuan menyerang dari sisi kiri menjadikannya pemain ikonik.",style:"Kecepatan, crossing, tendangan jarak jauh, dan overlap."},
{id:"nilton",name:"Nílton Santos",full:"Nílton dos Santos",number:"6",position:"Left-back",role:"defender",era:"1954 · 1958 · 1962",goals:1,apps:15,titles:2,summary:"Pelopor full-back menyerang dan bagian dari dua generasi juara.",bio:"Nílton Santos membantu Brasil memenangkan gelar 1958 dan 1962. Ia dikenang sebagai bek kiri yang berani maju dan ikut membangun serangan.",style:"Antisipasi, teknik, dan keberanian mendukung serangan."},
{id:"bellini",name:"Bellini",full:"Hilderaldo Luís Bellini",number:"3",position:"Centre-back",role:"defender",era:"1958 · 1962 · 1966",goals:0,apps:8,titles:2,summary:"Kapten Brasil saat meraih gelar dunia pertama pada 1958.",bio:"Bellini menjadi kapten Brasil pada 1958 dan terkenal karena mengangkat trofi Jules Rimet di atas kepala—gestur yang kemudian menjadi tradisi juara.",style:"Kepemimpinan, kekuatan duel, dan organisasi pertahanan."},
{id:"zito",name:"Zito",full:"José Ely de Miranda",number:"5",position:"Midfielder",role:"midfielder",era:"1958 · 1962",goals:2,apps:6,titles:2,summary:"Gelandang pekerja keras yang mencetak gol di final 1958.",bio:"Zito menjadi bagian penting dari dua tim juara Brasil. Ia mencetak gol kedua Brasil pada final 1958 melawan Swedia.",style:"Intensitas, duel, dan keseimbangan lini tengah."}
];

const squads = {
"1970":{year:"MEXICO 1970 · FINAL XI",formation:"4–2–4",players:[
{n:1,name:"Félix",pos:"Goalkeeper",x:50,y:88,desc:"Penjaga gawang utama Brasil pada final 1970."},
{n:4,name:"Carlos Alberto",pos:"Right-back · Captain",x:82,y:69,desc:"Kapten yang mencetak gol keempat Brasil pada final, menyelesaikan rangkaian serangan tim."},
{n:2,name:"Brito",pos:"Centre-back",x:62,y:72,desc:"Bagian dari duet pertahanan tengah Brasil di final."},
{n:3,name:"Piazza",pos:"Centre-back",x:38,y:72,desc:"Bek tengah yang juga mampu membantu membangun permainan."},
{n:6,name:"Everaldo",pos:"Left-back",x:18,y:69,desc:"Mengisi sisi kiri pertahanan pada final 1970."},
{n:5,name:"Clodoaldo",pos:"Midfielder",x:39,y:48,desc:"Gelandang yang membantu menghubungkan pertahanan dan serangan."},
{n:8,name:"Gérson",pos:"Midfielder",x:61,y:48,desc:"Pengatur tempo yang mencetak gol kedua Brasil di final."},
{n:7,name:"Jairzinho",pos:"Forward",x:16,y:22,desc:"Pemain sayap yang mencetak gol pada seluruh pertandingan Brasil di turnamen 1970."},
{n:9,name:"Tostão",pos:"Forward",x:39,y:18,desc:"Penyerang yang sering turun untuk menghubungkan permainan."},
{n:10,name:"Pelé",pos:"Forward",x:61,y:18,desc:"Bintang utama Brasil dan pencetak gol pembuka final."},
{n:11,name:"Rivellino",pos:"Forward",x:84,y:22,desc:"Kreator dari sisi kiri dengan tendangan dan umpan yang kuat."}]},
"1994":{year:"USA 1994 · FINAL XI",formation:"4–4–2",players:[
{n:1,name:"Taffarel",pos:"Goalkeeper",x:50,y:88,desc:"Penjaga gawang yang menjadi pahlawan dalam adu penalti final."},
{n:2,name:"Jorginho",pos:"Right-back",x:82,y:70,desc:"Starter di final sebelum digantikan Cafu karena cedera."},
{n:13,name:"Aldair",pos:"Centre-back",x:61,y:72,desc:"Bek tengah yang menjadi bagian penting pertahanan Brasil."},
{n:15,name:"Márcio Santos",pos:"Centre-back",x:39,y:72,desc:"Bek tengah yang bermain di final dan mengambil satu penalti."},
{n:6,name:"Branco",pos:"Left-back",x:18,y:70,desc:"Mencetak penalti penting pada adu penalti final."},
{n:17,name:"Mazinho",pos:"Midfielder",x:17,y:47,desc:"Gelandang yang membantu menjaga lebar dan keseimbangan sisi kiri."},
{n:5,name:"Mauro Silva",pos:"Midfielder",x:39,y:48,desc:"Gelandang bertahan yang memberi perlindungan di depan lini belakang."},
{n:8,name:"Dunga",pos:"Midfielder · Captain",x:61,y:48,desc:"Kapten Brasil dan penendang penalti penentu kemenangan."},
{n:9,name:"Zinho",pos:"Midfielder",x:83,y:47,desc:"Mendukung serangan dari area kiri dan tampil di final."},
{n:7,name:"Bebeto",pos:"Forward",x:39,y:20,desc:"Duet Romário di lini depan; pergerakannya membantu membuka ruang."},
{n:11,name:"Romário",pos:"Forward",x:61,y:20,desc:"Pemain terbaik turnamen dan pencetak lima gol di Piala Dunia 1994."}]},
"2002":{year:"KOREA/JAPAN 2002 · FINAL XI",formation:"3–4–2–1",players:[
{n:1,name:"Marcos",pos:"Goalkeeper",x:50,y:88,desc:"Penjaga gawang utama Brasil pada final melawan Jerman."},
{n:3,name:"Lúcio",pos:"Centre-back",x:76,y:70,desc:"Bek tengah yang agresif dan membawa bola ke depan."},
{n:5,name:"Edmílson",pos:"Centre-back",x:50,y:73,desc:"Pemain sentral di tiga bek Brasil pada final."},
{n:4,name:"Roque Júnior",pos:"Centre-back",x:24,y:70,desc:"Bek yang menjaga sisi kiri dari trio pertahanan."},
{n:2,name:"Cafu",pos:"Right wing-back · Captain",x:88,y:47,desc:"Kapten Brasil yang memberi lebar serangan dari sisi kanan."},
{n:8,name:"Gilberto Silva",pos:"Midfielder",x:66,y:49,desc:"Gelandang bertahan yang menjaga keseimbangan tim."},
{n:15,name:"Kléberson",pos:"Midfielder",x:34,y:49,desc:"Gelandang dinamis yang membantu transisi dan pergerakan ke depan."},
{n:6,name:"Roberto Carlos",pos:"Left wing-back",x:12,y:47,desc:"Memberi lebar dan ancaman dari sisi kiri."},
{n:11,name:"Ronaldinho",pos:"Attacking midfielder",x:35,y:25,desc:"Kreator yang membantu menghubungkan lini tengah dan lini serang."},
{n:10,name:"Rivaldo",pos:"Attacking midfielder",x:65,y:25,desc:"Pencetak lima gol di turnamen dan salah satu kreator utama."},
{n:9,name:"Ronaldo",pos:"Striker",x:50,y:11,desc:"Mencetak dua gol pada final dan delapan gol sepanjang turnamen."}]}
};

const matches = [
{year:"1958",title:"Brazil 5–2 Sweden",tag:"FIRST WORLD TITLE",text:"Final · Råsunda Stadium · 29 June 1958",detail:"Brasil menjadi juara dunia untuk pertama kali. Pelé dan Vavá masing-masing mencetak dua gol."},
{year:"1970",title:"Brazil 4–1 Italy",tag:"THE THIRD STAR",text:"Final · Estadio Azteca · 21 June 1970",detail:"Pelé, Gérson, Jairzinho, dan Carlos Alberto mencetak gol dalam kemenangan yang ikonik.",story:"1970"},
{year:"1994",title:"Brazil 0–0 Italy",tag:"PENALTY DRAMA",text:"Final · Rose Bowl · 17 July 1994",detail:"Brasil menang 3–2 melalui adu penalti setelah 120 menit tanpa gol.",story:"1994"},
{year:"2002",title:"Germany 0–2 Brazil",tag:"THE FIFTH STAR",text:"Final · Yokohama · 30 June 2002",detail:"Ronaldo mencetak kedua gol pada babak kedua untuk memastikan gelar kelima.",story:"2002"},
{year:"2014",title:"Brazil 1–7 Germany",tag:"A NIGHT TO REMEMBER",text:"Semi-final · Belo Horizonte · 8 July 2014",detail:"Kekalahan di kandang sendiri menjadi salah satu hasil paling mengejutkan dalam sejarah Piala Dunia."},
{year:"1950",title:"Brazil 1–2 Uruguay",tag:"MARACANAZO",text:"Final round · Maracanã · 16 July 1950",detail:"Kekalahan dari Uruguay di laga penentu grup final menjadi momen penting dalam sejarah Brasil."}
];
const stories = {
"1970":[
{minute:"18′",title:"Pelé opens the final",text:"Pelé melompat menyambut umpan silang dan membawa Brasil unggul. Gol ini menjadi pembuka final yang kemudian dikenang sebagai salah satu penampilan tim terbaik dalam sejarah Piala Dunia.",caption:"THE OPENING STATEMENT"},
{minute:"37′",title:"Italy finds an equalizer",text:"Roberto Boninsegna menyamakan skor untuk Italia. Final kembali terbuka dan Brasil harus merespons tekanan lawan.",caption:"THE FINAL IS LEVEL"},
{minute:"66′",title:"Gérson takes control",text:"Gérson mencetak gol kedua Brasil setelah babak kedua berjalan. Keunggulan ini mengubah momentum pertandingan.",caption:"BRAZIL TAKES THE LEAD"},
{minute:"71′",title:"Jairzinho strikes again",text:"Jairzinho menambah gol ketiga. Ia mencetak gol pada setiap pertandingan Brasil sepanjang Piala Dunia 1970.",caption:"THE RUN CONTINUES"},
{minute:"86′",title:"Carlos Alberto seals the masterpiece",text:"Kapten Carlos Alberto menyelesaikan serangan kolektif dengan gol keempat. Brasil menang 4–1 dan meraih gelar ketiga.",caption:"THREE-TIME CHAMPIONS"}],
"1994":[
{minute:"0′",title:"A final of tension",text:"Brasil dan Italia sama-sama berhati-hati. Peluang hadir, tetapi kedua tim gagal mencetak gol dalam waktu normal.",caption:"THE STAKES ARE HIGH"},
{minute:"90′",title:"No goal after 90 minutes",text:"Skor tetap 0–0 dan pertandingan berlanjut ke extra time. Tidak ada tim yang mampu memecah kebuntuan.",caption:"EXTRA TIME"},
{minute:"120′",title:"A world title decided by penalties",text:"Setelah 120 menit, final pertama yang ditentukan adu penalti dimenangkan Brasil dengan skor 3–2.",caption:"THE FOURTH STAR"},
{minute:"PEN",title:"Taffarel and Dunga deliver",text:"Taffarel menggagalkan penalti Daniele Massaro, sementara Dunga mencetak tendangan penentu setelah Roberto Baggio gagal mengeksekusi penalti terakhir Italia.",caption:"A CAPTAIN'S MOMENT"}],
"2002":[
{minute:"0′",title:"A balanced first half",text:"Brasil dan Jerman saling mengukur kekuatan. Oliver Kahn tampil kuat, sementara kedua tim masuk jeda tanpa gol.",caption:"THE FINAL BEGINS"},
{minute:"67′",title:"Ronaldo breaks the deadlock",text:"Ronaldo memanfaatkan bola muntah setelah Kahn gagal mengamankan tembakan Rivaldo. Brasil unggul 1–0.",caption:"THE PHENOMENON"},
{minute:"79′",title:"The second goal",text:"Rivaldo membiarkan bola lewat di depan dirinya dan Ronaldo menyelesaikan peluang dengan tenang. Brasil memimpin 2–0.",caption:"THE FIFTH STAR IS CLOSE"},
{minute:"90′",title:"Pentacampeão",text:"Peluit akhir memastikan gelar kelima Brasil. Ronaldo menyelesaikan turnamen sebagai top scorer dengan delapan gol.",caption:"FIVE-TIME CHAMPIONS"}]
};
const generations = [
{year:"1958",name:"The first stars",text:"Pelé · Garrincha · Vavá",image:photo.squad1958},
{year:"1962",name:"Back-to-back kings",text:"Garrincha · Amarildo · Zito",image:photo.garrincha2},
{year:"1970",name:"The beautiful team",text:"Pelé · Jairzinho · Tostão",image:photo.squad1970},
{year:"1994",name:"The resilient side",text:"Romário · Bebeto · Dunga",image:photo.squad1958},
{year:"2002",name:"The fifth star",text:"Ronaldo · Rivaldo · Ronaldinho",image:photo.ronaldo}
];
const quizQuestions = [
{q:"Pada tahun berapa Brasil meraih gelar Piala Dunia pertamanya?",o:["1950","1958","1962","1970"],a:1,e:"Brasil mengalahkan Swedia 5–2 pada final 1958 dan meraih gelar dunia pertama."},
{q:"Siapa pemain Brasil yang mencetak dua gol pada final Piala Dunia 2002?",o:["Rivaldo","Ronaldinho","Ronaldo Nazário","Cafu"],a:2,e:"Ronaldo mencetak kedua gol Brasil saat menang 2–0 atas Jerman di Yokohama."},
{q:"Siapa kapten Brasil pada final Piala Dunia 1970?",o:["Pelé","Carlos Alberto Torres","Gérson","Jairzinho"],a:1,e:"Carlos Alberto Torres adalah kapten Brasil dan mencetak gol keempat pada final 1970."},
{q:"Siapa yang menjadi lawan Brasil pada final Piala Dunia 1994?",o:["Argentina","Jerman","Italia","Prancis"],a:2,e:"Brasil menghadapi Italia. Final berakhir 0–0 sebelum Brasil menang 3–2 melalui adu penalti."},
{q:"Siapa bintang Brasil yang sangat menonjol saat Pelé cedera pada 1962?",o:["Garrincha","Zico","Romário","Rivaldo"],a:0,e:"Garrincha tampil luar biasa dan menjadi figur utama dalam perjalanan Brasil mempertahankan gelar."},
{q:"Siapa pelatih Brasil saat meraih gelar kelima pada 2002?",o:["Mário Zagallo","Carlos Alberto Parreira","Luiz Felipe Scolari","Tite"],a:2,e:"Luiz Felipe Scolari, dikenal sebagai Felipão, memimpin Brasil pada 2002."},
{q:"Berapa skor final Brasil melawan Italia pada 1970?",o:["2–0","3–1","4–1","5–2"],a:2,e:"Brasil menang 4–1. Pelé, Gérson, Jairzinho, dan Carlos Alberto mencetak gol."},
{q:"Apa posisi akhir Brasil pada Piala Dunia 2014?",o:["Juara","Runner-up","Peringkat ketiga","Peringkat keempat"],a:3,e:"Brasil finis keempat setelah kalah dari Jerman pada semifinal dan Belanda pada perebutan tempat ketiga."},
{q:"Siapa duet penyerang Brasil yang sangat berpengaruh pada 1994?",o:["Pelé dan Vavá","Romário dan Bebeto","Ronaldo dan Rivaldo","Zico dan Sócrates"],a:1,e:"Romário dan Bebeto menjadi duet utama Brasil pada kampanye juara 1994."},
{q:"Berapa kali Brasil menjadi juara Piala Dunia hingga edisi 2022?",o:["3 kali","4 kali","5 kali","6 kali"],a:2,e:"Brasil memiliki lima gelar: 1958, 1962, 1970, 1994, dan 2002."}
];

function renderTimeline(filter){
  const track=$("#timelineTrack");
  const list=tournaments.filter(t=>filter==="all"||(filter==="champions"&&t.type==="champion")||(filter==="turning"&&t.type==="turning"));
  track.innerHTML=list.map((t,i)=>{
    const top=i%2===0,showImage=[1958,1962,1970,1994,2002,2014,2022].includes(t.year);
    return '<article class="timeline-item" data-year="'+t.year+'"><span class="timeline-year">'+t.year+'</span><span class="timeline-dot"></span><span class="timeline-stem '+(top?"top":"bottom")+'"></span><a class="timeline-card '+(top?"top":"bottom")+(t.type==="champion"?" yellow-card":"")+'" href="stories/'+t.year+'.html" data-timeline-year="'+t.year+'" aria-label="Buka cerita Brasil pada Piala Dunia '+t.year+'">'+(showImage?'<img src="'+t.image+'" alt="Arsip Brasil di Piala Dunia '+t.year+'" loading="lazy">':'')+'<span class="timeline-card-body"><small class="event-tag">'+safe(t.host)+' · '+safe(t.tag)+'</small><strong>'+safe(t.result)+'</strong><span class="event-summary">'+safe(t.summary)+'</span><span class="event-link">OPEN STORY ↗</span></span></a></article>';
  }).join("");
  $(".timeline-item",track).forEach(item=>{item.addEventListener("mouseenter",()=>selectTimeline(Number(item.dataset.year)));item.addEventListener("focusin",()=>selectTimeline(Number(item.dataset.year)));});
  if(list.length)selectTimeline(list[0].year);
}
function selectTimeline(year){
  const t=tournaments.find(x=>x.year===year);if(!t)return;
  $$(".timeline-item").forEach(el=>el.classList.toggle("selected",Number(el.dataset.year)===year));
  $("#timelineSelectedYear").textContent=t.year;
  $("#timelineDetailLabel").textContent=t.host.toUpperCase()+" · "+t.tag;
  $("#timelineDetailTitle").textContent=t.type==="champion"?"A championship chapter":t.result;
  $("#timelineDetailText").textContent=t.detail;
  $("#timelineDetailScore").textContent=t.score;
  const item=$('.timeline-item[data-year="'+year+'"]');
  if(item&&window.innerWidth>760){const win=$("#timelineWindow");win.scrollTo({left:Math.max(0,item.offsetLeft+item.offsetWidth/2-win.clientWidth/2),behavior:"smooth"});}
}
let timelineFilter="all";renderTimeline(timelineFilter);
$$("[data-timeline-filter]").forEach(btn=>btn.addEventListener("click",()=>{
  timelineFilter=btn.dataset.timelineFilter;
  $$("[data-timeline-filter]").forEach(b=>b.classList.toggle("active",b===btn));
  renderTimeline(timelineFilter);
}));
$("#timelinePrev").addEventListener("click",()=>$("#timelineWindow").scrollBy({left:-560,behavior:"smooth"}));
$("#timelineNext").addEventListener("click",()=>$("#timelineWindow").scrollBy({left:560,behavior:"smooth"}));
const timelineWindow=$("#timelineWindow");let dragState=null;
timelineWindow.addEventListener("pointerdown",e=>{
  if(window.innerWidth<=760||e.target.closest("button"))return;
  dragState={x:e.clientX,left:timelineWindow.scrollLeft};timelineWindow.classList.add("dragging");timelineWindow.setPointerCapture(e.pointerId);
});
timelineWindow.addEventListener("pointermove",e=>{if(dragState)timelineWindow.scrollLeft=dragState.left-(e.clientX-dragState.x);});
["pointerup","pointercancel","lostpointercapture"].forEach(ev=>timelineWindow.addEventListener(ev,()=>{dragState=null;timelineWindow.classList.remove("dragging");}));

function avatar(p){return p.image?'<img src="'+p.image+'" alt="'+safe(p.name)+'" loading="lazy">':'<div class="player-avatar-fallback" aria-label="Ilustrasi '+safe(p.name)+'"><span>'+safe(p.name.split(" ").map(x=>x[0]).slice(0,2).join(""))+'</span></div>';}
function renderPlayers(filter,search){
  const grid=$("#playerGrid");
  const filtered=players.filter(p=>(filter==="all"||p.role===filter)&&(p.name+" "+p.full+" "+p.era+" "+p.position).toLowerCase().includes(search.toLowerCase()));
  if(!filtered.length){grid.innerHTML='<div class="empty-state">Tidak ada pemain yang cocok dengan pencarianmu.</div>';return;}
  grid.innerHTML=filtered.map(p=>'<article class="player-card" tabindex="0" role="button" data-player-id="'+p.id+'" aria-label="Lihat profil '+safe(p.name)+'"><div class="player-card-image">'+avatar(p)+'<span class="player-card-number">'+safe(p.number)+'</span></div><div class="player-card-info"><small>'+safe(p.position.toUpperCase())+' · '+safe(p.era)+'</small><h3>'+safe(p.name)+'</h3><div class="player-card-meta"><span>'+p.goals+' WC GOALS</span><span>'+p.apps+' APPS</span></div><span class="player-card-arrow">↗</span></div></article>').join("");
  $$("[data-player-id]",grid).forEach(card=>{
    const open=()=>openPlayer(card.dataset.playerId);
    card.addEventListener("click",open);
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
  });
}
let activePlayerFilter="all";renderPlayers(activePlayerFilter,"");
$("#playerSearch").addEventListener("input",e=>renderPlayers(activePlayerFilter,e.target.value));
$$("[data-player-filter]").forEach(btn=>btn.addEventListener("click",()=>{
  activePlayerFilter=btn.dataset.playerFilter;
  $$("[data-player-filter]").forEach(b=>b.classList.toggle("active",b===btn));
  renderPlayers(activePlayerFilter,$("#playerSearch").value);
}));
function openPlayer(id){
  const p=players.find(x=>x.id===id);if(!p)return;
  $("#playerModalContent").innerHTML='<div class="modal-layout">'+(p.image?'<img src="'+p.image+'" alt="'+safe(p.name)+'">':'<div class="modal-avatar-fallback">'+safe(p.name.split(" ").map(x=>x[0]).slice(0,2).join(""))+'</div>')+'<div class="modal-copy"><small>'+safe(p.position.toUpperCase())+' · '+safe(p.era)+'</small><h2>'+safe(p.name)+'</h2><p><b>'+safe(p.full)+'</b><br>'+safe(p.bio)+'</p><p><b>Playing style:</b> '+safe(p.style)+'</p><div class="modal-facts"><div><b>'+p.goals+'</b><span>WORLD CUP GOALS</span></div><div><b>'+p.apps+'</b><span>WORLD CUP APPS</span></div><div><b>'+p.titles+'</b><span>TITLES</span></div></div></div></div>';
  const dialog=$("#playerModal");if(dialog.showModal)dialog.showModal();else alert(p.name+"\n"+p.bio);
}
$("#modalClose").addEventListener("click",()=>$("#playerModal").close());
$("#playerModal").addEventListener("click",e=>{if(e.target===$("#playerModal"))$("#playerModal").close();});

function renderSquad(year){
  const squad=squads[year];if(!squad)return;
  $("#formationName").textContent=squad.formation;$("#pitchYear").textContent=squad.year;
  const host=$("#pitchPlayers");
  host.innerHTML=squad.players.map((p,i)=>'<button class="pitch-player '+(i===0?"selected":"")+'" style="left:'+p.x+'%;top:'+p.y+'%" data-pitch-index="'+i+'" aria-label="'+safe(p.name)+', '+safe(p.pos)+'"><span class="shirt">'+p.n+'</span><small>'+safe(p.name.split(" ")[0])+'</small></button>').join("");
  $$(".pitch-player",host).forEach(btn=>btn.addEventListener("click",()=>selectPitchPlayer(squad,Number(btn.dataset.pitchIndex))));
  selectPitchPlayer(squad,0);
}
function selectPitchPlayer(squad,index){
  const p=squad.players[index];if(!p)return;
  $$(".pitch-player").forEach((el,i)=>el.classList.toggle("selected",i===index));
  const known=players.find(x=>x.name.toLowerCase()===p.name.toLowerCase()||x.name.toLowerCase().startsWith(p.name.toLowerCase()));
  $("#inspectorNumber").textContent=p.n;$("#inspectorPosition").textContent=p.pos.toUpperCase();$("#inspectorName").textContent=p.name;$("#inspectorBio").textContent=p.desc;$("#inspectorGoals").textContent=known?known.goals:"—";$("#inspectorApps").textContent=known?known.apps:"—";
}
$("#squadSelect").addEventListener("change",e=>renderSquad(e.target.value));renderSquad("1970");

function fillCompareSelects(){
  const opts=players.map(p=>'<option value="'+p.id+'">'+safe(p.name)+'</option>').join("");
  $("#compareA").innerHTML=opts;$("#compareB").innerHTML=opts;$("#compareA").value="pele";$("#compareB").value="ronaldo";
}
function renderComparison(){
  const a=players.find(p=>p.id===$("#compareA").value),b=players.find(p=>p.id===$("#compareB").value);if(!a||!b)return;
  $("#compareProfiles").innerHTML=[a,b].map(p=>'<div class="compare-profile">'+(p.image?'<img src="'+p.image+'" alt="'+safe(p.name)+'">':'<div class="compare-avatar">'+safe(p.name.split(" ").map(x=>x[0]).slice(0,2).join(""))+'</div>')+'<div><span>'+safe(p.position.toUpperCase())+'</span><h3>'+safe(p.name)+'</h3><span>'+safe(p.era)+'</span></div></div>').join("");
  const metrics=[["World Cup goals",a.goals,b.goals],["World Cup appearances",a.apps,b.apps],["World Cup titles",a.titles,b.titles]];
  $("#comparisonMetrics").innerHTML=metrics.map(m=>{
    const max=Math.max(m[1],m[2],1);
    return '<div class="metric-row"><div class="metric-side"><b class="metric-value">'+m[1]+'</b><span class="metric-bar"><i style="width:'+(m[1]/max*100)+'%"></i></span></div><div class="metric-name">'+m[0]+'</div><div class="metric-side right"><b class="metric-value">'+m[2]+'</b><span class="metric-bar"><i style="width:'+(m[2]/max*100)+'%"></i></span></div></div>';
  }).join("");
}
fillCompareSelects();renderComparison();
$("#compareA").addEventListener("change",renderComparison);$("#compareB").addEventListener("change",renderComparison);

$("#matchGrid").innerHTML=matches.map(m=>'<article class="match-card"><span class="match-year">'+m.year+'</span><span class="match-type">'+safe(m.tag)+'</span><h3>'+safe(m.title)+'</h3><span class="match-score">'+safe(m.text.split(" · ")[0])+'</span><p>'+safe(m.detail)+'</p><button data-match-story="'+(m.story||"1970")+'">Relive the match ↗</button></article>').join("");
$$("[data-match-story]").forEach(btn=>btn.addEventListener("click",()=>{
  $("#storyMatchSelect").value=btn.dataset.matchStory;renderStory(btn.dataset.matchStory);$("#storyMode").scrollIntoView({behavior:"smooth",block:"center"});
}));
let storyIndex=0;
function renderStory(year){
  const list=stories[year]||stories["1970"];storyIndex=0;
  const update=()=>{
    const s=list[storyIndex];
    $("#storyStepLabel").textContent=String(storyIndex+1).padStart(2,"0")+" / "+String(list.length).padStart(2,"0");
    $("#storyProgressBar").style.width=((storyIndex+1)/list.length*100)+"%";
    $("#storyMinute").textContent=s.minute;$("#storyTitle").textContent=s.title;$("#storyText").textContent=s.text;
    $("#storyVisualYear").textContent=year;$("#storyVisualCaption").textContent=s.caption;
    $("#storyPrev").disabled=storyIndex===0;$("#storyNext").textContent=storyIndex===list.length-1?"Replay story ↻":"Next moment →";
  };
  $("#storyMode").dataset.year=year;$("#storyMode")._updateStory=update;update();
}
$("#storyMatchSelect").addEventListener("change",e=>renderStory(e.target.value));
$("#storyPrev").addEventListener("click",()=>{if(storyIndex>0){storyIndex--;$("#storyMode")._updateStory();}});
$("#storyNext").addEventListener("click",()=>{const list=stories[$("#storyMode").dataset.year];storyIndex=storyIndex<list.length-1?storyIndex+1:0;$("#storyMode")._updateStory();});
renderStory("1970");

$("#generationGrid").innerHTML=generations.map(g=>'<article class="generation-card" style="--gen-image:url(&quot;'+g.image+'&quot;)"><span class="gen-year">'+g.year+'</span><h3>'+safe(g.name)+'</h3><p>'+safe(g.text)+'</p><a href="#timeline" data-gen-year="'+g.year+'">Explore era ↗</a></article>').join("");
$$("[data-gen-year]").forEach(a=>a.addEventListener("click",()=>{
  const year=Number(a.dataset.genYear);$$("[data-timeline-filter]").forEach(b=>b.classList.toggle("active",b.dataset.timelineFilter==="all"));timelineFilter="all";renderTimeline("all");selectTimeline(year);
}));
$("#titleChart").innerHTML=[1958,1962,1970,1994,2002].map((y,i)=>'<div class="title-bar" style="height:'+(70+(i%2)*24)+'%"><span>★</span><small>'+y+'</small></div>').join("");

const facts=[
"Brasil adalah satu-satunya negara yang tampil pada setiap edisi Piala Dunia putra dari 1930 hingga 2022.",
"Pelé berusia 17 tahun saat Brasil menjuarai Piala Dunia 1958.",
"Garrincha menjadi tokoh utama setelah Pelé cedera pada Piala Dunia 1962.",
"Jairzinho mencetak gol dalam setiap pertandingan Brasil di Piala Dunia 1970.",
"Final Piala Dunia 1994 adalah final pertama yang ditentukan lewat adu penalti.",
"Ronaldo mencetak delapan gol di Piala Dunia 2002 dan dua gol pada final."
];
let factIndex=0;
$("#generations").insertAdjacentHTML("afterend",'<section class="section-shell fact-share-section" id="daily-fact"><div class="fact-card"><span class="eyebrow"><i></i> DID YOU KNOW?</span><p id="factText">'+facts[0]+'</p><button class="text-link" id="newFact">Another fact ↻</button></div><div class="share-card"><span class="micro-label">MAKE IT SHAREABLE</span><h3 id="shareTitle">FIVE STARS.<br>ONE FOOTBALL LEGACY.</h3><p id="shareText">Brasil · 5 World Cup titles · 1958, 1962, 1970, 1994, 2002</p><div class="share-actions"><button class="btn btn-primary" id="shareFact">Share card ↗</button><button class="btn btn-ghost" id="copyFact">Copy fact</button></div></div></section>');
$("#newFact").addEventListener("click",()=>{
  factIndex=(factIndex+1+Math.floor(Math.random()*(facts.length-1)))%facts.length;$("#factText").textContent=facts[factIndex];$("#shareText").textContent=facts[factIndex];$("#shareTitle").textContent="DID YOU KNOW?";
});
function currentShareText(){return $("#shareTitle").textContent.replace(/\n/g," ")+" — "+$("#shareText").textContent+" | The Five Star Legacy";}
$("#copyFact").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(currentShareText());showToast("Fact copied!");}
  catch(e){showToast("Clipboard tidak tersedia di browser ini.");}
});
$("#shareFact").addEventListener("click",async()=>{
  const data={title:"The Five Star Legacy",text:currentShareText(),url:location.href};
  try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(currentShareText()+" "+location.href);showToast("Share text copied!");}}
  catch(e){if(e.name!=="AbortError")showToast("Tidak dapat membuka menu share.");}
});

let quizOrder=[],quizIndex=0,quizScore=0,quizLocked=false;
const getBest=()=>Number(localStorage.getItem("fiveStarQuizBest")||0);
$("#quizBest").textContent=getBest()+" / 10";
function startQuiz(){
  quizOrder=quizQuestions.map((_,i)=>i).sort(()=>Math.random()-.5).slice(0,10);quizIndex=0;quizScore=0;renderQuestion();
}
function renderQuestion(){
  quizLocked=false;const q=quizQuestions[quizOrder[quizIndex]];
  $("#quizCard").innerHTML='<div class="quiz-question"><div class="quiz-question-top"><span>QUESTION '+(quizIndex+1)+' / 10</span><span>SCORE '+quizScore+'</span></div><h3>'+safe(q.q)+'</h3><div class="quiz-options">'+q.o.map((o,i)=>'<button class="quiz-option" data-answer="'+i+'"><b>'+String.fromCharCode(65+i)+'.</b> '+safe(o)+'</button>').join("")+'</div><div class="quiz-feedback" id="quizFeedback">Pilih satu jawaban terbaik.</div><div class="quiz-next"><button class="btn btn-primary" id="quizNext" disabled>Next question →</button></div></div>';
  $$("[data-answer]").forEach(btn=>btn.addEventListener("click",()=>answerQuiz(Number(btn.dataset.answer))));
  $("#quizNext").addEventListener("click",()=>{quizIndex++;if(quizIndex<10)renderQuestion();else finishQuiz();});
}
function answerQuiz(choice){
  if(quizLocked)return;quizLocked=true;const q=quizQuestions[quizOrder[quizIndex]];
  $$("[data-answer]").forEach((btn,i)=>{btn.disabled=true;if(i===q.a)btn.classList.add("correct");if(i===choice&&choice!==q.a)btn.classList.add("wrong");});
  if(choice===q.a)quizScore++;
  $("#quizFeedback").textContent=(choice===q.a?"✓ Benar! ":"Belum tepat. ")+q.e;
  $(".quiz-question-top span:last-child").textContent="SCORE "+quizScore;
  $("#quizNext").disabled=false;$("#quizNext").textContent=quizIndex===9?"See results →":"Next question →";
}
function finishQuiz(){
  const best=Math.max(getBest(),quizScore);localStorage.setItem("fiveStarQuizBest",String(best));$("#quizBest").textContent=best+" / 10";
  const note=quizScore===10?"Perfect score. You know your Seleção history!":quizScore>=7?"Great knowledge. You know your Brazilian football history.":quizScore>=4?"Nice effort. Explore the timeline and try again.":"Every legend starts as a learner. Explore the stories and play again.";
  $("#quizCard").innerHTML='<div class="quiz-result"><div class="result-score">'+quizScore+'<small style="font-size:24px;color:#81939d"> / 10</small></div><span class="micro-label">CHALLENGE COMPLETED</span><h3>'+note+'</h3><p>Your personal best: '+best+'/10. Your result is saved on this device.</p><button class="btn btn-primary" id="restartQuiz">Play again ↻</button></div>';
  $("#restartQuiz").addEventListener("click",startQuiz);
}
$("#startQuiz").addEventListener("click",startQuiz);

const counters=$$(".counter");
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const el=entry.target,target=Number(el.dataset.count)||0,begin=performance.now(),duration=900;
    const tick=now=>{const p=Math.min((now-begin)/duration,1);el.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(tick);};
    requestAnimationFrame(tick);observer.unobserve(el);
  }),{threshold:.45});
  counters.forEach(c=>observer.observe(c));
}else counters.forEach(c=>c.textContent=c.dataset.count);

const menuToggle=$("#menuToggle"),mainNav=$("#mainNav");
menuToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});
$$(".main-nav a").forEach(a=>a.addEventListener("click",()=>{mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
if("IntersectionObserver" in window){
  const sections=$$("main section[id]");
  const navObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting)$$(".main-nav a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
  }),{rootMargin:"-30% 0px -60% 0px"});
  sections.forEach(s=>navObserver.observe(s));
}
let toastTimer;
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2200);}
$$(".brand").forEach(a=>a.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"})));
