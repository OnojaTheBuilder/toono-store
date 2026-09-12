import { useState } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import MarketHero from "./components/MarketHero";
import DealsRow from "./components/DealsRow";
import TrendingRow from "./components/TrendingRow";
import CategoryTiles from "./components/CategoryTiles";
import ProductGrid from "./components/ProductGrid";
import TrustStrip from "./components/TrustStrip";
import Testimonials from "./components/Testimonials";
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
              <DealsRow onOpen={openProduct} />
              <TrendingRow onOpen={openProduct} />
              <CategoryTiles onCategory={pickCategory} />
              <LogisticsBand onOpen={goLogistics} />
            </>
          )}
          <ProductGrid category={category} search={search} onOpen={openProduct} onClearSearch={goHome} />
          {!search && (
            <>
              <TrustStrip />
              <Testimonials />
              <Newsletter />
            </>
          )}
        </>
      )}
      {view.page === "product" && (
        <div>
          <div className="bg-neutral-950 px-6 pt-6">
            <button onClick={goHome} className="rounded-full border border-white/15 px-4 py-2 text-sm text-neutral-300 hover:bg-white/5">← Back to shop</button>
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