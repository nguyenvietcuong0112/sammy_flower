import { Link } from "react-router-dom";
import { Flower, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + Social Media */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-semibold uppercase tracking-wider">
                Sammy Flowers
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trao niềm tin – nhận trọn hài lòng. Sammy Flowers luôn mong góp thêm sắc màu hạnh phúc, gửi trọn sự chu đáo và tinh tế tới quan viên hai họ.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com/sammyflowers"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-medium">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Cưới Hỏi Trọn Gói
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Tráp Cưới Nghệ Thuật
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Trang Trí Sự Kiện
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Hoa Tươi Nghệ Thuật
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-medium">Liên Hệ</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📍 168 Phú Thượng – Tây Hồ – Hà Nội</p>
              <p>📞 Zalo/Call: 0394.17.8668</p>
              <p>🚚 Freeship bán kính 10km</p>
              <p>✨ Ảnh Thật 100% - Chỉn chu từng chi tiết</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Sammy Flowers – Hoa tươi • Cưới hỏi • Mâm cúng trọn gói. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
