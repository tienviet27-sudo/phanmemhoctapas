import { Subject, SubjectName } from './types';

export const SUBJECTS: Subject[] = [
  {
    name: SubjectName.Math,
    icon: '📐',
    color: 'bg-blue-500',
    gradient: 'from-blue-400 to-blue-600',
    lesson: {
      title: 'Bài học: Phân số',
      content: 'Phân số là sự biểu diễn số hữu tỉ dưới dạng tỉ lệ của hai số nguyên, trong đó số ở trên được gọi là tử số, còn số ở dưới được gọi là mẫu số. Mẫu số phải khác 0.',
      imageUrl: 'https://picsum.photos/seed/math/400/200',
    },
    questions: [
      { question: '1/2 + 1/4 = ?', options: ['3/4', '1/6', '2/6', '1/3'], correctAnswer: '3/4' },
      { question: 'Hình vuông có 4 cạnh bằng nhau. Đúng hay Sai?', options: ['Đúng', 'Sai'], correctAnswer: 'Đúng' },
      { question: '5 x 8 = ?', options: ['35', '40', '45', '50'], correctAnswer: '40' },
    ],
    game: {
        title: 'Thử thách tính nhẩm',
        description: 'Trả lời nhanh các phép tính trong 60 giây!',
        questions: [
            { question: '12 x 12 = ?', options: ['124', '144', '134', '154'], correctAnswer: '144' },
            { question: '100 - 35 = ?', options: ['65', '55', '75', '45'], correctAnswer: '65' },
            { question: 'Số nào chia hết cho cả 2 và 5?', options: ['12', '25', '30', '32'], correctAnswer: '30' },
            { question: '9 x 7 = ?', options: ['56', '63', '72', '54'], correctAnswer: '63' },
            { question: '2.5 + 2.5 = ?', options: ['4.0', '4.5', '5.0', '5.5'], correctAnswer: '5.0' },
        ]
    }
  },
  {
    name: SubjectName.Vietnamese,
    icon: '📝',
    color: 'bg-red-500',
    gradient: 'from-red-400 to-red-600',
    lesson: {
      title: 'Bài học: Câu ghép',
      content: 'Câu ghép là câu do nhiều vế câu ghép lại. Mỗi vế câu ghép thường có cấu tạo giống một câu đơn (có đủ chủ ngữ, vị ngữ) và thể hiện một ý có quan hệ chặt chẽ với ý của những vế câu khác.',
      imageUrl: 'https://picsum.photos/seed/vietnamese/400/200',
    },
    questions: [
      { question: 'Từ nào sau đây là danh từ?', options: ['Chạy', 'Xinh đẹp', 'Cái bàn', 'Vui vẻ'], correctAnswer: 'Cái bàn' },
      { question: 'Điền từ còn thiếu: "Ăn quả nhớ kẻ trồng ___"', options: ['cây', 'hoa', 'lá', 'cành'], correctAnswer: 'cây' },
    ],
    game: {
        title: 'Ô chữ Tiếng Việt',
        description: 'Tìm từ đúng trong 60 giây!',
        questions: [
            { question: 'Từ nào viết đúng chính tả?', options: ['Nong Nanh', 'Long Lanh', 'Nong Lanh', 'Long Nanh'], correctAnswer: 'Long Lanh' },
            { question: 'Đâu là từ láy?', options: ['Tươi tốt', 'Xinh xắn', 'Bàn ghế', 'Sách vở'], correctAnswer: 'Xinh xắn' },
            { question: 'Nghĩa của từ "siêng năng" là gì?', options: ['Lười biếng', 'Chăm chỉ', 'Thông minh', 'Nhanh nhẹn'], correctAnswer: 'Chăm chỉ' },
        ]
    }
  },
  {
    name: SubjectName.English,
    icon: '🇬🇧',
    color: 'bg-green-500',
    gradient: 'from-green-400 to-green-600',
    lesson: {
      title: 'Lesson: Simple Present Tense',
      content: 'The simple present is a verb tense with two main uses. We use the simple present tense when an action is happening right now, or when it happens regularly.',
      imageUrl: 'https://picsum.photos/seed/english/400/200',
    },
    questions: [
      { question: 'What is the capital of England?', options: ['Paris', 'London', 'Berlin', 'Hanoi'], correctAnswer: 'London' },
      { question: '"Apple" means:', options: ['Quả chuối', 'Quả táo', 'Quả cam', 'Quả dứa'], correctAnswer: 'Quả táo' },
    ],
    game: {
        title: 'Vocabulary Race',
        description: 'Choose the correct meaning in 60 seconds!',
        questions: [
            { question: 'Which animal says "meow"?', options: ['Dog', 'Cat', 'Bird', 'Fish'], correctAnswer: 'Cat' },
            { question: 'What color is the sky on a sunny day?', options: ['Red', 'Green', 'Blue', 'Yellow'], correctAnswer: 'Blue' },
            { question: 'How many days are in a week?', options: ['5', '6', '7', '8'], correctAnswer: '7' },
        ]
    }
  },
  {
    name: SubjectName.Science,
    icon: '🌿',
    color: 'bg-orange-500',
    gradient: 'from-orange-400 to-orange-600',
    lesson: {
      title: 'Bài học: Vòng tuần hoàn của nước',
      content: 'Nước trên Trái Đất luôn luân chuyển theo một vòng tuần hoàn. Nước bốc hơi, tạo thành mây, mưa xuống, chảy ra sông, biển rồi lại bốc hơi.',
      imageUrl: 'https://picsum.photos/seed/science/400/200',
    },
    questions: [
      { question: 'Quá trình nước biến thành hơi nước gọi là gì?', options: ['Ngưng tụ', 'Bốc hơi', 'Đông đặc', 'Mưa'], correctAnswer: 'Bốc hơi' },
      { question: 'Mây được tạo thành từ đâu?', options: ['Bụi', 'Hơi nước', 'Không khí', 'Lửa'], correctAnswer: 'Hơi nước' },
    ],
    game: {
        title: 'Khám phá khoa học',
        description: 'Trả lời câu hỏi khoa học trong 60 giây!',
        questions: [
            { question: 'Hành tinh nào gần Mặt Trời nhất?', options: ['Trái Đất', 'Sao Hỏa', 'Sao Kim', 'Sao Thủy'], correctAnswer: 'Sao Thủy' },
            { question: 'Loài vật nào lớn nhất thế giới?', options: ['Voi', 'Cá voi xanh', 'Hươu cao cổ', 'Tê giác'], correctAnswer: 'Cá voi xanh' },
        ]
    }
  },
    {
    name: SubjectName.History,
    icon: '📜',
    color: 'bg-amber-600',
    gradient: 'from-amber-500 to-amber-700',
    lesson: {
      title: 'Bài học: Vua Hùng dựng nước',
      content: 'Truyền thuyết kể rằng, các Vua Hùng đã có công dựng nên nước Văn Lang, nhà nước đầu tiên của dân tộc ta. Đây là một thời kỳ quan trọng trong lịch sử Việt Nam.',
      imageUrl: 'https://picsum.photos/seed/history/400/200',
    },
    questions: [
      { question: 'Nhà nước đầu tiên của nước ta có tên là gì?', options: ['Âu Lạc', 'Văn Lang', 'Đại Việt', 'Đại Cồ Việt'], correctAnswer: 'Văn Lang' },
      { question: 'Ai là người đứng đầu nhà nước Văn Lang?', options: ['An Dương Vương', 'Vua Hùng', 'Lý Thái Tổ', 'Hai Bà Trưng'], correctAnswer: 'Vua Hùng' },
    ],
    game: {
        title: 'Dòng thời gian',
        description: 'Bạn biết gì về lịch sử? Thử sức trong 60 giây!',
        questions: [
            { question: 'Trận Bạch Đằng năm 938 do ai lãnh đạo?', options: ['Lý Thường Kiệt', 'Trần Hưng Đạo', 'Ngô Quyền', 'Quang Trung'], correctAnswer: 'Ngô Quyền' },
            { question: 'Bác Hồ đọc Tuyên ngôn Độc lập ở đâu?', options: ['Hà Nội', 'Huế', 'Sài Gòn', 'Pác Bó'], correctAnswer: 'Hà Nội' },
        ]
    }
  },
  {
    name: SubjectName.IT,
    icon: '💻',
    color: 'bg-purple-500',
    gradient: 'from-purple-400 to-purple-600',
    lesson: {
      title: 'Bài học: An toàn trên Internet',
      content: 'Internet là một công cụ tuyệt vời nhưng cũng có những rủi ro. Hãy nhớ không chia sẻ thông tin cá nhân, chỉ nói chuyện với người quen và báo cho bố mẹ nếu gặp điều gì lạ.',
      imageUrl: 'https://picsum.photos/seed/it/400/200',
    },
    questions: [
      { question: 'Bạn có nên chia sẻ mật khẩu của mình cho bạn thân không?', options: ['Có', 'Không'], correctAnswer: 'Không' },
      { question: 'Khi gặp một trang web lạ, bạn nên làm gì?', options: ['Nhập thông tin cá nhân', 'Tải tệp tin về máy', 'Hỏi ý kiến bố mẹ hoặc thầy cô', 'Tắt đi và không nói gì'], correctAnswer: 'Hỏi ý kiến bố mẹ hoặc thầy cô' },
    ],
    game: {
        title: 'Nhà Tin học nhí',
        description: 'Kiến thức về máy tính và internet trong 60 giây!',
        questions: [
            { question: 'Đâu là một trình duyệt web?', options: ['Microsoft Word', 'Google Chrome', 'Photoshop', 'Zalo'], correctAnswer: 'Google Chrome' },
            { question: 'Thiết bị nào dùng để gõ chữ?', options: ['Chuột', 'Màn hình', 'Bàn phím', 'Loa'], correctAnswer: 'Bàn phím' },
        ]
    }
  },
];

export const MUSIC_URL = 'https://aistudiocdn.com/bakery/Sound_Effects_-_Video_Game_Sound_Effects_-_8_Bit_Music.mp3';
