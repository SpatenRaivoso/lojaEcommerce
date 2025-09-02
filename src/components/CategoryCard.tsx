interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
}

const CategoryCard = ({ name, icon, count }: CategoryCardProps) => {
  return (
    <div className="bg-card rounded-xl p-4 text-center hover:shadow-card-hover transition-all duration-200 cursor-pointer group">
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-medium text-foreground text-sm">{name}</h3>
      <p className="text-xs text-muted-foreground">{count} produtos</p>
    </div>
  );
};

export default CategoryCard;