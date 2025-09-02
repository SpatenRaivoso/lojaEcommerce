import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import FlashSaleTimer from '@/components/FlashSaleTimer';
import ProductRating from '@/components/ProductRating';
import CategoryCard from '@/components/CategoryCard';
import CouponCard from '@/components/CouponCard';
import { ArrowRight, Truck, Shield, Headphones, Gift } from 'lucide-react';

// Import hoodie images
import hoodieBlack from '@/assets/hoodie-black.jpg';
import hoodieGray from '@/assets/hoodie-gray.jpg';
import hoodieNavy from '@/assets/hoodie-navy.jpg';
import hoodieBeige from '@/assets/hoodie-beige.jpg';
import megaSaleBanner from '@/assets/mega-sale-banner.jpg';
import newArrivalsBanner from '@/assets/new-arrivals-banner.jpg';

const products: Product[] = [
  {
    id: '1',
    name: 'Moletom Classic Preto',
    price: 129.90,
    originalPrice: 159.90,
    image: hoodieBlack,
    description: 'Moletom clássico em algodão premium, perfeito para o dia a dia.',
    rating: 4.8,
    reviews: 156,
    category: 'Clássicos',
    isFreeShipping: true,
    flashSale: {
      endTime: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 horas
      stock: 20,
      sold: 12
    }
  },
  {
    id: '2',
    name: 'Moletom Essentials Cinza',
    price: 119.90,
    originalPrice: 149.90,
    image: hoodieGray,
    description: 'Conforto e estilo em um moletom versátil e atemporal.',
    rating: 4.6,
    reviews: 89,
    category: 'Essenciais',
    isFreeShipping: true,
    isNew: true
  },
  {
    id: '3',
    name: 'Moletom Urban Marinho',
    price: 139.90,
    originalPrice: 169.90,
    image: hoodieNavy,
    description: 'Design moderno com acabamento premium para o seu guarda-roupa.',
    rating: 4.9,
    reviews: 203,
    category: 'Urban',
    isFreeShipping: true
  },
  {
    id: '4',
    name: 'Moletom Minimal Bege',
    price: 124.90,
    originalPrice: 154.90,
    image: hoodieBeige,
    description: 'Tons neutros para combinar com qualquer look urbano.',
    rating: 4.7,
    reviews: 134,
    category: 'Minimal',
    isFreeShipping: true,
    isNew: true
  },
];

const categories = [
  { name: 'Clássicos', icon: '👔', count: 45 },
  { name: 'Essenciais', icon: '🎯', count: 32 },
  { name: 'Urban', icon: '🏙️', count: 28 },
  { name: 'Minimal', icon: '✨', count: 21 },
  { name: 'Premium', icon: '💎', count: 15 },
  { name: 'Inverno', icon: '❄️', count: 38 }
];

const coupons = [
  {
    title: "Desconto Primeira Compra",
    discount: "25% OFF",
    minPurchase: 150,
    code: "FIRST25",
    expiry: "31/12/2024"
  },
  {
    title: "Frete Grátis",
    discount: "Frete Grátis",
    minPurchase: 99,
    code: "FREESHIP",
    expiry: "31/12/2024"
  },
  {
    title: "Desconto VIP",
    discount: "15% OFF",
    minPurchase: 200,
    code: "VIP15",
    expiry: "15/12/2024"
  }
];

const flashSaleProducts = products.filter(p => p.flashSale);
const newProducts = products.filter(p => p.isNew);
const bestSellers = [products[0], products[2]];

const Index = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="bg-hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Moletons Premium
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra nossa coleção de moletons essenciais. Conforto, qualidade e 
            design minimalista para o seu dia a dia.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
          >
            Ver Coleção
          </Button>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
              <img 
                src={megaSaleBanner} 
                alt="Mega Sale" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">MEGA SALE</h3>
                  <p className="text-lg">Até 50% OFF</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group">
              <img 
                src={newArrivalsBanner} 
                alt="New Arrivals" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">NOVIDADES</h3>
                  <p className="text-lg">Chegaram hoje!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sale */}
      {flashSaleProducts.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-accent/10 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl font-bold text-foreground">⚡ Flash Sale</h2>
                <FlashSaleTimer endTime={flashSaleProducts[0].flashSale!.endTime} />
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Ver Todos</span>
                <ArrowRight size={16} />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flashSaleProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200">
                  <div className="relative">
                    <div className="aspect-square bg-muted overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
                      -{Math.round((1 - product.price / product.originalPrice!) * 100)}%
                    </div>
                    {product.isFreeShipping && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                        Frete Grátis
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground mb-2 line-clamp-2">{product.name}</h3>
                    <ProductRating rating={product.rating!} reviews={product.reviews} />
                    <div className="flex items-center space-x-2 mt-2 mb-3">
                      <span className="text-xl font-bold text-accent">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice!.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Vendidos: {product.flashSale!.sold}</span>
                        <span>Restam: {product.flashSale!.stock}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1">
                        <div 
                          className="bg-accent h-1 rounded-full" 
                          style={{ width: `${(product.flashSale!.sold / (product.flashSale!.sold + product.flashSale!.stock)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Comprar Agora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Categorias</h2>
            <p className="text-muted-foreground">Explore nossa variedade de estilos</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard 
                key={category.name}
                name={category.name}
                icon={category.icon}
                count={category.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cupons */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">🎁 Cupons Exclusivos</h2>
            <p className="text-muted-foreground">Aproveite nossas ofertas especiais</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coupons.map((coupon) => (
              <CouponCard key={coupon.code} {...coupon} />
            ))}
          </div>
        </div>
      </section>

      {/* Novidades */}
      {newProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">🆕 Novidades</h2>
                <p className="text-muted-foreground">Acabaram de chegar na nossa loja</p>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Ver Todos</span>
                <ArrowRight size={16} />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newProducts.map((product) => (
                <div key={product.id} className="relative">
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                    NOVO
                  </div>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mais Vendidos */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
              🏆 MAIS VENDIDOS
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Favoritos dos Clientes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os moletons que conquistaram o coração dos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {bestSellers.map((product, index) => (
              <div key={product.id} className="relative">
                <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10">
                  #{index + 1}
                </div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coleção Completa */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Coleção Completa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore todos os nossos moletons premium e encontre o seu favorito
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              📧 Fique por dentro das novidades
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Receba em primeira mão nossos lançamentos, promoções exclusivas e cupons de desconto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground bg-white/90 placeholder:text-muted-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button 
                className="bg-white text-accent hover:bg-white/90 px-6 py-3"
              >
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;