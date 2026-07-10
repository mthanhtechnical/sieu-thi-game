const ROUND_SIZE = 7;
const REWARD_STICKERS = ["🦄", "🌟", "🍭", "🎈", "🚀", "🧸", "🌈", "🍓", "🐣", "🏆", "🎁", "💎"];
const MASCOTS = ["🦄", "🐰", "🐼", "🦊", "🐣", "🐧"];
const MISSIONS = [
  "Nhiệm vụ: thu thập 7 sticker!",
  "Cứu đội bạn thú bằng câu trả lời đúng!",
  "Mở khóa hộp quà bí mật nào!",
  "Săn sao vui học cùng bạn nhỏ!",
  "Mỗi câu đúng là một sticker mới!",
];
const PRAISES = [
  ["🥳", "Tuyệt cú mèo!", "Bạn nhỏ mở khóa thêm một sticker rồi!"],
  ["🤩", "Siêu quá!", "Bạn thú đang vỗ tay cho bạn nhỏ đó!"],
  ["🌟", "Chuẩn luôn!", "Một ngôi sao mới đã xuất hiện!"],
  ["🎉", "Hay quá!", "Bạn nhỏ vừa làm nhiệm vụ rất tốt!"],
  ["🦄", "Đỉnh ghê!", "Sticker phép màu thuộc về bạn nhỏ!"],
];
const TRY_MESSAGES = [
  ["🌱", "Thử lại lượt sau nhé!", "Không sao, mình vừa học thêm một điều mới."],
  ["🤗", "Gần đúng rồi!", "Bạn thú sẽ nhắc bạn nhỏ đáp án này nha."],
  ["🧩", "Mình ghép thêm nhé!", "Sai một câu cũng là đang học đó."],
];
const QUESTION_INTROS = ["Ú òa, câu mới nè!", "Sẵn sàng chưa nào?", "Nhìn kỹ nha!", "Cùng đoán nào!", "Mở khóa sticker tiếp nhé!"];
const CORRECT_SPEECHES = ["Yeah, đúng rồi!", "Hay quá!", "Tuyệt vời!", "Chuẩn luôn!", "Bạn nhỏ giỏi ghê!"];
const WRONG_SPEECHES = ["Không sao nha!", "Mình nhớ câu này nhé!", "Gần đúng rồi!", "Cùng học thêm nào!"];
const VOICE_CUES = {
  intro: ["intro-1", "intro-2", "intro-3", "intro-4", "intro-5"],
  correct: ["correct-1", "correct-2", "correct-3", "correct-4"],
  wrong: ["wrong-1", "wrong-2", "wrong-3"],
  finish: ["finish-1", "finish-2"],
};
const LEVELS = {
  easy: { label: "Dễ", mission: "Cấp Dễ: mở 7 sticker đầu tiên!" },
  medium: { label: "Vừa", mission: "Cấp Vừa: thử thêm nhiều chủ đề nhé!" },
  hard: { label: "Khó", mission: "Cấp Khó: nhiệm vụ sticker siêu tốc!" },
};

const questions = [
  ["Suy luận", "🐱 + 🥛", "Con mèo thường thích uống gì?", "Sữa", ["Sữa", "Nước ngọt", "Cà phê"]],
  ["Suy luận", "☔ + 🌧️", "Khi trời mưa, bạn nhỏ nên mang theo gì?", "Cái ô", ["Cái ô", "Kính mát", "Quạt giấy"]],
  ["Suy luận", "🦷 + 🪥", "Bàn chải dùng để làm gì?", "Đánh răng", ["Đánh răng", "Chải tóc", "Tô màu"]],
  ["Suy luận", "📚 + 🎒", "Bạn nhỏ đi học thường bỏ sách vào đâu?", "Ba lô", ["Ba lô", "Nồi cơm", "Tủ lạnh"]],
  ["Suy luận", "🌙 + 🛏️", "Buổi tối bạn nhỏ thường làm gì?", "Đi ngủ", ["Đi ngủ", "Đi học", "Tập bơi"]],
  ["Suy luận", "🔥 + 🚒", "Khi có cháy, xe nào đến giúp?", "Xe cứu hỏa", ["Xe cứu hỏa", "Xe kem", "Xe đạp"]],
  ["Suy luận", "👩‍⚕️ + 🏥", "Người khám bệnh cho bạn nhỏ là ai?", "Bác sĩ", ["Bác sĩ", "Đầu bếp", "Phi công"]],
  ["Suy luận", "🐝 + 🍯", "Con ong làm ra gì?", "Mật ong", ["Mật ong", "Sữa", "Bánh mì"]],
  ["Suy luận", "🌱 + 💧", "Cây cần gì để lớn?", "Nước", ["Nước", "Bút chì", "Giày dép"]],
  ["Suy luận", "🧊 + ☀️", "Đá lạnh để ngoài nắng sẽ thế nào?", "Tan ra", ["Tan ra", "Bay lên", "Nở hoa"]],

  ["Toán nhỏ", "2️⃣ + 2️⃣", "Hai cộng hai bằng mấy?", "Bốn", ["Ba", "Bốn", "Năm"]],
  ["Toán nhỏ", "3️⃣ + 2️⃣", "Ba cộng hai bằng mấy?", "Năm", ["Bốn", "Năm", "Sáu"]],
  ["Toán nhỏ", "5️⃣ - 2️⃣", "Năm bớt hai còn mấy?", "Ba", ["Hai", "Ba", "Bốn"]],
  ["Toán nhỏ", "4️⃣ + 1️⃣", "Bốn cộng một bằng mấy?", "Năm", ["Năm", "Sáu", "Bảy"]],
  ["Toán nhỏ", "6️⃣ - 1️⃣", "Sáu bớt một còn mấy?", "Năm", ["Bốn", "Năm", "Sáu"]],
  ["Toán nhỏ", "🍎🍎 + 🍎", "Có hai quả táo, thêm một quả là mấy quả?", "Ba", ["Hai", "Ba", "Bốn"]],
  ["Toán nhỏ", "⭐⭐⭐⭐", "Có mấy ngôi sao?", "Bốn", ["Ba", "Bốn", "Năm"]],
  ["Toán nhỏ", "🎈🎈🎈🎈🎈", "Có mấy quả bóng bay?", "Năm", ["Bốn", "Năm", "Sáu"]],
  ["Toán nhỏ", "🐟🐟🐟 - 🐟", "Ba con cá bơi đi một con, còn mấy con?", "Hai", ["Một", "Hai", "Ba"]],
  ["Toán nhỏ", "👟👟", "Một đôi giày có mấy chiếc?", "Hai", ["Một", "Hai", "Bốn"]],

  ["Chữ & từ", "🍎", "Từ “táo” bắt đầu bằng chữ nào?", "T", ["T", "C", "M"]],
  ["Chữ & từ", "🐶", "Từ “chó” bắt đầu bằng chữ nào?", "Ch", ["Ch", "B", "Đ"]],
  ["Chữ & từ", "🏠", "Từ “nhà” bắt đầu bằng chữ nào?", "Nh", ["Nh", "H", "M"]],
  ["Chữ & từ", "🌸", "Từ “hoa” bắt đầu bằng chữ nào?", "H", ["H", "B", "T"]],
  ["Chữ & từ", "🦆", "Từ “vịt” có dấu gì?", "Dấu nặng", ["Dấu sắc", "Dấu nặng", "Dấu hỏi"]],
  ["Chữ & từ", "🐘", "Con “voi” có mấy tiếng?", "Một tiếng", ["Một tiếng", "Hai tiếng", "Ba tiếng"]],
  ["Chữ & từ", "🍌", "Từ nào đúng với hình này?", "Quả chuối", ["Quả chuối", "Cái ghế", "Con cá"]],
  ["Chữ & từ", "📖", "Bạn nhỏ dùng sách để làm gì?", "Đọc", ["Đọc", "Nấu ăn", "Đá bóng"]],
  ["Chữ & từ", "✏️", "Bạn nhỏ dùng bút chì để làm gì?", "Viết và vẽ", ["Viết và vẽ", "Đánh răng", "Tưới cây"]],
  ["Chữ & từ", "👂", "Bạn nhỏ dùng tai để làm gì?", "Nghe", ["Nghe", "Nhìn", "Ngửi"]],

  ["An toàn", "🚦", "Đèn đỏ thì bạn nhỏ nên làm gì?", "Dừng lại", ["Dừng lại", "Chạy thật nhanh", "Nhảy lên"]],
  ["An toàn", "🛣️ + 👨‍👩‍👧", "Khi qua đường, bạn nhỏ nên đi cùng ai?", "Người lớn", ["Người lớn", "Bạn gấu bông", "Một mình"]],
  ["An toàn", "🔥", "Bạn nhỏ có nên chạm vào lửa không?", "Không", ["Không", "Có", "Chạm thử một chút"]],
  ["An toàn", "🔌", "Ổ điện có nguy hiểm không?", "Có", ["Có", "Không", "Chỉ nguy hiểm ban đêm"]],
  ["An toàn", "🧴", "Bạn nhỏ thấy chai lạ thì nên làm gì?", "Hỏi người lớn", ["Hỏi người lớn", "Uống thử", "Đổ ra chơi"]],
  ["An toàn", "🚲 + 🪖", "Đi xe đạp nên đội gì?", "Mũ bảo hiểm", ["Mũ bảo hiểm", "Mũ sinh nhật", "Vương miện"]],
  ["An toàn", "🧑‍🦱🍬", "Người lạ cho kẹo, bạn nhỏ nên làm gì?", "Từ chối và báo người lớn", ["Từ chối và báo người lớn", "Đi theo", "Giữ bí mật"]],
  ["An toàn", "🧸 + 🧹", "Chơi xong đồ chơi, bạn nhỏ nên làm gì?", "Cất gọn", ["Cất gọn", "Để giữa đường", "Ném lên cao"]],
  ["An toàn", "🧼 + 🤲", "Trước khi ăn, bạn nhỏ nên làm gì?", "Rửa tay", ["Rửa tay", "Chạy vòng quanh", "Ngủ ngay"]],
  ["An toàn", "😢 + 👨‍👩‍👧", "Khi bị đau, bạn nhỏ nên nói với ai?", "Người lớn", ["Người lớn", "Cái cây", "Con cá"]],

  ["Thói quen tốt", "☀️ + 🪥", "Buổi sáng bạn nhỏ nên làm gì với răng?", "Đánh răng", ["Đánh răng", "Ăn kẹo ngay", "Giấu bàn chải"]],
  ["Thói quen tốt", "🍽️ + 🙏", "Trước khi ăn, bạn nhỏ nên nói gì?", "Mời cả nhà ăn cơm", ["Mời cả nhà ăn cơm", "Con không nghe", "Cho con chơi"]],
  ["Thói quen tốt", "🧸 + 📦", "Chơi xong bạn nhỏ nên làm gì?", "Cất đồ chơi", ["Cất đồ chơi", "Bỏ dưới sàn", "Đem ra đường"]],
  ["Thói quen tốt", "📺 + ⏰", "Xem màn hình quá lâu có tốt không?", "Không tốt", ["Không tốt", "Rất tốt", "Càng lâu càng khỏe"]],
  ["Thói quen tốt", "💧", "Khi khát, bạn nhỏ nên uống gì?", "Nước lọc", ["Nước lọc", "Nước ngọt cả ngày", "Cà phê"]],
  ["Thói quen tốt", "🥦 + 🍎", "Rau và trái cây giúp bạn nhỏ thế nào?", "Khỏe mạnh hơn", ["Khỏe mạnh hơn", "Buồn ngủ hơn", "Quên chữ"]],
  ["Thói quen tốt", "😴", "Ngủ đủ giúp bạn nhỏ thế nào?", "Có nhiều năng lượng", ["Có nhiều năng lượng", "Đau bụng", "Quên đường về"]],
  ["Thói quen tốt", "🤝", "Khi bạn giúp mình, bạn nhỏ nên nói gì?", "Cảm ơn", ["Cảm ơn", "Không cần nói", "Đi chỗ khác"]],
  ["Thói quen tốt", "🙋", "Muốn phát biểu, bạn nhỏ nên làm gì?", "Giơ tay", ["Giơ tay", "La thật to", "Chen ngang"]],
  ["Thói quen tốt", "🧦", "Tất bẩn nên để ở đâu?", "Giỏ đồ bẩn", ["Giỏ đồ bẩn", "Trên bàn ăn", "Trong cặp sách"]],

  ["Thế giới quanh em", "🌞", "Ban ngày thường có gì sáng trên trời?", "Mặt trời", ["Mặt trời", "Cái đèn pin", "Con mèo"]],
  ["Thế giới quanh em", "🌙", "Ban đêm thường thấy gì?", "Mặt trăng", ["Mặt trăng", "Cầu trượt", "Bàn chải"]],
  ["Thế giới quanh em", "🌧️", "Trời mưa thì đường thường thế nào?", "Ướt", ["Ướt", "Nóng đỏ", "Có tuyết kem"]],
  ["Thế giới quanh em", "🌈", "Sau mưa nắng có thể thấy gì?", "Cầu vồng", ["Cầu vồng", "Cái bánh", "Xe lửa"]],
  ["Thế giới quanh em", "🐛 → 🦋", "Sâu có thể lớn lên thành gì?", "Bướm", ["Bướm", "Cá mập", "Cái ghế"]],
  ["Thế giới quanh em", "🥚 → 🐣", "Trứng gà nở ra gì?", "Gà con", ["Gà con", "Con voi", "Quả cam"]],
  ["Thế giới quanh em", "🚑", "Xe cứu thương dùng khi nào?", "Khi có người cần cấp cứu", ["Khi có người cần cấp cứu", "Khi đi picnic", "Khi mua bánh"]],
  ["Thế giới quanh em", "📮", "Hộp thư dùng để làm gì?", "Gửi thư", ["Gửi thư", "Nấu cơm", "Đánh răng"]],
  ["Thế giới quanh em", "👮", "Chú công an giúp gì?", "Giữ an toàn", ["Giữ an toàn", "Làm kem", "Dạy cá bơi"]],
  ["Thế giới quanh em", "🍞", "Bánh mì thường dùng để làm gì?", "Ăn", ["Ăn", "Đội lên đầu", "Tưới cây"]],

  ["Tiếng Anh vui", "🐱", "Con mèo trong tiếng Anh là gì?", "Cat", ["Cat", "Dog", "Fish"]],
  ["Tiếng Anh vui", "🐶", "Con chó trong tiếng Anh là gì?", "Dog", ["Dog", "Cat", "Bird"]],
  ["Tiếng Anh vui", "🐟", "Con cá trong tiếng Anh là gì?", "Fish", ["Fish", "Duck", "Horse"]],
  ["Tiếng Anh vui", "🐦", "Con chim trong tiếng Anh là gì?", "Bird", ["Bird", "Bear", "Frog"]],
  ["Tiếng Anh vui", "🐰", "Con thỏ trong tiếng Anh là gì?", "Rabbit", ["Rabbit", "Lion", "Tiger"]],
  ["Tiếng Anh vui", "🦁", "Sư tử trong tiếng Anh là gì?", "Lion", ["Lion", "Mouse", "Goat"]],
  ["Tiếng Anh vui", "🐯", "Con hổ trong tiếng Anh là gì?", "Tiger", ["Tiger", "Turtle", "Chicken"]],
  ["Tiếng Anh vui", "🐻", "Con gấu trong tiếng Anh là gì?", "Bear", ["Bear", "Bee", "Duck"]],
  ["Tiếng Anh vui", "🐭", "Con chuột trong tiếng Anh là gì?", "Mouse", ["Mouse", "Monkey", "Cow"]],
  ["Tiếng Anh vui", "🐸", "Con ếch trong tiếng Anh là gì?", "Frog", ["Frog", "Fox", "Fish"]],

  ["Tiếng Anh vui", "🍎", "Quả táo trong tiếng Anh là gì?", "Apple", ["Apple", "Orange", "Banana"]],
  ["Tiếng Anh vui", "🍌", "Quả chuối trong tiếng Anh là gì?", "Banana", ["Banana", "Apple", "Grape"]],
  ["Tiếng Anh vui", "🍊", "Quả cam trong tiếng Anh là gì?", "Orange", ["Orange", "Lemon", "Pear"]],
  ["Tiếng Anh vui", "🍇", "Quả nho trong tiếng Anh là gì?", "Grape", ["Grape", "Mango", "Apple"]],
  ["Tiếng Anh vui", "🍓", "Quả dâu trong tiếng Anh là gì?", "Strawberry", ["Strawberry", "Watermelon", "Banana"]],
  ["Tiếng Anh vui", "🥭", "Quả xoài trong tiếng Anh là gì?", "Mango", ["Mango", "Grape", "Peach"]],
  ["Tiếng Anh vui", "🍉", "Dưa hấu trong tiếng Anh là gì?", "Watermelon", ["Watermelon", "Apple", "Orange"]],
  ["Tiếng Anh vui", "🥕", "Cà rốt trong tiếng Anh là gì?", "Carrot", ["Carrot", "Potato", "Tomato"]],
  ["Tiếng Anh vui", "🍅", "Cà chua trong tiếng Anh là gì?", "Tomato", ["Tomato", "Carrot", "Onion"]],
  ["Tiếng Anh vui", "🥔", "Khoai tây trong tiếng Anh là gì?", "Potato", ["Potato", "Banana", "Grape"]],

  ["Tiếng Anh vui", "🔴", "Màu đỏ trong tiếng Anh là gì?", "Red", ["Red", "Blue", "Green"]],
  ["Tiếng Anh vui", "🔵", "Màu xanh dương trong tiếng Anh là gì?", "Blue", ["Blue", "Black", "Brown"]],
  ["Tiếng Anh vui", "🟡", "Màu vàng trong tiếng Anh là gì?", "Yellow", ["Yellow", "Purple", "White"]],
  ["Tiếng Anh vui", "🟢", "Màu xanh lá trong tiếng Anh là gì?", "Green", ["Green", "Gray", "Red"]],
  ["Tiếng Anh vui", "⚫", "Màu đen trong tiếng Anh là gì?", "Black", ["Black", "Pink", "Blue"]],
  ["Tiếng Anh vui", "⚪", "Màu trắng trong tiếng Anh là gì?", "White", ["White", "Orange", "Green"]],
  ["Tiếng Anh vui", "🟣", "Màu tím trong tiếng Anh là gì?", "Purple", ["Purple", "Yellow", "Brown"]],
  ["Tiếng Anh vui", "🟠", "Màu cam trong tiếng Anh là gì?", "Orange", ["Orange", "Red", "White"]],
  ["Tiếng Anh vui", "🌸", "Màu hồng trong tiếng Anh là gì?", "Pink", ["Pink", "Black", "Green"]],
  ["Tiếng Anh vui", "🤎", "Màu nâu trong tiếng Anh là gì?", "Brown", ["Brown", "Blue", "Purple"]],

  ["Tiếng Anh vui", "👁️", "Mắt trong tiếng Anh là gì?", "Eye", ["Eye", "Ear", "Nose"]],
  ["Tiếng Anh vui", "👂", "Tai trong tiếng Anh là gì?", "Ear", ["Ear", "Eye", "Hand"]],
  ["Tiếng Anh vui", "👃", "Mũi trong tiếng Anh là gì?", "Nose", ["Nose", "Mouth", "Foot"]],
  ["Tiếng Anh vui", "👄", "Miệng trong tiếng Anh là gì?", "Mouth", ["Mouth", "Nose", "Ear"]],
  ["Tiếng Anh vui", "🖐️", "Bàn tay trong tiếng Anh là gì?", "Hand", ["Hand", "Head", "Foot"]],
  ["Tiếng Anh vui", "🦶", "Bàn chân trong tiếng Anh là gì?", "Foot", ["Foot", "Face", "Eye"]],
  ["Tiếng Anh vui", "🙂", "Vui trong tiếng Anh là gì?", "Happy", ["Happy", "Sad", "Angry"]],
  ["Tiếng Anh vui", "😢", "Buồn trong tiếng Anh là gì?", "Sad", ["Sad", "Happy", "Sleepy"]],
  ["Tiếng Anh vui", "😴", "Buồn ngủ trong tiếng Anh là gì?", "Sleepy", ["Sleepy", "Hungry", "Happy"]],
  ["Tiếng Anh vui", "😋", "Đói bụng trong tiếng Anh là gì?", "Hungry", ["Hungry", "Cold", "Sad"]],

  ["Tiếng Anh vui", "📚", "Quyển sách trong tiếng Anh là gì?", "Book", ["Book", "Bag", "Ball"]],
  ["Tiếng Anh vui", "✏️", "Bút chì trong tiếng Anh là gì?", "Pencil", ["Pencil", "Ruler", "Chair"]],
  ["Tiếng Anh vui", "🎒", "Ba lô trong tiếng Anh là gì?", "Bag", ["Bag", "Book", "Desk"]],
  ["Tiếng Anh vui", "⚽", "Quả bóng trong tiếng Anh là gì?", "Ball", ["Ball", "Bell", "Book"]],
  ["Tiếng Anh vui", "🚗", "Ô tô trong tiếng Anh là gì?", "Car", ["Car", "Bus", "Train"]],
  ["Tiếng Anh vui", "🚌", "Xe buýt trong tiếng Anh là gì?", "Bus", ["Bus", "Car", "Bike"]],
  ["Tiếng Anh vui", "🚲", "Xe đạp trong tiếng Anh là gì?", "Bike", ["Bike", "Boat", "Plane"]],
  ["Tiếng Anh vui", "✈️", "Máy bay trong tiếng Anh là gì?", "Plane", ["Plane", "Train", "Car"]],
  ["Tiếng Anh vui", "🏠", "Ngôi nhà trong tiếng Anh là gì?", "House", ["House", "School", "Room"]],
  ["Tiếng Anh vui", "🏫", "Trường học trong tiếng Anh là gì?", "School", ["School", "House", "Hospital"]],

  ["Tiếng Anh vui", "🏃", "Chạy trong tiếng Anh là gì?", "Run", ["Run", "Read", "Sleep"]],
  ["Tiếng Anh vui", "🚶", "Đi bộ trong tiếng Anh là gì?", "Walk", ["Walk", "Jump", "Drink"]],
  ["Tiếng Anh vui", "🦘", "Nhảy trong tiếng Anh là gì?", "Jump", ["Jump", "Eat", "Draw"]],
  ["Tiếng Anh vui", "📖", "Đọc trong tiếng Anh là gì?", "Read", ["Read", "Run", "Wash"]],
  ["Tiếng Anh vui", "✍️", "Viết trong tiếng Anh là gì?", "Write", ["Write", "Sing", "Sleep"]],
  ["Tiếng Anh vui", "🎨", "Vẽ trong tiếng Anh là gì?", "Draw", ["Draw", "Drink", "Walk"]],
  ["Tiếng Anh vui", "🍽️", "Ăn trong tiếng Anh là gì?", "Eat", ["Eat", "Read", "Jump"]],
  ["Tiếng Anh vui", "🥤", "Uống trong tiếng Anh là gì?", "Drink", ["Drink", "Draw", "Run"]],
  ["Tiếng Anh vui", "🎵", "Hát trong tiếng Anh là gì?", "Sing", ["Sing", "Sleep", "Write"]],
  ["Tiếng Anh vui", "🛏️", "Ngủ trong tiếng Anh là gì?", "Sleep", ["Sleep", "Eat", "Walk"]],

  ["Suy luận", "🧤 + ❄️", "Khi trời lạnh, bạn nhỏ nên đeo gì vào tay?", "Găng tay", ["Găng tay", "Kính bơi", "Mũ bảo hiểm"]],
  ["Suy luận", "🥣 + 🥄", "Ăn súp thường dùng gì?", "Cái thìa", ["Cái thìa", "Cái kéo", "Bút chì"]],
  ["Suy luận", "🧦 + 👟", "Trước khi đi giày, bạn nhỏ thường mang gì?", "Tất", ["Tất", "Găng tay", "Khăn tắm"]],
  ["Suy luận", "📞 + 👵", "Muốn nói chuyện với bà ở xa, bạn nhỏ dùng gì?", "Điện thoại", ["Điện thoại", "Bàn chải", "Quả bóng"]],
  ["Suy luận", "🌻 + ☀️", "Hoa hướng dương thường hướng về đâu?", "Mặt trời", ["Mặt trời", "Mặt trăng", "Cái ghế"]],
  ["Suy luận", "🧺 + 👕", "Quần áo bẩn nên bỏ vào đâu?", "Giỏ đồ bẩn", ["Giỏ đồ bẩn", "Tủ lạnh", "Cặp sách"]],
  ["Suy luận", "🍳 + 🔥", "Nấu ăn cần cẩn thận với gì?", "Lửa nóng", ["Lửa nóng", "Gấu bông", "Sách vở"]],
  ["Suy luận", "👟 + 🏃", "Muốn chạy an toàn, bạn nhỏ nên mang gì?", "Giày", ["Giày", "Dép trơn", "Tất ướt"]],
  ["Suy luận", "🪴 + ☀️ + 💧", "Cây cần nắng và gì nữa?", "Nước", ["Nước", "Kẹo", "Điện thoại"]],
  ["Suy luận", "🎂 + 🎁", "Khi sinh nhật, mọi người thường tặng gì?", "Quà", ["Quà", "Bài tập", "Ổ điện"]],

  ["Toán nhỏ", "1️⃣ + 4️⃣", "Một cộng bốn bằng mấy?", "Năm", ["Bốn", "Năm", "Sáu"]],
  ["Toán nhỏ", "2️⃣ + 3️⃣", "Hai cộng ba bằng mấy?", "Năm", ["Năm", "Sáu", "Bảy"]],
  ["Toán nhỏ", "4️⃣ - 2️⃣", "Bốn bớt hai còn mấy?", "Hai", ["Một", "Hai", "Ba"]],
  ["Toán nhỏ", "7️⃣ - 2️⃣", "Bảy bớt hai còn mấy?", "Năm", ["Năm", "Sáu", "Bảy"]],
  ["Toán nhỏ", "3️⃣ + 3️⃣", "Ba cộng ba bằng mấy?", "Sáu", ["Năm", "Sáu", "Bảy"]],
  ["Toán nhỏ", "8️⃣ - 3️⃣", "Tám bớt ba còn mấy?", "Năm", ["Năm", "Sáu", "Bảy"]],
  ["Toán nhỏ", "6️⃣ + 2️⃣", "Sáu cộng hai bằng mấy?", "Tám", ["Bảy", "Tám", "Chín"]],
  ["Toán nhỏ", "9️⃣ - 4️⃣", "Chín bớt bốn còn mấy?", "Năm", ["Bốn", "Năm", "Sáu"]],
  ["Toán nhỏ", "🔺🔺🔺", "Có mấy hình tam giác?", "Ba", ["Hai", "Ba", "Bốn"]],
  ["Toán nhỏ", "🔵🔵🔵🔵🔵🔵", "Có mấy hình tròn xanh?", "Sáu", ["Năm", "Sáu", "Bảy"]],

  ["Chữ & từ", "🍉", "Từ “dưa hấu” có mấy tiếng?", "Hai tiếng", ["Một tiếng", "Hai tiếng", "Ba tiếng"]],
  ["Chữ & từ", "🚒", "Từ “cứu hỏa” có mấy tiếng?", "Hai tiếng", ["Một tiếng", "Hai tiếng", "Ba tiếng"]],
  ["Chữ & từ", "🚌", "Từ “xe buýt” bắt đầu bằng tiếng nào?", "Xe", ["Xe", "Buýt", "Trường"]],
  ["Chữ & từ", "🐝", "Từ “ong” bắt đầu bằng chữ nào?", "O", ["O", "A", "E"]],
  ["Chữ & từ", "🍊", "Từ “cam” bắt đầu bằng chữ nào?", "C", ["C", "M", "T"]],
  ["Chữ & từ", "👟", "Từ “giày” bắt đầu bằng chữ nào?", "Gi", ["Gi", "D", "Ch"]],
  ["Chữ & từ", "🧸", "Từ “gấu bông” có mấy tiếng?", "Hai tiếng", ["Một tiếng", "Hai tiếng", "Ba tiếng"]],
  ["Chữ & từ", "🚲", "Từ “xe đạp” có mấy tiếng?", "Hai tiếng", ["Một tiếng", "Hai tiếng", "Bốn tiếng"]],
  ["Chữ & từ", "🪥", "Từ “bàn chải” có mấy tiếng?", "Hai tiếng", ["Một tiếng", "Hai tiếng", "Ba tiếng"]],
  ["Chữ & từ", "🌧️", "Từ nào đúng với hình này?", "Trời mưa", ["Trời mưa", "Trời nắng", "Trời lạnh"]],

  ["An toàn", "🪟", "Bạn nhỏ có nên trèo lên cửa sổ không?", "Không", ["Không", "Có", "Chỉ khi vui"]],
  ["An toàn", "💊", "Thuốc phải uống khi nào?", "Khi người lớn cho phép", ["Khi người lớn cho phép", "Khi thấy đẹp", "Khi muốn thử"]],
  ["An toàn", "🏊", "Bạn nhỏ đi bơi nên đi cùng ai?", "Người lớn", ["Người lớn", "Một mình", "Bạn thú bông"]],
  ["An toàn", "🔪", "Dao sắc có nguy hiểm không?", "Có", ["Có", "Không", "Chỉ nguy hiểm buổi tối"]],
  ["An toàn", "🐶", "Gặp chó lạ, bạn nhỏ nên làm gì?", "Không tự ý lại gần", ["Không tự ý lại gần", "Chạy đến ôm", "Kéo đuôi"]],
  ["An toàn", "🚪", "Có người lạ gõ cửa, bạn nhỏ nên làm gì?", "Gọi người lớn", ["Gọi người lớn", "Mở cửa ngay", "Đi theo họ"]],
  ["An toàn", "🌡️", "Bị sốt, bạn nhỏ nên báo ai?", "Ba mẹ hoặc người lớn", ["Ba mẹ hoặc người lớn", "Cái gối", "Con bướm"]],
  ["An toàn", "🛝", "Khi chơi cầu trượt, bạn nhỏ nên làm gì?", "Xếp hàng chờ lượt", ["Xếp hàng chờ lượt", "Chen lên trước", "Đẩy bạn"]],
  ["An toàn", "🚙", "Ngồi ô tô bạn nhỏ nên thắt gì?", "Dây an toàn", ["Dây an toàn", "Dây giày", "Dây ruy băng"]],
  ["An toàn", "🌩️", "Khi có sấm sét, bạn nhỏ nên ở đâu?", "Trong nhà", ["Trong nhà", "Dưới cây cao", "Ngoài sân"]],

  ["Thói quen tốt", "📚 + ⏰", "Mỗi ngày đọc sách một chút có tốt không?", "Có", ["Có", "Không", "Chỉ tốt khi trời mưa"]],
  ["Thói quen tốt", "🗣️ + 👂", "Khi bạn nói, bạn nhỏ nên làm gì?", "Lắng nghe", ["Lắng nghe", "Chen ngang", "Bịt tai"]],
  ["Thói quen tốt", "😡 + 🌬️", "Khi tức giận, bạn nhỏ nên thử làm gì?", "Hít thở sâu", ["Hít thở sâu", "La thật to", "Ném đồ"]],
  ["Thói quen tốt", "🧩", "Gặp bài khó, bạn nhỏ nên làm gì?", "Thử lại hoặc hỏi người lớn", ["Thử lại hoặc hỏi người lớn", "Bỏ cuộc ngay", "Khóc mãi"]],
  ["Thói quen tốt", "🧼 + 🦷", "Sáng và tối bạn nhỏ nên chăm sóc gì?", "Răng miệng", ["Răng miệng", "Điện thoại", "Bánh kẹo"]],
  ["Thói quen tốt", "👕", "Quần áo sạch giúp bạn nhỏ thế nào?", "Gọn gàng", ["Gọn gàng", "Buồn ngủ", "Quên toán"]],
  ["Thói quen tốt", "🧃 + 🍬", "Ăn quá nhiều đồ ngọt có tốt không?", "Không tốt", ["Không tốt", "Rất tốt", "Giúp răng khỏe"]],
  ["Thói quen tốt", "🥛", "Sữa giúp bạn nhỏ bổ sung gì?", "Dinh dưỡng", ["Dinh dưỡng", "Cát", "Mực viết"]],
  ["Thói quen tốt", "🌳 + 🚮", "Rác nên bỏ vào đâu?", "Thùng rác", ["Thùng rác", "Bồn hoa", "Sân chơi"]],
  ["Thói quen tốt", "💡", "Ra khỏi phòng, bạn nhỏ nên làm gì với đèn?", "Tắt đèn", ["Tắt đèn", "Bật mãi", "Che đèn lại"]],
];

const additionalQuestions = [
  ["Tư duy", "🧃 + 🧊", "Nước trái cây cho đá vào sẽ thế nào?", "Lạnh hơn", ["Lạnh hơn", "Nóng hơn", "Biến thành bánh"], "easy"],
  ["Tư duy", "🐢 vs 🐇", "Con nào thường đi chậm hơn?", "Rùa", ["Rùa", "Thỏ", "Chim"], "easy"],
  ["Tư duy", "🌵 + ☀️", "Cây xương rồng thường sống ở đâu?", "Nơi khô nắng", ["Nơi khô nắng", "Dưới biển", "Trong tủ lạnh"], "medium"],
  ["Tư duy", "🧲 + 🔩", "Nam châm hút vật nào?", "Đinh sắt", ["Đinh sắt", "Lá cây", "Quả bóng"], "medium"],
  ["Tư duy", "🪁 + 🌬️", "Diều bay cao nhờ gì?", "Gió", ["Gió", "Cát", "Bánh kem"], "medium"],
  ["Tư duy", "🕯️ + 💨", "Thổi mạnh vào nến thì nến thường thế nào?", "Tắt", ["Tắt", "To hơn", "Bay lên"], "medium"],
  ["Tư duy", "🧊 → 💧", "Đá tan thành gì?", "Nước", ["Nước", "Cát", "Khói"], "easy"],
  ["Tư duy", "🌱 → 🌳", "Cây con lớn lên thành gì?", "Cây lớn", ["Cây lớn", "Con cá", "Cái ghế"], "easy"],
  ["Tư duy", "🍞 + 🔥", "Bánh mì nướng quá lâu dễ bị gì?", "Cháy", ["Cháy", "Nở hoa", "Biến mất"], "hard"],
  ["Tư duy", "👂 + 🔊", "Âm thanh quá to có thể làm gì?", "Đau tai", ["Đau tai", "Sáng mắt", "Cao hơn"], "hard"],

  ["Toán thử thách", "5️⃣ + 3️⃣", "Năm cộng ba bằng mấy?", "Tám", ["Bảy", "Tám", "Chín"], "medium"],
  ["Toán thử thách", "9️⃣ - 3️⃣", "Chín bớt ba còn mấy?", "Sáu", ["Năm", "Sáu", "Bảy"], "medium"],
  ["Toán thử thách", "4️⃣ + 4️⃣", "Bốn cộng bốn bằng mấy?", "Tám", ["Bảy", "Tám", "Chín"], "medium"],
  ["Toán thử thách", "🔴🔴 + 🔵🔵🔵", "Hai hình đỏ thêm ba hình xanh là mấy hình?", "Năm", ["Bốn", "Năm", "Sáu"], "medium"],
  ["Toán thử thách", "1️⃣0️⃣ - 4️⃣", "Mười bớt bốn còn mấy?", "Sáu", ["Năm", "Sáu", "Bảy"], "hard"],
  ["Toán thử thách", "6️⃣ + 3️⃣", "Sáu cộng ba bằng mấy?", "Chín", ["Tám", "Chín", "Mười"], "hard"],
  ["Toán thử thách", "8️⃣ - 5️⃣", "Tám bớt năm còn mấy?", "Ba", ["Hai", "Ba", "Bốn"], "hard"],
  ["Toán thử thách", "🐱🐱 + 🐶🐶", "Hai mèo thêm hai chó là mấy con vật?", "Bốn", ["Ba", "Bốn", "Năm"], "easy"],
  ["Toán thử thách", "🍓🍓🍓🍓 - 🍓", "Bốn quả dâu ăn một quả còn mấy?", "Ba", ["Hai", "Ba", "Bốn"], "easy"],
  ["Toán thử thách", "3 đôi tất có mấy chiếc tất?", "Sáu", ["Ba", "Sáu", "Chín"], "hard"],

  ["Khám phá", "🦷", "Răng sữa rụng rồi thường mọc gì?", "Răng mới", ["Răng mới", "Tóc mới", "Cánh mới"], "medium"],
  ["Khám phá", "🌍", "Trái Đất có dạng gần giống hình gì?", "Hình cầu", ["Hình cầu", "Hình vuông", "Hình tam giác"], "hard"],
  ["Khám phá", "🌧️ + ☀️", "Mưa xong có nắng, ta có thể thấy gì?", "Cầu vồng", ["Cầu vồng", "Cái trống", "Bánh mì"], "easy"],
  ["Khám phá", "🐣", "Gà con nở ra từ đâu?", "Quả trứng", ["Quả trứng", "Cái lá", "Hòn đá"], "easy"],
  ["Khám phá", "🚦", "Đèn giao thông giúp mọi người làm gì?", "Đi đường an toàn", ["Đi đường an toàn", "Nấu cơm nhanh", "Ngủ ngon hơn"], "medium"],
  ["Khám phá", "🧭", "La bàn giúp biết điều gì?", "Hướng đi", ["Hướng đi", "Mùi vị", "Màu áo"], "hard"],
  ["Khám phá", "🔋", "Pin dùng để làm gì?", "Cung cấp điện", ["Cung cấp điện", "Tưới cây", "Đánh răng"], "medium"],
  ["Khám phá", "🪴", "Nếu quên tưới cây lâu ngày, cây có thể thế nào?", "Héo", ["Héo", "Chạy đi", "Biết hát"], "medium"],
  ["Khám phá", "🌊", "Nước biển thường có vị gì?", "Mặn", ["Mặn", "Ngọt như kẹo", "Cay"], "easy"],
  ["Khám phá", "🧼", "Xà phòng giúp loại bỏ gì trên tay?", "Vi khuẩn và bụi bẩn", ["Vi khuẩn và bụi bẩn", "Màu mắt", "Tiếng cười"], "hard"],

  ["An toàn", "🛴 + 🪖", "Đi xe trượt nên đội gì?", "Mũ bảo hiểm", ["Mũ bảo hiểm", "Mũ len", "Nón giấy"], "easy"],
  ["An toàn", "🚧", "Thấy công trình đang sửa, bạn nhỏ nên làm gì?", "Tránh xa", ["Tránh xa", "Chạy vào chơi", "Leo lên"], "medium"],
  ["An toàn", "🍬 + 🧑‍🦱", "Người lạ rủ đi lấy kẹo, bạn nhỏ nên làm gì?", "Báo người lớn", ["Báo người lớn", "Đi theo", "Giữ bí mật"], "hard"],
  ["An toàn", "🏠 + 🔥", "Ngửi thấy mùi khét trong nhà, nên báo ai?", "Người lớn", ["Người lớn", "Gấu bông", "Con mèo"], "medium"],
  ["An toàn", "📱", "Muốn xem điện thoại lâu, bạn nhỏ nên làm gì?", "Xin phép và nghỉ mắt", ["Xin phép và nghỉ mắt", "Xem cả ngày", "Giấu đi"], "hard"],

  ["Thói quen tốt", "🌙 + 📚", "Trước khi ngủ, đọc sách nhỏ có tốt không?", "Có", ["Có", "Không", "Chỉ tốt khi mưa"], "easy"],
  ["Thói quen tốt", "🥣", "Ăn sáng giúp bạn nhỏ thế nào?", "Có năng lượng", ["Có năng lượng", "Mất sức", "Buồn hơn"], "medium"],
  ["Thói quen tốt", "🧹", "Phòng gọn gàng giúp mình làm gì dễ hơn?", "Tìm đồ", ["Tìm đồ", "Quên đồ", "Làm bẩn hơn"], "medium"],
  ["Thói quen tốt", "🗣️", "Muốn mượn đồ của bạn, nên nói gì?", "Cho mình mượn nhé", ["Cho mình mượn nhé", "Lấy luôn", "Không nói gì"], "easy"],
  ["Thói quen tốt", "😤", "Khi thua trò chơi, nên làm gì?", "Bình tĩnh chơi lại", ["Bình tĩnh chơi lại", "Ném đồ", "Giận mãi"], "hard"],

  ["Toán một nửa", "1️⃣ ÷ 2️⃣", "Một nửa của 1 là bao nhiêu?", "0,5", ["0,5", "1", "2"], "hard", "Một nửa nghĩa là chia thành 2 phần bằng nhau. 1 chia 2 bằng 0,5."],
  ["Toán một nửa", "2️⃣ ÷ 2️⃣", "Một nửa của 2 là bao nhiêu?", "1", ["1", "2", "4"], "medium", "Một nửa nghĩa là chia đều cho 2. 2 chia 2 bằng 1."],
  ["Toán một nửa", "3️⃣ ÷ 2️⃣", "Một nửa của 3 là bao nhiêu?", "1,5", ["1,5", "2", "3"], "hard", "3 chia thành 2 phần bằng nhau thì mỗi phần là 1,5."],
  ["Toán một nửa", "4️⃣ ÷ 2️⃣", "Một nửa của 4 là bao nhiêu?", "2", ["2", "4", "8"], "medium", "4 chia đều thành 2 phần thì mỗi phần có 2."],
  ["Toán một nửa", "5️⃣ ÷ 2️⃣", "Một nửa của 5 là bao nhiêu?", "2,5", ["2,5", "3", "5"], "hard", "5 chia thành 2 phần bằng nhau thì mỗi phần là 2,5."],
  ["Toán một nửa", "6️⃣ ÷ 2️⃣", "Một nửa của 6 là bao nhiêu?", "3", ["3", "6", "12"], "medium", "6 chia đều cho 2 thì được 3."],
  ["Toán một nửa", "7️⃣ ÷ 2️⃣", "Một nửa của 7 là bao nhiêu?", "3,5", ["3,5", "4", "7"], "hard", "7 chia thành 2 phần bằng nhau thì mỗi phần là 3,5."],
  ["Toán một nửa", "8️⃣ ÷ 2️⃣", "Một nửa của 8 là bao nhiêu?", "4", ["4", "8", "16"], "medium", "8 chia đều cho 2 thì được 4."],
  ["Toán một nửa", "9️⃣ ÷ 2️⃣", "Một nửa của 9 là bao nhiêu?", "4,5", ["4,5", "5", "9"], "hard", "9 chia thành 2 phần bằng nhau thì mỗi phần là 4,5."],
  ["Toán một nửa", "🔟 ÷ 2️⃣", "Một nửa của 10 là bao nhiêu?", "5", ["5", "10", "20"], "medium", "10 chia đều cho 2 thì được 5."],

  ["Chẵn lẻ", "2️⃣", "Số 2 là số chẵn hay số lẻ?", "Số chẵn", ["Số chẵn", "Số lẻ", "Không biết"], "medium", "Số 2 là số chẵn vì chia đều được thành 2 nhóm bằng nhau."],
  ["Chẵn lẻ", "3️⃣", "Số 3 là số chẵn hay số lẻ?", "Số lẻ", ["Số chẵn", "Số lẻ", "Số tròn"], "medium", "Số 3 là số lẻ vì chia thành 2 nhóm sẽ còn dư 1."],
  ["Chẵn lẻ", "4️⃣", "Số 4 là số chẵn hay số lẻ?", "Số chẵn", ["Số chẵn", "Số lẻ", "Số nhỏ"], "medium", "Số 4 là số chẵn vì có thể chia đều thành 2 và 2."],
  ["Chẵn lẻ", "5️⃣", "Số 5 là số chẵn hay số lẻ?", "Số lẻ", ["Số lẻ", "Số chẵn", "Số đôi"], "medium", "Số 5 là số lẻ vì chia thành 2 nhóm sẽ còn dư 1."],
  ["Chẵn lẻ", "6️⃣", "Số 6 là số chẵn hay số lẻ?", "Số chẵn", ["Số chẵn", "Số lẻ", "Số một"], "medium", "Số 6 là số chẵn vì chia đều thành 3 và 3."],
  ["Chẵn lẻ", "7️⃣", "Số 7 là số chẵn hay số lẻ?", "Số lẻ", ["Số chẵn", "Số lẻ", "Số tròn"], "medium", "Số 7 là số lẻ vì chia thành 2 nhóm sẽ còn dư 1."],
  ["Chẵn lẻ", "8️⃣", "Số 8 là số chẵn hay số lẻ?", "Số chẵn", ["Số chẵn", "Số lẻ", "Số dư"], "medium", "Số 8 là số chẵn vì chia đều thành 4 và 4."],
  ["Chẵn lẻ", "9️⃣", "Số 9 là số chẵn hay số lẻ?", "Số lẻ", ["Số lẻ", "Số chẵn", "Số đôi"], "medium", "Số 9 là số lẻ vì chia thành 2 nhóm sẽ còn dư 1."],
  ["Chẵn lẻ", "🔟", "Số 10 là số chẵn hay số lẻ?", "Số chẵn", ["Số chẵn", "Số lẻ", "Số bé"], "medium", "Số 10 là số chẵn vì chia đều thành 5 và 5."],
  ["Chẵn lẻ", "1️⃣1️⃣", "Số 11 là số chẵn hay số lẻ?", "Số lẻ", ["Số lẻ", "Số chẵn", "Số tròn"], "hard", "Số 11 là số lẻ vì chia thành 2 nhóm sẽ còn dư 1."],
  ["Chẵn lẻ", "1️⃣2️⃣", "Số 12 là số chẵn hay số lẻ?", "Số chẵn", ["Số chẵn", "Số lẻ", "Số dư"], "hard", "Số 12 là số chẵn vì chia đều thành 6 và 6."],
  ["Chẵn lẻ", "1️⃣5️⃣", "Số 15 là số chẵn hay số lẻ?", "Số lẻ", ["Số lẻ", "Số chẵn", "Số đôi"], "hard", "Số 15 là số lẻ vì chia thành 2 nhóm sẽ còn dư 1."],
  ["Chẵn lẻ", "1️⃣8️⃣", "Số 18 là số chẵn hay số lẻ?", "Số chẵn", ["Số chẵn", "Số lẻ", "Số nhỏ"], "hard", "Số 18 là số chẵn vì chia đều thành 9 và 9."],
  ["Chẵn lẻ", "2️⃣1️⃣", "Số 21 là số chẵn hay số lẻ?", "Số lẻ", ["Số lẻ", "Số chẵn", "Số tròn"], "hard", "Số 21 là số lẻ vì chia thành 2 nhóm sẽ còn dư 1."],
  ["Chẵn lẻ", "2️⃣4️⃣", "Số 24 là số chẵn hay số lẻ?", "Số chẵn", ["Số chẵn", "Số lẻ", "Số dư"], "hard", "Số 24 là số chẵn vì chia đều thành 12 và 12."],
];

function buildGeneratedKidsQuestions() {
  const result = [];
  for (let a = 1; a <= 40; a++) {
    for (let b = 1; b <= 25; b++) {
      const sum = a + b;
      const level = sum <= 10 ? "easy" : sum <= 35 ? "medium" : "hard";
      result.push(["Toán vui", `${a} + ${b}`, `${a} cộng ${b} bằng mấy?`, String(sum), [String(sum), String(sum + 1), String(Math.max(0, sum - 1))], level, `${a} cộng ${b} bằng ${sum}.`]);
      if (a >= b) {
        const diff = a - b;
        result.push(["Toán vui", `${a} - ${b}`, `${a} bớt ${b} còn mấy?`, String(diff), [String(diff), String(diff + 1), String(Math.max(0, diff - 1))], level, `${a} bớt ${b} còn ${diff}.`]);
      }
    }
  }
  return result;
}
const generatedKidsQuestions = buildGeneratedKidsQuestions().slice(0, Math.max(0, 1000 - questions.length - additionalQuestions.length));

const state = { deck: [], index: 0, correct: 0, combo: 0, maxCombo: 0, startedAt: 0, rewards: [], mission: "", level: "easy" };
const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
function createSessionId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return "kids-" + Date.now() + "-" + Math.random().toString(36).slice(2);
}
const sessionId = sessionStorage.getItem("kids-session") || createSessionId();
sessionStorage.setItem("kids-session", sessionId);
let audioContext;
let musicTimer;
let musicStep = 0;
let soundEnabled = localStorage.getItem("kids-sound") !== "false";
let voices = [];
let currentVoiceCue;

function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
function showScreen(id) { screens.forEach((screen) => screen.classList.toggle("active", screen.id === id)); }
function loadVoices() {
  voices = speechSynthesis.getVoices();
}
function getVoice(lang) {
  return voices.find((voice) => voice.lang === lang)
    || voices.find((voice) => voice.lang && voice.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()))
    || null;
}
function normalizeVietnameseSpeech(text) {
  return String(text)
    .replace(/5\+/g, "năm tuổi trở lên")
    .replace(/Emoji/g, "i mô ji");
}
function makeUtterance(text, lang = "vi-VN") {
  const utterance = new SpeechSynthesisUtterance(
    lang.startsWith("vi") ? normalizeVietnameseSpeech(text) : text
  );
  utterance.lang = lang;
  utterance.voice = getVoice(lang);
  utterance.rate = lang.startsWith("en") ? 0.88 : 1.08;
  utterance.pitch = lang.startsWith("en") ? 1.08 : 1.18;
  return utterance;
}
function speak(text, lang = "vi-VN", shouldCancel = true) {
  if (!soundEnabled || !("speechSynthesis" in window)) return;
  if (!voices.length) loadVoices();
  if (shouldCancel) speechSynthesis.cancel();
  speechSynthesis.speak(makeUtterance(text, lang));
}
function speakLines(lines) {
  if (!("speechSynthesis" in window)) return;
  if (!voices.length) loadVoices();
  speechSynthesis.cancel();
  lines.forEach((line) => {
    const text = Array.isArray(line) ? line[0] : line;
    const lang = Array.isArray(line) ? line[1] : "vi-VN";
    speechSynthesis.speak(makeUtterance(text, lang));
  });
}
function speakQuestion(text) {
  speakLines([pick(QUESTION_INTROS), text]);
}
function playVoiceCue(type) {
  if (!soundEnabled || !VOICE_CUES[type]) return;
  const name = pick(VOICE_CUES[type]);
  if (currentVoiceCue) {
    currentVoiceCue.pause();
    currentVoiceCue.currentTime = 0;
  }
  currentVoiceCue = new Audio(`/assets/audio/kids/${name}.wav?v=20260624-voice1`);
  currentVoiceCue.volume = .95;
  currentVoiceCue.play().catch(() => {});
}
function speakAnswer(correct, category, answer) {
  playVoiceCue(correct ? "correct" : "wrong");
  if (category === "Tiếng Anh vui") {
    setTimeout(() => speak(answer, "en-US"), 900);
    return;
  }
}
function tone(frequency, duration = .15, delay = 0) {
  if (!soundEnabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
  const start = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "triangle";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(.0001, start);
  gain.gain.exponentialRampToValueAtTime(.09, start + .02);
  gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + .03);
}
function musicTone(frequency, duration = .14, delay = 0, volume = .026) {
  if (!soundEnabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!audioContext) audioContext = new AudioContext();
  if (audioContext.state === "suspended") audioContext.resume();
  const start = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + .02);
  gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + .03);
}
function startMusic() {
  if (!soundEnabled || musicTimer) return;
  const melody = [523, 659, 784, 659, 587, 698, 880, 698];
  musicTimer = setInterval(() => {
    musicTone(melody[musicStep % melody.length], .12, 0, .018);
    if (musicStep % 4 === 0) musicTone(262, .18, 0, .012);
    musicStep += 1;
  }, 420);
}
function stopMusic() {
  clearInterval(musicTimer);
  musicTimer = null;
}
function questionJingle() { [784, 988, 1175].forEach((note, index) => tone(note, .1, index * .045)); }
function happySound() { [523, 659, 784, 1046].forEach((note, index) => tone(note, .16, index * .06)); }
function gentleSound() { tone(392, .12); tone(330, .16, .08); tone(392, .12, .18); }
function finishSound() { [392, 523, 659, 784, 1046, 1318].forEach((note, index) => tone(note, .2, index * .07)); }
function getSource() {
  const params = new URLSearchParams(location.search);
  if (params.get("utm_source")) return `kids:${params.get("utm_source")}`.slice(0, 80);
  return "kids";
}
function track(event, details = {}) {
  fetch("/api/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    keepalive: true,
    body: JSON.stringify({
      event, sessionId, source: getSource(),
      device: innerWidth <= 600 ? "mobile" : innerWidth <= 1024 ? "tablet" : "desktop",
      ...details,
    }),
  }).catch(() => {});
}
function renderSound() {
  $("#soundButton").textContent = soundEnabled ? "♫" : "×";
  $("#soundButton").classList.toggle("muted", !soundEnabled);
}
function renderLevelPicker() {
  document.querySelectorAll(".level-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.level === state.level);
  });
}
function getComboText(combo) {
  if (combo >= 7) return `🔥 Combo x${combo}! Không ai cản nổi!`;
  if (combo >= 5) return `🚀 Combo x${combo}! Siêu tốc luôn!`;
  if (combo >= 3) return `⚡ Combo x${combo}! Quá bén!`;
  if (combo >= 2) return `✨ Combo x${combo}! Tiếp tục nào!`;
  return "";
}
function getSecretReward() {
  if (state.correct >= ROUND_SIZE && state.maxCombo >= 5) {
    return { prize: "👑", title: "Vương miện Siêu Sao Combo", message: "Rương vàng mở tung! Bạn nhỏ vừa gom một chuỗi trả lời siêu mượt." };
  }
  if (state.correct >= Math.ceil(ROUND_SIZE * 0.85)) {
    return { prize: "🏆", title: "Cúp Thông Minh Lấp Lánh", message: "Rương bí mật trao cúp cho bạn nhỏ trả lời quá xuất sắc!" };
  }
  if (state.maxCombo >= 3) {
    return { prize: "🚀", title: `Tên Lửa Combo x${state.maxCombo}`, message: "Rương phát sáng vì chuỗi đúng liên tiếp của bạn nhỏ đó!" };
  }
  if (state.correct >= Math.ceil(ROUND_SIZE * 0.6)) {
    return { prize: "💎", title: "Viên Kim Cương Cố Gắng", message: "Rương bí mật rất thích những bạn nhỏ chịu thử lại và học tiếp!" };
  }
  return { prize: "🌱", title: "Mầm Non Dũng Cảm", message: "Rương nhỏ tặng bạn một mầm sao. Chơi thêm một lượt để mở quà lớn hơn nhé!" };
}
function renderCombo() {
  const badge = $("#comboBadge");
  const text = getComboText(state.combo);
  if (!text) {
    badge.className = "combo-badge";
    badge.innerHTML = "";
    return;
  }
  badge.className = "combo-badge show";
  badge.innerHTML = `<span>${text}</span>`;
}
function flyStarsFrom(element) {
  if (!element) return;
  const target = $(".stars");
  if (!target) return;
  const from = element.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  const fromX = from.left + from.width / 2 - 14;
  const fromY = from.top + from.height / 2 - 14;
  const toX = to.left + to.width / 2 - 14;
  const toY = to.top + to.height / 2 - 14;
  const count = Math.min(5, 2 + state.combo);

  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    star.className = "flying-star";
    star.textContent = i % 2 ? "✨" : "⭐";
    star.style.setProperty("--from-x", `${fromX}px`);
    star.style.setProperty("--from-y", `${fromY}px`);
    star.style.setProperty("--to-x", `${toX}px`);
    star.style.setProperty("--to-y", `${toY}px`);
    star.style.setProperty("--wiggle-x", `${(i - 2) * 18}px`);
    star.style.animationDelay = `${i * 45}ms`;
    document.body.appendChild(star);
    star.addEventListener("animationend", () => {
      if (star.parentNode) star.parentNode.removeChild(star);
    });
    setTimeout(() => {
      if (star.parentNode) star.parentNode.removeChild(star);
    }, 1300);
  }
}
function getQuestionDifficulty(question) {
  if (question[5]) return question[5];
  const category = question[0];
  const emoji = question[1];
  const text = question[2];

  if (category === "Tiếng Anh vui") {
    if (/Màu|Con mèo|Con chó|Con cá|Quả táo|Quả chuối|Quả cam|Quả nho/.test(text)) return "easy";
    if (/trong tiếng Anh là gì/.test(text)) return "medium";
    return "easy";
  }

  if (category === "Toán nhỏ") {
    if (/Có mấy|Một đôi|Hai cộng hai|Một cộng một|Hai cộng một|Ba bớt một|Năm bớt một/.test(text)) return "easy";
    if (/7️⃣|8️⃣|9️⃣|6️⃣ \+ 2️⃣|3️⃣ \+ 3️⃣/.test(emoji + text)) return "hard";
    return "medium";
  }

  if (category === "Toán một nửa") return question[5] || "hard";

  if (category === "Chẵn lẻ") return question[5] || "medium";

  if (category === "Chữ & từ") {
    if (/bắt đầu bằng chữ nào|Từ nào đúng với hình này|dùng sách|dùng bút chì|dùng tai/.test(text)) return "easy";
    return "medium";
  }

  if (category === "Thế giới quanh em") {
    if (/Ban ngày|Ban đêm|Trời mưa|Cầu vồng|Bánh mì/.test(text)) return "easy";
    if (/Xe cứu thương|Chú công an|Hộp thư|Trứng gà|Sâu/.test(text)) return "medium";
    return "medium";
  }

  if (category === "Suy luận") {
    if (/thường thích|Bàn chải|Buổi tối|Con ong|Cây cần|Đá lạnh/.test(text)) return "easy";
    if (/trời mưa|đi học|khám bệnh|trời lạnh|Ăn súp|Trước khi đi giày|nói chuyện với bà|Hoa hướng dương|Quần áo bẩn|sinh nhật/.test(text)) return "medium";
    if (/cháy|Nấu ăn|chạy an toàn|Cây cần nắng/.test(text)) return "hard";
    return "medium";
  }

  if (category === "An toàn") {
    if (/Đèn đỏ|chạm vào lửa|Đi xe đạp|Chơi xong|Trước khi ăn/.test(text)) return "easy";
    if (/qua đường|Ổ điện|chai lạ|bị đau|cầu trượt|ô tô|sấm sét|sốt/.test(text)) return "medium";
    return "hard";
  }

  if (category === "Thói quen tốt") {
    if (/Buổi sáng|Trước khi ăn|Chơi xong|Khi khát|Khi bạn giúp mình|Cảm ơn|phát biểu|Tất bẩn|Rác|đèn/.test(text)) return "easy";
    if (/màn hình|Rau và trái cây|Ngủ đủ|đọc sách|lắng nghe|quần áo sạch|Sữa/.test(text)) return "medium";
    return "hard";
  }

  return "medium";
}
function getQuestionExplanation(question) {
  const custom = question[6];
  if (custom) return custom;
  const category = question[0];
  const answer = question[3];
  if (category === "Chẵn lẻ") return custom || `${answer} vì số này ${answer === "Số chẵn" ? "chia đều được thành 2 nhóm bằng nhau" : "chia thành 2 nhóm sẽ còn dư 1"}.`;
  if (category.includes("Toán")) return `Mình tính lại từng bước sẽ ra ${answer}.`;
  if (category === "An toàn") return `${answer} là lựa chọn an toàn hơn trong tình huống này.`;
  if (category === "Tiếng Anh vui") return `Từ đúng của hình này là ${answer}.`;
  if (category === "Chữ & từ") return `Đáp án đúng là ${answer} vì phù hợp với chữ hoặc từ trong câu hỏi.`;
  return `Đáp án đúng là ${answer} vì phù hợp nhất với hình và câu hỏi.`;
}
function getFunnyWrongMessage(question, selected) {
  const category = question[0];
  const questionText = question[2];
  const answer = question[3];
  const chosen = selected || "đáp án đó";
  const q = questionText.toLowerCase();
  const c = String(chosen).toLowerCase();
  const text = `${q} ${c}`;
  const hasQ = (pattern) => pattern.test(q);
  const hasC = (pattern) => pattern.test(c);

  if (hasQ(/con mèo/) && hasC(/nước ngọt|cà phê/)) return "Mèo mà uống món này chắc kêu 'meo meo' tỉnh tới sáng luôn!";
  if (hasQ(/trời mưa/) && hasC(/kính mát|quạt giấy/)) return "Trời mưa mà cầm quạt giấy thì cái quạt sẽ xin… nghỉ hưu vì ướt nhẹp!";
  if (hasQ(/bàn chải dùng/) && hasC(/chải tóc|tô màu/)) return "Bàn chải đánh răng mà đi tô màu chắc hộp bút màu hoang mang lắm!";
  if (hasQ(/bỏ sách vào đâu/) && hasC(/nồi cơm|tủ lạnh/)) return "Sách vào nồi cơm là thành món 'cơm bài tập' mất rồi!";
  if (hasQ(/buổi tối/) && hasC(/đi học|tập bơi/)) return "Tối rồi mà đi học liền thì cái gối ở nhà buồn thiu đó!";
  if (hasQ(/con ong/) && hasC(/sữa|bánh mì/)) return "Ong làm bánh mì thì tiệm bánh chắc phải tuyển thêm… ong đầu bếp!";
  if (hasQ(/cây cần gì/) && hasC(/bút chì|giày dép|kẹo|điện thoại/)) return "Cây mà ăn món này chắc sẽ đứng hình như tượng luôn!";
  if (hasQ(/đá lạnh/) && hasC(/bay lên|nở hoa/)) return "Đá mà nở hoa thì mình phải mở ngay vườn kem lạnh rồi!";

  if (hasQ(/đèn đỏ/) && hasC(/chạy|nhảy/)) return "Đèn đỏ mà chạy là đôi chân bật chế độ quá hăng rồi, phải dừng lại nha!";
  if (hasQ(/qua đường/) && hasC(/gấu bông|một mình/)) return "Gấu bông rất dễ thương, nhưng chưa có bằng hướng dẫn qua đường đâu!";
  if (hasQ(/chai lạ/) && hasC(/uống thử|đổ ra chơi/)) return "Chai lạ không phải nước phép đâu, hỏi người lớn trước cho chắc cú!";
  if (hasQ(/đi xe đạp|đi xe trượt/) && hasC(/mũ sinh nhật|vương miện|mũ len|nón giấy/)) return "Đội món này nhìn ngầu đó, nhưng đầu cần mũ bảo hiểm mới an toàn!";
  if (hasQ(/chơi xong đồ chơi/) && hasC(/giữa đường|ném lên cao/)) return "Đồ chơi mà nằm giữa đường sẽ mở tiệc vấp chân mất!";
  if (hasQ(/trước khi ăn/) && hasC(/chạy vòng quanh|ngủ ngay/)) return "Bụng đói mà chạy vòng vòng thì cái bụng đánh trống luôn!";
  if (hasQ(/bị đau/) && hasC(/cái cây|con cá/)) return "Cây và cá rất tốt bụng, nhưng gọi người lớn sẽ nhanh hơn nhiều!";
  if (hasQ(/công trình/) && hasC(/chạy vào|leo lên/)) return "Công trình không phải khu vui chơi, vào đó là nhiệm vụ nguy hiểm đó nha!";
  if (hasQ(/mùi khét/) && hasC(/gấu bông|con mèo/)) return "Gấu bông nghe tin chắc cũng hoảng, nhưng người lớn mới xử lý được nha!";

  if (hasQ(/mặt trời/) && hasC(/đèn pin|con mèo/)) return "Con mèo sáng đáng yêu thật, nhưng chưa chiếu sáng cả bầu trời được đâu!";
  if (hasQ(/ban đêm/) && hasC(/cầu trượt|bàn chải/)) return "Ban đêm mà nhìn thấy bàn chải trên trời thì chắc ông trăng đi đánh răng rồi!";
  if (hasQ(/trời mưa.*đường/) && hasC(/nóng đỏ|tuyết kem/)) return "Đường có tuyết kem thì chắc ai cũng mang muỗng ra đường mất!";
  if (hasQ(/sau mưa nắng/) && hasC(/cái bánh|xe lửa/)) return "Sau mưa mà có cái bánh trên trời thì chim chắc mở tiệc luôn!";
  if (hasQ(/sâu.*thành/) && hasC(/cá mập|cái ghế/)) return "Sâu biến thành cái ghế thì ai ngồi cũng hơi… nhột đó!";
  if (hasQ(/trứng gà/) && hasC(/voi|cam/)) return "Trứng gà nở ra voi thì cái vỏ trứng chắc phải to bằng căn phòng!";
  if (hasQ(/xe cứu thương/) && hasC(/picnic|mua bánh/)) return "Xe cứu thương không đi mua bánh đâu, bạn ấy bận giúp người cần cấp cứu!";
  if (hasQ(/hộp thư/) && hasC(/nấu cơm|đánh răng/)) return "Hộp thư mà nấu cơm thì bưu tá có bữa trưa luôn mất!";
  if (hasQ(/chú công an/) && hasC(/làm kem|dạy cá bơi/)) return "Dạy cá bơi nghe vui đó, nhưng chú công an giỏi nhất là giữ an toàn!";
  if (hasQ(/bánh mì/) && hasC(/đội lên đầu|tưới cây/)) return "Bánh mì đội lên đầu thì thành mũ giòn tan rồi!";

  if (hasQ(/hai cộng hai/) && hasC(/ba|năm/)) return "Hai với hai rủ nhau đi thành 4, chưa kịp thành số này đâu!";
  if (hasQ(/ba cộng hai/) && hasC(/bốn|sáu/)) return "Ba ngón thêm hai ngón, đếm kỹ sẽ ra 5 nha!";
  if (hasQ(/năm bớt hai/) && hasC(/hai|bốn/)) return "Năm cái bánh ăn mất hai cái, còn ba cái đang vẫy tay!";
  if (hasQ(/một đôi giày/) && hasC(/một|bốn/)) return "Một đôi giày mà có bốn chiếc chắc bạn nhỏ sắp thành bạch tuộc rồi!";
  if (hasQ(/có mấy quả bóng/) && hasC(/bốn|sáu/)) return "Bóng bay đang trốn hơi kỹ, mình đếm lại từng quả nhé!";
  if (hasQ(/hình tam giác/) && hasC(/hai|bốn/)) return "Tam giác có ba bạn góc đang đứng chờ mình đếm đó!";

  if (hasQ(/bắt đầu bằng chữ/) && hasC(/^[a-zà-ỹđ]+$/i)) return `Chữ này chạy nhầm hàng rồi! Từ đúng bắt đầu bằng “${answer}”.`;
  if (hasQ(/có mấy tiếng/) && hasC(/một tiếng|ba tiếng|hai tiếng/)) return `Mình vỗ tay theo từng tiếng sẽ ra: ${answer}.`;
  if (hasQ(/dùng sách/) && hasC(/nấu ăn|đá bóng/)) return "Sách mà đem đá bóng thì chữ trong sách chóng mặt mất!";
  if (hasQ(/bút chì/) && hasC(/đánh răng|tưới cây/)) return "Bút chì mà đánh răng chắc vẽ ra nụ cười luôn!";
  if (hasQ(/dùng tai/) && hasC(/nhìn|ngửi/)) return "Tai mà đi ngửi thì cái mũi sẽ giận dỗi đó nha!";

  if (hasQ(/tất bẩn/) && hasC(/cặp sách/)) return "Ôi không, cặp sách sắp xin nghỉ học vì mùi tất rồi!";
  if (hasQ(/tất bẩn/) && hasC(/bàn ăn/)) return "Bàn ăn mà gặp tất bẩn là bữa cơm chạy mất dép luôn!";
  if (hasQ(/rác/) && hasC(/bồn hoa/)) return "Bồn hoa không ăn rác đâu nha, hoa sẽ nhăn mặt đó!";
  if (hasQ(/rác/) && hasC(/sân chơi/)) return "Sân chơi mà đầy rác thì cầu trượt cũng muốn… trượt về nhà!";
  if (hasQ(/đèn/) && hasC(/bật mãi/)) return "Bật đèn mãi thì bóng đèn sẽ than: cho tôi ngủ với!";
  if (hasQ(/đèn/) && hasC(/che đèn/)) return "Che đèn không tiết kiệm điện đâu, chỉ làm cái đèn chơi ú òa thôi!";
  if (hasQ(/kẹo/) && hasC(/đi theo/)) return "Đi theo người lạ là nhiệm vụ siêu nguy hiểm, không phải nhiệm vụ săn sticker nha!";
  if (hasQ(/kẹo/) && hasC(/giữ bí mật/)) return "Bí mật kiểu này phải bật mí ngay cho người lớn, không cất trong túi nha!";
  if (hasQ(/ổ điện/) && hasC(/không nguy hiểm|không/)) return "Ổ điện không phải đồ chơi đâu, nó có tuyệt chiêu giật mình đó!";
  if (hasQ(/lửa/) && hasC(/chạm/)) return "Chạm vào lửa là tay sẽ la làng: nóng quá trời ơi!";
  if (hasQ(/dao sắc|dao/) && hasC(/không/)) return "Dao sắc mà bảo không nguy hiểm thì cái dao chắc đang cosplay bút chì!";
  if (hasQ(/thuốc/) && hasC(/thấy đẹp|muốn thử/)) return "Thuốc không phải kẹo nhiều màu đâu, chỉ uống khi người lớn cho phép!";
  if (hasQ(/chó lạ/) && hasC(/ôm|đuôi/)) return "Chó lạ chưa quen mà ôm liền thì bạn ấy có thể giật mình sủa 'gâu gâu' đó!";
  if (hasQ(/cửa sổ/) && hasC(/có|vui/)) return "Cửa sổ không phải sân khấu xiếc đâu nha, nguy hiểm lắm!";
  if (hasQ(/màn hình|điện thoại/) && hasC(/cả ngày|xem cả ngày|rất tốt|càng lâu càng khỏe/)) return "Mắt mà xem quá lâu sẽ bật chế độ: cho tôi nghỉ giải lao!";
  if (hasQ(/đồ ngọt|kẹo/) && hasC(/rất tốt|răng khỏe/)) return "Kẹo mà giúp răng khỏe thì bàn chải chắc thất nghiệp mất!";
  if (hasQ(/phát biểu/) && hasC(/la thật to|chen ngang/)) return "La thật to thì lớp học biến thành buổi hòa nhạc bất đắc dĩ rồi!";
  if (hasQ(/thua trò chơi/) && hasC(/ném đồ|giận mãi/)) return "Thua mà ném đồ thì đồ chơi sẽ họp khẩn cấp để trốn mất!";
  if (hasQ(/mượn đồ/) && hasC(/lấy luôn|không nói/)) return "Lấy luôn là đồ vật cũng ngơ ngác: ủa mình được mượn hồi nào?";
  if (hasQ(/bàn chải/) && hasC(/chải tóc/)) return "Lấy bàn chải đánh răng chải tóc là tóc thơm mùi kem bạc hà luôn!";
  if (hasQ(/đánh răng|răng/) && hasC(/ăn kẹo ngay|giấu bàn chải/)) return "Giấu bàn chải là sâu răng mở tiệc tùng đó nha!";
  if (hasQ(/khát/) && hasC(/nước ngọt|cà phê/)) return "Khát mà uống cà phê thì tim nhảy disco mất!";
  if (hasQ(/cháy/) && hasC(/xe kem|xe đạp/)) return "Cháy mà gọi xe kem thì kem tan trước khi cứu được ai mất!";
  if (hasQ(/bay trên trời|máy bay/) && hasC(/tàu thủy|xe buýt/)) return "Máy bay mà chạy dưới nước chắc phải học bơi trước đã!";
  if (hasQ(/rau và trái cây/) && hasC(/buồn ngủ|quên chữ/)) return "Rau trái không làm quên chữ đâu, bạn ấy là đội cổ vũ sức khỏe!";
  if (hasQ(/ngủ đủ/) && hasC(/đau bụng|quên đường/)) return "Ngủ đủ không làm mình quên đường, nó sạc pin cho cơ thể đó!";
  if (hasQ(/giúp mình/) && hasC(/không cần|đi chỗ khác/)) return "Bạn giúp mình mà mình bỏ đi thì lời cảm ơn sẽ buồn xỉu!";
  if (hasQ(/ăn sáng/) && hasC(/mất sức|buồn hơn/)) return "Bữa sáng là pin buổi sáng, không phải nút làm tụt năng lượng nha!";
  if (hasQ(/phòng gọn/) && hasC(/quên đồ|làm bẩn/)) return "Phòng gọn là bản đồ kho báu, tìm đồ sẽ dễ hơn nhiều!";
  if (hasQ(/đọc sách nhỏ/) && hasC(/không|chỉ tốt khi mưa/)) return "Sách nhỏ trước giờ ngủ như cái ôm nhẹ cho trí tưởng tượng đó!";
  if (hasQ(/nước trái cây/) && hasC(/nóng hơn|biến thành bánh/)) return "Cho đá vào mà biến thành bánh thì tủ lạnh mở tiệm bánh được rồi!";
  if (hasQ(/rùa|thỏ/) && hasC(/thỏ|chim/)) return "Thỏ chạy nhanh thật, còn rùa thì nổi tiếng đi chậm mà chắc!";
  if (hasQ(/nam châm/) && hasC(/lá cây|quả bóng/)) return "Nam châm gọi hoài mà lá cây vẫn tỉnh bơ, vì bạn ấy thích đồ sắt hơn!";
  if (hasQ(/diều/) && hasC(/cát|bánh kem/)) return "Diều mà bay nhờ bánh kem thì trời sẽ thơm mùi sinh nhật mất!";
  if (hasQ(/nến/) && hasC(/to hơn|bay lên/)) return "Thổi nến mà nến bay lên thì sinh nhật thành lễ hội tên lửa rồi!";
  if (hasQ(/âm thanh quá to/) && hasC(/sáng mắt|cao hơn/)) return "Âm thanh to không kéo mình cao lên, chỉ làm tai kêu cứu thôi!";

  if (/một nửa|chia/.test(text)) return `Suýt đúng rồi! Một nửa là chia đều làm 2 phần, nên đáp án là ${answer}.`;
  if (/chẵn|lẻ/.test(text)) return `Số này phải chia thử thành 2 nhóm bằng nhau. Đáp án đúng là ${answer}.`;
  if (category === "Tiếng Anh vui" || /tiếng anh|english/.test(text)) return `"${chosen}" chạy nhầm vào hình này rồi! Từ đúng là ${answer}.`;

  return pick([
    "Úi, đáp án này hơi đi du lịch xa khỏi câu hỏi rồi!",
    "Suýt nữa đúng, nhưng bạn thú vừa lắc đầu cái rụp!",
    "Đáp án này vui đó, nhưng chưa trúng kho báu sticker!",
    "Ôi, câu trả lời vừa trượt vỏ chuối mất rồi!",
    "Bạn nhỏ chọn rất dũng cảm, nhưng đáp án đúng đang đứng ở chỗ khác!",
  ]);
}
function getQuestionPool() {
  const allQuestions = questions.concat(additionalQuestions, generatedKidsQuestions);
  const pool = allQuestions.filter((question) => getQuestionDifficulty(question) === state.level);
  return pool.length >= ROUND_SIZE ? pool : allQuestions;
}
function renderStickerRail() {
  $("#stickerRail").innerHTML = Array.from({ length: ROUND_SIZE }).map((_, index) => {
    const sticker = state.rewards[index];
    return `<span class="${sticker ? "unlocked" : ""}">${sticker || "?"}</span>`;
  }).join("");
}
function unlockSticker() {
  const unused = REWARD_STICKERS.filter((sticker) => !state.rewards.includes(sticker));
  const sticker = pick(unused.length ? unused : REWARD_STICKERS);
  state.rewards.push(sticker);
  return sticker;
}
function startGame() {
  startMusic();
  state.deck = shuffle(getQuestionPool()).slice(0, ROUND_SIZE);
  state.index = 0;
  state.correct = 0;
  state.combo = 0;
  state.maxCombo = 0;
  state.rewards = [];
  state.mission = `${(LEVELS[state.level] || LEVELS.easy).mission} ${pick(MISSIONS)}`;
  state.startedAt = Date.now();
  track("game_start", { level: state.level });
  showScreen("gameScreen");
  renderQuestion();
}
function renderQuestion() {
  const [category, emoji, text, , answers] = state.deck[state.index];
  $("#missionMascot").textContent = pick(MASCOTS);
  $("#missionText").textContent = state.mission;
  $("#questionNumber").textContent = `Câu ${state.index + 1} / ${ROUND_SIZE}`;
  $("#score").textContent = state.correct;
  renderCombo();
  $("#progressBar").style.width = `${((state.index + 1) / ROUND_SIZE) * 100}%`;
  $("#category").textContent = category;
  $("#questionEmoji").textContent = emoji;
  $("#questionText").textContent = text;
  $("#answerGrid").innerHTML = shuffle(answers)
    .map((answer) => `<button class="answer-button" data-answer="${answer}">${answer}</button>`)
    .join("");
  renderStickerRail();
  setTimeout(questionJingle, 120);
  playVoiceCue("intro");
}
function chooseAnswer(selected, sourceButton) {
  const question = state.deck[state.index];
  const [category, , , answer] = question;
  const correct = selected === answer;
  document.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === answer) button.classList.add("correct-flash");
    if (!correct && button.dataset.answer === selected) button.classList.add("wrong-flash");
  });
  if (correct) {
    state.correct += 1;
    state.combo += 1;
    state.maxCombo = Math.max(state.maxCombo, state.combo);
    const sticker = unlockSticker();
    const praise = pick(PRAISES);
    happySound();
    if (sourceButton) sourceButton.classList.add("combo-hit");
    flyStarsFrom(sourceButton);
    renderCombo();
    $("#feedbackFace").textContent = praise[0];
    $("#stickerPop").textContent = sticker;
    $("#feedbackLabel").textContent = praise[1];
    $("#feedbackMessage").textContent = state.combo >= 2 ? getComboText(state.combo) : praise[2];
    $("#feedbackExplain").textContent = "";
  } else {
    const tryMessage = pick(TRY_MESSAGES);
    state.combo = 0;
    renderCombo();
    gentleSound();
    $("#feedbackFace").textContent = tryMessage[0];
    $("#stickerPop").textContent = "💡";
    $("#feedbackLabel").textContent = tryMessage[1];
    $("#feedbackMessage").textContent = getFunnyWrongMessage(question, selected);
    $("#feedbackExplain").textContent = getQuestionExplanation(question);
  }
  $("#feedbackAnswer").textContent = answer;
  setTimeout(() => {
    showScreen("feedbackScreen");
    speakAnswer(correct, category, answer);
  }, 300);
}
function nextQuestion() {
  state.index += 1;
  if (state.index >= ROUND_SIZE) return finishGame();
  showScreen("gameScreen");
  renderQuestion();
}
function finishGame() {
  finishSound();
  const secretReward = getSecretReward();
  track("game_complete", {
    level: state.level,
    score: state.correct * 100,
    correct: state.correct,
    maxCombo: state.maxCombo,
    secretReward: secretReward.title,
    duration: Math.max(1, Math.round((Date.now() - state.startedAt) / 1000)),
  });
  const messages = state.correct >= Math.ceil(ROUND_SIZE * 0.85)
    ? ["Bạn nhỏ thật xuất sắc!", "Bạn nhỏ đã nhận biết rất tốt!"]
    : state.correct >= Math.ceil(ROUND_SIZE * 0.6)
      ? ["Bạn nhỏ giỏi lắm!", "Chơi thêm một lượt, bạn nhỏ sẽ còn giỏi hơn!"]
      : ["Bạn nhỏ đã cố gắng tốt!", "Mỗi lần chơi là một lần mình học thêm nhé!"];
  $("#resultTitle").textContent = messages[0];
  $("#resultEyebrow").textContent = "Mở rương bí mật";
  $("#treasureScene").className = "treasure-scene";
  $("#treasurePrize").textContent = secretReward.prize;
  $("#secretTitle").textContent = secretReward.title;
  $("#resultMessage").textContent = state.maxCombo >= 3
    ? `${secretReward.message} Combo cao nhất: x${state.maxCombo}!`
    : secretReward.message;
  $("#finalScore").textContent = `${state.correct} / ${ROUND_SIZE}`;
  $("#resultStars").textContent = "⭐".repeat(state.correct) || "🌱";
  $("#rewardBox").innerHTML = (state.rewards.length ? state.rewards : ["🌱"])
    .map((sticker) => `<span>${sticker}</span>`)
    .join("");
  if (typeof recordGameScore === 'function') {
    recordGameScore('Vui Học Emoji 5+', state.correct * 250, '🎉');
  }
  showScreen("resultScreen");
  setTimeout(() => $("#treasureScene").className = "treasure-scene open", 180);
  playVoiceCue("finish");
}
function toast(message) {
  $("#toast").textContent = message;
  $("#toast").classList.add("show");
  setTimeout(() => $("#toast").classList.remove("show"), 2200);
}
async function share() {
  track("share", { level: state.level, score: state.correct * 100, correct: state.correct });
  const text = `Bạn nhỏ trả lời đúng ${state.correct}/${ROUND_SIZE} câu trong Vui Học Emoji 5+. Mời các bạn nhỏ cùng chơi!`;
  if (navigator.share) {
    try { await navigator.share({ title: "Vui Học Emoji", text, url: location.href }); return; } catch {}
  }
  await navigator.clipboard.writeText(`${text} ${location.href}`);
  toast("Đã sao chép đường dẫn");
}

$("#startButton").addEventListener("click", startGame);
$("#replayButton").addEventListener("click", startGame);
$("#nextButton").addEventListener("click", nextQuestion);
$("#levelPicker").addEventListener("click", (event) => {
  const button = event.target.closest(".level-button");
  if (!button) return;
  state.level = button.dataset.level || "easy";
  renderLevelPicker();
  happySound();
});
$("#listenButton").addEventListener("click", () => speakQuestion($("#questionText").textContent));
$("#speakButton").addEventListener("click", () => {
  const activeTitle = document.querySelector(".screen.active h1, .screen.active h2");
  speak(activeTitle ? activeTitle.textContent : "Vui học Emoji");
});
$("#soundButton").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  localStorage.setItem("kids-sound", String(soundEnabled));
  renderSound();
  if (soundEnabled) {
    happySound();
    startMusic();
  } else {
    stopMusic();
    if ("speechSynthesis" in window) speechSynthesis.cancel();
  }
});
$("#shareButton").addEventListener("click", share);
$("#answerGrid").addEventListener("click", (event) => {
  const button = event.target.closest(".answer-button");
  if (button) {
    if (state.deck[state.index]?.[0] === "Tiếng Anh vui") speak(button.dataset.answer, "en-US");
    chooseAnswer(button.dataset.answer, button);
  }
});
$("#answerGrid").addEventListener("pointerover", (event) => {
  const button = event.target.closest(".answer-button");
  if (button && !button.contains(event.relatedTarget) && state.deck[state.index]?.[0] === "Tiếng Anh vui") speak(button.dataset.answer, "en-US");
});

if ("speechSynthesis" in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}
let lastTouchEnd = 0;
document.addEventListener("touchend", (event) => {
  const now = Date.now();
  if (now - lastTouchEnd <= 350) event.preventDefault();
  lastTouchEnd = now;
}, false);
document.addEventListener("gesturestart", (event) => event.preventDefault(), false);
renderSound();
renderLevelPicker();
track("visit");
