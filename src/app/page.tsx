import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import SearchFilters from '@/components/SearchFilters';
import HomeCarousels from '@/components/HomeCarousels';
import Categories from '@/components/Categories';
import PropertyGrid from '@/components/PropertyGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-6 lg:px-10 xl:px-20">
        <SearchBar />
        <SearchFilters />
        <HomeCarousels />
      </main>
      <Footer />
    </div>
  );
}
