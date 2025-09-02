import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import ProductRating from '@/components/ProductRating';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 border-border">
      <div className="aspect-square overflow-hidden bg-muted relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discountPercentage > 0 && (
            <div className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
              -{discountPercentage}%
            </div>
          )}
          {product.isNew && (
            <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
              NOVO
            </div>
          )}
        </div>
        {product.isFreeShipping && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs">
            Frete Grátis
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-medium text-foreground mb-2 line-clamp-2">{product.name}</h3>
        
        {product.rating && (
          <div className="mb-2">
            <ProductRating rating={product.rating} reviews={product.reviews} />
          </div>
        )}
        
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-xl font-semibold text-foreground">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Adicionar ao carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;