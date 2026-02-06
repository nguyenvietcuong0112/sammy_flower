// ================= IMPORTS =================
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { motion } from "framer-motion";

// ================= ASSETS =================
// Hero Section Images
import slide_1_image from "/src/assets/hero-slide-1.webp";
import slide_2_image from "/src/assets/hero-slide-1.webp";
import slide_3_image from "/src/assets/hero-slide-1.webp";
// Featured Collections Images
import rose_cat from "/src/assets/roses-1.webp";
import lillies_cat from "/src/assets/roses-1.webp";
import orchid_cat from "/src/assets/roses-1.webp";



// ================= HERO SLIDES DATA =================
type SlideItem = {
  name: string;
  desc: string;
  price: string;
  emoji: string;
  oldPrice?: string; // ✅ optional everywhere
};

type Slide = {
  id: number;
  title: string;
  description: string;
  price: string;
  featured: string;
  image: string;
  imageSize?: { width: number; height: number };
  promo: {
    title: string;
    discount: string;
    subtitle: string;
  };
  items: SlideItem[];
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Sammy Flowers",
    description:
      "Mùa cưới đang đến rất gần rồi ạ, Sammy gửi tới cả nhà những mẫu tráp cưới – tráp hỏi tone đỏ đẹp xuất sắc, ảnh thật 100%. Đặt lễ – nhận đúng như hình, chỉn chu từng chi tiết.",
    price: "0394.17.8668",
    featured: "Cưới Hỏi Trọn Gói",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    imageSize: { width: 1200, height: 800 },
    promo: {
      title: "Ưu Đãi Mùa Cưới",
      discount: "Freeship 10km",
      subtitle: "Trao niềm tin – nhận trọn hài lòng",
    },
    items: [
      {
        name: "Tráp Truyền Thống",
        desc: "3 • 5 • 7 • 9 • 11 tráp",
        price: "Liên hệ",
        emoji: "🎎",
      },
      {
        name: "Tráp Rồng Phượng",
        desc: "Nghệ thuật & Sang trọng",
        price: "Hotline",
        emoji: "🐉",
      },
    ],
  },
  {
    id: 2,
    title: "Nghệ Thuật Hoa",
    description:
      "Dịch vụ hoa tươi nghệ thuật, hoa bàn lễ, hoa cưới. Sammy mang đến sự tinh tế và sắc màu hạnh phúc cho ngày trọng đại của bạn.",
    price: "Giá tốt nhất",
    featured: "Hoa Tươi Nghệ Thuật",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200",
    promo: {
      title: "Combo Hoa Cưới",
      discount: "Tặng Hoa Cài Áo",
      subtitle: "Thiết kế theo yêu cầu",
    },
    items: [
      {
        name: "Hoa Cầm Tay Cô Dâu",
        desc: "Hiện đại & Tinh tế",
        price: "Từ 500k",
        emoji: "💐",
      },
      {
        name: "Trang Trí Xe Hoa",
        desc: "Đẳng cấp & Sang trọng",
        price: "Trọn gói",
        emoji: "🚗",
      },
    ],
  },
  {
    id: 3,
    title: "Trang Trí Sự Kiện",
    description:
      "Trang trí phòng cưới, tiệc, khai trương, sinh nhật. Dịch vụ mâm cúng đầy tháng – thôi nôi trọn gói cho bé yêu.",
    price: "Chuyên nghiệp",
    featured: "Trang Trí Trọn Gói",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    promo: {
      title: "Mâm Cúng Trọn Gói",
      discount: "Đầy đủ lễ vật",
      subtitle: "Tận tâm & Chu đáo",
    },
    items: [
      { name: "Đầy Tháng / Thôi Nôi", desc: "Mâm cúng truyền thống", price: "Trọn gói", emoji: "👶" },
      {
        name: "Decor Khai Trương",
        desc: "Bắt mắt & Độc đáo",
        price: "Tư vấn ngay",
        emoji: "🎊",
      },
    ],
  },
];

// ================= MAIN COMPONENT =================
const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = slides[activeSlide];

  // Featured collections
  const featuredCollections = [
    {
      title: "Tráp Rồng Phượng",
      description: "Kết hoa hiện đại, sang trọng và đẳng cấp",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400",
      link: "/#",
    },
    {
      title: "Mâm Quả Cao Cấp",
      description: "Chỉn chu từng chi tiết, sính lễ vẹn toàn",
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400",
      link: "/#",
    },
    {
      title: "Hoa Cưới Nghệ Thuật",
      description: "Góp thêm sắc màu hạnh phúc cho cặp đôi",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400",
      link: "/#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ================= HEADER ================= */}
      <Header />
      <main>
        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-background min-h-screen flex items-center animate-fadeIn">
          {/* Floating petals */}
          <div className="absolute inset-0 pointer-events-none opacity-30 hidden md:block">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="petal animate-petal-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${12 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Hero Left Content */}
              <div className="lg:col-span-4 space-y-6 text-center lg:text-left order-2 lg:order-1 animate-slideInLeft">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  {current.title.split(" ")[0]}{" "}
                  <span className="text-primary block animate-bloom">
                    {current.title.split(" ")[1]}
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 animate-fadeIn delay-300">
                  {current.description}
                </p>

                {/* Price and Featured Tag */}
                <div className="space-y-2 animate-fadeIn delay-500">
                  <div className="text-2xl font-heading font-bold text-foreground">
                    {current.price}
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-lg text-muted-foreground">
                    <span className="font-bold text-foreground">
                      {String(current.id).padStart(2, "0")}
                    </span>
                    <span>/</span>
                    <span>{current.featured}</span>
                  </div>
                </div>

                {/* Hero Buttons Removed */}
              </div>

              {/* Hero Center Image */}
              <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 animate-float">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain drop-shadow-lg"
                />
              </div>

              {/* Hero Right Sidebar */}
              <div className="lg:col-span-4 space-y-4 order-3 animate-slideInRight">
                {/* Promo Card */}
                <Card className="bg-primary/10 border-primary/20 shadow-soft hover:shadow-bloom transition-all duration-500">
                  <CardContent className="p-4 sm:p-6 text-center lg:text-left space-y-2">
                    <h3 className="font-heading text-xl font-semibold text-primary">
                      {current.promo.title}
                    </h3>
                    <p className="text-lg text-primary/80 font-medium">
                      {current.promo.discount}
                    </p>
                    <p className="text-base text-muted-foreground">
                      {current.promo.subtitle}
                    </p>
                  </CardContent>
                </Card>

                {/* Slide Thumbnails */}
                <div className="space-y-3 animate-fadeIn delay-700">
                  {slides.map((slide, idx) => (
                    <Card
                      key={slide.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${activeSlide === idx
                        ? "ring-2 ring-primary shadow-bloom"
                        : "bg-card"
                        }`}
                    >
                      <CardContent className="p-3 sm:p-4 flex items-center space-x-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-2xl animate-bloom">
                          {slide.items[0].emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-base truncate">
                            {slide.items[0].name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {slide.items[0].desc}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          {slide.items[0].oldPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                              {slide.items[0].oldPrice}
                            </p>
                          )}
                          <p className="font-semibold text-primary text-base">
                            {slide.items[0].price}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Mobile Navigation Dots */}
                <div className="flex justify-center space-x-2 pt-2 sm:pt-4 lg:hidden">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx
                        ? "bg-primary scale-125"
                        : "bg-muted hover:bg-primary/50"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURED COLLECTIONS ================= */}
        <section id="featured" className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
          {/* Floating background shapes */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <motion.div
              className="absolute top-10 left-1/4 w-40 h-40 bg-pink-300 rounded-full mix-blend-multiply blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 right-1/3 w-56 h-56 bg-purple-300 rounded-full mix-blend-multiply blur-3xl"
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center space-y-3 sm:space-y-4 mb-12 lg:mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
                Dịch Vụ Nổi Bật
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                Sammy Flowers tự hào mang đến những giải pháp cưới hỏi và trang trí sự kiện chuyên nghiệp, tận tâm nhất.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredCollections.map((collection, idx) => (
                <Link key={collection.title} to={collection.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: idx * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -4 }}
                  >
                    <Card className="flower-card group cursor-pointer border-0 shadow-soft bg-card-gradient h-full overflow-hidden relative transition-all duration-700 ease-out">
                      <CardContent className="p-0 h-full flex flex-col items-center relative z-10">
                        {/* Image Container */}
                        <div className="relative flex justify-center items-center pt-8 sm:pt-12 w-full">
                          <motion.div
                            className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-pink-200 rounded-full opacity-40 z-0"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          ></motion.div>
                          <motion.img
                            src={collection.image}
                            alt={collection.title}
                            className="w-32 sm:w-40 lg:w-48 h-auto object-contain z-10"
                            whileHover={{ scale: 1.1, y: -5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          />
                        </div>

                        {/* Collection Content */}
                        <div className="p-4 sm:p-6 space-y-2 sm:space-y-3 text-center">
                          <h3 className="font-heading text-xl sm:text-2xl font-semibold">
                            {collection.title}
                          </h3>
                          <p className="text-lg text-muted-foreground">
                            {collection.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}
        <section id="services" className="py-12 sm:py-16 lg:py-20 bg-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-3 sm:space-y-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">Dịch Vụ Trọn Gói Tại Sammy</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Chúng tôi cung cấp giải pháp toàn diện cho ngày trọng đại của bạn với sự chỉn chu và tinh tế nhất.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Lễ Dạm Ngõ / Ăn Hỏi", items: ["3 • 5 • 7 • 9 • 11 tráp", "Tráp truyền thống", "Tráp rồng phượng", "Mâm quả cao cấp"] },
                { title: "Hoa Tươi Nghệ Thuật", items: ["Hoa cầm tay cô dâu", "Hoa bàn lễ gia tiên", "Trang trí xe hoa", "Thuê xe cưới"] },
                { title: "Trang Trí Sự Kiện", items: ["Phòng cưới - Tiệc", "Khai trương - Cửa hàng", "Sinh nhật bé yêu", "Decor theo yêu cầu"] },
                { title: "Dịch Vụ Khác", items: ["Đội đỡ lễ chuyên nghiệp", "Mâm cúng đầy tháng", "Mâm cúng thôi nôi", "Tư vấn cưới hỏi"] }
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-2xl shadow-soft border border-border/50 hover:border-primary/30 transition-all"
                >
                  <h3 className="font-heading text-xl font-bold mb-4 text-primary">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <span className="mr-2 text-primary">❤</span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT US ================= */}
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full h-80 sm:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src="https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=1200&auto=format&fit=crop"
                  alt="Our team creating floral arrangements"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-primary/20 max-w-[200px]">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-2xl">✨</span>
                    <p className="font-heading font-bold text-primary text-lg">Cam Kết</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Hoa tươi 100% • Thiết kế độc bản • Chu đáo tận tâm</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6 lg:space-y-8"
              >
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Về <span className="text-primary">Sammy Flowers</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Tại{" "}
                  <span className="font-semibold text-primary">
                    Sammy Flowers
                  </span>
                  , chúng tôi tin rằng mỗi bông hoa, mỗi mâm lễ đều mang theo những cảm xúc chân thành và lời chúc phúc ý nghĩa. Hành trình của chúng tôi bắt đầu từ niềm đam mê tạo nên những khoảnh khắc hạnh phúc thông qua sự tinh tế của nghệ thuật hoa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Sammy Flowers luôn mong góp thêm sắc màu hạnh phúc, gửi trọn sự chu đáo và tinh tế tới quan viên hai họ. Trao niềm tin – nhận trọn hài lòng.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Link to="https://zalo.me/0394178668">Liên Hệ Zalo</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
