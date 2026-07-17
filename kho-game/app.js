const questions = [
  { emoji: "☀️ 🐓", answer: "Gà gáy sáng", hint: "Một khoảnh khắc đầu ngày", choices: ["Gà gáy sáng", "Nắng như thiêu", "Dậy sớm", "Bình minh"] },
  { emoji: "🐟 🛢️", answer: "Cá nằm trên thớt", hint: "Một tình thế khó thoát", choices: ["Cá lớn nuốt cá bé", "Cá nằm trên thớt", "Nước đến chân", "Cá mè một lứa"] },
  { emoji: "💧 🦶", answer: "Nước đến chân", hint: "Sát hạn mới bắt đầu", choices: ["Chân ướt chân ráo", "Nước đến chân", "Nước mắt cá sấu", "Đứng mũi chịu sào"] },
  { emoji: "👄 🐍", answer: "Miệng lưỡi rắn độc", hint: "Lời nói gây tổn thương", choices: ["Khẩu Phật tâm xà", "Miệng lưỡi rắn độc", "Uốn lưỡi bảy lần", "Ăn nói có duyên"] },
  { emoji: "🔥 🏠", answer: "Cháy nhà ra mặt chuột", hint: "Hoạn nạn mới biết lòng nhau", choices: ["Lửa gần rơm", "Cháy nhà ra mặt chuột", "Nhà sạch thì mát", "Tối lửa tắt đèn"] },
  { emoji: "🐸 🥥", answer: "Ếch ngồi đáy giếng", hint: "Hiểu biết hạn hẹp", choices: ["Ếch ngồi đáy giếng", "Cóc kiện trời", "Ngồi mát ăn bát vàng", "Gần mực thì đen"] },
  { emoji: "🍚 👕", answer: "Cơm áo gạo tiền", hint: "Những lo toan thiết yếu", choices: ["Cơm no áo ấm", "Cơm áo gạo tiền", "Ăn chắc mặc bền", "Khéo ăn thì no"] },
  { emoji: "👂 🌬️", answer: "Gió thổi bên tai", hint: "Nghe rồi bỏ ngoài tai", choices: ["Tai vách mạch rừng", "Gió thổi bên tai", "Thuận buồm xuôi gió", "Nghe gió đoán mưa"] },
  { emoji: "🐘 👁️", answer: "Thầy bói xem voi", hint: "Chỉ thấy một phần đã kết luận", choices: ["Voi chín ngà", "Thầy bói xem voi", "Mắt to hơn bụng", "Có mắt như mù"] },
  { emoji: "🧂 🛢️", answer: "Thêm dầu vào lửa", hint: "Làm tình hình căng hơn", choices: ["Muối bỏ bể", "Thêm dầu vào lửa", "Nước sôi lửa bỏng", "Đổ dầu vào nước"] },
  { emoji: "🐔 🥚", answer: "Gà đẻ trứng vàng", hint: "Nguồn lợi rất giá trị", choices: ["Gà đẻ trứng vàng", "Trứng khôn hơn vịt", "Gà cùng một mẹ", "Quả trứng đầu tiên"] },
  { emoji: "👃 🌳", answer: "Há miệng chờ sung", hint: "Chỉ chờ mà không làm", choices: ["Ăn cây nào rào cây ấy", "Há miệng chờ sung", "Ngồi dưới gốc cây", "Cây ngay không sợ"] },
  { emoji: "📖 🐦", answer: "Học như vẹt", hint: "Nhớ nhưng không hiểu", choices: ["Học một biết mười", "Học như vẹt", "Chim khôn kêu tiếng", "Có công mài sắt"] },
  { emoji: "💰 👁️", answer: "Thấy tiền sáng mắt", hint: "Quá ham lợi", choices: ["Tiền trao cháo múc", "Thấy tiền sáng mắt", "Đồng tiền đi trước", "Tiền mất tật mang"] },
  { emoji: "🐃 🎵", answer: "Đàn gảy tai trâu", hint: "Nói đúng nhưng sai người nghe", choices: ["Trâu chậm uống nước đục", "Đàn gảy tai trâu", "Con trâu là đầu cơ nghiệp", "Tai trâu mặt ngựa"] },
  { emoji: "🌧️ ☂️", answer: "Mưa dầm thấm lâu", hint: "Tác động nhỏ nhưng bền bỉ", choices: ["Mưa dầm thấm lâu", "Sau mưa trời lại sáng", "Che mưa chắn gió", "Mưa thuận gió hòa"] },
  { emoji: "🧠 🐟", answer: "Não cá vàng", hint: "Hay quên", choices: ["Cá không ăn muối", "Não cá vàng", "Trí nhớ siêu phàm", "Cá vàng bơi lội"] },
  { emoji: "🏃 ⏰", answer: "Chạy đua với thời gian", hint: "Phải làm thật nhanh", choices: ["Thời gian là vàng", "Chạy đua với thời gian", "Đi trước đón đầu", "Nhanh như chớp"] },
  { emoji: "🪨 💧", answer: "Nước chảy đá mòn", hint: "Kiên trì sẽ thành công", choices: ["Nước chảy đá mòn", "Đá ném ao bèo", "Chân cứng đá mềm", "Nước đổ đầu vịt"] },
  { emoji: "👑 🐒", answer: "Khỉ mặc áo vua", hint: "Bề ngoài không đổi bản chất", choices: ["Rung cây dọa khỉ", "Khỉ mặc áo vua", "Giết gà dọa khỉ", "Làm vua một cõi"] },
  { emoji: "🌙 🍯", answer: "Tuần trăng mật", hint: "Khoảng thời gian ngọt ngào", choices: ["Mật ngọt chết ruồi", "Tuần trăng mật", "Trăng thanh gió mát", "Ngọt như mật"] },
  { emoji: "🧊 🔥", answer: "Nước với lửa", hint: "Hai bên hoàn toàn đối lập", choices: ["Nước sôi lửa bỏng", "Nước với lửa", "Lửa thử vàng", "Băng tan"] },
  { emoji: "🐕 🦴", answer: "Chó cắn áo rách", hint: "Đã khó lại càng khó", choices: ["Chó cậy gần nhà", "Chó cắn áo rách", "Treo đầu dê bán thịt chó", "Chó ngáp phải ruồi"] },
  { emoji: "🎭 👥", answer: "Hai mặt", hint: "Trước sau không như một", choices: ["Hai mặt", "Mặt nặng mày nhẹ", "Biết mặt không biết lòng", "Mất mặt"] },
  { emoji: "🌊 🦆", answer: "Nước đổ đầu vịt", hint: "Khuyên mãi vẫn không nghe", choices: ["Nước đổ đầu vịt", "Vịt nghe sấm", "Đục nước béo cò", "Nước chảy bèo trôi"] },
  { emoji: "🥇 🐎", answer: "Một ngựa về đích", hint: "Chiến thắng vượt trội", choices: ["Ngựa quen đường cũ", "Một ngựa về đích", "Cưỡi ngựa xem hoa", "Mã đáo thành công"] },
  { emoji: "🍎 👁️", answer: "Con ngươi của mắt", hint: "Người vô cùng quý giá", choices: ["Quả táo vàng", "Con ngươi của mắt", "Mắt to hơn bụng", "Trái cấm"] },
  { emoji: "🪡 🧵", answer: "Kim chỉ nam", hint: "Điều định hướng hành động", choices: ["Kim chỉ nam", "Khâu vá cuộc đời", "Mò kim đáy bể", "Chỉ đỏ se duyên"] },
  { emoji: "🐝 🍯", answer: "Mật ngọt chết ruồi", hint: "Lời ngon ngọt có thể nguy hiểm", choices: ["Ong tìm mật", "Mật ngọt chết ruồi", "Ngọt như đường", "Có mật thì ong"] },
  { emoji: "🚪 🐺", answer: "Rước sói vào nhà", hint: "Tự đưa nguy hiểm đến gần", choices: ["Rước voi về giày mả tổ", "Rước sói vào nhà", "Đóng cửa bảo nhau", "Sói đội lốt cừu"] },
  { emoji: "🌳 🌱", answer: "Tre già măng mọc", hint: "Thế hệ sau tiếp nối thế hệ trước", choices: ["Tre già măng mọc", "Ăn quả nhớ kẻ trồng cây", "Cây cao bóng cả", "Măng non"] },
  { emoji: "🍎 🌳", answer: "Ăn quả nhớ kẻ trồng cây", hint: "Biết ơn người tạo ra thành quả", choices: ["Ăn cây nào rào cây ấy", "Ăn quả nhớ kẻ trồng cây", "Cây ngay không sợ chết đứng", "Có thực mới vực được đạo"] },
  { emoji: "🖋️ 📄", answer: "Bút sa gà chết", hint: "Đã viết hoặc ký thì khó thay đổi", choices: ["Bút sa gà chết", "Giấy trắng mực đen", "Văn hay chữ tốt", "Nét chữ nết người"] },
  { emoji: "🧵 🪡 🌊", answer: "Mò kim đáy bể", hint: "Tìm thứ gần như không thể thấy", choices: ["Kim chỉ nam", "Mò kim đáy bể", "Bể dâu", "Chỉ mành treo chuông"] },
  { emoji: "🗻 🌊", answer: "Lấp biển dời non", hint: "Làm việc vô cùng lớn lao", choices: ["Lấp biển dời non", "Non xanh nước biếc", "Đầu sóng ngọn gió", "Sơn cùng thủy tận"] },
  { emoji: "🐜 🐘", answer: "Kiến tha lâu đầy tổ", hint: "Góp từng chút rồi sẽ thành nhiều", choices: ["Kiến tha lâu đầy tổ", "Voi chín ngà", "Được voi đòi tiên", "Tích tiểu thành đại"] },
  { emoji: "😺 🐭", answer: "Mèo vắng nhà chuột mở hội", hint: "Không có người quản lý thì tha hồ", choices: ["Mèo vắng nhà chuột mở hội", "Chuột sa chĩnh gạo", "Mèo mù vớ cá rán", "Cháy nhà ra mặt chuột"] },
  { emoji: "🐭 🍚", answer: "Chuột sa chĩnh gạo", hint: "Rơi đúng vào nơi đầy lợi ích", choices: ["Chuột sa chĩnh gạo", "Gạo châu củi quế", "Mèo vờn chuột", "No cơm ấm cật"] },
  { emoji: "😺 🐟", answer: "Mèo mù vớ cá rán", hint: "May mắn bất ngờ ngoài khả năng", choices: ["Mèo mù vớ cá rán", "Cá nằm trên thớt", "Mèo khen mèo dài đuôi", "Chó ngáp phải ruồi"] },
  { emoji: "🐶 🪰", answer: "Chó ngáp phải ruồi", hint: "Vô tình gặp may", choices: ["Chó ngáp phải ruồi", "Chó cắn áo rách", "May hơn khôn", "Mèo mù vớ cá rán"] },
  { emoji: "🐔 🏠", answer: "Gà nhà bôi mặt đá nhau", hint: "Người cùng phe lại xung đột", choices: ["Gà nhà bôi mặt đá nhau", "Gà cùng một mẹ", "Khôn nhà dại chợ", "Huynh đệ tương tàn"] },
  { emoji: "🐔 🌲", answer: "Gà rừng", hint: "Một người còn lạ lẫm, chưa thuần thục", choices: ["Gà rừng", "Gà công nghiệp", "Chân ướt chân ráo", "Ngựa non háu đá"] },
  { emoji: "🐎 🌸", answer: "Cưỡi ngựa xem hoa", hint: "Xem xét nhanh và hời hợt", choices: ["Cưỡi ngựa xem hoa", "Mã đáo thành công", "Ngựa quen đường cũ", "Hoa thơm bướm lượn"] },
  { emoji: "🐎 🛣️ 🔁", answer: "Ngựa quen đường cũ", hint: "Quay lại thói quen xấu cũ", choices: ["Ngựa quen đường cũ", "Đường cũ ta về", "Chứng nào tật nấy", "Cưỡi ngựa xem hoa"] },
  { emoji: "🐅 🏔️", answer: "Thả hổ về rừng", hint: "Để đối thủ trở lại môi trường mạnh nhất", choices: ["Thả hổ về rừng", "Hổ xuống đồng bằng", "Rừng thiêng nước độc", "Dưỡng hổ di họa"] },
  { emoji: "🐅 👶", answer: "Không vào hang hổ sao bắt được hổ con", hint: "Muốn thành công phải dám mạo hiểm", choices: ["Không vào hang hổ sao bắt được hổ con", "Thả hổ về rừng", "Điếc không sợ súng", "Có gan làm giàu"] },
  { emoji: "🐍 🦶", answer: "Vẽ rắn thêm chân", hint: "Làm thừa khiến mọi thứ tệ hơn", choices: ["Vẽ rắn thêm chân", "Đầu voi đuôi chuột", "Rắn mất đầu", "Thừa giấy vẽ voi"] },
  { emoji: "🐍 🏠", answer: "Cõng rắn cắn gà nhà", hint: "Giúp người ngoài hại người mình", choices: ["Cõng rắn cắn gà nhà", "Rước sói vào nhà", "Gà nhà đá nhau", "Nuôi ong tay áo"] },
  { emoji: "🐝 👕", answer: "Nuôi ong tay áo", hint: "Giúp kẻ sau này quay lại hại mình", choices: ["Nuôi ong tay áo", "Mật ngọt chết ruồi", "Ong bướm", "Cõng rắn cắn gà nhà"] },
  { emoji: "🐊 😢", answer: "Nước mắt cá sấu", hint: "Giả vờ thương xót", choices: ["Nước mắt cá sấu", "Khóc như mưa", "Cá không ăn muối", "Thương vay khóc mướn"] },
  { emoji: "🦊 🐑", answer: "Sói đội lốt cừu", hint: "Giả hiền để che giấu nguy hiểm", choices: ["Sói đội lốt cừu", "Rước sói vào nhà", "Cáo mượn oai hùm", "Khẩu Phật tâm xà"] },
  { emoji: "🦊 🐅", answer: "Cáo mượn oai hùm", hint: "Dựa thế người mạnh để dọa người khác", choices: ["Cáo mượn oai hùm", "Sói đội lốt cừu", "Thả hổ về rừng", "Dựa hơi"] },
  { emoji: "🐦 🏹", answer: "Một mũi tên trúng hai đích", hint: "Một hành động đạt hai mục tiêu", choices: ["Một mũi tên trúng hai đích", "Nhất cử lưỡng tiện", "Tên bay đạn lạc", "Được cả chì lẫn chài"] },
  { emoji: "🧺 🐟", answer: "Được cả chì lẫn chài", hint: "Có được mọi lợi ích", choices: ["Được cả chì lẫn chài", "Thả con săn sắt bắt con cá rô", "Cá mè một lứa", "Tay không bắt giặc"] },
  { emoji: "🐟 🐟", answer: "Cá mè một lứa", hint: "Những người cùng một kiểu không tốt", choices: ["Cá mè một lứa", "Cá lớn nuốt cá bé", "Đồng hội đồng thuyền", "Ngưu tầm ngưu mã tầm mã"] },
  { emoji: "🐂 🐎 👥", answer: "Ngưu tầm ngưu mã tầm mã", hint: "Người giống nhau thường tìm đến nhau", choices: ["Ngưu tầm ngưu mã tầm mã", "Cá mè một lứa", "Đồng thanh tương ứng", "Trâu buộc ghét trâu ăn"] },
  { emoji: "🐃 🔗 🐃 🍚", answer: "Trâu buộc ghét trâu ăn", hint: "Người bị hạn chế ganh với người tự do", choices: ["Trâu buộc ghét trâu ăn", "Trâu chậm uống nước đục", "Con trâu là đầu cơ nghiệp", "Đàn gảy tai trâu"] },
  { emoji: "🐃 🐌 💧", answer: "Trâu chậm uống nước đục", hint: "Chậm chân thì nhận phần kém", choices: ["Trâu chậm uống nước đục", "Nước đục thả câu", "Chậm mà chắc", "Đục nước béo cò"] },
  { emoji: "💧 🐦", answer: "Đục nước béo cò", hint: "Lợi dụng tình hình rối ren", choices: ["Đục nước béo cò", "Nước đổ đầu vịt", "Cò bay thẳng cánh", "Ngư ông đắc lợi"] },
  { emoji: "👴 🎣 🐟", answer: "Ngư ông đắc lợi", hint: "Người thứ ba hưởng lợi khi hai bên tranh nhau", choices: ["Ngư ông đắc lợi", "Đục nước béo cò", "Câu cá ven sông", "Tọa sơn quan hổ đấu"] },
  { emoji: "⛰️ 👀 🐅 ⚔️", answer: "Tọa sơn quan hổ đấu", hint: "Đứng ngoài chờ hai bên tranh đấu", choices: ["Tọa sơn quan hổ đấu", "Ngư ông đắc lợi", "Thả hổ về rừng", "Đứng núi này trông núi nọ"] },
  { emoji: "⛰️ 👀 ⛰️", answer: "Đứng núi này trông núi nọ", hint: "Không hài lòng, luôn muốn lựa chọn khác", choices: ["Đứng núi này trông núi nọ", "Núi cao còn có núi cao hơn", "Tọa sơn quan hổ đấu", "Trèo cao ngã đau"] },
  { emoji: "🧗 ⬆️ 🤕", answer: "Trèo cao ngã đau", hint: "Tham vọng quá mức dễ thất bại nặng", choices: ["Trèo cao ngã đau", "Cao chạy xa bay", "Đứng núi này trông núi nọ", "Lên thác xuống ghềnh"] },
  { emoji: "🌊 ⛰️ ⬆️⬇️", answer: "Lên thác xuống ghềnh", hint: "Trải qua nhiều gian nan", choices: ["Lên thác xuống ghềnh", "Đầu sóng ngọn gió", "Sơn cùng thủy tận", "Ba chìm bảy nổi"] },
  { emoji: "3️⃣ 🌊 7️⃣ 🛟", answer: "Ba chìm bảy nổi", hint: "Cuộc đời nhiều thăng trầm", choices: ["Ba chìm bảy nổi", "Lên thác xuống ghềnh", "Chín nổi ba chìm", "Năm lần bảy lượt"] },
  { emoji: "5️⃣ 🔁 7️⃣ 🔁", answer: "Năm lần bảy lượt", hint: "Lặp đi lặp lại nhiều lần", choices: ["Năm lần bảy lượt", "Ba chìm bảy nổi", "Một lần bất tín", "Mười phân vẹn mười"] },
  { emoji: "1️⃣ 🤥 1️⃣0️⃣0️⃣ ❌", answer: "Một lần bất tín vạn lần bất tin", hint: "Mất niềm tin thì rất khó lấy lại", choices: ["Một lần bất tín vạn lần bất tin", "Nói một đằng làm một nẻo", "Chữ tín quý hơn vàng", "Uốn lưỡi bảy lần"] },
  { emoji: "👅 7️⃣ 🔁", answer: "Uốn lưỡi bảy lần trước khi nói", hint: "Suy nghĩ kỹ trước khi phát ngôn", choices: ["Uốn lưỡi bảy lần trước khi nói", "Lời nói gió bay", "Học ăn học nói", "Miệng nhanh hơn não"] },
  { emoji: "🗣️ 🌬️", answer: "Lời nói gió bay", hint: "Lời nói không có bằng chứng dễ bị quên", choices: ["Lời nói gió bay", "Gió thổi bên tai", "Nói có sách mách có chứng", "Lời hay ý đẹp"] },
  { emoji: "📚 👆 🔎", answer: "Nói có sách mách có chứng", hint: "Lập luận phải có căn cứ", choices: ["Nói có sách mách có chứng", "Lời nói gió bay", "Trăm nghe không bằng một thấy", "Giấy trắng mực đen"] },
  { emoji: "1️⃣0️⃣0️⃣ 👂 1️⃣ 👁️", answer: "Trăm nghe không bằng một thấy", hint: "Tận mắt chứng kiến đáng tin hơn nghe kể", choices: ["Trăm nghe không bằng một thấy", "Tai nghe mắt thấy", "Nói có sách mách có chứng", "Đi một ngày đàng học một sàng khôn"] },
  { emoji: "🚶 1️⃣ 📅 📚", answer: "Đi một ngày đàng học một sàng khôn", hint: "Đi đây đó giúp mở mang hiểu biết", choices: ["Đi một ngày đàng học một sàng khôn", "Học ăn học nói", "Trăm nghe không bằng một thấy", "Có đi mới có đến"] },
  { emoji: "📚 🍚 📚 🗣️", answer: "Học ăn học nói học gói học mở", hint: "Phải học cả những phép tắc cơ bản", choices: ["Học ăn học nói học gói học mở", "Tiên học lễ hậu học văn", "Học thầy không tày học bạn", "Ăn nên làm ra"] },
  { emoji: "👨‍🏫 < 👥", answer: "Học thầy không tày học bạn", hint: "Bạn bè cũng là nguồn học hỏi quan trọng", choices: ["Học thầy không tày học bạn", "Không thầy đố mày làm nên", "Một chữ cũng là thầy", "Gần mực thì đen"] },
  { emoji: "❌ 👨‍🏫 ❓ ✅", answer: "Không thầy đố mày làm nên", hint: "Cần người hướng dẫn để thành công", choices: ["Không thầy đố mày làm nên", "Học thầy không tày học bạn", "Có chí thì nên", "Tự lực cánh sinh"] },
  { emoji: "🖤 🖌️ ⚫", answer: "Gần mực thì đen", hint: "Môi trường xấu dễ ảnh hưởng con người", choices: ["Gần mực thì đen", "Gần đèn thì sáng", "Đen như mực", "Ở bầu thì tròn"] },
  { emoji: "💡 ✨", answer: "Gần đèn thì sáng", hint: "Ở gần điều tốt sẽ được ảnh hưởng tốt", choices: ["Gần đèn thì sáng", "Gần mực thì đen", "Ánh sáng cuối đường hầm", "Tối lửa tắt đèn"] },
  { emoji: "🎃 ⭕ 📦 ▫️", answer: "Ở bầu thì tròn ở ống thì dài", hint: "Con người thích nghi theo môi trường", choices: ["Ở bầu thì tròn ở ống thì dài", "Gần mực thì đen", "Nhập gia tùy tục", "Uốn cây từ thuở còn non"] },
  { emoji: "🏠 ➡️ 📜", answer: "Nhập gia tùy tục", hint: "Đến nơi nào thì theo phong tục nơi đó", choices: ["Nhập gia tùy tục", "Đất có lề quê có thói", "Phép vua thua lệ làng", "Ở bầu thì tròn"] },
  { emoji: "👑 < 🏘️", answer: "Phép vua thua lệ làng", hint: "Quy định địa phương đôi khi mạnh hơn luật chung", choices: ["Phép vua thua lệ làng", "Đất có lề quê có thói", "Nhập gia tùy tục", "Vua biết mặt chúa biết tên"] },
  { emoji: "🏠 🧹 🌬️", answer: "Nhà sạch thì mát bát sạch ngon cơm", hint: "Sạch sẽ tạo cuộc sống dễ chịu", choices: ["Nhà sạch thì mát bát sạch ngon cơm", "Đói cho sạch rách cho thơm", "Tốt gỗ hơn tốt nước sơn", "Ăn sạch sống khỏe"] },
  { emoji: "🍽️ ❌ 🧼 👕 ❌ 🌸", answer: "Đói cho sạch rách cho thơm", hint: "Khó khăn vẫn phải giữ phẩm giá", choices: ["Đói cho sạch rách cho thơm", "Giấy rách phải giữ lấy lề", "Nhà sạch thì mát", "Tốt danh hơn lành áo"] },
  { emoji: "📄 💔 📏", answer: "Giấy rách phải giữ lấy lề", hint: "Dù khó khăn vẫn giữ nề nếp", choices: ["Giấy rách phải giữ lấy lề", "Bút sa gà chết", "Đói cho sạch rách cho thơm", "Giấy trắng mực đen"] },
  { emoji: "🪵 > 🎨", answer: "Tốt gỗ hơn tốt nước sơn", hint: "Phẩm chất bên trong quan trọng hơn vẻ ngoài", choices: ["Tốt gỗ hơn tốt nước sơn", "Cái nết đánh chết cái đẹp", "Xanh vỏ đỏ lòng", "Người đẹp vì lụa"] },
  { emoji: "🧠 ⚔️ 💄", answer: "Cái nết đánh chết cái đẹp", hint: "Tính cách quan trọng hơn nhan sắc", choices: ["Cái nết đánh chết cái đẹp", "Tốt gỗ hơn tốt nước sơn", "Người đẹp vì lụa", "Đẹp người đẹp nết"] },
  { emoji: "👤 👗 🌾 🪴", answer: "Người đẹp vì lụa lúa tốt vì phân", hint: "Ngoại hình và điều kiện chăm sóc tạo khác biệt", choices: ["Người đẹp vì lụa lúa tốt vì phân", "Cái nết đánh chết cái đẹp", "Tốt gỗ hơn tốt nước sơn", "Ăn chắc mặc bền"] },
  { emoji: "🧵 🛎️", answer: "Chỉ mành treo chuông", hint: "Tình thế cực kỳ nguy hiểm, mong manh", choices: ["Chỉ mành treo chuông", "Mò kim đáy bể", "Ngàn cân treo sợi tóc", "Dây cà ra dây muống"] },
  { emoji: "1️⃣0️⃣0️⃣0️⃣ ⚖️ 💇", answer: "Ngàn cân treo sợi tóc", hint: "Tình thế nguy cấp chỉ cách thất bại rất gần", choices: ["Ngàn cân treo sợi tóc", "Chỉ mành treo chuông", "Nước sôi lửa bỏng", "Đầu voi đuôi chuột"] },
  { emoji: "🐘 ➡️ 🐭", answer: "Đầu voi đuôi chuột", hint: "Khởi đầu lớn nhưng kết thúc nhỏ", choices: ["Đầu voi đuôi chuột", "Vẽ rắn thêm chân", "Trống đánh xuôi kèn thổi ngược", "Được đầu mất đuôi"] },
  { emoji: "🥁 ➡️ 🎺 ⬅️", answer: "Trống đánh xuôi kèn thổi ngược", hint: "Mỗi người làm một hướng không thống nhất", choices: ["Trống đánh xuôi kèn thổi ngược", "Ông nói gà bà nói vịt", "Đầu voi đuôi chuột", "Đồng sàng dị mộng"] },
  { emoji: "👴 🐔 👵 🦆", answer: "Ông nói gà bà nói vịt", hint: "Hai người nói chuyện không ăn nhập", choices: ["Ông nói gà bà nói vịt", "Trống đánh xuôi kèn thổi ngược", "Đàn gảy tai trâu", "Nói đông nói tây"] },
  { emoji: "🛏️ 👥 💭↔️", answer: "Đồng sàng dị mộng", hint: "Ở cùng nhau nhưng mục tiêu khác nhau", choices: ["Đồng sàng dị mộng", "Bằng mặt không bằng lòng", "Ông nói gà bà nói vịt", "Mỗi người một ngả"] },
  { emoji: "🙂 👥 💔", answer: "Bằng mặt không bằng lòng", hint: "Ngoài mặt hòa thuận nhưng trong lòng bất mãn", choices: ["Bằng mặt không bằng lòng", "Đồng sàng dị mộng", "Biết mặt không biết lòng", "Mặt nặng mày nhẹ"] },
  { emoji: "👀 🙂 ❓ ❤️", answer: "Biết mặt không biết lòng", hint: "Không thể nhìn ngoài mà hiểu bên trong", choices: ["Biết mặt không biết lòng", "Bằng mặt không bằng lòng", "Dò sông dò biển", "Khẩu Phật tâm xà"] },
  { emoji: "🙏 😇 ❤️ 🐍", answer: "Khẩu Phật tâm xà", hint: "Nói hiền lành nhưng lòng độc ác", choices: ["Khẩu Phật tâm xà", "Sói đội lốt cừu", "Miệng nam mô bụng bồ dao găm", "Mật ngọt chết ruồi"] },
  { emoji: "🗣️ 🙏 🤰 🔪", answer: "Miệng nam mô bụng bồ dao găm", hint: "Ngoài miệng đạo đức nhưng trong lòng hiểm độc", choices: ["Miệng nam mô bụng bồ dao găm", "Khẩu Phật tâm xà", "Sói đội lốt cừu", "Miệng lưỡi rắn độc"] },
  { emoji: "😋 🗣️ 💀 🪰", answer: "Mật ngọt chết ruồi", hint: "Lời ngon ngọt có thể là cái bẫy", choices: ["Mật ngọt chết ruồi", "Khẩu Phật tâm xà", "Lời nói chẳng mất tiền mua", "Ngọt như mía lùi"] },
  { emoji: "🗣️ 🆓 🛒", answer: "Lời nói chẳng mất tiền mua", hint: "Nên lựa lời để làm vui lòng nhau", choices: ["Lời nói chẳng mất tiền mua", "Lời nói gió bay", "Uốn lưỡi bảy lần", "Một lời nói một gói vàng"] },
  { emoji: "🤫 🥇", answer: "Im lặng là vàng", hint: "Có lúc không nói là lựa chọn khôn ngoan", choices: ["Im lặng là vàng", "Một điều nhịn chín điều lành", "Nói ít hiểu nhiều", "Lời nói là bạc"] },
  { emoji: "1️⃣ 🤐 9️⃣ ☮️", answer: "Một điều nhịn chín điều lành", hint: "Biết nhường nhịn sẽ tránh nhiều xung đột", choices: ["Một điều nhịn chín điều lành", "Im lặng là vàng", "Dĩ hòa vi quý", "Chín bỏ làm mười"] },
  { emoji: "9️⃣ ➖ 🔟", answer: "Chín bỏ làm mười", hint: "Bỏ qua sai sót nhỏ để giữ hòa khí", choices: ["Chín bỏ làm mười", "Một điều nhịn chín điều lành", "Dĩ hòa vi quý", "Năm lần bảy lượt"] },
  { emoji: "🤝 ☮️ 💎", answer: "Dĩ hòa vi quý", hint: "Coi sự hòa thuận là điều quý", choices: ["Dĩ hòa vi quý", "Chín bỏ làm mười", "Hòa khí sinh tài", "Một điều nhịn chín điều lành"] },
  { emoji: "☮️ 💨 💰", answer: "Hòa khí sinh tài", hint: "Hòa thuận giúp công việc thuận lợi", choices: ["Hòa khí sinh tài", "Dĩ hòa vi quý", "Buôn may bán đắt", "Phi thương bất phú"] },
  { emoji: "🛒 🍀 💸", answer: "Buôn may bán đắt", hint: "Lời chúc kinh doanh thuận lợi", choices: ["Buôn may bán đắt", "Mua may bán rủi", "Hòa khí sinh tài", "Tiền vào như nước"] },
  { emoji: "💵 ➡️ 🌊", answer: "Tiền vào như nước", hint: "Lời chúc có thu nhập dồi dào", choices: ["Tiền vào như nước", "Buôn may bán đắt", "Tiền mất tật mang", "Nước chảy chỗ trũng"] },
  { emoji: "💸 ❌ 🤒 ✅", answer: "Tiền mất tật mang", hint: "Vừa mất tiền vừa gặp rắc rối", choices: ["Tiền mất tật mang", "Của đi thay người", "Mất cả chì lẫn chài", "Tiền trao cháo múc"] },
  { emoji: "🎁 🚶 👤", answer: "Của đi thay người", hint: "Mất tài sản nhưng người được an toàn", choices: ["Của đi thay người", "Tiền mất tật mang", "Người làm ra của", "Một đời ta ba đời nó"] },
  { emoji: "💰 🤝 🍲", answer: "Tiền trao cháo múc", hint: "Giao tiền và nhận hàng ngay", choices: ["Tiền trao cháo múc", "Đồng tiền đi trước", "Có vay có trả", "Buôn có bạn bán có phường"] },
  { emoji: "💰 🚶‍♂️ 🧠", answer: "Đồng tiền đi trước là đồng tiền khôn", hint: "Chi trước đúng lúc giúp công việc thuận lợi", choices: ["Đồng tiền đi trước là đồng tiền khôn", "Tiền trao cháo múc", "Có tiền mua tiên cũng được", "Nén bạc đâm toạc tờ giấy"] },
  { emoji: "💵 🛒 🧚", answer: "Có tiền mua tiên cũng được", hint: "Tiền bạc có sức mạnh lớn", choices: ["Có tiền mua tiên cũng được", "Tiền là tiên là Phật", "Đồng tiền đi trước", "Giàu vì bạn sang vì vợ"] },
  { emoji: "🪙 ✂️ 📄", answer: "Nén bạc đâm toạc tờ giấy", hint: "Tiền có thể phá vỡ nguyên tắc", choices: ["Nén bạc đâm toạc tờ giấy", "Có tiền mua tiên cũng được", "Bút sa gà chết", "Đồng tiền đi trước"] },
  { emoji: "🤲 🏠 🏞️", answer: "Tay làm hàm nhai", hint: "Có lao động mới có ăn", choices: ["Tay làm hàm nhai", "Có làm thì mới có ăn", "Tay trắng làm nên", "Há miệng chờ sung"] },
  { emoji: "🙌 ⚪ ➡️ 🏆", answer: "Tay trắng làm nên", hint: "Khởi đầu không có gì nhưng tạo được sự nghiệp", choices: ["Tay trắng làm nên", "Tự lực cánh sinh", "Có chí thì nên", "Tay làm hàm nhai"] },
  { emoji: "🪽 💪", answer: "Tự lực cánh sinh", hint: "Tự dựa vào sức mình", choices: ["Tự lực cánh sinh", "Tay trắng làm nên", "Một thân một mình", "Thân ai nấy lo"] },
  { emoji: "💭 💪 ✅", answer: "Có chí thì nên", hint: "Quyết tâm sẽ dẫn đến thành công", choices: ["Có chí thì nên", "Có công mài sắt", "Tự lực cánh sinh", "Thất bại là mẹ thành công"] },
  { emoji: "🔨 🪨 ➡️ 🪡", answer: "Có công mài sắt có ngày nên kim", hint: "Kiên trì sẽ đạt mục tiêu", choices: ["Có công mài sắt có ngày nên kim", "Nước chảy đá mòn", "Có chí thì nên", "Mò kim đáy bể"] },
  { emoji: "❌ 👩‍👦 ✅", answer: "Thất bại là mẹ thành công", hint: "Sai lầm giúp tạo nên thành công", choices: ["Thất bại là mẹ thành công", "Có chí thì nên", "Thắng không kiêu bại không nản", "Sai một ly đi một dặm"] },
  { emoji: "❌ 1️⃣ 📏 ➡️ 1️⃣ 🛣️", answer: "Sai một ly đi một dặm", hint: "Sai sót nhỏ có thể dẫn đến hậu quả lớn", choices: ["Sai một ly đi một dặm", "Thất bại là mẹ thành công", "Đi một ngày đàng", "Một bước sai vạn bước sai"] },
  { emoji: "🥇 ❌ 😤 ❌ 😞", answer: "Thắng không kiêu bại không nản", hint: "Giữ bình tĩnh trong cả thành công lẫn thất bại", choices: ["Thắng không kiêu bại không nản", "Thất bại là mẹ thành công", "Có chí thì nên", "Được làm vua thua làm giặc"] },
  { emoji: "👑 ✅ 🏴‍☠️ ❌", answer: "Được làm vua thua làm giặc", hint: "Chấp nhận rủi ro tất cả hoặc không gì", choices: ["Được làm vua thua làm giặc", "Thắng làm vua", "Thắng không kiêu", "Liều ăn nhiều"] },
  { emoji: "🎲 🍚 ➕", answer: "Liều ăn nhiều", hint: "Mạo hiểm cao có thể nhận lợi ích lớn", choices: ["Liều ăn nhiều", "Được làm vua thua làm giặc", "Có gan làm giàu", "Không vào hang hổ"] },
  { emoji: "💪 💰", answer: "Có gan làm giàu", hint: "Muốn giàu phải dám chấp nhận thử thách", choices: ["Có gan làm giàu", "Liều ăn nhiều", "Phi thương bất phú", "Tay trắng làm nên"] },
  { emoji: "🚫 🛒 🚫 💰", answer: "Phi thương bất phú", hint: "Muốn giàu thường phải kinh doanh", choices: ["Phi thương bất phú", "Có gan làm giàu", "Buôn may bán đắt", "Hòa khí sinh tài"] },
  { emoji: "👥 🛒 👥 🏪", answer: "Buôn có bạn bán có phường", hint: "Kinh doanh cần cộng đồng và quan hệ", choices: ["Buôn có bạn bán có phường", "Phi thương bất phú", "Một cây làm chẳng nên non", "Hòa khí sinh tài"] },
  { emoji: "1️⃣ 🌳 ❌ ⛰️ 3️⃣ 🌳 ✅", answer: "Một cây làm chẳng nên non", hint: "Đoàn kết tạo nên sức mạnh", choices: ["Một cây làm chẳng nên non", "Góp gió thành bão", "Thuận vợ thuận chồng", "Đồng sức đồng lòng"] },
  { emoji: "💨 ➕ 🌪️", answer: "Góp gió thành bão", hint: "Nhiều đóng góp nhỏ tạo sức mạnh lớn", choices: ["Góp gió thành bão", "Kiến tha lâu đầy tổ", "Một cây làm chẳng nên non", "Tích tiểu thành đại"] },
  { emoji: "👫 🤝 🌊 ⬇️", answer: "Thuận vợ thuận chồng tát biển Đông cũng cạn", hint: "Vợ chồng đồng lòng có thể vượt mọi khó khăn", choices: ["Thuận vợ thuận chồng tát biển Đông cũng cạn", "Đồng vợ đồng chồng", "Một cây làm chẳng nên non", "Đồng cam cộng khổ"] },
  { emoji: "🍬 🤝 😣", answer: "Đồng cam cộng khổ", hint: "Cùng chia sẻ vui sướng và khó khăn", choices: ["Đồng cam cộng khổ", "Có phúc cùng hưởng", "Thuận vợ thuận chồng", "Chia ngọt sẻ bùi"] },
  { emoji: "🍬 ➗ 🍠 ➗", answer: "Chia ngọt sẻ bùi", hint: "Cùng nhau chia sẻ mọi điều", choices: ["Chia ngọt sẻ bùi", "Đồng cam cộng khổ", "Lá lành đùm lá rách", "Một miếng khi đói"] },
  { emoji: "🍃 ✅ 🫂 🍃 💔", answer: "Lá lành đùm lá rách", hint: "Người khá hơn giúp người khó khăn", choices: ["Lá lành đùm lá rách", "Chia ngọt sẻ bùi", "Thương người như thể thương thân", "Bầu ơi thương lấy bí cùng"] },
  { emoji: "❤️ 👤 = ❤️ 🙋", answer: "Thương người như thể thương thân", hint: "Yêu thương người khác như chính mình", choices: ["Thương người như thể thương thân", "Lá lành đùm lá rách", "Một con ngựa đau", "Ở hiền gặp lành"] },
  { emoji: "🐎 🤕 🐎🐎 ❌ 🌿", answer: "Một con ngựa đau cả tàu bỏ cỏ", hint: "Một thành viên gặp nạn, cả tập thể cùng lo", choices: ["Một con ngựa đau cả tàu bỏ cỏ", "Thương người như thể thương thân", "Ngựa quen đường cũ", "Đồng cam cộng khổ"] },
  { emoji: "😇 ➡️ 🍀", answer: "Ở hiền gặp lành", hint: "Người tốt sẽ gặp điều tốt", choices: ["Ở hiền gặp lành", "Gieo gió gặt bão", "Có đức mặc sức mà ăn", "Ác giả ác báo"] },
  { emoji: "🌱 💨 ➡️ 🌪️", answer: "Gieo gió gặt bão", hint: "Làm điều xấu sẽ nhận hậu quả lớn", choices: ["Gieo gió gặt bão", "Ác giả ác báo", "Gậy ông đập lưng ông", "Ở hiền gặp lành"] },
  { emoji: "🦹 ➡️ 🦹‍♂️", answer: "Ác giả ác báo", hint: "Làm điều ác sẽ nhận quả xấu", choices: ["Ác giả ác báo", "Gieo gió gặt bão", "Ở hiền gặp lành", "Đời cha ăn mặn"] },
  { emoji: "👴 🧂 👶 💧", answer: "Đời cha ăn mặn đời con khát nước", hint: "Thế hệ sau chịu hậu quả từ thế hệ trước", choices: ["Đời cha ăn mặn đời con khát nước", "Ác giả ác báo", "Con hơn cha là nhà có phúc", "Cha nào con nấy"] },
  { emoji: "👶 > 👨 🏠 🍀", answer: "Con hơn cha là nhà có phúc", hint: "Thế hệ sau tiến bộ hơn là điều đáng mừng", choices: ["Con hơn cha là nhà có phúc", "Cha nào con nấy", "Tre già măng mọc", "Hổ phụ sinh hổ tử"] },
  { emoji: "🐅 👨 🐅 👦", answer: "Hổ phụ sinh hổ tử", hint: "Cha tài giỏi thường có con tài giỏi", choices: ["Hổ phụ sinh hổ tử", "Cha nào con nấy", "Con hơn cha là nhà có phúc", "Tre già măng mọc"] },
];

const state = {
  deck: [],
  index: 0,
  score: 0,
  correct: 0,
  streak: 0,
  bestStreak: 0,
  timeLeft: 10,
  timer: null,
  answered: false,
  startedAt: 0,
};

const $ = (selector) => document.querySelector(selector);
const screens = [...document.querySelectorAll(".screen")];
const circumference = 2 * Math.PI * 44;
const analyticsSessionId =
  sessionStorage.getItem("emoji-analytics-session") || crypto.randomUUID();
sessionStorage.setItem("emoji-analytics-session", analyticsSessionId);
let audioContext;
let musicTimer;
let musicStep = 0;
let soundEnabled = localStorage.getItem("emoji-sound-enabled") !== "false";

const musicNotes = [
  261.63, 329.63, 392, 523.25,
  293.66, 349.23, 440, 587.33,
  329.63, 392, 493.88, 659.25,
  293.66, 349.23, 440, 523.25,
];

function getTrafficSource() {
  const params = new URLSearchParams(window.location.search);
  const campaignSource = params.get("utm_source");
  if (campaignSource) return campaignSource.slice(0, 80);
  if (!document.referrer) return "direct";
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, "");
    if (host.includes("facebook") || host.includes("fb.")) return "facebook";
    if (host.includes("messenger")) return "messenger";
    if (host.includes("google")) return "google";
    return host;
  } catch {
    return "other";
  }
}

function getDeviceType() {
  if (window.innerWidth <= 600) return "mobile";
  if (window.innerWidth <= 1024) return "tablet";
  return "desktop";
}

function trackEvent(event, details = {}) {
  let referrerHost = "";
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname : "";
  } catch {
    referrerHost = "";
  }
  fetch("/api/events", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      event,
      sessionId: analyticsSessionId,
      source: getTrafficSource(),
      referrerHost,
      device: getDeviceType(),
      ...details,
    }),
    keepalive: true,
  }).catch(() => {});
}

function getAudioContext() {
  if (!audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
  }
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone(frequency, duration = 0.12, volume = 0.05, type = "sine", delay = 0) {
  if (!soundEnabled) return;
  const context = getAudioContext();
  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function playCorrectSound() {
  [523.25, 659.25, 783.99].forEach((note, index) =>
    playTone(note, 0.18, 0.09, "triangle", index * 0.08),
  );
}

function playWrongSound() {
  playTone(220, 0.22, 0.07, "sawtooth");
  playTone(164.81, 0.28, 0.06, "sawtooth", 0.12);
}

function playFinishSound() {
  [392, 523.25, 659.25, 783.99, 1046.5].forEach((note, index) =>
    playTone(note, 0.28, 0.085, "triangle", index * 0.1),
  );
}

function playMusicBeat() {
  if (!soundEnabled || !document.querySelector(".game-screen.active")) return;
  const note = musicNotes[musicStep % musicNotes.length];
  playTone(note, 0.16, 0.018, "triangle");
  if (musicStep % 4 === 0) playTone(note / 2, 0.25, 0.022, "sine");
  musicStep += 1;
}

function startMusic() {
  stopMusic();
  if (!soundEnabled) return;
  getAudioContext();
  playMusicBeat();
  musicTimer = setInterval(playMusicBeat, 280);
}

function stopMusic() {
  clearInterval(musicTimer);
  musicTimer = null;
}

function renderSoundButton() {
  $("#soundIcon").textContent = soundEnabled ? "♫" : "×";
  $("#soundButton").classList.toggle("muted", !soundEnabled);
  $("#soundButton").setAttribute("aria-pressed", String(soundEnabled));
  $("#soundButton").setAttribute("aria-label", soundEnabled ? "Tắt âm thanh" : "Bật âm thanh");
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem("emoji-sound-enabled", String(soundEnabled));
  renderSoundButton();
  if (soundEnabled) {
    playTone(523.25, 0.12, 0.08, "triangle");
    if (document.querySelector(".game-screen.active")) startMusic();
  } else {
    stopMusic();
  }
}

function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("active", screen.id === id));
  if (id === "gameScreen") startMusic();
  else stopMusic();
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function updateBestScore() {
  $("#bestScore").textContent = Number(localStorage.getItem("emoji-best-score") || 0);
}

function startGame() {
  if (soundEnabled) getAudioContext();
  const seen = JSON.parse(localStorage.getItem("emoji-seen-questions") || "[]");
  const unseen = questions.filter((_, index) => !seen.includes(index));
  const pool = unseen.length >= 10 ? unseen : questions;
  state.deck = shuffle(pool.map((question) => ({ ...question, sourceIndex: questions.indexOf(question) }))).slice(0, 10);
  const nextSeen = [...new Set([...seen, ...state.deck.map((question) => question.sourceIndex)])];
  localStorage.setItem(
    "emoji-seen-questions",
    JSON.stringify(nextSeen.length >= questions.length ? [] : nextSeen),
  );
  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.startedAt = Date.now();
  trackEvent("game_start");
  showScreen("gameScreen");
  renderQuestion();
}

function renderQuestion() {
  clearInterval(state.timer);
  state.answered = false;
  state.timeLeft = 10;
  const question = state.deck[state.index];
  $("#questionCount").textContent = `Câu ${state.index + 1}/10`;
  $("#score").textContent = state.score;
  $("#progressBar").style.width = `${((state.index + 1) / 10) * 100}%`;
  $("#emojiPuzzle").textContent = question.emoji;
  $("#hint").textContent = `Gợi ý: ${question.hint}`;
  $("#answerGrid").innerHTML = shuffle(question.choices)
    .map((choice) => `<button class="answer-button" data-answer="${choice}">${choice}</button>`)
    .join("");
  updateTimer();
  state.timer = setInterval(() => {
    state.timeLeft -= 1;
    updateTimer();
    if (state.timeLeft <= 0) answerQuestion(null);
  }, 1000);
}

function updateTimer() {
  $("#timerText").textContent = state.timeLeft;
  $("#timerRing").style.strokeDasharray = circumference;
  $("#timerRing").style.strokeDashoffset = circumference * (1 - state.timeLeft / 10);
  $("#timerRing").style.stroke = state.timeLeft <= 3 ? "var(--red)" : "var(--yellow)";
}

function answerQuestion(selected) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timer);
  const question = state.deck[state.index];
  const correct = selected === question.answer;
  document.querySelectorAll(".answer-button").forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === question.answer) button.style.borderColor = "var(--green)";
  });

  if (correct) {
    playCorrectSound();
    const points = 100 + state.timeLeft * 10 + state.streak * 15;
    state.score += points;
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    $("#feedbackIcon").textContent = state.streak >= 3 ? "🔥" : "🎉";
    $("#feedbackEyebrow").textContent = state.streak >= 3 ? `${state.streak} câu liên tiếp` : "Chính xác";
    $("#feedbackTitle").textContent = question.answer;
    $("#feedbackNote").textContent = `Nhanh tay! Bạn vừa kiếm được ${points} điểm.`;
  } else {
    playWrongSound();
    state.streak = 0;
    $("#feedbackIcon").textContent = selected === null ? "⏰" : "😅";
    $("#feedbackEyebrow").textContent = selected === null ? "Hết giờ" : "Chưa đúng";
    $("#feedbackTitle").textContent = question.answer;
    $("#feedbackNote").textContent = "Nhớ đáp án này nhé, câu sau vẫn còn cơ hội.";
  }
  setTimeout(() => showScreen("feedbackScreen"), 350);
}

function nextQuestion() {
  state.index += 1;
  if (state.index >= state.deck.length) return finishGame();
  showScreen("gameScreen");
  renderQuestion();
}

function finishGame() {
  playFinishSound();
  trackEvent("game_complete", {
    score: state.score,
    correct: state.correct,
    duration: Math.max(1, Math.round((Date.now() - state.startedAt) / 1000)),
  });
  const oldBest = Number(localStorage.getItem("emoji-best-score") || 0);
  if (state.score > oldBest) localStorage.setItem("emoji-best-score", state.score);
  const ranks = [
    [9, "Thánh Emoji", "Bạn nên ra đề cho người khác!"],
    [7, "Cao thủ", "Não bạn chạy nhanh đấy!"],
    [5, "Tinh mắt", "Một lượt nữa là lên hạng!"],
    [0, "Tân binh", "Game này không dễ như vẻ ngoài."],
  ];
  const rank = ranks.find(([minimum]) => state.correct >= minimum);
  $("#resultHeadline").textContent = rank[2];
  $("#finalScore").textContent = state.score;
  $("#correctCount").textContent = `${state.correct}/10 câu đúng`;
  $("#bestStreak").textContent = state.bestStreak;
  $("#rank").textContent = rank[1];
  updateBestScore();
  showScreen("resultScreen");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function shareResult() {
  const text = `Tôi được ${state.score} điểm, đúng ${state.correct}/10 câu trong Bắt Chữ Emoji. Bạn vượt được không?`;
  const data = { title: "Bắt Chữ Emoji", text, url: window.location.href };
  trackEvent("share", { score: state.score, correct: state.correct });
  if (navigator.share) {
    try {
      await navigator.share(data);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await navigator.clipboard.writeText(`${text} ${window.location.href}`);
  showToast("Đã sao chép lời thách và đường dẫn");
}

async function shareGame() {
  const text = "Thử chơi Bắt Chữ Emoji: nhìn emoji, đoán cụm từ tiếng Việt trong 10 giây.";
  const data = { title: "Bắt Chữ Emoji", text, url: window.location.origin + window.location.pathname };
  trackEvent("share_game");
  if (navigator.share) {
    try {
      await navigator.share(data);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }
  await navigator.clipboard.writeText(`${text} ${data.url}`);
  showToast("Đã sao chép link game");
}

$("#startButton").addEventListener("click", startGame);
$("#replayButton").addEventListener("click", startGame);
$("#nextButton").addEventListener("click", nextQuestion);
$("#skipButton").addEventListener("click", () => answerQuestion(null));
$("#shareButton").addEventListener("click", shareResult);
$("#quickShareButton").addEventListener("click", shareGame);
$("#welcomeShareButton").addEventListener("click", shareGame);
$("#soundButton").addEventListener("click", toggleSound);
$("#answerGrid").addEventListener("click", (event) => {
  const button = event.target.closest(".answer-button");
  if (button) answerQuestion(button.dataset.answer);
});

updateBestScore();
renderSoundButton();
trackEvent("visit");
