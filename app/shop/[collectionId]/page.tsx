import NoItemsFallback from "@/app/_components/no-items-fallback/no-items-fallback";
import ShopItem from "@/app/_components/shop-item/shop-item";
import { getItemsByCollectionId } from "@/app/_lib/data-service";
import { Item } from "@/app/_types/types";

const page = async ({
	params,
}: {
	params: Promise<{ collectionId: string }>;
}) => {
	const { collectionId } = await params;
	const items: Item[] = await getItemsByCollectionId(
		collectionId ? +collectionId : 0
	);

	if (!items || items.length === 0) {
		return <NoItemsFallback />;
	}

	return (
		<>
			{!items || items.length === 0 ? (
				<NoItemsFallback />
			) : (
				<div className='grid grid-cols-4 gap-3 h-screen'>
					{items.map((item) => (
						<ShopItem key={item.id} item={item} />
					))}
				</div>
			)}
		</>
	);
};

export default page;
