
import React, { useMemo, useState } from "react";
import {
  ShoppingBag, MapPin, Clock, Phone, Star, Plus, Minus, X,
  Truck, CalendarDays, ChevronRight, CheckCircle2, Utensils,
  Menu as MenuIcon
} from "lucide-react";

const dishes = [
  { id: 1, name: "Sazan", subtitle: "Ko‘mirda pishirilgan, maxsus ziravorlar bilan", price: 85000, category: "Baliq", tag: "Mashhur", emoji: "🐟", image: "https://lafoy.ru/photo_l/foto-3996-5.jpg" },
  { id: 2, name: "Laqqa", subtitle: "Yumshoq go‘shtli, limon va ko‘katlar bilan", price: 95000, category: "Baliq", tag: "Tavsiya", emoji: "🐠", image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/grilled_catfish.jpg" },
  { id: 3, name: "Sudak", subtitle: "Yengil va mazali, grilda tayyorlanadi", price: 110000, category: "Baliq", tag: "", emoji: "🐟", image: "https://www.fischkaufhaus.de/img/cms/Foodblog/zander_auf_grill_5.jpg" },
  { id: 4, name: "Oq amur", subtitle: "Yangi sabzavotlar bilan tandirda", price: 90000, category: "Baliq", tag: "", emoji: "🐟", image: "https://www.mynetdiary.com/foodpicture?foodId=54626771" },
  { id: 5, name: "Do‘ngpeshona", subtitle: "Qarsildoq qobiq, maxsus sous bilan", price: 78000, category: "Baliq", tag: "", emoji: "🐠", image: "https://gotvach.bg/files/1200x800/fried-tolstolob-sharan.webp" },
  { id: 6, name: "Forel", subtitle: "Grilda, sariyog‘ va limon bilan", price: 125000, category: "Baliq", tag: "Premium", emoji: "🐟", image: "https://ggg.md/storage/products/December2020/kNvhfpJDbBzDkl7JaDHa.jpg" },
  { id: 7, name: "Karp", subtitle: "Qizartirib pishirilgan, piyoz bilan", price: 82000, category: "Baliq", tag: "", emoji: "🐟", image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=85" },
  { id: 8, name: "Zog‘ora baliq", subtitle: "An’anaviy usulda, ko‘katlar bilan", price: 88000, category: "Baliq", tag: "", emoji: "🐠", image: "https://www.gutekueche.at/storage/media/recipe/141250/conv/goldbrasse-mit-kartoffeln-default.jpg" },
  { id: 9, name: "Ola baliq", subtitle: "Qovurilgan, achchiq sous bilan", price: 75000, category: "Baliq", tag: "", emoji: "🐟", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85" },
  { id: 10, name: "Oqcha", subtitle: "Yengil qovurma, limon bilan", price: 70000, category: "Baliq", tag: "", emoji: "🐟", image: "https://blog.lemarchejaponais.fr/images/recette-unagi-kabayaki_968.jpeg" },
  { id: 11, name: "Leshch", subtitle: "Ziravorli marinad va ko‘katlar", price: 80000, category: "Baliq", tag: "", emoji: "🐠", image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&w=900&q=85" },
  { id: 12, name: "Ilonbaliq", subtitle: "Oshpaz tavsiyasi bilan maxsus taom", price: 115000, category: "Baliq", tag: "Maxsus", emoji: "🐟", image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=900&q=85" },
  { id: 13, name: "Achchiq-chuchuk", subtitle: "Pomidor, piyoz va ko‘katlar", price: 18000, category: "Salat", tag: "", emoji: "🥗", image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/%27Achchiq-chuchuk%27_-_uzbek_salad.jpg" },
  { id: 14, name: "Suzma salat", subtitle: "Yengil va yoqimli ta’m", price: 16000, category: "Salat", tag: "", emoji: "🥣", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Greek_yoghurt_cucumbers_garlic.jpg/1280px-Greek_yoghurt_cucumbers_garlic.jpg" },
  { id: 15, name: "Limonad", subtitle: "Uy sharoitida tayyorlangan, 0.5 l", price: 15000, category: "Ichimlik", tag: "", emoji: "🍋", image: "https://images.unsplash.com/photo-1673968873206-ceb16421a803?auto=format&fit=crop&w=900&q=85" },
  { id: 16, name: "Coca-Cola", subtitle: "Sovutilgan, 1 l", price: 14000, category: "Ichimlik", tag: "", emoji: "🥤", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&w=900&q=85" },
  { id: 17, name: "Ko‘k choy", subtitle: "Choynakda damlangan", price: 10000, category: "Ichimlik", tag: "", emoji: "🍵", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=900&q=85" },
  { id: 18, name: "Non", subtitle: "Issiq tandir noni", price: 6000, category: "Qo‘shimcha", tag: "", emoji: "🫓", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=85" },
  { id: 19, name: "Kartoshka fri", subtitle: "Qarsildoq fri kartoshka", price: 22000, category: "Qo‘shimcha", tag: "", emoji: "🍟", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85" }
];

const money = (n) =>
  new Intl.NumberFormat("uz-UZ").format(n) + " so‘m";

function XonLogo() {
  return (
    <svg className="xon-logo" viewBox="0 0 80 64">
      <path d="M13 34 3 23l2 19 8-8c8 13 24 19 40 13 7-3 12-8 16-15l8 7-2-17-10 8c-8-13-25-18-39-11-5 2-9 7-13 15Z" fill="currentColor" />
      <path d="M23 16 18 7l10 4 7-9 7 9 10-4-5 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="57" cy="29" r="2.7" fill="#17150d" />
    </svg>
  );
}

export default function App() {
  const [category, setCategory] = useState("Barchasi");
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [orderType, setOrderType] = useState("delivery");
  const [notice, setNotice] = useState("");
  const [reservationOpen, setReservationOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered = useMemo(
    () => category === "Barchasi"
      ? dishes
      : dishes.filter((d) => d.category === category),
    [category]
  );

  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  const total = dishes.reduce(
    (sum, d) => sum + d.price * (cart[d.id] || 0), 0
  );

  const changeQty = (id, delta) => {
    setCart((prev) => {
      const next = { ...prev, [id]: Math.max(0, (prev[id] || 0) + delta) };
      if (!next[id]) delete next[id];
      return next;
    });
  };

  const submitOrder = (e) => {
    e.preventDefault();
    setNotice("Buyurtmangiz qabul qilindi! Operatorimiz tez orada siz bilan bog‘lanadi.");
    setCart({});
    setCartOpen(false);
  };

  const submitReservation = (e) => {
    e.preventDefault();
    setReservationOpen(false);
    setNotice("Joy band qilish so‘rovingiz yuborildi. Tez orada tasdiqlaymiz!");
  };

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home">
          <span className="brand-mark"><XonLogo /></span>
          <span>XON <b>BALIQ</b><small>FRESH • TASTY • LOCAL</small></span>
        </a>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menyuni ochish">
          <MenuIcon />
        </button>

        <nav className={mobileOpen ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={() => setMobileOpen(false)}>Bosh sahifa</a>
          <a href="#menu" onClick={() => setMobileOpen(false)}>Menyu</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>Biz haqimizda</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Aloqa</a>
        </nav>

        <div className="header-actions">
          <button className="outline-btn reserve-top" onClick={() => setReservationOpen(true)}>
            <CalendarDays size={16} /> Joy band qilish
          </button>
          <button className="cart-button" onClick={() => setCartOpen(true)}>
            <ShoppingBag size={18} /> Savat <span>{count}</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span /> YANGI TUTILGAN MAZZA</div>
            <h1>Baliqning eng<br />mazali <em>manzili.</em></h1>
            <p>Har bir taom — mehr bilan, yangi masalliqlardan va o‘ziga xos retseptlar asosida tayyorlanadi.</p>
            <div className="hero-buttons">
              <a className="primary-btn" href="#menu">Menyuni ko‘rish <ChevronRight size={18} /></a>
              <button className="text-btn" onClick={() => setReservationOpen(true)}>Stol band qilish <span>↗</span></button>
            </div>
            <div className="hero-stats">
              <div><strong>12+</strong><small>Baliq turi</small></div>
              <i />
              <div><strong>100%</strong><small>Yangi ta’m</small></div>
              <i />
              <div><strong>★ 4.9</strong><small>Mijozlar bahosi</small></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img src="https://lafoy.ru/photo_l/foto-3996-5.jpg" alt="Grilda pishirilgan baliq" />
            </div>
            <div className="round-stamp"><span>FRESH</span><strong>✦</strong><span>DAILY</span></div>
            <div className="hero-note"><span>01 / 03</span><b>Tabiatdan dasturxoningizga</b></div>
          </div>
          <div className="hero-bottom-line"><span>01</span><div /></div>
        </section>

        <section className="benefits">
          <div><span className="benefit-icon"><Truck /></span><p><b>Tezkor dastavka</b><small>Buyurtmangiz eshigingizgacha</small></p></div>
          <div><span className="benefit-icon"><CalendarDays /></span><p><b>Oldindan band qilish</b><small>O‘zingizga qulay vaqtni tanlang</small></p></div>
          <div><span className="benefit-icon"><Utensils /></span><p><b>Yangi tayyorlanadi</b><small>Har bir buyurtma alohida</small></p></div>
          <div><span className="benefit-icon"><Star /></span><p><b>Yuqori sifat</b><small>Ta’m va xizmatga e’tibor</small></p></div>
        </section>

        <section className="menu-section section" id="menu">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> XON BALIQ MENYUSI</div>
              <h2>Ta’mni <em>tanlang.</em></h2>
            </div>
            <p>Dasturxoningiz uchun saralangan taomlar,<br />ichimliklar va qo‘shimchalar.</p>
          </div>

          <div className="filters">
            {["Barchasi", "Baliq", "Salat", "Ichimlik", "Qo‘shimcha"].map((c) => (
              <button key={c} className={category === c ? "filter active" : "filter"} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>

          <div className="dish-grid">
            {filtered.map((dish, index) => (
              <article className="dish-card" key={dish.id}>
                <div className="dish-photo">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/700x500/17150d/d9aa42?text=${encodeURIComponent(dish.name)}`;
                    }}
                  />
                  {dish.tag && <span className="dish-tag">{dish.tag}</span>}
                  <span className="dish-number">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="dish-info">
                  <div><h3>{dish.name}</h3><p>{dish.subtitle}</p></div>
                  <div className="dish-bottom">
                    <strong>{money(dish.price)}</strong>
                    <button className="add-btn" onClick={() => changeQty(dish.id, 1)} aria-label={`${dish.name} qo‘shish`}>
                      <Plus size={19} />
                    </button>
                  </div>
                </div>

                {cart[dish.id] > 0 && (
                  <div className="card-qty">
                    <button onClick={() => changeQty(dish.id, -1)}><Minus size={14} /></button>
                    <b>{cart[dish.id]} ta</b>
                    <button onClick={() => changeQty(dish.id, 1)}><Plus size={14} /></button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="booking-banner" id="about">
          <div className="banner-icon"><CalendarDays size={34} /></div>
          <div>
            <span className="eyebrow">YAXSHI VAQT — HOZIR</span>
            <h2>Yaqinlaringiz bilan<br /><em>mazali oqshom</em> o‘tkazing.</h2>
            <p>Stolingizni oldindan band qiling — qolganini bizga qo‘yib bering.</p>
          </div>
          <button className="primary-btn" onClick={() => setReservationOpen(true)}>
            Joy band qilish <ChevronRight size={18} />
          </button>
        </section>

        <section className="contact-section section" id="contact">
          <div>
            <div className="eyebrow"><span /> BIZ BILAN BOG‘LANING</div>
            <h2>Har kuni siz<br />uchun <em>xizmatdamiz.</em></h2>
          </div>
          <div className="contact-details">
            <p><MapPin /><span><b>Manzil</b><small>O‘zbekiston, manzilni shu yerga kiriting</small></span></p>
            <p><Clock /><span><b>Ish vaqti</b><small>Har kuni: 10:00 — 23:00</small></span></p>
            <p><Phone /><span><b>Telefon</b><small>+998 90 000 00 00</small></span></p>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          <span className="brand-mark"><XonLogo /></span>
          <span>XON <b>BALIQ</b><small>FRESH • TASTY • LOCAL</small></span>
        </a>
        <p>© 2026 Xon Baliq. Barcha huquqlar himoyalangan.</p>
        <a href="#home" className="back-top">Yuqoriga ↑</a>
      </footer>

      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <aside className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-head">
              <div><span className="eyebrow">SIZNING TANLOVINGIZ</span><h2>Savat <em>({count})</em></h2></div>
              <button className="icon-btn" onClick={() => setCartOpen(false)}><X /></button>
            </div>

            {count === 0 ? (
              <div className="empty-cart">
                <ShoppingBag size={42} />
                <h3>Savat hozircha bo‘sh</h3>
                <p>Menyudan yoqtirgan taomlaringizni tanlang.</p>
                <button className="primary-btn" onClick={() => setCartOpen(false)}>Menyuga qaytish</button>
              </div>
            ) : (
              <>
                <div className="order-type">
                  <button className={orderType === "delivery" ? "selected" : ""} onClick={() => setOrderType("delivery")}><Truck size={17} /> Dastavka</button>
                  <button className={orderType === "pickup" ? "selected" : ""} onClick={() => setOrderType("pickup")}><ShoppingBag size={17} /> Olib ketish</button>
                </div>

                <div className="cart-items">
                  {dishes.filter((d) => cart[d.id]).map((d) => (
                    <div className="cart-row" key={d.id}>
                      <div className="cart-thumb">{d.emoji}</div>
                      <div className="cart-name"><b>{d.name}</b><small>{money(d.price)}</small></div>
                      <div className="qty-control">
                        <button onClick={() => changeQty(d.id, -1)}><Minus size={13} /></button>
                        <b>{cart[d.id]}</b>
                        <button onClick={() => changeQty(d.id, 1)}><Plus size={13} /></button>
                      </div>
                    </div>
                  ))}
                </div>

                <form className="checkout-form" onSubmit={submitOrder}>
                  <label>Ismingiz<input required placeholder="Ismingiz" /></label>
                  <label>Telefon raqamingiz<input required type="tel" placeholder="+998 90 123 45 67" /></label>
                  {orderType === "delivery" && <label>Yetkazib berish manzili<input required placeholder="Tuman, ko‘cha, uy" /></label>}
                  <label>Izoh<textarea placeholder="Qo‘shimcha istaklaringiz (ixtiyoriy)" /></label>
                  <div className="total-line"><span>Jami summa</span><b>{money(total)}</b></div>
                  <button className="primary-btn full" type="submit">Buyurtma berish <ChevronRight size={18} /></button>
                  <small className="form-hint">Buyurtma yuborilgach, operator telefon orqali tasdiqlaydi.</small>
                </form>
              </>
            )}
          </aside>
        </div>
      )}

      {reservationOpen && (
        <div className="overlay" onClick={() => setReservationOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-head">
              <div><span className="eyebrow">OLDINDAN REJALASHTIRING</span><h2>Joy <em>band qilish</em></h2></div>
              <button className="icon-btn" onClick={() => setReservationOpen(false)}><X /></button>
            </div>

            <p className="modal-desc">Sizga qulay vaqt va mehmonlar sonini tanlang.</p>

            <form className="checkout-form" onSubmit={submitReservation}>
              <label>Ismingiz<input required placeholder="Ismingiz" /></label>
              <label>Telefon raqamingiz<input required type="tel" placeholder="+998 90 123 45 67" /></label>
              <div className="form-two">
                <label>Sana<input required type="date" min={new Date().toISOString().split("T")[0]} /></label>
                <label>Vaqt<input required type="time" defaultValue="19:00" /></label>
              </div>
              <label>Mehmonlar soni
                <select defaultValue="2">
                  <option value="1">1 kishi</option>
                  <option value="2">2 kishi</option>
                  <option value="3">3 kishi</option>
                  <option value="4">4 kishi</option>
                  <option value="5">5 kishi</option>
                  <option value="6">6 kishi</option>
                  <option value="7">7+ kishi</option>
                </select>
              </label>
              <label>Izoh<textarea placeholder="Maxsus istaklar (ixtiyoriy)" /></label>
              <button className="primary-btn full" type="submit">Band qilish so‘rovini yuborish <ChevronRight size={18} /></button>
            </form>
          </div>
        </div>
      )}

      {notice && (
        <div className="toast">
          <CheckCircle2 size={20} />
          <span>{notice}</span>
          <button onClick={() => setNotice("")}><X size={17} /></button>
        </div>
      )}

      <button className="floating-cart" onClick={() => setCartOpen(true)}>
        <ShoppingBag />
        <span>{count}</span>
      </button>
    </div>
  );
}
