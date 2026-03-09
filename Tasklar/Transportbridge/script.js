const features = [
  {
    title: "Ağıllı marşrut uyğunlaşdırılması",
    desc: "Sürücü və sərnişinlərin istiqamət, vaxt və boş yerlərinə əsasən ən uyğun nəqliyyat variantları təklif olunur.",
    icon: "🗺️",
  },
  {
    title: "Sosial yönümlü paylaşım",
    desc: "Avtomobildəki boş yerlər paylaşılır, insanlar daha əlçatan və qənaətli nəqliyyat imkanı əldə edir.",
    icon: "🤝",
  },
  {
    title: "Təhlükəsizlik və etibar",
    desc: "Qeydiyyat, şəxsiyyət təsdiqi, reytinq və rəy sistemi istifadəçi etibarını gücləndirir.",
    icon: "🔒",
  },
  {
    title: "Canlı bildirişlər",
    desc: "Marşrut təsdiqi, sürücü məlumatı və vaxt yenilənmələri tətbiq daxilində izlənə bilir.",
    icon: "🔔",
  },
];

const impacts = [
  {
    title: "Təhsil",
    text: "Kənd və ucqar ərazilərdə yaşayan tələbələrin məktəbə və universitetə çatmasını asanlaşdırır.",
  },
  {
    title: "İş",
    text: "İnsanların iş yerlərinə daha rahat çatmasına kömək edir və iqtisadi imkanları artırır.",
  },
  {
    title: "Səhiyyə",
    text: "Xəstəxana və digər tibbi xidmətlərə çıxışı sürətləndirir.",
  },
  {
    title: "Ekologiya",
    text: "Bir avtomobildə bir neçə nəfərin hərəkəti yanacaq sərfiyyatını və karbon emissiyasını azalda bilər.",
  },
];

const steps = [
  "İstifadəçi qeydiyyatdan keçir və sürücü və ya sərnişin rolunu seçir.",
  "Sürücü marşrutunu, vaxtını və boş yerlərin sayını əlavə edir.",
  "Sərnişin getmək istədiyi istiqamət və vaxtı daxil edir.",
  "Sistem ən uyğun variantları avtomatik olaraq qarşılaşdırır.",
  "Təsdiqdən sonra tərəflər bir-biri ilə təhlükəsiz şəkildə əlaqə qurur.",
];

const futureItems = [
  "İctimai nəqliyyat inteqrasiyası",
  "Tələbələr üçün xüsusi sosial paketlər",
  "AI ilə marşrut optimallaşdırılması",
  "Canlı xəritə və izləmə sistemi",
  "Qadınlar üçün təhlükəsiz gediş seçimləri",
  "Regional genişlənmə və rayon bazaları",
];

const featuresGrid = document.getElementById("features-grid");
const impactGrid = document.getElementById("impact-grid");
const stepsList = document.getElementById("steps-list");
const futureList = document.getElementById("future-list");

features.forEach((item) => {
  const card = document.createElement("div");
  card.className = "feature-card";
  card.innerHTML = `
    <div class="feature-icon">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.desc}</p>
  `;
  featuresGrid.appendChild(card);
});

impacts.forEach((item) => {
  const card = document.createElement("div");
  card.className = "impact-card";
  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
  impactGrid.appendChild(card);
});

steps.forEach((item, index) => {
  const step = document.createElement("div");
  step.className = "step-item";
  step.innerHTML = `
    <div class="step-number">${index + 1}</div>
    <p>${item}</p>
  `;
  stepsList.appendChild(step);
});

futureItems.forEach((item) => {
  const div = document.createElement("div");
  div.className = "future-item";
  div.textContent = item;
  futureList.appendChild(div);
});