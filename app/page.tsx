import Image from "next/image";
import { getCollections } from "./_lib/data-service";
import { Collection } from "./_types/types";
import ShopItemsOverlay from "./_components/shop-items-overlay/shop-items-overlay";
import Link from "next/link";

export default async function Home() {
	const collections: Collection[] = await getCollections();

	const renderedCollections = (collection: Collection) => {
		return (
			<div
				key={collection.id}
				className='relative border cursor-pointer overflow-hidden'
			>
				<Image
					fill
					className='object-cover transform scale-100 transition-transform duration-5000 hover:scale-150'
					src={collection.image}
					alt=''
				/>
				<Link href={`/shop/${collection.id}`}>
					<ShopItemsOverlay className="right-36">
						<div className='text-center'>{collection.name}</div>
						<div className='text-center'>SHOP NOW</div>
					</ShopItemsOverlay>
				</Link>
			</div>
		);
	};

	return (
		<div className='grid justify-center grid-cols-3 grid-rows-[repeat(2,1fr)] gap-5 h-full'>
			{collections.map((collection) =>
				collection.id <= 3 ? renderedCollections(collection) : null
			)}
			<div className='col-span-3 grid grid-cols-2 gap-x-5 w-full'>
				{collections.map((collection) =>
					collection.id > 3 ? renderedCollections(collection) : null
				)}
			</div>
		</div>
	);
}
