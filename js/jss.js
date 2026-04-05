function filterMenu(category, element) {
    // 1. تحديث شكل الأزرار (Active)
    document.querySelectorAll('.food-menu .nav-link').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');

    // 2. تصفية العناصر (Cards)
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block'; // إظهار الكل
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block'; // إظهار المطابق
            } else {
                item.style.display = 'none';  // إخفاء غير المطابق
            }
        }
    });
}

  const contents = [
    {
        title: "Fast Food  Resturnt1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing 1"
    },
    {
        title: "Fast Food  Resturnt2",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing 2"
    },
    {
        title: "Fast Food  Resturnt3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing"
    }
];

function changeContent(index) {
    // 1. تغيير النصوص مع تأثير بسيط
    document.getElementById('hero-title').innerText = contents[index].title;
    document.getElementById('hero-desc').innerText = contents[index].desc;

    // 2. تحديث شكل الدوائر
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}



