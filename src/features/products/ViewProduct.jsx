import DetailsList from "../../ui/DetailsList";

import { formatPrice } from "../../utils/helpers";

export default function ViewProduct({ product }) {
  const { image, name, description, price, stock } = product;

  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:gap-6 *:flex-1">
      <div>
        <img src={image} alt={`${name} image`} className="mx-auto max-w-40" />
      </div>

      <DetailsList>
        <DetailsList.Item title="Name" description={name} />
        <DetailsList.Item title="Description" description={description} />
        <DetailsList.Item title="Price" description={formatPrice(price)} />
        <DetailsList.Item title="Stock" description={stock} />
      </DetailsList>
    </section>
  );
}
