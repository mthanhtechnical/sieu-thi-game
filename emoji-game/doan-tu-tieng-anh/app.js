const $=(s)=>document.querySelector(s);const $$=(s)=>[...document.querySelectorAll(s)];
const coreQuestions=[
{emoji:"🌱",vi:"phát triển, lớn lên",a:"grow",c:["grow","throw","glow","grind"],ex:"Grow = phát triển, lớn lên. Plants grow fast after rain."},
{emoji:"🧭",vi:"khám phá",a:"explore",c:["explore","explain","expect","escape"],ex:"Explore = khám phá, tìm hiểu một nơi hoặc ý tưởng mới."},
{emoji:"🛡️",vi:"bảo vệ",a:"protect",c:["protect","predict","produce","pretend"],ex:"Protect = bảo vệ. Wear a helmet to protect your head."},
{emoji:"💡",vi:"ý tưởng",a:"idea",c:["idea","ideal","idiom","index"],ex:"Idea = ý tưởng. Ideal = lý tưởng, idiom = thành ngữ."},
{emoji:"😌",vi:"bình tĩnh",a:"calm",c:["calm","claim","climb","clean"],ex:"Calm = bình tĩnh, yên ổn. Stay calm = giữ bình tĩnh."},
{emoji:"🎯",vi:"mục tiêu",a:"target",c:["target","talent","ticket","topic"],ex:"Target = mục tiêu hoặc đích nhắm."},
{emoji:"🤝",vi:"hợp tác",a:"cooperate",c:["cooperate","compare","compete","complete"],ex:"Cooperate = hợp tác. Compete = cạnh tranh."},
{emoji:"🔁",vi:"lặp lại",a:"repeat",c:["repeat","repair","reply","replace"],ex:"Repeat = lặp lại. Repeat after me = nhắc lại theo tôi."},
{emoji:"🧠",vi:"ghi nhớ",a:"remember",c:["remember","remind","remove","remain"],ex:"Remember = nhớ. Remind = nhắc ai nhớ."},
{emoji:"⚖️",vi:"cân bằng",a:"balance",c:["balance","balloon","belong","believe"],ex:"Balance = cân bằng, sự thăng bằng."},
{emoji:"🚀",vi:"cải thiện",a:"improve",c:["improve","include","invite","imagine"],ex:"Improve = cải thiện, tiến bộ."},
{emoji:"🧩",vi:"giải quyết",a:"solve",c:["solve","save","serve","share"],ex:"Solve = giải quyết một vấn đề hoặc bài toán."},
{emoji:"📦",vi:"giao hàng, chuyển tới",a:"deliver",c:["deliver","discover","decide","develop"],ex:"Deliver = giao hàng, chuyển tới, hoặc thực hiện lời hứa."},
{emoji:"🌉",vi:"kết nối",a:"connect",c:["connect","collect","correct","control"],ex:"Connect = kết nối. Connection = sự kết nối."},
{emoji:"🪞",vi:"phản chiếu, suy ngẫm",a:"reflect",c:["reflect","respect","reject","record"],ex:"Reflect = phản chiếu hoặc suy ngẫm về điều gì."},
{emoji:"🎨",vi:"sáng tạo",a:"create",c:["create","credit","career","correct"],ex:"Create = tạo ra, sáng tạo ra một thứ mới."},
{emoji:"🧪",vi:"thí nghiệm",a:"experiment",c:["experiment","experience","equipment","environment"],ex:"Experiment = thí nghiệm. Experience = kinh nghiệm/trải nghiệm."},
{emoji:"🧬",vi:"phát minh",a:"invent",c:["invent","invest","invite","involve"],ex:"Invent = phát minh. Inventor = nhà phát minh."},
{emoji:"🔍",vi:"tìm kiếm",a:"search",c:["search","stretch","switch","scratch"],ex:"Search = tìm kiếm, tra cứu."},
{emoji:"📚",vi:"kiến thức",a:"knowledge",c:["knowledge","language","challenge","college"],ex:"Knowledge = kiến thức, hiểu biết."},
{emoji:"🗣️",vi:"phát âm",a:"pronounce",c:["pronounce","promise","provide","prepare"],ex:"Pronounce = phát âm. Pronunciation = cách phát âm."},
{emoji:"👂",vi:"lắng nghe",a:"listen",c:["listen","lesson","silent","signal"],ex:"Listen = lắng nghe. Listen carefully = nghe cẩn thận."},
{emoji:"📝",vi:"mô tả",a:"describe",c:["describe","decide","design","destroy"],ex:"Describe = mô tả bằng lời."},
{emoji:"📣",vi:"thông báo",a:"announce",c:["announce","allow","arrange","avoid"],ex:"Announce = thông báo công khai."},
{emoji:"💬",vi:"thảo luận",a:"discuss",c:["discuss","discover","dismiss","divide"],ex:"Discuss = thảo luận, bàn bạc."},
{emoji:"❓",vi:"hỏi, yêu cầu",a:"ask",c:["ask","act","add","aim"],ex:"Ask = hỏi hoặc yêu cầu ai làm gì."},
{emoji:"✅",vi:"xác nhận",a:"confirm",c:["confirm","confuse","contain","continue"],ex:"Confirm = xác nhận điều gì là đúng hoặc chắc chắn."},
{emoji:"🤔",vi:"nghi ngờ",a:"doubt",c:["doubt","double","draft","dream"],ex:"Doubt = nghi ngờ, không chắc."},
{emoji:"🧘",vi:"tập trung",a:"focus",c:["focus","famous","finish","follow"],ex:"Focus = tập trung vào một việc."},
{emoji:"⏳",vi:"kiên nhẫn",a:"patient",c:["patient","pattern","payment","partner"],ex:"Patient = kiên nhẫn; cũng có nghĩa là bệnh nhân."},
{emoji:"💪",vi:"nỗ lực",a:"effort",c:["effort","effect","expert","export"],ex:"Effort = sự nỗ lực, công sức bỏ ra."},
{emoji:"🏆",vi:"thành công",a:"success",c:["success","surface","support","suggest"],ex:"Success = thành công. Successful = thành công."},
{emoji:"📈",vi:"tiến bộ",a:"progress",c:["progress","process","produce","promise"],ex:"Progress = sự tiến bộ hoặc quá trình tiến lên."},
{emoji:"🧗",vi:"thử thách",a:"challenge",c:["challenge","chance","change","choice"],ex:"Challenge = thử thách, điều khó cần vượt qua."},
{emoji:"🌟",vi:"tự tin",a:"confident",c:["confident","convenient","consistent","creative"],ex:"Confident = tự tin. Confidence = sự tự tin."},
{emoji:"😟",vi:"lo lắng",a:"worried",c:["worried","worthy","wounded","written"],ex:"Worried = lo lắng về điều gì."},
{emoji:"😊",vi:"vui vẻ",a:"cheerful",c:["cheerful","careful","colorful","helpful"],ex:"Cheerful = vui vẻ, tươi tỉnh."},
{emoji:"😲",vi:"ngạc nhiên",a:"surprised",c:["surprised","supported","suggested","surrounded"],ex:"Surprised = ngạc nhiên, bất ngờ."},
{emoji:"😤",vi:"tức giận",a:"angry",c:["angry","agree","alone","alive"],ex:"Angry = tức giận."},
{emoji:"🙏",vi:"biết ơn",a:"grateful",c:["grateful","general","gentle","gradual"],ex:"Grateful = biết ơn, cảm kích."},
{emoji:"💖",vi:"tử tế",a:"kind",c:["kind","keen","kick","keep"],ex:"Kind = tử tế, tốt bụng."},
{emoji:"🧑‍🤝‍🧑",vi:"bạn bè, thân thiện",a:"friendly",c:["friendly","finally","frequently","fairly"],ex:"Friendly = thân thiện, dễ mến."},
{emoji:"🧑‍🏫",vi:"giải thích",a:"explain",c:["explain","explore","express","expand"],ex:"Explain = giải thích cho rõ."},
{emoji:"🎭",vi:"giả vờ",a:"pretend",c:["pretend","protect","prefer","prevent"],ex:"Pretend = giả vờ, làm như thể điều gì là thật."},
{emoji:"🎁",vi:"chia sẻ",a:"share",c:["share","shape","shake","shine"],ex:"Share = chia sẻ, dùng chung."},
{emoji:"🧰",vi:"sửa chữa",a:"repair",c:["repair","repeat","remain","return"],ex:"Repair = sửa chữa đồ bị hỏng."},
{emoji:"🧹",vi:"dọn dẹp",a:"clean",c:["clean","clear","climb","claim"],ex:"Clean = lau dọn hoặc sạch sẽ."},
{emoji:"🍳",vi:"chuẩn bị",a:"prepare",c:["prepare","prevent","prefer","present"],ex:"Prepare = chuẩn bị trước."},
{emoji:"🏗️",vi:"xây dựng",a:"build",c:["build","bring","break","brush"],ex:"Build = xây dựng, lắp dựng."},
{emoji:"🧱",vi:"hỗ trợ",a:"support",c:["support","suppose","surface","survive"],ex:"Support = hỗ trợ, ủng hộ."},
{emoji:"🚧",vi:"ngăn chặn",a:"prevent",c:["prevent","present","prefer","protect"],ex:"Prevent = ngăn chặn điều xấu xảy ra."},
{emoji:"🛠️",vi:"công cụ",a:"tool",c:["tool","tall","tale","tour"],ex:"Tool = công cụ, dụng cụ."},
{emoji:"🔋",vi:"năng lượng",a:"energy",c:["energy","engine","enough","enemy"],ex:"Energy = năng lượng, sức lực."},
{emoji:"🌍",vi:"môi trường",a:"environment",c:["environment","entertainment","equipment","experiment"],ex:"Environment = môi trường xung quanh."},
{emoji:"🌦️",vi:"thời tiết",a:"weather",c:["weather","whether","worker","winter"],ex:"Weather = thời tiết. Whether = liệu rằng."},
{emoji:"🌊",vi:"đại dương",a:"ocean",c:["ocean","option","object","orange"],ex:"Ocean = đại dương, biển lớn."},
{emoji:"🏔️",vi:"núi",a:"mountain",c:["mountain","morning","machine","message"],ex:"Mountain = núi."},
{emoji:"🌲",vi:"rừng",a:"forest",c:["forest","foreign","forget","forward"],ex:"Forest = rừng."},
{emoji:"🐾",vi:"động vật",a:"animal",c:["animal","annual","arrival","article"],ex:"Animal = động vật."},
{emoji:"🦋",vi:"côn trùng",a:"insect",c:["insect","inside","instead","invite"],ex:"Insect = côn trùng như kiến, ong, bướm."},
{emoji:"🌾",vi:"nông trại",a:"farm",c:["farm","form","firm","fame"],ex:"Farm = nông trại. Farmer = nông dân."},
{emoji:"🏙️",vi:"thành phố",a:"city",c:["city","site","side","seat"],ex:"City = thành phố."},
{emoji:"🏘️",vi:"khu phố",a:"neighborhood",c:["neighborhood","newspaper","notebook","network"],ex:"Neighborhood = khu phố, vùng lân cận."},
{emoji:"🛣️",vi:"hành trình",a:"journey",c:["journey","journal","justice","jungle"],ex:"Journey = chuyến đi, hành trình."},
{emoji:"🧳",vi:"hành lý",a:"luggage",c:["luggage","language","library","lesson"],ex:"Luggage = hành lý khi đi xa."},
{emoji:"🛫",vi:"sân bay",a:"airport",c:["airport","airplane","arrive","around"],ex:"Airport = sân bay."},
{emoji:"🗺️",vi:"bản đồ",a:"map",c:["map","mail","meal","mean"],ex:"Map = bản đồ."},
{emoji:"🏠",vi:"nơi trú ẩn",a:"shelter",c:["shelter","shoulder","shorter","silver"],ex:"Shelter = nơi trú ẩn, chỗ che mưa nắng."},
{emoji:"🪑",vi:"đồ nội thất",a:"furniture",c:["furniture","future","feature","failure"],ex:"Furniture = đồ nội thất như bàn ghế, tủ."},
{emoji:"🪟",vi:"rèm cửa",a:"curtain",c:["curtain","certain","captain","contain"],ex:"Curtain = rèm cửa."},
{emoji:"💡",vi:"bóng đèn",a:"lamp",c:["lamp","land","lane","late"],ex:"Lamp = đèn, bóng đèn để chiếu sáng."},
{emoji:"🧺",vi:"cái giỏ",a:"basket",c:["basket","blanket","bucket","biscuit"],ex:"Basket = cái giỏ."},
{emoji:"🧊",vi:"lạnh cóng",a:"frozen",c:["frozen","foreign","forgotten","frequent"],ex:"Frozen = bị đông lạnh, lạnh cóng."},
{emoji:"🔥",vi:"nóng, nhiệt",a:"heat",c:["heat","heart","height","health"],ex:"Heat = sức nóng, nhiệt."},
{emoji:"🌫️",vi:"sương mù",a:"fog",c:["fog","fix","fox","fan"],ex:"Fog = sương mù."},
{emoji:"🌪️",vi:"bão",a:"storm",c:["storm","store","story","stone"],ex:"Storm = cơn bão."},
{emoji:"☂️",vi:"ô, dù",a:"umbrella",c:["umbrella","uniform","universe","unusual"],ex:"Umbrella = ô/dù che mưa hoặc nắng."},
{emoji:"👕",vi:"trang phục",a:"outfit",c:["outfit","outside","output","outline"],ex:"Outfit = bộ trang phục."},
{emoji:"👟",vi:"giày thể thao",a:"sneakers",c:["sneakers","speakers","stickers","sweaters"],ex:"Sneakers = giày thể thao."},
{emoji:"🧤",vi:"găng tay",a:"gloves",c:["gloves","glasses","groups","grows"],ex:"Gloves = găng tay."},
{emoji:"🎒",vi:"ba lô",a:"backpack",c:["backpack","background","bookmark","breakfast"],ex:"Backpack = ba lô."},
{emoji:"🪪",vi:"vé, phiếu",a:"ticket",c:["ticket","target","talent","topic"],ex:"Ticket = vé hoặc phiếu."},
{emoji:"💳",vi:"biên lai",a:"receipt",c:["receipt","recipe","receive","recent"],ex:"Receipt = biên lai. Recipe = công thức nấu ăn."},
{emoji:"🛒",vi:"mua hàng",a:"purchase",c:["purchase","purpose","practice","produce"],ex:"Purchase = mua hàng; trang trọng hơn buy."},
{emoji:"💰",vi:"giá cả",a:"price",c:["price","prize","peace","piece"],ex:"Price = giá tiền. Prize = giải thưởng."},
{emoji:"🎟️",vi:"giảm giá",a:"discount",c:["discount","discover","distance","discuss"],ex:"Discount = khoản giảm giá."},
{emoji:"🏥",vi:"sức khỏe",a:"health",c:["health","height","heart","heat"],ex:"Health = sức khỏe."},
{emoji:"💊",vi:"thuốc",a:"medicine",c:["medicine","machine","magazine","message"],ex:"Medicine = thuốc hoặc ngành y."},
{emoji:"🩹",vi:"vết thương",a:"wound",c:["wound","world","worth","wrong"],ex:"Wound = vết thương."},
{emoji:"😴",vi:"ngủ gật, buồn ngủ",a:"sleepy",c:["sleepy","slippery","slowly","silly"],ex:"Sleepy = buồn ngủ."},
{emoji:"🏃",vi:"tập thể dục",a:"exercise",c:["exercise","excellent","example","excited"],ex:"Exercise = bài tập hoặc tập thể dục."},
{emoji:"🥗",vi:"lành mạnh",a:"healthy",c:["healthy","wealthy","heavy","hungry"],ex:"Healthy = lành mạnh, tốt cho sức khỏe."},
{emoji:"🍽️",vi:"bữa ăn",a:"meal",c:["meal","mail","mean","map"],ex:"Meal = bữa ăn."},
{emoji:"🥣",vi:"nguyên liệu",a:"ingredient",c:["ingredient","instrument","important","interest"],ex:"Ingredient = nguyên liệu trong món ăn."},
{emoji:"🧂",vi:"hương vị",a:"flavor",c:["flavor","flower","favor","fever"],ex:"Flavor = hương vị."},
{emoji:"🍯",vi:"ngọt",a:"sweet",c:["sweet","sweat","street","sheet"],ex:"Sweet = ngọt. Sweat = mồ hôi."},
{emoji:"🍋",vi:"chua",a:"sour",c:["sour","sure","sort","soup"],ex:"Sour = chua."},
{emoji:"🌶️",vi:"cay",a:"spicy",c:["spicy","space","special","speedy"],ex:"Spicy = cay, nhiều gia vị."},
{emoji:"🧮",vi:"tính toán",a:"calculate",c:["calculate","celebrate","collect","complete"],ex:"Calculate = tính toán."},
{emoji:"📏",vi:"đo lường",a:"measure",c:["measure","message","mixture","machine"],ex:"Measure = đo lường hoặc số đo."},
{emoji:"📊",vi:"dữ liệu",a:"data",c:["data","date","detail","duty"],ex:"Data = dữ liệu, thông tin dùng để phân tích."},
{emoji:"💻",vi:"thiết bị",a:"device",c:["device","divide","decide","design"],ex:"Device = thiết bị như điện thoại, máy tính."},
{emoji:"🔐",vi:"mật khẩu",a:"password",c:["password","passport","package","pattern"],ex:"Password = mật khẩu."},
{emoji:"🧑‍💻",vi:"lập trình",a:"program",c:["program","progress","problem","promise"],ex:"Program = chương trình; cũng có thể là lập trình."},
{emoji:"🖱️",vi:"nhấp chuột",a:"click",c:["click","clock","clerk","clear"],ex:"Click = nhấp chuột hoặc bấm vào."},
{emoji:"🖨️",vi:"in",a:"print",c:["print","paint","point","plant"],ex:"Print = in ra giấy."},
{emoji:"📁",vi:"thư mục",a:"folder",c:["folder","follow","flower","filter"],ex:"Folder = thư mục chứa file."},
{emoji:"🧾",vi:"tài liệu",a:"document",c:["document","development","department","direction"],ex:"Document = tài liệu, văn bản."},
{emoji:"🔔",vi:"nhắc nhở",a:"reminder",c:["reminder","remember","receiver","remainder"],ex:"Reminder = lời nhắc, thông báo nhắc việc."},
{emoji:"📅",vi:"lịch trình",a:"schedule",c:["schedule","school","scheme","science"],ex:"Schedule = lịch trình, thời gian biểu."},
{emoji:"⏰",vi:"đúng giờ",a:"punctual",c:["punctual","practical","powerful","peaceful"],ex:"Punctual = đúng giờ."},
{emoji:"🚦",vi:"giao thông",a:"traffic",c:["traffic","travel","training","trouble"],ex:"Traffic = giao thông, xe cộ trên đường."},
{emoji:"🚲",vi:"phương tiện",a:"vehicle",c:["vehicle","visible","village","valuable"],ex:"Vehicle = phương tiện đi lại như xe, tàu."},
{emoji:"🧭",vi:"hướng đi",a:"direction",c:["direction","decision","discussion","description"],ex:"Direction = hướng đi hoặc chỉ dẫn."},
{emoji:"🏁",vi:"đến nơi",a:"arrive",c:["arrive","avoid","allow","argue"],ex:"Arrive = đến nơi. Arrival = sự đến nơi."},
{emoji:"🚪",vi:"rời đi",a:"leave",c:["leave","live","level","learn"],ex:"Leave = rời đi hoặc để lại."},
{emoji:"🎵",vi:"âm thanh",a:"sound",c:["sound","south","round","found"],ex:"Sound = âm thanh."},
{emoji:"🎧",vi:"yên lặng",a:"silent",c:["silent","listen","signal","simple"],ex:"Silent = yên lặng, không có tiếng."},
{emoji:"📷",vi:"chụp lại",a:"capture",c:["capture","chapter","culture","creature"],ex:"Capture = chụp/ghi lại hoặc bắt giữ."},
{emoji:"🎬",vi:"cảnh phim",a:"scene",c:["scene","science","screen","score"],ex:"Scene = cảnh trong phim, kịch hoặc một tình huống."},
{emoji:"📰",vi:"tiêu đề",a:"headline",c:["headline","deadline","homeland","highlight"],ex:"Headline = tiêu đề bài báo/tin tức."},
{emoji:"📖",vi:"chương",a:"chapter",c:["chapter","capture","character","calendar"],ex:"Chapter = chương trong sách."},
{emoji:"🧑",vi:"nhân vật",a:"character",c:["character","challenge","calendar","chapter"],ex:"Character = nhân vật hoặc tính cách."},
{emoji:"🧵",vi:"mẫu, khuôn mẫu",a:"pattern",c:["pattern","partner","patient","payment"],ex:"Pattern = mẫu, họa tiết hoặc quy luật lặp lại."},
{emoji:"🧲",vi:"thu hút",a:"attract",c:["attract","attack","attach","attend"],ex:"Attract = thu hút sự chú ý hoặc kéo lại gần."},
{emoji:"🚫",vi:"tránh",a:"avoid",c:["avoid","arrive","allow","agree"],ex:"Avoid = tránh làm hoặc gặp điều gì."},
{emoji:"🎯",vi:"chính xác",a:"accurate",c:["accurate","active","ancient","average"],ex:"Accurate = chính xác, đúng."},
{emoji:"📌",vi:"cụ thể",a:"specific",c:["specific","special","similar","simple"],ex:"Specific = cụ thể, rõ ràng."},
{emoji:"🧱",vi:"cơ bản",a:"basic",c:["basic","busy","brave","brief"],ex:"Basic = cơ bản, nền tảng."},
{emoji:"🕰️",vi:"gần đây",a:"recent",c:["recent","receipt","recipe","record"],ex:"Recent = gần đây, mới xảy ra."},
{emoji:"🌐",vi:"toàn cầu",a:"global",c:["global","general","gradual","gentle"],ex:"Global = toàn cầu, thuộc về cả thế giới."},
{emoji:"🧑‍⚖️",vi:"công bằng",a:"fair",c:["fair","fear","fare","fire"],ex:"Fair = công bằng, hợp lý."},
{emoji:"🧭",vi:"lựa chọn",a:"option",c:["option","ocean","object","opinion"],ex:"Option = lựa chọn, phương án."},
{emoji:"💭",vi:"ý kiến",a:"opinion",c:["opinion","option","operation","opposite"],ex:"Opinion = ý kiến, quan điểm cá nhân."},
{emoji:"🧑‍🔬",vi:"bằng chứng",a:"evidence",c:["evidence","event","effect","effort"],ex:"Evidence = bằng chứng cho một nhận định."},
{emoji:"🔎",vi:"chi tiết",a:"detail",c:["detail","data","device","divide"],ex:"Detail = chi tiết nhỏ trong thông tin hoặc hình ảnh."}
];
const nounSeeds = parseSeeds("🏠 house:ngôi nhà;room:căn phòng;door:cánh cửa;window:cửa sổ;floor:sàn nhà;wall:bức tường;roof:mái nhà;garden:khu vườn;yard:sân;street:đường phố;road:con đường;bridge:cây cầu;river:dòng sông;lake:hồ nước;beach:bãi biển;island:hòn đảo;forest:khu rừng;field:cánh đồng;hill:ngọn đồi;valley:thung lũng;village:ngôi làng;city:thành phố;country:quốc gia;school:trường học;classroom:lớp học;library:thư viện;office:văn phòng;factory:nhà máy;market:khu chợ;store:cửa hàng;restaurant:nhà hàng;hotel:khách sạn;hospital:bệnh viện;station:nhà ga;airport:sân bay;museum:bảo tàng;theater:nhà hát;park:công viên;bank:ngân hàng;farm:nông trại;kitchen:nhà bếp;bathroom:phòng tắm;bedroom:phòng ngủ;garage:nhà để xe;balcony:ban công;basement:tầng hầm;elevator:thang máy;stairs:cầu thang");
nounSeeds.push(...parseSeeds("🧺 table:cái bàn;chair:cái ghế;sofa:ghế sofa;bed:cái giường;desk:bàn làm việc;shelf:kệ;cabinet:tủ;drawer:ngăn kéo;mirror:gương;lamp:đèn;curtain:rèm cửa;carpet:thảm;blanket:chăn;pillow:gối;towel:khăn;basket:cái giỏ;bottle:cái chai;cup:cái cốc;plate:cái đĩa;bowl:cái bát;spoon:cái thìa;fork:cái nĩa;knife:con dao;pan:cái chảo;pot:nồi;oven:lò nướng;fridge:tủ lạnh;clock:đồng hồ;phone:điện thoại;camera:máy ảnh;computer:máy tính;keyboard:bàn phím;screen:màn hình;printer:máy in;speaker:loa;charger:bộ sạc;battery:pin;button:nút bấm;key:chìa khóa;lock:ổ khóa;bag:cái túi;box:cái hộp;gift:món quà;ticket:tấm vé;card:tấm thẻ;letter:lá thư;newspaper:tờ báo;magazine:tạp chí;notebook:sổ tay;calendar:lịch;map:bản đồ"));
nounSeeds.push(...parseSeeds("🧑 teacher:giáo viên;student:học sinh;doctor:bác sĩ;nurse:y tá;driver:tài xế;farmer:nông dân;worker:công nhân;artist:nghệ sĩ;singer:ca sĩ;dancer:vũ công;actor:diễn viên;writer:nhà văn;reader:người đọc;player:người chơi;coach:huấn luyện viên;manager:quản lý;leader:người lãnh đạo;member:thành viên;neighbor:hàng xóm;friend:người bạn;guest:khách;customer:khách hàng;owner:chủ sở hữu;seller:người bán;buyer:người mua;chef:đầu bếp;pilot:phi công;soldier:binh lính;police:cảnh sát;firefighter:lính cứu hỏa;scientist:nhà khoa học;engineer:kỹ sư;lawyer:luật sư;judge:thẩm phán;dentist:nha sĩ;mechanic:thợ máy;clerk:nhân viên;assistant:trợ lý;secretary:thư ký;guide:hướng dẫn viên;tourist:du khách;passenger:hành khách;captain:thuyền trưởng;athlete:vận động viên;volunteer:tình nguyện viên;stranger:người lạ;child:đứa trẻ;parent:cha mẹ;family:gia đình;team:đội nhóm"));
nounSeeds.push(...parseSeeds("🐾 dog:con chó;cat:con mèo;bird:con chim;fish:con cá;horse:con ngựa;cow:con bò;pig:con heo;sheep:con cừu;goat:con dê;chicken:con gà;duck:con vịt;rabbit:con thỏ;mouse:con chuột;elephant:con voi;tiger:con hổ;lion:sư tử;bear:con gấu;monkey:con khỉ;snake:con rắn;frog:con ếch;turtle:con rùa;whale:cá voi;shark:cá mập;dolphin:cá heo;butterfly:con bướm;bee:con ong;ant:con kiến;spider:con nhện;insect:côn trùng;animal:động vật;plant:cây;tree:cái cây;flower:bông hoa;leaf:chiếc lá;root:rễ cây;seed:hạt giống;grass:cỏ;fruit:trái cây;vegetable:rau củ;apple:quả táo;banana:quả chuối;orange:quả cam;lemon:quả chanh;grape:quả nho;potato:khoai tây;tomato:cà chua;carrot:cà rốt;onion:củ hành;rice:gạo;cereal:ngũ cốc"));
nounSeeds.push(...parseSeeds("💡 idea:ý tưởng;plan:kế hoạch;goal:mục tiêu;dream:giấc mơ;hope:hy vọng;fear:nỗi sợ;problem:vấn đề;answer:câu trả lời;question:câu hỏi;reason:lý do;choice:lựa chọn;option:phương án;chance:cơ hội;risk:rủi ro;mistake:lỗi sai;lesson:bài học;story:câu chuyện;word:từ;sentence:câu;language:ngôn ngữ;voice:giọng nói;sound:âm thanh;noise:tiếng ồn;music:âm nhạc;song:bài hát;picture:bức tranh;photo:bức ảnh;movie:bộ phim;game:trò chơi;sport:thể thao;rule:quy tắc;law:luật;price:giá;cost:chi phí;money:tiền;coin:đồng xu;bill:hóa đơn;receipt:biên lai;food:thức ăn;meal:bữa ăn;drink:đồ uống;water:nước;milk:sữa;coffee:cà phê;tea:trà;bread:bánh mì;cake:bánh ngọt;soup:súp;salad:món salad"));
nounSeeds.push(...parseSeeds("🧰 tool:công cụ;wheel:bánh xe;engine:động cơ;helmet:mũ bảo hiểm;signal:tín hiệu;message:tin nhắn;package:gói hàng;sample:mẫu thử;project:dự án;network:mạng lưới"));
const verbSeeds = parseSeeds("⚡ accept:chấp nhận;add:thêm vào;admire:ngưỡng mộ;advise:khuyên;agree:đồng ý;allow:cho phép;answer:trả lời;arrive:đến nơi;ask:hỏi;avoid:tránh;bake:nướng bánh;borrow:mượn;brush:chải;call:gọi điện;carry:mang vác;change:thay đổi;check:kiểm tra;clean:dọn dẹp;climb:leo lên;close:đóng lại;collect:thu thập;compare:so sánh;complete:hoàn thành;connect:kết nối;consider:cân nhắc;continue:tiếp tục;copy:sao chép;count:đếm;create:tạo ra;cross:băng qua;dance:nhảy múa;decide:quyết định;deliver:giao tới;describe:mô tả;design:thiết kế;develop:phát triển;discover:khám phá;discuss:thảo luận;divide:chia ra;dry:làm khô;earn:kiếm được;enjoy:tận hưởng;enter:bước vào;explain:giải thích;explore:khám phá;fill:lấp đầy;finish:kết thúc;follow:đi theo;guess:đoán;help:giúp đỡ;hope:hy vọng;imagine:tưởng tượng;improve:cải thiện;include:bao gồm;invite:mời;join:tham gia;jump:nhảy;learn:học;listen:lắng nghe;look:nhìn;measure:đo lường;move:di chuyển;notice:chú ý;open:mở ra;order:gọi món;paint:sơn vẽ;park:đỗ xe;plan:lập kế hoạch;play:chơi;practice:luyện tập;prepare:chuẩn bị;protect:bảo vệ;push:đẩy;reach:vươn tới;receive:nhận;record:ghi lại;repair:sửa chữa;repeat:lặp lại;reply:trả lời;return:trở lại;save:cứu/lưu;say:nói;search:tìm kiếm;share:chia sẻ;shout:hét lên;show:cho xem;smile:mỉm cười;solve:giải quyết;start:bắt đầu;stay:ở lại;study:học tập;suggest:gợi ý;support:hỗ trợ;talk:nói chuyện;taste:nếm;thank:cảm ơn;touch:chạm vào;travel:du lịch;trust:tin tưởng;try:thử;turn:xoay;use:sử dụng;visit:thăm;wait:chờ;walk:đi bộ;want:muốn;wash:rửa;watch:xem;welcome:chào đón;wish:ước;work:làm việc;worry:lo lắng");
const adjectiveSeeds = parseSeeds("✨ able:có khả năng;active:năng động;afraid:sợ hãi;ancient:cổ xưa;angry:tức giận;average:trung bình;basic:cơ bản;beautiful:đẹp;bright:sáng;busy:bận rộn;careful:cẩn thận;cheap:rẻ;cheerful:vui vẻ;clear:rõ ràng;clever:thông minh;cloudy:nhiều mây;cold:lạnh;common:phổ biến;correct:đúng;creative:sáng tạo;curious:tò mò;dangerous:nguy hiểm;dark:tối;deep:sâu;different:khác nhau;difficult:khó;dirty:bẩn;early:sớm;easy:dễ;empty:trống;excellent:xuất sắc;expensive:đắt;fair:công bằng;famous:nổi tiếng;fast:nhanh;final:cuối cùng;fresh:tươi mới;friendly:thân thiện;full:đầy;gentle:dịu dàng;global:toàn cầu;healthy:lành mạnh;heavy:nặng;honest:trung thực;hot:nóng;hungry:đói;important:quan trọng;kind:tử tế;large:lớn;late:muộn;light:nhẹ/sáng;local:địa phương;long:dài;loud:ồn;modern:hiện đại;narrow:hẹp;natural:tự nhiên;necessary:cần thiết;new:mới;noisy:ồn ào;normal:bình thường;open:mở;patient:kiên nhẫn;peaceful:yên bình;perfect:hoàn hảo;polite:lịch sự;popular:phổ biến;possible:có thể;private:riêng tư;public:công cộng;quick:nhanh;quiet:yên tĩnh;ready:sẵn sàng;recent:gần đây;rich:giàu;safe:an toàn;serious:nghiêm túc;short:ngắn;simple:đơn giản;slow:chậm;small:nhỏ;smart:thông minh;special:đặc biệt;strong:mạnh;sure:chắc chắn;sweet:ngọt;tall:cao;thin:mỏng;tidy:gọn gàng;tired:mệt;useful:hữu ích;warm:ấm;weak:yếu;wide:rộng;wise:khôn ngoan;young:trẻ");
function parseSeeds(text){let emoji="🔤";return text.split(";").map(part=>part.trim()).filter(Boolean).map(part=>{const firstSpace=part.indexOf(" ");const token=firstSpace>0?part.slice(0,firstSpace):"";if(firstSpace>0&&!token.includes(":")&&/[^\w:]/.test(token)){emoji=token;part=part.slice(firstSpace+1)}const [word,vi]=part.split(":");return{emoji,a:word.trim(),vi:vi.trim()}})}
function pluralize(word){if(/(s|x|z|ch|sh)$/.test(word))return word+"es";if(/[^aeiou]y$/.test(word))return word.slice(0,-1)+"ies";if(/(f|fe)$/.test(word))return word.replace(/fe?$/,"ves");return word+"s"}
function pastForm(word){if(word.endsWith("e"))return word+"d";if(/[^aeiou]y$/.test(word))return word.slice(0,-1)+"ied";return word+"ed"}
function adverbForm(word){if(word.endsWith("y"))return word.slice(0,-1)+"ily";if(word.endsWith("le"))return word.slice(0,-1)+"y";return word+"ly"}
function uniqueByAnswer(items){const seen=new Set();return items.filter(q=>{if(seen.has(q.a))return false;seen.add(q.a);return true})}
function buildChoices(answer,words){const pool=shuffle(words.filter(w=>w!==answer)).sort((a,b)=>Math.abs(a.length-answer.length)-Math.abs(b.length-answer.length));return shuffle([answer,...pool.slice(0,3)])}
function buildSupplementalQuestions(){const nouns=nounSeeds.flatMap(({emoji,a,vi})=>[{emoji,vi,a,ex:a+" = "+vi+"."},{emoji,vi:"các/nhiều "+vi,a:pluralize(a),ex:pluralize(a)+" = dạng số nhiều của "+a+"."}]);const verbs=verbSeeds.flatMap(({emoji,a,vi})=>[{emoji,vi,a,ex:a+" = "+vi+"."},{emoji,vi:"đã "+vi,a:pastForm(a),ex:pastForm(a)+" = dạng quá khứ của "+a+"."}]);const adjectives=adjectiveSeeds.flatMap(({emoji,a,vi})=>[{emoji,vi,a,ex:a+" = "+vi+"."},{emoji,vi:"một cách "+vi,a:adverbForm(a),ex:adverbForm(a)+" = trạng từ từ "+a+"."}]);return uniqueByAnswer([...nouns,...verbs,...adjectives])}
let questions=uniqueByAnswer([...coreQuestions,...buildSupplementalQuestions()]).slice(0,1000);
const answerWords=questions.map(q=>q.a);
questions=questions.map(q=>q.c?q:{...q,c:buildChoices(q.a,answerWords)});

const state={deck:[],i:0,score:0,correct:0,streak:0};
const RECENT_KEY="doan-tu-tieng-anh-recent";
let lastSpokenWord="",lastSpokenAt=0;
function speakEnglish(word){
  if(!("speechSynthesis" in window)||!word)return;
  const now=Date.now();
  if(word===lastSpokenWord&&now-lastSpokenAt<600)return;
  lastSpokenWord=word;lastSpokenAt=now;
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(word);
  utterance.lang="en-US";
  utterance.rate=.82;
  utterance.pitch=1;
  const voice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith("en-us"))||speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith("en"));
  if(voice)utterance.voice=voice;
  speechSynthesis.speak(utterance);
}
function shuffle(a){return[...a].sort(()=>Math.random()-.5)}function show(id){$$(".screen").forEach(x=>x.classList.toggle("active",x.id===id))}function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("show"),2200)}function best(){$("#bestScore").textContent=Number(localStorage.getItem("doan-tu-tieng-anh-best")||0)}
function recentWords(){try{return JSON.parse(localStorage.getItem(RECENT_KEY)||"[]")}catch(e){return[]}}function saveRecent(deck){const words=[...deck.map(q=>q.a),...recentWords()].filter((word,index,arr)=>arr.indexOf(word)===index).slice(0,150);localStorage.setItem(RECENT_KEY,JSON.stringify(words))}
function buildDeck(){const recent=new Set(recentWords());const fresh=questions.filter(q=>!recent.has(q.a));const pool=fresh.length>=10?fresh:questions;const deck=shuffle(pool).slice(0,10);saveRecent(deck);return deck}
function start(){state.deck=buildDeck();state.i=0;state.score=0;state.correct=0;state.streak=0;show("gameScreen");render()}function render(){const q=state.deck[state.i];$("#roundText").textContent=`Câu ${state.i+1}/${state.deck.length}`;$("#scoreText").textContent=state.score;$("#progressBar").style.width=`${((state.i+1)/state.deck.length)*100}%`;$("#wordClue").textContent=q.emoji;$("#questionText").textContent=`Từ nào có nghĩa là “${q.vi}”?`;$("#hintText").textContent="Trỏ hoặc chạm để nghe, rồi chọn từ đúng.";$("#answerGrid").innerHTML=shuffle(q.c).map(c=>`<button class="answer-button" data-a="${c}" aria-label="${c}. Chạm để nghe và chọn">${c}<span class="speak-icon" aria-hidden="true">🔊</span></button>`).join("");$$(".answer-button").forEach(b=>{b.onpointerenter=()=>speakEnglish(b.dataset.a);b.onfocus=()=>speakEnglish(b.dataset.a);b.onclick=()=>{speakEnglish(b.dataset.a);answer(b,q)}})}
function answer(btn,q){const ok=btn.dataset.a===q.a;$$(".answer-button").forEach(b=>{b.disabled=true;if(b.dataset.a===q.a)b.classList.add("correct")});if(!ok)btn.classList.add("wrong");if(ok){state.score+=100+state.streak*25;state.correct++;state.streak++;$("#feedbackIcon").textContent="✅";$("#feedbackLabel").textContent="Correct";}else{state.streak=0;$("#feedbackIcon").textContent="📘";$("#feedbackLabel").textContent="Not quite"}$("#feedbackTitle").textContent=q.a;$("#feedbackTitle").tabIndex=0;$("#feedbackTitle").setAttribute("role","button");$("#feedbackTitle").setAttribute("aria-label",`${q.a}. Bấm để nghe phát âm`);$("#feedbackTitle").onpointerenter=()=>speakEnglish(q.a);$("#feedbackTitle").onfocus=()=>speakEnglish(q.a);$("#feedbackTitle").onclick=()=>speakEnglish(q.a);$("#feedbackTitle").onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();speakEnglish(q.a)}};$("#feedbackText").textContent=q.ex;state.i++;setTimeout(()=>show("feedbackScreen"),400)}
function next(){if(state.i>=state.deck.length)return finish();show("gameScreen");render()}function finish(){const old=Number(localStorage.getItem("doan-tu-tieng-anh-best")||0);if(state.score>old)localStorage.setItem("doan-tu-tieng-anh-best",state.score);best();$("#resultTitle").textContent=state.correct>=9?"Vocabulary rất bén!":state.correct>=7?"Từ vựng đang lên cấp!":state.correct>=5?"Nhớ thêm vài từ rồi đó!":"Chơi lại một lượt cho nóng máy!";$("#finalScore").textContent=state.score;$("#finalCorrect").textContent=`${state.correct}/${state.deck.length} câu đúng`;console.log('🎮 Game finished, attempting to record score...');if(typeof recordGameScore==='function'){console.log('📊 recordGameScore function found, calling it...');recordGameScore('Đoán Từ Tiếng Anh',state.score,'🇬🇧');}else{console.warn('⚠️ recordGameScore function not found - hub integration may not be loaded');}show("resultScreen")}
async function share(text,msg){const url=location.origin+location.pathname;if(navigator.share){try{await navigator.share({title:"Đoán Từ Tiếng Anh",text,url});return}catch(e){if(e.name==="AbortError")return}}await navigator.clipboard.writeText(`${text} ${url}`);toast(msg)}
$("#startButton").onclick=start;$("#replayButton").onclick=start;$("#nextButton").onclick=next;$("#shareGameButton").onclick=()=>share("Thử chơi Đoán Từ Tiếng Anh: nhìn gợi ý và chọn đúng vocabulary.","Đã sao chép link game");$("#welcomeShareButton").onclick=$("#shareGameButton").onclick;$("#shareResultButton").onclick=()=>share(`Tôi được ${state.score} điểm trong Đoán Từ Tiếng Anh, đúng ${state.correct}/${state.deck.length} câu.`, "Đã sao chép lời thách");best();
