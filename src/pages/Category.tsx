import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";

const CategoryPage = () => {
  const { slug } = useParams();
  const items = useMemo(() => products.filter((p) => p.categorySlug === slug), [slug]);
  const title = items[0]?.categoryName || slug;
  const [sort, setSort] = useState("popularity");
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const sorted = useMemo(() => {
    const arr = [...items];
    switch (sort) {
      case "price_asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price_desc":
        return arr.sort((a, b) => b.price - a.price);
      case "rating":
        return arr.sort((a, b) => b.rating - a.rating);
      default:
        return arr; // popularity placeholder
    }
  }, [items, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const current = sorted.slice((page - 1) * pageSize, page * pageSize);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">No products found</h2>
          <p className="text-muted-foreground mb-6">Try a different category.</p>
          <Link to="/">
            Home
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
    <section className="py-10 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="mb-6 border-2">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500" />
            <div className="relative p-6 md:p-8 text-white">
              <div className="text-sm md:text-base font-semibold">Shop {title}</div>
              <div className="text-2xl md:text-4xl font-black">Essential Picks</div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterSidebar />
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-muted-foreground">{sorted.length} items</div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Sort by</span>
                <Select value={sort} onValueChange={setSort}>
                  <SelectTrigger className="w-44 rounded-none">
                    <SelectValue placeholder="Popularity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="price_asc">Price: Low to High</SelectItem>
                    <SelectItem value="price_desc">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {current.map((product, index) => (
                <div key={product.id} style={{ animationDelay: `${index * 50}ms` }}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} />
                  </PaginationItem>
                  <PaginationItem>
                    <span className="px-3 py-2 text-sm">Page {page} of {totalPages}</span>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext onClick={() => setPage((p) => Math.min(totalPages, p + 1))} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;