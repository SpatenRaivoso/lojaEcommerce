import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface CouponCardProps {
  title: string;
  discount: string;
  minPurchase: number;
  code: string;
  expiry: string;
}

const CouponCard = ({ title, discount, minPurchase, code, expiry }: CouponCardProps) => {
  const { toast } = useToast();

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Cupom copiado!",
      description: `Código ${code} copiado para a área de transferência.`,
    });
  };

  return (
    <Card className="overflow-hidden bg-gradient-to-r from-accent/10 to-accent/5 border-accent/20">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-sm">{title}</h3>
            <p className="text-accent font-bold text-lg">{discount}</p>
            <p className="text-xs text-muted-foreground">
              Min. R$ {minPurchase.toFixed(2).replace('.', ',')}
            </p>
            <p className="text-xs text-muted-foreground">Válido até {expiry}</p>
          </div>
          <div className="text-center">
            <Button
              onClick={handleCopyCoupon}
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Copiar
            </Button>
            <p className="text-xs text-muted-foreground mt-1">{code}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CouponCard;