import { getItems } from "@/app/_lib/data-service";
import { Item } from "@/app/_types/types";
import ShopItem from "../_components/shop-item/shop-item";
import NoItemsFallback from "../_components/no-items-fallback/no-items-fallback";

const Page = async () => {
  const items: Item[] = await getItems();
  
  if (!items || items.length === 0) {
		return <NoItemsFallback />;
	}

  return (
    <div className="grid grid-cols-4 gap-3 h-screen">
      {items.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Page;
