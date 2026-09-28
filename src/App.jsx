import { useState } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import MarketHero from "./components/MarketHero";
import PromoGrid from "./components/PromoGrid";
import FlashDeals from "./components/FlashDeals";
import DenseGrid from "./components/DenseGrid";
import CategoryTiles from "./components/CategoryTiles";
import TrustStrip from "./components/TrustStrip";
import LogisticsBand from "./components/LogisticsBand";
import Newsletter from "./components/Newsletter";
import ProductPage from "./components/ProductPage";
import SlideCart from "./components/SlideCart";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import CheckoutPage from "./components/CheckoutPage";
import OrderConfirmation from "./components/OrderConfirmation";
import LogisticsPage from "./components/logistics/LogisticsPage";

function Shell() {
  const [view, setView] = useState({ page: "home", slug: null });
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [orderTotal, setOrderTotal] = useState(null);
  const { clear, closeCart } = useCart();

  const navigate = (next) => {
    if (next.category) setCategory(next.category);
    setView({ page: next.page, slug: next.slug ?? null });
    closeCart();
    window.scrollTo(0, 0);
  };

  const openProduct = (slug) => navigate({ page: "product", slug });
  const goHome = () => { setSearch(""); navigate({ page: "home" }); };
  const pickCategory = (cat) => { setCategory(cat); setSearch(""); navigate({ page: "home", category: cat }); };
  const runSearch = (q) => { setSearch(q); setCategory("All"); navigate({ page: "home" }); };
  const goCheckout = () => navigate({ page: "checkout" });
  const goLogistics = () => navigate({ page: "logistics" });
  const placeOrder = (total) => { setOrderTotal(total); clear(); navigate({ page: "confirmation" }); };

  const showChrome = view.page !== "checkout" && view.page !== "confirmation" && view.page !== "logistics";

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
          {!search && (
            <>
              <MarketHero onCategory={pickCategory} onSearch={runSearch} />
              <PromoGrid onCategory={pickCategory} onSearch={runSearch} />
              <FlashDeals onOpen={openProduct} />
              <LogisticsBand onOpen={goLogistics} />
            </>
          )}
          <DenseGrid category={category} search={search} onOpen={openProduct} onClearSearch={goHome} />
          {!search && (
            <>
              <CategoryTiles onCategory={pickCategory} />
              <TrustStrip />
              <Newsletter />
            </>
          )}
        </>
      )}

      {view.page === "product" && (
        <div>
          <div className="bg-ivory px-6 pt-6">
            <button onClick={goHome} className="rounded-full border border-ink/15 px-4 py-2 text-sm text-ink/70 hover:bg-white/5">← Back to shop</button>
          </div>
          <ProductPage slug={view.slug} />
        </div>
      )}

      {view.page === "about" && <AboutPage />}
      {view.page === "contact" && <ContactPage />}
      {view.page === "checkout" && <CheckoutPage onBack={goHome} onPlaced={placeOrder} />}
      {view.page === "confirmation" && <OrderConfirmation total={orderTotal} onHome={goHome} />}
      {view.page === "logistics" && <LogisticsPage onBackToStore={goHome} />}

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