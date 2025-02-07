const li = document.querySelectorAll('.khadamat li');
const cap = document.querySelector('.cap');
const imgli = document.querySelectorAll('.khadamat li img');
const specialservies  =document.querySelector('.specialservies');


// تاریخ شمسی
const time = document.querySelector('#date');
const date = new Date();
const op = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

time.innerHTML = date.toLocaleDateString("fa-IR", op);

// داده‌ها
const arr = [
  {
    id: "1",
    title: "شماره شبا",
    img: "img/card1.png",
    dis: "شناسه حساب بانکی ایران که به اختصار «شبا» نامیده می شود، شماره ای است 24 رقمی که یک حساب بانکی را به صورت منحصر به فرد در تمام نظام بانکی ایران مشخص می کند. تعیین مشخصات شناسه حساب بانکی ایران (شبا)، مطابق با استاندارد ISO-13616 است. «شبا» جایگزین شماره حساب های فعلی نمی شود، بلکه به عنوان یک شماره استاندارد در کنار آنها قرار می گیرد. برای هر حسابی که دارید، می توانید یک «شبا» برای انواع حسابها مانند جاری، سپرده، تسهیلات و نظایر آن می تواند مورد استفاده قرار گیرد. سامانه های حواله الکترونیکی کشور مانند «ساتنا» و «پایا» بر اساس «شبا» فعالیت می نمایند، بنابراین دانستن «شبا»ی حساب برای انجام حواله بین بانکها برای همه مشتریان بانک ها ضرورت دارد.",
  },
  {
    id: "2",
    title: "چک صیادی",
    img: "img/sayad.png",
    dis: "از اردیبهشت سال ۱۴۰۰ چک صیاد جایگزین دسته چک‌های قدیمی که در تمام بانک‌ها صادر می‌شد شده است...",
    btn: "اطلاع رسانی قانون جدید چک",
  },
  {
    id: "3",
    title: "خدمات ریالی و وکالتی",
    img: "img/khadamat-riali.png",
    dis: "خدمات ریالی بانک سپه شامل: افتتاح انواع حساب، سپرده‌گذاری بلند مدت...",
    btn: "وکالتی کردن غیرحضوری حسابهای بانک سپه",
  },
  {
    id: "4",
    title: "خدمات ارزی",
    img: "img/khadamate-arzi.png",
    dis: "خدمات ارزی و بین المللی بانک سپه شامل: پرداخت انواع تسهیلات ارزی...",
    btn: "مشاهده انواع خدمات ارزی بانک سپه",
  },
  {
    id: "5",
    title: "خدمات الکترونیک",
    img: "img/khadamat-electronic.png",
    dis: "خدمات الکترونیکی و غیرحضوری بانک سپه شامل: انواع خدمات مالی مبتنی بر کارت بانکی...",
    btn: "مشاهده انواع خدمات الکترونیک بانک سپه",
  },
];

// اضافه کردن event listener برای هر li
li.forEach((val) => {
  val.addEventListener('click', (e) => {
    // ابتدا تمام کلاس‌ها را حذف می‌کنیم تا همه li‌ها به حالت اولیه برگردند
    li.forEach((item) => {
      item.classList.remove('active');
    });

    // سپس کلاس active را به عنصر انتخاب‌شده اضافه می‌کنیم
    e.currentTarget.classList.add('active');

    // استفاده از e.currentTarget برای اطمینان از اینکه عنصر صحیح کلیک شده است
    const elementId = e.currentTarget.getAttribute('id');

    // جستجو در آرایه بر اساس id
    const selectedElement = arr.find(item => item.id === elementId);

    if (selectedElement) {
      // نمایش اطلاعات مربوط به انتخاب در div با کلاس cap
      cap.innerHTML = `
        <figure class=" lg:w-1/2 lg:h-[60vh] lg:flex lg:justify-center lg:items-center lg:mt-12 w-full hidden">
          <img class="animate-[wiggle_3s_infinite] " src="${selectedElement.img}" alt="">
        </figure>
        <div class="rtl lg:w-1/2 lg:flex lg:flex-wrap lg:h-auto w-full">
          <h2 class=" text-2xl lg:pr-[30%] flex items-center  w-full text-end  mt-[20%] lg:text-4xl text-orange-600 lg:w-full ">${selectedElement.title}</h2>
          <p class="my-5 lg:mr-[30%] w-full  lg:my-5 lg:text-xl text-lg ">${selectedElement.dis}</p>
          <button class="lg:mr-[30%] flex justify-center items-center w-auto p-7 h-11 border-solid bg-orange-600 rounded-xl text-white ml-[40%]">
            ${selectedElement.btn}
          </button>
           <figure class="lg:w-1/2 lg:h-[60vh]  lg:justify-center lg:items-center lg:mt-12 w-full lg:hidden">
                    <img class="animate-[wiggle_3s_infinite] " src="${selectedElement.img}" alt="">
               </figure>
        </div>
      `;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sectarh = document.querySelector('.tarh');
  const sectarhdiv=document.querySelectorAll('.tarh div')
  const secspecialservies = specialservies.getBoundingClientRect();
  
  
  window.addEventListener("scroll", () => {
    const st = window.scrollY;
    const tarhpos = sectarh.getBoundingClientRect();
   
    if (tarhpos.top <= st) {
      sectarh.classList.add('translate');
    }
    
   sectarhdiv.forEach((val) => {
    if (tarhpos.top <= st) {
      val.classList.add('opacity');
    }
   });

   if (secspecialservies.top-50 <= st){
    specialservies.classList.add('opacity');
   }
  });
});



