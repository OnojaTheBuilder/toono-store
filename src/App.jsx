import { useState } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryTiles from "./components/CategoryTiles";
import FeaturedStrip from "./components/FeaturedStrip";
import ProductGrid from "./components/ProductGrid";
import PromoBand from "./components/PromoBand";
import TrustStrip from "./components/TrustStrip";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import ProductPage from "./components/ProductPage";
import SlideCart from "./components/SlideCart";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import CheckoutPage from "./components/CheckoutPage";
import OrderConfirmation from "./components/OrderConfirmation";

function Shell() {
  const [view, setView] = useState({ page: "home", slug: null });
  const [category, setCategory] = useState("All");
  const [orderTotal, setOrderTotal] = useState(null);
  const { clear, closeCart } = useCart();

  const navigate = (next) => {
    if (next.category) setCategory(next.category);
    setView({ page: next.page, slug: next.slug ?? null });
    closeCart();
    window.scrollTo(0, 0);
  };

  const openProduct = (slug) => navigate({ page: "product", slug });
  const goHome = () => navigate({ page: "home" });
  const pickCategory = (cat) => {
    setCategory(cat);
    navigate({ page: "home", category: cat });
  };
  const goCheckout = () => navigate({ page: "checkout" });
  const placeOrder = (total) => {
    setOrderTotal(total);
    clear();
    navigate({ page: "confirmation" });
  };

  const showChrome = view.page !== "checkout" && view.page !== "confirmation";

  return (
    <>
      {showChrome && (
        <>
          <AnnouncementBar />
          <Header activeCat={category} onCategory={pickCategory} onHome={goHome} onNavigate={navigate} />
        </>
      )}

      {view.page === "home" && (
        <>
          <Hero onExplore={openProduct} />
          <CategoryTiles onCategory={pickCategory} />
          <FeaturedStrip onOpen={openProduct} />
          <ProductGrid category={category} onOpen={openProduct} />
          <PromoBand onCategory={pickCategory} />
          <TrustStrip />
          <Testimonials />
          <Newsletter />
        </>
      )}

      {view.page === "product" && (
        <div>
          <div className="bg-neutral-950 px-6 pt-6">
            <button onClick={goHome} className="rounded-full border border-white/15 px-4 py-2 text-sm text-neutral-300 hover:bg-white/5">
              ← Back to shop
            </button>
          </div>
          <ProductPage slug={view.slug} />
        </div>
      )}

      {view.page === "about" && <AboutPage />}
      {view.page === "contact" && <ContactPage />}
      {view.page === "checkout" && <CheckoutPage onBack={goHome} onPlaced={placeOrder} />}
      {view.page === "confirmation" && <OrderConfirmation total={orderTotal} onHome={goHome} />}

      {showChrome && <Footer onNavigate={navigate} />}

      <SlideCart onCheckout={goCheckout} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Shell />
    </CartProvider>
  );
}